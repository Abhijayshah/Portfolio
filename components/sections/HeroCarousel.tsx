'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlay,
    FiPause,
    FiArrowRight,
    FiDownload,
} from 'react-icons/fi';

export interface CarouselSlide {
    id: string;
    tag: string;
    categoryBadge: string;
    title: string;
    titleHighlight?: string;
    description: string;
    image: string;
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
        image: '/img/carousel/fullstack.jpg',
        imageAlt: 'Full-Stack Software Engineering and Cloud Systems',
        primaryCta: { label: 'View My Work', href: '#projects' },
        secondaryCta: { label: 'Hire for a Project', href: '#contact' },
        cvCta: { label: 'Download CV', href: '/resume.pdf' },
        statsBadge: '20+ Apps Shipped • 99.9% Uptime',
    },
    {
        id: 'healthcare',
        tag: 'Healthcare & Queue Architecture',
        categoryBadge: 'Mission-Critical Healthcare',
        title: 'Enterprise Hospital Queue & Real-Time Telemetry Engines',
        titleHighlight: 'Real-Time Telemetry',
        description:
            'Architected production healthcare platforms (Dr Heal) with real-time PostgreSQL & Supabase queue sync, cutting OPD patient wait times by 65% across multi-department clinics.',
        image: '/img/carousel/healthcare.jpg',
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
        image: '/img/carousel/retail_pos.jpg',
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
        image: '/img/carousel/voice_ai.jpg',
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
        image: '/img/carousel/author_books.jpg',
        imageAlt: 'Published Technical Books on Amazon KDP',
        primaryCta: { label: 'View My Work', href: '#publications' },
        secondaryCta: { label: 'Hire for a Project', href: '#contact' },
        cvCta: { label: 'Download CV', href: '/resume.pdf' },
        statsBadge: '2 Books Published • Amazon KDP',
    },
];

const AUTOPLAY_INTERVAL = 5500; // 5.5 seconds per slide

export const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const pillNavRef = useRef<HTMLDivElement>(null);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    // Autoplay timer
    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        if (isPlaying && !isHovered) {
            timerRef.current = setInterval(() => {
                nextSlide();
            }, AUTOPLAY_INTERVAL);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isPlaying, isHovered, nextSlide, currentSlide]);

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
                        <span className="badge-glow-dot" aria-hidden="true" />
                        <span className="badge-label">{activeSlideData.categoryBadge}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="carousel-headline">
                        {activeSlideData.title}
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

                        {activeSlideData.statsBadge && (
                            <div className="carousel-stats-chip" aria-label="Metric">
                                <span>{activeSlideData.statsBadge}</span>
                            </div>
                        )}
                    </div>
                </div>

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
