'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { skills, headlineSkills } from '@/lib/data/skills';
import { SkillCategory } from '@/types';
import {
    FiCheck,
    FiCheckCircle,
    FiPlay,
    FiPause,
    FiArrowRight,
    FiArrowLeft,
    FiChevronLeft,
    FiChevronRight,
    FiGrid,
    FiRepeat,
} from 'react-icons/fi';

export const Skills: React.FC = () => {
    // Left-to-right is default as explicitly requested by user
    const [scrollDirection, setScrollDirection] = useState<'left-to-right' | 'right-to-left'>('left-to-right');
    const [isPaused, setIsPaused] = useState(false);
    const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const containerRef = useRef<HTMLDivElement>(null);
    const isInteractingRef = useRef(false);
    const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftStartRef = useRef(0);

    // Tripled dataset to guarantee infinite seamless looping in both directions
    const tripleSkills = [...skills, ...skills, ...skills];

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
        const cardWidth = 310;
        const delta = direction === 'left' ? -cardWidth : cardWidth;
        containerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }, [pauseInteraction]);

    // Setup initial scroll position to middle set on mount
    useEffect(() => {
        if (containerRef.current && viewMode === 'carousel') {
            const oneSetWidth = containerRef.current.scrollWidth / 3;
            containerRef.current.scrollLeft = oneSetWidth;
        }
    }, [viewMode]);

    // RAF Auto-scroller with seamless wrap-around
    useEffect(() => {
        if (viewMode !== 'carousel') return;
        let animationFrameId: number;
        const speed = 0.75; // Smooth readable speed

        const loop = () => {
            if (!isPaused && !isInteractingRef.current && containerRef.current) {
                const container = containerRef.current;
                const oneSetWidth = container.scrollWidth / 3;

                if (scrollDirection === 'left-to-right') {
                    container.scrollLeft -= speed;
                    if (container.scrollLeft <= 5) {
                        container.scrollLeft += oneSetWidth;
                    }
                } else {
                    container.scrollLeft += speed;
                    if (container.scrollLeft >= oneSetWidth * 2) {
                        container.scrollLeft -= oneSetWidth;
                    }
                }
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, scrollDirection, viewMode]);

    // Handle mouse wheel and touchpad 2-finger scroll
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        pauseInteraction(1600);

        // Convert vertical mouse wheel deltaY to horizontal scroll
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            containerRef.current.scrollLeft += e.deltaY * 0.9;
        }
        // Native horizontal touchpad gestures (deltaX) scroll container directly
    };

    // Drag-to-scroll with mouse
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

    const filterCategories = ['All', ...skills.map((s) => s.category)];

    const displayedSkills = activeFilter === 'All'
        ? skills
        : skills.filter((s) => s.category === activeFilter);

    const renderSkillCard = (skillCat: SkillCategory, prefix: string, isDuplicate = false) => {
        const Icon = skillCat.icon;
        const uniqueKey = `${prefix}-${skillCat.id || skillCat.category}`;

        return (
            <article
                key={uniqueKey}
                className="skill-card-deluxe"
                role="article"
                aria-label={isDuplicate ? undefined : skillCat.category}
                tabIndex={isDuplicate ? -1 : 0}
            >
                {/* Card Top Bar */}
                <div className="skill-card-topbar">
                    <div className="skill-icon-box" aria-hidden="true">
                        <Icon className="skill-cat-icon" />
                    </div>
                    <div className="skill-meta-tags">
                        {skillCat.badge && (
                            <span className="skill-category-badge">{skillCat.badge}</span>
                        )}
                        <span className="skill-count-chip">
                            {skillCat.items.length} Skills
                        </span>
                    </div>
                </div>

                {/* Category Title */}
                <h3 className="skill-card-title">{skillCat.category}</h3>

                {/* Skill Pills Grid */}
                <div className="skill-pills-wrap" aria-label={`${skillCat.category} items`}>
                    {skillCat.items.map((item, idx) => (
                        <span key={idx} className="skill-pill-item">
                            <span className="skill-pill-dot" aria-hidden="true" />
                            <span className="skill-pill-text">{item}</span>
                        </span>
                    ))}
                </div>

                {/* Card Footer Highlight */}
                {skillCat.highlight && (
                    <div className="skill-card-footer">
                        <FiCheckCircle className="footer-highlight-icon" aria-hidden="true" />
                        <span className="footer-highlight-text">{skillCat.highlight}</span>
                    </div>
                )}
            </article>
        );
    };

    return (
        <div className="skills-content">
            {/* Section Header */}
            <div className="main-title">
                <h2>Technical <span>Skills</span></h2>
                <span className="bg-text" aria-hidden="true">EXPERTISE</span>
            </div>

            <p className="skills-intro">
                Production-proven capabilities across languages, full-stack frameworks, real-time message brokers, distributed system design, and AI automation:
            </p>

            {/* Quick Headline Skill Chips */}
            <div className="headline-skills-container" aria-label="Core Engineering Strengths">
                <div className="headline-chips-grid">
                    {headlineSkills.map((skill, index) => (
                        <div key={index} className="headline-skill-chip">
                            <span className="chip-icon"><FiCheck aria-hidden="true" /></span>
                            <span className="chip-text">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Interactive Carousel & View Controls Bar */}
            <div className="skills-controls-bar">
                <div className="skills-status-hint">
                    <span className="status-live-pulse" aria-hidden="true">
                        <span className="live-dot" />
                    </span>
                    <span className="status-text">
                        {viewMode === 'carousel'
                            ? `Auto-scrolling • Scroll with touchpad, mouse wheel, or arrows`
                            : `Showing ${displayedSkills.length} of ${skills.length} Technical Categories`}
                    </span>
                </div>

                <div className="skills-actions-group">
                    {/* View Mode Toggle: Carousel vs Full Grid */}
                    <button
                        type="button"
                        className={`skills-action-btn view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode((prev) => (prev === 'carousel' ? 'grid' : 'carousel'))}
                        aria-label={viewMode === 'carousel' ? 'Switch to All Skills Grid View' : 'Switch to Auto-Scrolling Carousel View'}
                        title={viewMode === 'carousel' ? 'Switch to All Skills Grid View' : 'Switch to Auto-Scrolling Carousel View'}
                    >
                        {viewMode === 'carousel' ? (
                            <>
                                <FiGrid aria-hidden="true" />
                                <span>Grid View</span>
                            </>
                        ) : (
                            <>
                                <FiRepeat aria-hidden="true" />
                                <span>Auto-Scroll View</span>
                            </>
                        )}
                    </button>

                    {/* Step Navigation & Control buttons in Carousel mode */}
                    {viewMode === 'carousel' && (
                        <>
                            {/* Step Left Arrow */}
                            <button
                                type="button"
                                className="skills-action-btn step-arrow-btn"
                                onClick={() => scrollByStep('left')}
                                aria-label="Scroll left to previous skill card"
                                title="Previous Card (Left)"
                            >
                                <FiChevronLeft aria-hidden="true" />
                                <span className="desktop-only-label">Prev</span>
                            </button>

                            {/* Step Right Arrow */}
                            <button
                                type="button"
                                className="skills-action-btn step-arrow-btn"
                                onClick={() => scrollByStep('right')}
                                aria-label="Scroll right to next skill card"
                                title="Next Card (Right)"
                            >
                                <span className="desktop-only-label">Next</span>
                                <FiChevronRight aria-hidden="true" />
                            </button>

                            {/* Direction Toggle */}
                            <button
                                type="button"
                                className="skills-action-btn direction-toggle-btn"
                                onClick={toggleDirection}
                                aria-label={`Change auto-scroll direction to ${scrollDirection === 'left-to-right' ? 'Right to Left' : 'Left to Right'}`}
                                title={scrollDirection === 'left-to-right' ? 'Switch to Right-to-Left Auto-Scroll' : 'Switch to Left-to-Right Auto-Scroll'}
                            >
                                {scrollDirection === 'left-to-right' ? (
                                    <>
                                        <FiArrowRight aria-hidden="true" />
                                        <span className="desktop-only-label">LTR</span>
                                    </>
                                ) : (
                                    <>
                                        <FiArrowLeft aria-hidden="true" />
                                        <span className="desktop-only-label">RTL</span>
                                    </>
                                )}
                            </button>

                            {/* Pause / Resume Button */}
                            <button
                                type="button"
                                className={`skills-action-btn pause-toggle-btn ${isPaused ? 'is-paused' : ''}`}
                                onClick={() => setIsPaused((prev) => !prev)}
                                aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                                title={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
                            >
                                {isPaused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
                                <span className="desktop-only-label">{isPaused ? 'Resume' : 'Pause'}</span>
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* MODE 1: Interactive Auto-Scrolling Carousel with Mouse/Touchpad/Arrow Navigation */}
            {viewMode === 'carousel' ? (
                <div className="skills-carousel-container-outer">
                    {/* Floating Side Arrow: Left Navigation */}
                    <button
                        type="button"
                        className="carousel-side-nav-btn prev-btn"
                        onClick={() => scrollByStep('left')}
                        aria-label="Scroll left to previous skill card"
                        title="Previous Card"
                    >
                        <FiChevronLeft aria-hidden="true" />
                    </button>

                    {/* Scrollable track with Touchpad, Mouse Wheel, Drag & RAF Auto-scroll */}
                    <div
                        ref={containerRef}
                        className="skills-carousel-viewport interactive-scroll"
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        onTouchStart={() => pauseInteraction(2500)}
                        role="region"
                        aria-label="Interactive Auto-scrolling Skills Carousel"
                        tabIndex={0}
                    >
                        <div className="skills-carousel-track">
                            <div className="skills-marquee-group">
                                {tripleSkills.map((skillCat, idx) =>
                                    renderSkillCard(skillCat, `set-${Math.floor(idx / skills.length)}`, idx >= skills.length)
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Floating Side Arrow: Right Navigation */}
                    <button
                        type="button"
                        className="carousel-side-nav-btn next-btn"
                        onClick={() => scrollByStep('right')}
                        aria-label="Scroll right to next skill card"
                        title="Next Card"
                    >
                        <FiChevronRight aria-hidden="true" />
                    </button>
                </div>
            ) : (
                /* MODE 2: Comprehensive Filterable Grid View */
                <div className="skills-grid-wrapper">
                    {/* Category Filter Pills */}
                    <div className="skills-category-filters" role="tablist" aria-label="Filter skill categories">
                        {filterCategories.map((cat) => {
                            const isSelected = activeFilter === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    role="tab"
                                    aria-selected={isSelected}
                                    className={`skills-filter-pill ${isSelected ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(cat)}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>

                    {/* Responsive Grid */}
                    <div className="skills-responsive-grid">
                        {displayedSkills.map((skillCat) => renderSkillCard(skillCat, 'grid'))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;
