'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { videos } from '@/lib/data/videos';
import { projects } from '@/lib/data/projects';
import { publications } from '@/lib/data/publications';
import { achievements } from '@/lib/data/achievements';
import {
    FiYoutube,
    FiFolder,
    FiBookOpen,
    FiAward,
    FiExternalLink,
    FiClock,
    FiPlay,
    FiPause,
    FiChevronUp,
    FiChevronDown,
} from 'react-icons/fi';

export interface LatestItem {
    type: 'video' | 'project' | 'publication' | 'achievement';
    badge: string;
    title: string;
    subtitle: string;
    dateOrTag: string;
    url: string;
    isExternal: boolean;
    icon: React.ReactNode;
}

export const LatestRail: React.FC = () => {
    // Auto-scroll state: downwards by default (new cards slide up)
    const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
    const [isPaused, setIsPaused] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const isInteractingRef = useRef(false);
    const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
    const isDraggingRef = useRef(false);
    const startYRef = useRef(0);
    const scrollTopStartRef = useRef(0);
    const dragDistanceRef = useRef(0);

    // Dynamically get the most recent item from each category
    const latestVideo = videos[0];
    const latestProject = projects[0];
    const latestPublication = publications[0];
    const latestAchievement = achievements[0];

    const latestItems: LatestItem[] = [
        {
            type: 'video',
            badge: 'Latest Video',
            title: latestVideo ? latestVideo.title : 'New Tech Video',
            subtitle: (latestVideo && latestVideo.tag) ? latestVideo.tag : 'YouTube Release',
            dateOrTag: 'Recent Upload',
            url: latestVideo ? latestVideo.youtubeUrl : '#youtube',
            isExternal: true,
            icon: <FiYoutube className="latest-icon video-icon" aria-hidden="true" />,
        },
        {
            type: 'project',
            badge: 'New Project',
            title: latestProject ? latestProject.name : 'Production App',
            subtitle: (latestProject && (latestProject.tag || latestProject.category)) ? (latestProject.tag || latestProject.category) : 'Full-Stack System',
            dateOrTag: 'Production Ready',
            url: latestProject ? (latestProject.liveLink || latestProject.githubLink) : '#projects',
            isExternal: true,
            icon: <FiFolder className="latest-icon project-icon" aria-hidden="true" />,
        },
        {
            type: 'achievement',
            badge: 'Top Honor',
            title: latestAchievement ? latestAchievement.title : 'National Hackathon',
            subtitle: (latestAchievement && latestAchievement.organization) ? latestAchievement.organization : 'Award & Distinction',
            dateOrTag: (latestAchievement && latestAchievement.date) ? latestAchievement.date : '2026',
            url: (latestAchievement && latestAchievement.url) ? latestAchievement.url : '#achievements',
            isExternal: !!latestAchievement?.url,
            icon: <FiAward className="latest-icon achievement-icon" aria-hidden="true" />,
        },
        {
            type: 'publication',
            badge: 'Latest Book',
            title: latestPublication ? `${latestPublication.title}: ${latestPublication.subtitle}` : 'Published Playbook',
            subtitle: (latestPublication && latestPublication.platform) ? `${latestPublication.platform} Published` : 'Amazon KDP',
            dateOrTag: (latestPublication && latestPublication.publishedDate) ? latestPublication.publishedDate : '2025',
            url: (latestPublication && latestPublication.url) ? latestPublication.url : '#publications',
            isExternal: true,
            icon: <FiBookOpen className="latest-icon publication-icon" aria-hidden="true" />,
        },
    ];

    // Tripled dataset for seamless vertical infinite looping
    const tripleItems = [...latestItems, ...latestItems, ...latestItems];

    const pauseInteraction = useCallback((duration = 2000) => {
        isInteractingRef.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            isInteractingRef.current = false;
        }, duration);
    }, []);

    // Step scroll up or down smoothly by ~135px (one card + gap)
    const scrollByStep = useCallback((direction: 'up' | 'down') => {
        if (!containerRef.current) return;
        pauseInteraction(2500);
        const cardHeight = 135;
        const delta = direction === 'up' ? -cardHeight : cardHeight;
        containerRef.current.scrollBy({ top: delta, behavior: 'smooth' });
    }, [pauseInteraction]);

    // Setup initial scroll position to middle set on mount
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const initScroll = () => {
            const oneSet = container.scrollHeight / 3;
            if (oneSet > 0 && (container.scrollTop < 10 || container.scrollTop > oneSet * 2)) {
                container.scrollTop = oneSet;
            }
        };
        initScroll();
        const timeout = setTimeout(initScroll, 120);
        return () => clearTimeout(timeout);
    }, []);

    // RAF Auto-scroller with seamless bidirectional infinite wrapping
    useEffect(() => {
        let animationFrameId: number;
        const speed = 0.65;

        const loop = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const oneSetHeight = container.scrollHeight / 3;

                if (oneSetHeight > 50) {
                    if (container.scrollTop <= 10) {
                        container.scrollTop += oneSetHeight;
                    } else if (container.scrollTop >= oneSetHeight * 2 - 10) {
                        container.scrollTop -= oneSetHeight;
                    }
                }

                if (!isPaused && !isInteractingRef.current) {
                    if (scrollDirection === 'down') {
                        container.scrollTop += speed;
                    } else {
                        container.scrollTop -= speed;
                    }
                }
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, scrollDirection]);

    // Mouse wheel and touchpad 2-finger scroll
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        pauseInteraction(1600);
        containerRef.current.scrollTop += e.deltaY * 0.9;
    };

    // Mouse drag-to-scroll
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        isDraggingRef.current = true;
        dragDistanceRef.current = 0;
        startYRef.current = e.pageY - containerRef.current.offsetTop;
        scrollTopStartRef.current = containerRef.current.scrollTop;
        pauseInteraction(2000);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current || !containerRef.current) return;
        const y = e.pageY - containerRef.current.offsetTop;
        const walk = (y - startYRef.current) * 1.35;
        dragDistanceRef.current = Math.abs(walk);
        containerRef.current.scrollTop = scrollTopStartRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDraggingRef.current = false;
        pauseInteraction(1500);
    };

    const renderCard = (item: LatestItem, uniqueKey: string, isDuplicate = false) => (
        <a
            key={uniqueKey}
            href={item.url}
            target={item.isExternal ? '_blank' : '_self'}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            className={`latest-card latest-card--${item.type}`}
            aria-label={isDuplicate ? undefined : `${item.badge}: ${item.title}`}
            tabIndex={isDuplicate ? -1 : 0}
            onClick={(e) => {
                if (dragDistanceRef.current > 6) {
                    e.preventDefault();
                }
            }}
        >
            <div className="latest-card-top">
                <span className="latest-card-badge">
                    {item.icon}
                    {item.badge}
                </span>
                <span className="latest-card-date">
                    <FiClock aria-hidden="true" />
                    {item.dateOrTag}
                </span>
            </div>

            <h4 className="latest-card-title">{item.title}</h4>
            <p className="latest-card-meta">{item.subtitle}</p>

            <div className="latest-card-action">
                <span className="action-text">
                    {item.type === 'video' && 'Watch Video'}
                    {item.type === 'project' && 'View Live App'}
                    {item.type === 'achievement' && 'View Accolade'}
                    {item.type === 'publication' && 'View on Amazon'}
                </span>
                <FiExternalLink className="action-icon" aria-hidden="true" />
            </div>
        </a>
    );

    return (
        <aside className="latest-rail" aria-label="Latest Activity and Highlights">
            {/* Header with Title and Auto-Scroll Controls */}
            <div className="latest-rail-header">
                <div className="rail-title-group">
                    <span className="live-beacon" aria-hidden="true">
                        <span className="beacon-ping" />
                        <span className="beacon-dot" />
                    </span>
                    <h3 className="latest-rail-title">Recent Activity</h3>
                </div>

                <div className="rail-controls">
                    {/* Step Up Nav */}
                    <button
                        type="button"
                        className="rail-nav-btn"
                        onClick={() => scrollByStep('up')}
                        aria-label="Scroll activity up"
                        title="Scroll Up"
                    >
                        <FiChevronUp aria-hidden="true" />
                    </button>

                    {/* Step Down Nav */}
                    <button
                        type="button"
                        className="rail-nav-btn"
                        onClick={() => scrollByStep('down')}
                        aria-label="Scroll activity down"
                        title="Scroll Down"
                    >
                        <FiChevronDown aria-hidden="true" />
                    </button>

                    {/* Pause / Resume Button */}
                    <button
                        type="button"
                        className={`rail-nav-btn pause-btn ${isPaused ? 'is-paused' : ''}`}
                        onClick={() => setIsPaused((prev) => !prev)}
                        aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                        title={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
                    >
                        {isPaused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Hint Subtitle Bar */}
            <div className="rail-subtitle-bar">
                <span className="rail-subtitle">Live Highlights</span>
                <span className="rail-scroll-indicator">
                    <span className="scroll-pulse-dot" aria-hidden="true" /> Auto-Scrolling
                </span>
            </div>

            {/* Interactive Vertical Auto-Scrolling Viewport */}
            <div
                ref={containerRef}
                className="latest-rail-viewport interactive-scroll"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={() => pauseInteraction(2500)}
                role="region"
                aria-label="Auto-scrolling Recent Activity cards"
                tabIndex={0}
            >
                <div className="latest-cards-stack">
                    {tripleItems.map((item, idx) =>
                        renderCard(
                            item,
                            `rail-card-${Math.floor(idx / latestItems.length)}-${item.type}`,
                            idx >= latestItems.length
                        )
                    )}
                </div>
            </div>
        </aside>
    );
};

export default LatestRail;
