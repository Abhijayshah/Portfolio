'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlay,
    FiPause,
    FiArrowRight,
    FiDownload,
    FiX,
} from 'react-icons/fi';

import fullstackImg from '@/public/img/carousel/fullstack.jpg';
import healthcareImg from '@/public/img/carousel/healthcare.jpg';
import retailPosImg from '@/public/img/carousel/retail_pos.jpg';
import voiceAiImg from '@/public/img/carousel/voice_ai.jpg';
import authorBooksImg from '@/public/img/carousel/author_books.jpg';
import videoSlideImg from '@/public/img/carousel/video_slide.jpg';

export interface CarouselSlide {
    id: string;
    tag: string;
    categoryBadge: string;
    title: string;
    titleHighlight?: string;
    description: string;
    image: StaticImageData | string;
    imageAlt: string;
    primaryCta: {
        label: string;
        href: string;
    };
    secondaryCta: {
        label: string;
        href: string;
    };
    cvCta: {
        label: string;
        href: string;
    };
    statsBadge?: string;
    youtubeId?: string;
    videoTitle?: string;
}

export const carouselSlides: CarouselSlide[] = [
    {
        id: 'fullstack',
        tag: 'Full-Stack Software Engineer',
        categoryBadge: 'Full-Stack Engineering',
        title: 'Architecting Resilient, Scalable Web & Cloud Systems',
        titleHighlight: 'Resilient, Scalable',
        description:
            'Engineering end-to-end production web applications, distributed APIs, and resilient cloud systems with Next.js, React, Node.js, and TypeScript. Delivering sub-second response times and scalable cloud infrastructure.',
        image: fullstackImg,
        imageAlt: 'Full-Stack Software Engineering and Cloud Systems',
        primaryCta: { label: 'View My Work', href: '#projects' },
        secondaryCta: { label: 'Hire for a Project', href: '#contact' },
        cvCta: { label: 'Download CV', href: '/resume.pdf' },
        statsBadge: '20+ Apps Shipped • 99.9% Uptime',
        youtubeId: 'eZHC7uPwIYc',
        videoTitle: 'CatCatchCode – Full Stack EdTech Platform (React + Node + MongoDB)',
    },
    {
        id: 'healthcare',
        tag: 'Healthcare & Queue Architecture',
        categoryBadge: 'Mission-Critical Healthcare',
        title: 'Enterprise Hospital Queue & Real-Time Telemetry Engines',
        titleHighlight: 'Real-Time Telemetry',
        description:
            'Architected production healthcare platforms (Dr Heal) with real-time PostgreSQL & Supabase queue sync, cutting OPD patient wait times by 65% across multi-department clinics.',
        image: healthcareImg,
        imageAlt: 'Healthcare Queue Architecture and Hospital Management Systems',
        primaryCta: { label: 'View My Work', href: '#projects' },
        secondaryCta: { label: 'Hire for a Project', href: '#contact' },
        cvCta: { label: 'Download CV', href: '/resume.pdf' },
        statsBadge: '65% Wait Reduction • Sub-50ms Sync',
    },
    {
        id: 'retail-pos',
        tag: 'Retail POS & Commerce',
        categoryBadge: 'Distributed Retail Commerce',
        title: 'Offline-Resilient POS Billing & Multi-Outlet Ledgers',
        titleHighlight: 'Offline-Resilient',
        description:
            'Built high-throughput point-of-sale architectures supporting multi-register offline caching, instant thermal barcode scanning, and automated distributed ledger synchronization.',
        image: retailPosImg,
        imageAlt: 'Retail Point of Sale and Commerce Billing Systems',
        primaryCta: { label: 'View My Work', href: '#projects' },
        secondaryCta: { label: 'Hire for a Project', href: '#contact' },
        cvCta: { label: 'Download CV', href: '/resume.pdf' },
        statsBadge: '100+ Outlets • Offline Resilient',
    },
    {
        id: 'voice-ai',
        tag: 'Voice AI & LLM Orchestration',
        categoryBadge: 'Applied Generative AI',
        title: 'Autonomous Voice Agents & Multimodal AI Workflows',
        titleHighlight: 'Autonomous Voice Agents',
        description:
            'Pioneering bidirectional real-time audio agents, semantic search embeddings, and complex LLM tool-calling pipelines using the latest Gemini Live API and intelligent agents.',
        image: voiceAiImg,
        imageAlt: 'Voice AI and LLM Orchestration Architectures',
        primaryCta: { label: 'View My Work', href: '#projects' },
        secondaryCta: { label: 'Hire for a Project', href: '#contact' },
        cvCta: { label: 'Download CV', href: '/resume.pdf' },
        statsBadge: 'Real-Time Voice • Gemini Live API',
    },
    {
        id: 'author',
        tag: 'Amazon KDP Published Author',
        categoryBadge: 'Technical Authorship',
        title: 'Published Author on Modern Web & Cloud Architecture',
        titleHighlight: 'Published Author',
        description:
            'Author of 2 technical books published on Amazon KDP demystifying scalable systems engineering, clean software design patterns, and developer productivity.',
        image: authorBooksImg,
        imageAlt: 'Published Technical Books on Amazon KDP',
        primaryCta: { label: 'View My Work', href: '#publications' },
        secondaryCta: { label: 'Hire for a Project', href: '#contact' },
        cvCta: { label: 'Download CV', href: '/resume.pdf' },
        statsBadge: '2 Books Published • Amazon KDP',
    },
    {
        id: 'tech-videos',
        tag: 'Tech Architecture & Video Demos',
        categoryBadge: 'Live Engineering Breakdowns',
        title: 'Production Software Walkthroughs & Architecture Demos',
        titleHighlight: 'Architecture Demos',
        description:
            'Watch in-depth engineering breakdowns: native iOS app builds with SwiftUI + Supabase + AI, full-stack EdTech platforms, and live queue telemetry on my YouTube engineering channel.',
        image: videoSlideImg,
        imageAlt: 'Engineering Architecture Video Walkthroughs and Live App Demos',
        primaryCta: { label: 'Watch Video Walkthrough', href: '#youtube' },
        secondaryCta: { label: 'Explore YouTube Channel', href: 'https://www.youtube.com/@abhijayshah.online' },
        cvCta: { label: 'Download CV', href: '/resume.pdf' },
        statsBadge: '6 Production Videos • @abhijayshah.online',
        youtubeId: 't1BB9UGqx4U',
        videoTitle: 'I Built a Premium iOS Productivity App with SwiftUI + Supabase + AI',
    },
];

