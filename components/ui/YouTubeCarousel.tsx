'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Video } from '@/types';
import { getYoutubeThumbnail } from '@/lib/data/videos';
import { FiPlay, FiPause, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

interface YouTubeCarouselProps {
    videos: Video[];
}

export const YouTubeCarousel: React.FC<YouTubeCarouselProps> = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [scrollDirection, setScrollDirection] = useState<'left-to-right' | 'right-to-left'>('right-to-left');
    const [isPaused, setIsPaused] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const isInteractingRef = useRef(false);
    const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftStartRef = useRef(0);
    const dragDistanceRef = useRef(0);

    // Tripled dataset to guarantee infinite seamless loop in both directions
    const tripleVideos = [...videos, ...videos, ...videos];

    const pauseInteraction = useCallback((duration = 2000) => {
        isInteractingRef.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            isInteractingRef.current = false;
        }, duration);
    }, []);

    // Step scroll by one video card width
    const scrollByStep = useCallback((direction: 'left' | 'right') => {
        if (!containerRef.current) return;
        pauseInteraction(2500);
        const cardWidth = 360;
        const delta = direction === 'left' ? -cardWidth : cardWidth;
        containerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }, [pauseInteraction]);

    // Setup initial scroll position to middle set on mount
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const initScroll = () => {
            const oneSet = container.scrollWidth / 3;
            if (oneSet > 0 && (container.scrollLeft < 10 || container.scrollLeft > oneSet * 2)) {
                container.scrollLeft = oneSet;
            }
        };
        initScroll();
        const timeout = setTimeout(initScroll, 120);
        return () => clearTimeout(timeout);
    }, []);

    // RAF Auto-scroller with bidirectional continuous wrap
    useEffect(() => {
        let animationFrameId: number;
        const speed = 0.75;

        const loop = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const oneSetWidth = container.scrollWidth / 3;

                if (oneSetWidth > 50) {
                    if (container.scrollLeft <= 15) {
                        container.scrollLeft += oneSetWidth;
                    } else if (container.scrollLeft >= oneSetWidth * 2 - 15) {
                        container.scrollLeft -= oneSetWidth;
                    }
                }

                if (!isPaused && !isInteractingRef.current && !selectedVideo) {
                    if (scrollDirection === 'left-to-right') {
                        container.scrollLeft -= speed;
                    } else {
                        container.scrollLeft += speed;
                    }
                }
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, scrollDirection, selectedVideo]);

    // Handle mouse wheel (deltaY -> scrollLeft) and touchpad gestures
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        pauseInteraction(1600);

        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            containerRef.current.scrollLeft += e.deltaY * 0.95;
        }
    };

    // Mouse drag-to-scroll
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        isDraggingRef.current = true;
        dragDistanceRef.current = 0;
        startXRef.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeftStartRef.current = containerRef.current.scrollLeft;
        pauseInteraction(2000);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 1.35;
        dragDistanceRef.current = Math.abs(walk);
        containerRef.current.scrollLeft = scrollLeftStartRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDraggingRef.current = false;
        pauseInteraction(1500);
    };

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedVideo(null);
            }
        };
        if (selectedVideo) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedVideo]);

    const renderCard = (video: Video, prefix: string, isAriaHidden?: boolean) => {
        const thumb = video.thumbnailUrl || getYoutubeThumbnail(video.videoId);
        return (
            <article
                key={`${prefix}-${video.id}`}
                className="youtube-video-card"
                onClick={() => {
                    // Prevent modal opening if user was dragging
                    if (dragDistanceRef.current > 6) return;
                    setSelectedVideo(video);
                }}
                role="button"
                tabIndex={isAriaHidden ? -1 : 0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedVideo(video);
                    }
                }}
                aria-label={`Play video: ${video.title}`}
            >
                <div className="video-card-thumbnail-container">
                    <img
                        src={thumb}
                        alt={video.title}
                        loading="lazy"
                        className="video-thumbnail-img"
                    />
                    <div className="thumbnail-gradient-overlay" />

                    {/* Video Category/Tag Badge */}
                    <span className="video-tag-badge">
                        {video.tag || 'TECH STREAM'}
                    </span>

                    {/* Center Animated Play Button */}
                    <div className="play-button-overlay" aria-hidden="true">
                        <div className="play-circle">
                            <FiPlay className="play-triangle" />
                        </div>
                    </div>
                </div>

                <div className="video-card-body">
                    <h4 className="video-title" title={video.title}>
                        {video.title}
                    </h4>

                    {video.description && (
                        <p className="video-desc-snippet">
                            {video.description}
                        </p>
                    )}

                    <div className="video-card-footer">
                        <span className="video-channel-tag">
                            <FaYoutube className="yt-icon" aria-hidden="true" />
                            {video.channel || 'Abhijay Shah'}
                        </span>
                        <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="watch-external-link"
                            onClick={(e) => e.stopPropagation()}
                            tabIndex={isAriaHidden ? -1 : 0}
                            aria-label={`Open ${video.title} directly on YouTube`}
                        >
                            <span>Watch Stream</span>
                            <FiExternalLink aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </article>
        );
    };

    return (
        <div className="youtube-carousel-section">
            {/* Carousel Header Controls */}
            <div className="carousel-nav-controls">
                <div className="carousel-hint-box">
                    <span className="carousel-live-indicator">
                        <span className="pulse-dot" /> Auto-scrolling in loop
                    </span>
                    <span className="carousel-hint-text">
                        Hover, drag or scroll with touchpad/mouse • Click card to play
                    </span>
                </div>
                <div className="arrow-buttons">
                    {/* Left Step Nav */}
                    <button
                        type="button"
                        className="carousel-arrow-btn step-arrow-btn"
                        onClick={() => scrollByStep('left')}
                        aria-label="Scroll videos towards left (previous video)"
                        title="Previous Video (Left)"
                    >
                        <FiChevronLeft aria-hidden="true" />
                        <span className="desktop-only-label">Prev</span>
                    </button>

                    {/* Right Step Nav */}
                    <button
                        type="button"
                        className="carousel-arrow-btn step-arrow-btn"
                        onClick={() => scrollByStep('right')}
                        aria-label="Scroll videos towards right (next video)"
                        title="Next Video (Right)"
                    >
                        <span className="desktop-only-label">Next</span>
                        <FiChevronRight aria-hidden="true" />
                    </button>

                    {/* Pause / Resume */}
                    <button
                        type="button"
                        className={`carousel-arrow-btn pause-toggle-btn ${isPaused ? 'is-paused' : ''}`}
                        onClick={() => setIsPaused(prev => !prev)}
                        aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
                        title={isPaused ? "Resume Auto-Scroll" : "Pause Auto-Scroll"}
                    >
                        {isPaused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Seamless Infinite Auto-Scrolling Track with Touchpad / Mouse Wheel / Drag & Side Nav Arrows */}
            <div className="youtube-carousel-outer">
                {/* Floating Side Left Arrow */}
                <button
                    type="button"
                    className="youtube-side-nav-btn prev-btn"
                    onClick={() => scrollByStep('left')}
                    aria-label="Scroll left to previous video card"
                    title="Previous Video"
                >
                    <FiChevronLeft aria-hidden="true" />
                </button>

                {/* Viewport with Mouse Wheel, Touchpad, and Drag Navigation */}
                <div
                    ref={containerRef}
                    className="youtube-carousel-track-wrapper interactive-scroll"
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    onTouchStart={() => pauseInteraction(2500)}
                    role="region"
                    aria-label="Interactive Auto-scrolling YouTube Videos Carousel"
                    tabIndex={0}
                >
                    <div className="youtube-carousel-track">
                        <div className="marquee-group">
                            {tripleVideos.map((video, idx) =>
                                renderCard(video, `set-${Math.floor(idx / videos.length)}`, idx >= videos.length)
                            )}
                        </div>
                    </div>
                </div>

                {/* Floating Side Right Arrow */}
                <button
                    type="button"
                    className="youtube-side-nav-btn next-btn"
                    onClick={() => scrollByStep('right')}
                    aria-label="Scroll right to next video card"
                    title="Next Video"
                >
                    <FiChevronRight aria-hidden="true" />
                </button>
            </div>

            {/* Video Modal Popup (Plays inside modal on click) */}
            {selectedVideo && (
                <div
                    className="video-modal-backdrop"
                    onClick={() => setSelectedVideo(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Playing ${selectedVideo.title}`}
                >
                    <div
                        className="video-modal-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="video-modal-header">
                            <div className="modal-title-box">
                                <span className="modal-tag-badge">{selectedVideo.tag || 'YOUTUBE'}</span>
                                <h3 className="modal-video-title">{selectedVideo.title}</h3>
                            </div>
                            <button
                                type="button"
                                className="video-modal-close-btn"
                                onClick={() => setSelectedVideo(null)}
                                aria-label="Close video player"
                            >
                                <FiX aria-hidden="true" />
                            </button>
                        </div>

                        <div className="video-iframe-wrapper">
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                                title={selectedVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="video-iframe"
                            />
                        </div>

                        <div className="video-modal-footer">
                            <p className="video-modal-desc">{selectedVideo.description}</p>
                            <a
                                href={selectedVideo.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--secondary btn--sm"
                            >
                                <FaYoutube aria-hidden="true" />
                                <span>Open on YouTube App</span>
                                <FiExternalLink aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default YouTubeCarousel;
