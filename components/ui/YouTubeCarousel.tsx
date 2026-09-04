'use client';

import React, { useState, useEffect } from 'react';
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
                onClick={() => setSelectedVideo(video)}
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
                        Hover to pause • Click any card to play
                    </span>
                </div>
                <div className="arrow-buttons">
                    <button
                        type="button"
                        className={`carousel-arrow-btn ${scrollDirection === 'right-to-left' ? 'active-direction' : ''}`}
                        onClick={() => {
                            setScrollDirection('right-to-left');
                            setIsPaused(false);
                        }}
                        aria-label="Scroll videos towards left (right to left)"
                        title="Scroll Towards Left (Right-to-Left)"
                    >
                        <FiChevronLeft aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className={`carousel-arrow-btn ${scrollDirection === 'left-to-right' ? 'active-direction' : ''}`}
                        onClick={() => {
                            setScrollDirection('left-to-right');
                            setIsPaused(false);
                        }}
                        aria-label="Scroll videos towards right (left to right)"
                        title="Scroll Towards Right (Left-to-Right)"
                    >
                        <FiChevronRight aria-hidden="true" />
                    </button>
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

            {/* Seamless Infinite Auto-Scrolling Marquee Track */}
            <div className="youtube-carousel-track-wrapper">
                <div
                    className={`youtube-carousel-track direction-${scrollDirection === 'left-to-right' ? 'ltr' : 'rtl'} ${isPaused || selectedVideo ? 'paused' : ''}`}
                >
                    {/* Primary Set */}
                    <div className="marquee-group">
                        {videos.map((video) => renderCard(video, 'p'))}
                    </div>
                    {/* Duplicated Set for Seamless Continuous Infinite Loop */}
                    <div className="marquee-group" aria-hidden="true">
                        {videos.map((video) => renderCard(video, 'd', true))}
                    </div>
                </div>
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