const AUTOPLAY_INTERVAL = 5500; // 5.5 seconds per slide

export const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const pillNavRef = useRef<HTMLDivElement>(null);

    const nextSlide = useCallback(() => {
        setActiveVideoId(null);
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveVideoId(null);
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    }, []);

    const goToSlide = useCallback((index: number) => {
        setActiveVideoId(null);
        setCurrentSlide(index);
    }, []);

    // Autoplay timer (paused when user is watching an active video)
    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        if (isPlaying && !isHovered && !activeVideoId) {
            timerRef.current = setInterval(() => {
                nextSlide();
            }, AUTOPLAY_INTERVAL);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isPlaying, isHovered, activeVideoId, nextSlide, currentSlide]);

    // Keep active tag in view in the horizontal pill track on mobile
    useEffect(() => {
        if (!pillNavRef.current) return;
        const container = pillNavRef.current;
        const activePill = container.querySelector<HTMLElement>(`[data-slide-index="${currentSlide}"]`);
        if (activePill) {
            const pillLeft = activePill.offsetLeft;
            const pillWidth = activePill.offsetWidth;
            const containerWidth = container.clientWidth;
            const targetScroll = pillLeft - containerWidth / 2 + pillWidth / 2;

            container.scrollTo({
                left: Math.max(0, targetScroll),
                behavior: 'smooth',
            });
        }
    }, [currentSlide]);

    // Touch handlers for mobile swiping
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === ' ') {
            e.preventDefault();
            setIsPlaying((prev) => !prev);
        }
    };

    const activeSlideData = carouselSlides[currentSlide];

    return (
        <div className="hero-carousel-wrapper">
            {/* Top Interactive Pill Nav for Direct Jumping Between Categories */}
            <div className="hero-carousel-tags" ref={pillNavRef} role="tablist" aria-label="Portfolio Specializations">
                {carouselSlides.map((slide, idx) => {
                    const isActive = idx === currentSlide;
                    return (
                        <button
                            key={slide.id}
                            type="button"
                            role="tab"
                            data-slide-index={idx}
                            aria-selected={isActive}
                            className={`carousel-tag-pill ${isActive ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}
                        >
                            <span className="tag-dot" aria-hidden="true" />
                            <span className="tag-title">{slide.tag}</span>
                        </button>
                    );
                })}
            </div>

            {/* Main Cinematic Banner Card */}
            <div
                className="hero-carousel-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="region"
                aria-roledescription="carousel"
                aria-label="Abhijay Kumar Shah Portfolio Highlights"
            >
                {/* Background Images Crossfade Layer */}
                <div className="carousel-bg-container" aria-hidden="true">
                    {carouselSlides.map((slide, idx) => (
                        <div
                            key={slide.id}
                            className={`carousel-bg-slide ${idx === currentSlide ? 'active' : ''}`}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.imageAlt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                                priority
                                className="carousel-bg-img"
                            />
                            <div className="carousel-gradient-overlay" />
                        </div>
                    ))}
                </div>

                {/* Top Right Pause / Play Button */}
                <button
                    type="button"
                    className="carousel-control-btn carousel-play-pause-btn"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    aria-label={isPlaying ? 'Pause auto-playing carousel' : 'Start auto-playing carousel'}
                    title={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
                >
                    {isPlaying ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
                </button>

                {/* Left and Right Navigation Arrows */}
                <button
                    type="button"
                    className="carousel-nav-arrow carousel-nav-arrow--prev"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    title="Previous slide"
                >
                    <FiChevronLeft aria-hidden="true" />
                </button>

                <button
                    type="button"
                    className="carousel-nav-arrow carousel-nav-arrow--next"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    title="Next slide"
                >
                    <FiChevronRight aria-hidden="true" />
                </button>

                {/* Content Overlay */}
                <div className="carousel-content" key={activeSlideData.id}>
                    {/* Badge */}
                    <div className="carousel-badge">
                        <span className="badge-sparkle-icon" aria-hidden="true">✨</span>
                        <span className="badge-label">{activeSlideData.categoryBadge}</span>
                        <span className="badge-sparkle-icon" aria-hidden="true">✨</span>
                    </div>

                    {/* Headline */}
                    <h1 className="carousel-headline">
                        {activeSlideData.titleHighlight && activeSlideData.title.includes(activeSlideData.titleHighlight) ? (
                            <>
                                {activeSlideData.title.split(activeSlideData.titleHighlight)[0]}
                                <span className="headline-highlight">{activeSlideData.titleHighlight}</span>
                                {activeSlideData.title.split(activeSlideData.titleHighlight)[1] || ''}
                            </>
                        ) : (
                            activeSlideData.title
                        )}
                    </h1>

                    {/* Description */}
                    <p className="carousel-blurb">
                        {activeSlideData.description}
                    </p>

                    {/* Action Buttons & Statistics */}
                    <div className="carousel-btn-row">
                        <a
                            href={activeSlideData.primaryCta.href}
                            className="btn carousel-cta-btn carousel-cta-btn--primary"
                        >
                            {activeSlideData.primaryCta.label} <FiArrowRight aria-hidden="true" />
                        </a>
                        <a
                            href={activeSlideData.secondaryCta.href}
                            className="btn carousel-cta-btn carousel-cta-btn--secondary"
                        >
                            {activeSlideData.secondaryCta.label}
                        </a>
                        <a
                            href={activeSlideData.cvCta.href}
                            download
                            className="btn carousel-cta-btn carousel-cta-btn--outline"
                        >
                            <FiDownload aria-hidden="true" /> {activeSlideData.cvCta.label}
                        </a>

                        {activeSlideData.youtubeId && (
                            <button
                                type="button"
                                className="btn carousel-cta-btn carousel-cta-btn--video"
                                onClick={() => setActiveVideoId(activeSlideData.youtubeId || null)}
                                aria-label="Play engineering video demo"
                            >
                                <FiPlay aria-hidden="true" /> Play Video Demo
                            </button>
                        )}

                        {activeSlideData.statsBadge && (
                            <div className="carousel-stats-chip" aria-label="Metric">
                                <span>{activeSlideData.statsBadge}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Active Embedded Video Player Overlay */}
                {activeVideoId && (
                    <div className="carousel-video-overlay" role="region" aria-label="Video Walkthrough Player">
                        <div className="carousel-video-topbar">
                            <div className="carousel-video-meta">
                                <span className="carousel-video-pulsedot" aria-hidden="true" />
                                <span className="carousel-video-title">{activeSlideData.videoTitle || 'Production Engineering Walkthrough'}</span>
                            </div>
                            <button
                                type="button"
                                className="carousel-video-close-btn"
                                onClick={() => setActiveVideoId(null)}
                                aria-label="Close video player and return to carousel"
                            >
                                <FiX aria-hidden="true" />
                                <span>Close Video</span>
                            </button>
                        </div>
                        <div className="carousel-video-iframe-wrap">
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                                title={activeSlideData.videoTitle || 'Abhijay Shah Engineering Video Walkthrough'}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="carousel-video-iframe"
                            />
                        </div>
                    </div>
                )}

                {/* Bottom Indicators (Pill + Dots) */}
                <div className="carousel-indicators" role="tablist" aria-label="Select carousel slide">
                    {carouselSlides.map((slide, idx) => {
                        const isActive = idx === currentSlide;
                        return (
                            <button
                                key={slide.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-label={`Go to slide ${idx + 1}: ${slide.tag}`}
                                className={`carousel-indicator-dot ${isActive ? 'active' : ''}`}
                                onClick={() => goToSlide(idx)}
                            />
                        );
                    })}
                </div>

                {/* Animated Bottom Timer Progress Line */}
                <div className="carousel-timer-bar" aria-hidden="true">
                    <div
                        key={`${currentSlide}-${isPlaying && !isHovered}`}
                        className={`carousel-timer-fill ${isPlaying && !isHovered ? 'active' : 'paused'}`}
                        style={{
                            animationDuration: `${AUTOPLAY_INTERVAL}ms`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
