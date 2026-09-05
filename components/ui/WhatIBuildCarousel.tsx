'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    FiGlobe,
    FiActivity,
    FiShoppingCart,
    FiCpu,
    FiPlay,
    FiPause,
    FiArrowRight,
    FiArrowLeft,
    FiChevronLeft,
    FiChevronRight,
    FiCheckCircle,
} from 'react-icons/fi';

export interface SystemItem {
    id: string;
    title: string;
    description: string;
    badge: string;
    icon: React.ReactNode;
    techPills: string[];
    highlightMetric: string;
}

export const systemsShipped: SystemItem[] = [
    {
        id: 'web-platforms',
        title: 'Production Web Platforms',
        description:
            'High-performance, accessible web applications built with Next.js, React, TypeScript, and modern responsive design systems.',
        badge: 'Full-Stack Web',
        icon: <FiGlobe aria-hidden="true" />,
        techPills: ['Next.js', 'React', 'TypeScript', 'Tailwind/SCSS'],
        highlightMetric: 'Sub-Second TTFB • 100 Lighthouse',
    },
    {
        id: 'healthcare-booking',
        title: 'Healthcare & Booking Systems',
        description:
            'Real-time queuing engines, appointment workflows, sub-50ms WebSocket synchronization, and automated SMS/payment integrations.',
        badge: 'Mission-Critical Healthcare',
        icon: <FiActivity aria-hidden="true" />,
        techPills: ['PostgreSQL', 'Supabase', 'WebSockets', 'SMS/Payment'],
        highlightMetric: '65% Wait Reduction • Sub-50ms Sync',
    },
    {
        id: 'retail-pos',
        title: 'Retail & POS Commerce',
        description:
            'Fast-checkout point-of-sale systems with offline-first caching, SKU barcode searching, and automated inventory sync.',
        badge: 'Retail & POS Commerce',
        icon: <FiShoppingCart aria-hidden="true" />,
        techPills: ['Offline Cache', 'Barcode Scan', 'Thermal Print', 'Inventory'],
        highlightMetric: '100% Offline-First • Multi-Register',
    },
    {
        id: 'ai-automation',
        title: 'AI-Assisted & Automation Tools',
        description:
            'Multi-model LLM orchestration (OpenAI, Claude, Gemini) and n8n workflow automations that eliminate operational manual toil.',
        badge: 'Applied GenAI & Automation',
        icon: <FiCpu aria-hidden="true" />,
        techPills: ['Gemini Live', 'Claude', 'OpenAI', 'n8n Automations'],
        highlightMetric: 'Autonomous Agents • Zero Toil',
    },
];

export const WhatIBuildCarousel: React.FC = () => {
    // Default scroll direction is left-to-right as explicitly requested by user
    const [scrollDirection, setScrollDirection] = useState<'left-to-right' | 'right-to-left'>('left-to-right');
    const [isPaused, setIsPaused] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const isInteractingRef = useRef(false);
    const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftStartRef = useRef(0);

    // Tripled dataset to guarantee continuous infinite seamless loop
    const tripleSystems = [...systemsShipped, ...systemsShipped, ...systemsShipped];

    const pauseInteraction = useCallback((duration = 2000) => {
        isInteractingRef.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            isInteractingRef.current = false;
        }, duration);
    }, []);

    // Step scroll by one card width (smoothly)
    const scrollByStep = useCallback((direction: 'left' | 'right') => {
        if (!containerRef.current) return;
        pauseInteraction(2500);
        const cardWidth = 350;
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

    // RAF Auto-scroller with seamless bidirectional infinite wrapping
    useEffect(() => {
        let animationFrameId: number;
        const speed = 0.7;

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

                if (!isPaused && !isInteractingRef.current) {
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
    }, [isPaused, scrollDirection]);

    // Handle mouse wheel (deltaY -> scrollLeft) and touchpad horizontal gestures
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
        startXRef.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeftStartRef.current = containerRef.current.scrollLeft;
        pauseInteraction(2000);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 1.35;
        containerRef.current.scrollLeft = scrollLeftStartRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDraggingRef.current = false;
        pauseInteraction(1500);
    };

    const toggleDirection = () => {
        setScrollDirection((prev) => (prev === 'left-to-right' ? 'right-to-left' : 'left-to-right'));
    };

    const renderCard = (system: SystemItem, prefix: string, isDuplicate = false) => {
        const uniqueKey = `${prefix}-${system.id}`;
        return (
            <div
                key={uniqueKey}
                className="system-ship-card"
                role="article"
                aria-label={isDuplicate ? undefined : system.title}
                tabIndex={isDuplicate ? -1 : 0}
            >
                {/* Top Badge & Icon */}
                <div className="system-card-topbar">
                    <div className="system-icon-wrapper" aria-hidden="true">
                        {system.icon}
                    </div>
                    <span className="system-badge">{system.badge}</span>
                </div>

                {/* Title */}
                <h4 className="system-card-title">{system.title}</h4>

                {/* Description */}
                <p className="system-card-desc">{system.description}</p>

                {/* Tech Pills */}
                <div className="system-tech-row" aria-label="Key Technologies">
                    {system.techPills.map((pill, idx) => (
                        <span key={idx} className="system-tech-pill">
                            {pill}
                        </span>
                    ))}
                </div>

                {/* Metric Footer */}
                <div className="system-card-footer">
                    <FiCheckCircle className="metric-icon" aria-hidden="true" />
                    <span className="metric-text">{system.highlightMetric}</span>
                </div>
            </div>
        );
    };

    return (
        <section className="what-i-build-section" aria-label="What I Build and Systems I Ship">
            {/* Header with Title and Controls */}
            <div className="what-i-build-header">
                <div className="what-i-build-title-box">
                    <h3 className="what-i-build-title">What I Build & Systems I Ship</h3>
                    <p className="what-i-build-subtitle">
                        Production-proven software architectures engineered for high throughput, offline reliability, and intelligent automation.
                    </p>
                </div>

                {/* Interactive Controls (Prev/Next step buttons, Direction Toggle, Pause/Play) */}
                <div className="what-i-build-controls" role="group" aria-label="Systems Carousel Controls">
                    {/* Left Step Nav */}
                    <button
                        type="button"
                        className="marquee-control-btn step-arrow-btn"
                        onClick={() => scrollByStep('left')}
                        aria-label="Scroll left to previous system card"
                        title="Previous System (Left)"
                    >
                        <FiChevronLeft aria-hidden="true" />
                        <span className="control-label desktop-only-label">Prev</span>
                    </button>

                    {/* Right Step Nav */}
                    <button
                        type="button"
                        className="marquee-control-btn step-arrow-btn"
                        onClick={() => scrollByStep('right')}
                        aria-label="Scroll right to next system card"
                        title="Next System (Right)"
                    >
                        <span className="control-label desktop-only-label">Next</span>
                        <FiChevronRight aria-hidden="true" />
                    </button>

                    {/* Direction Toggle */}
                    <button
                        type="button"
                        className="marquee-control-btn"
                        onClick={toggleDirection}
                        aria-label={`Switch scroll direction to ${scrollDirection === 'left-to-right' ? 'right-to-left' : 'left-to-right'}`}
                        title={scrollDirection === 'left-to-right' ? 'Switch to Right-to-Left' : 'Switch to Left-to-Right'}
                    >
                        {scrollDirection === 'left-to-right' ? (
                            <>
                                <FiArrowRight aria-hidden="true" />
                                <span className="control-label desktop-only-label">LTR</span>
                            </>
                        ) : (
                            <>
                                <FiArrowLeft aria-hidden="true" />
                                <span className="control-label desktop-only-label">RTL</span>
                            </>
                        )}
                    </button>

                    {/* Pause / Play */}
                    <button
                        type="button"
                        className={`marquee-control-btn marquee-pause-btn ${isPaused ? 'is-paused' : ''}`}
                        onClick={() => setIsPaused((prev) => !prev)}
                        aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                        title={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
                    >
                        {isPaused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Continuous Infinite Auto-Scrolling Track with Touchpad / Mouse Wheel / Drag & Side Nav Arrows */}
            <div className="what-i-build-carousel-outer">
                {/* Floating Side Left Arrow */}
                <button
                    type="button"
                    className="what-i-build-side-nav-btn prev-btn"
                    onClick={() => scrollByStep('left')}
                    aria-label="Scroll left to previous system card"
                    title="Previous Card"
                >
                    <FiChevronLeft aria-hidden="true" />
                </button>

                {/* Viewport with Mouse Wheel, Touchpad, and Drag Navigation */}
                <div
                    ref={containerRef}
                    className="what-i-build-track-wrapper interactive-scroll"
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    onTouchStart={() => pauseInteraction(2500)}
                    role="region"
                    aria-label="Interactive Auto-scrolling Systems Carousel"
                    tabIndex={0}
                >
                    <div className="what-i-build-track">
                        <div className="marquee-group">
                            {tripleSystems.map((system, idx) =>
                                renderCard(system, `set-${Math.floor(idx / systemsShipped.length)}`, idx >= systemsShipped.length)
                            )}
                        </div>
                    </div>
                </div>

                {/* Floating Side Right Arrow */}
                <button
                    type="button"
                    className="what-i-build-side-nav-btn next-btn"
                    onClick={() => scrollByStep('right')}
                    aria-label="Scroll right to next system card"
                    title="Next Card"
                >
                    <FiChevronRight aria-hidden="true" />
                </button>
            </div>
        </section>
    );
};

export default WhatIBuildCarousel;
