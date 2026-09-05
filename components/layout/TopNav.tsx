'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface NavTab {
    id: string;
    label: string;
}

const navTabs: NavTab[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'publications', label: 'Publications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'contact', label: 'Contact' },
];

interface TopNavProps {
    scrollContainerId?: string;
}

export const TopNav: React.FC<TopNavProps> = ({ scrollContainerId = 'center-scroll-container' }) => {
    const [activeSection, setActiveSection] = useState('about');
    const navContainerRef = useRef<HTMLDivElement>(null);
    const isClickScrollingRef = useRef(false);
    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Automatically scroll the top navigation track so the active tab is centered and visible to the viewer
    useEffect(() => {
        if (!navContainerRef.current) return;
        const container = navContainerRef.current;
        const activeTab = container.querySelector<HTMLElement>(`[data-tab-id="${activeSection}"]`);
        if (activeTab) {
            const tabLeft = activeTab.offsetLeft;
            const tabWidth = activeTab.offsetWidth;
            const containerWidth = container.clientWidth;
            const scrollTarget = tabLeft - (containerWidth / 2) + (tabWidth / 2);

            container.scrollTo({
                left: Math.max(0, scrollTarget),
                behavior: 'smooth',
            });
        }
    }, [activeSection]);

    useEffect(() => {
        let isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
        let container = document.getElementById(scrollContainerId);

        // Update desktop status on resize
        const handleResize = () => {
            const nowDesktop = window.innerWidth >= 1024;
            if (nowDesktop !== isDesktop) {
                isDesktop = nowDesktop;
                container = document.getElementById(scrollContainerId);
            }
        };
        window.addEventListener('resize', handleResize, { passive: true });

        // High-precision scroll listener for real-time section detection on both desktop & mobile
        let ticking = false;
        const handleScroll = () => {
            if (isClickScrollingRef.current) return;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    ticking = false;
                    const desktopMode = window.innerWidth >= 1024;
                    const scrollElem = desktopMode ? document.getElementById(scrollContainerId) : null;

                    if (desktopMode && scrollElem) {
                        // Desktop container scroll
                        const { scrollTop, scrollHeight, clientHeight } = scrollElem;
                        if (scrollHeight - scrollTop - clientHeight < 50) {
                            setActiveSection('contact');
                            return;
                        }

                        const sectionOffsets = navTabs.map((tab) => {
                            const elem = document.getElementById(tab.id);
                            if (!elem) return { id: tab.id, top: Infinity };
                            const rect = elem.getBoundingClientRect();
                            const containerRect = scrollElem.getBoundingClientRect();
                            return {
                                id: tab.id,
                                top: rect.top - containerRect.top,
                            };
                        });

                        const threshold = 140;
                        const past = sectionOffsets.filter((s) => s.top <= threshold);
                        if (past.length > 0) {
                            setActiveSection(past[past.length - 1].id);
                        } else {
                            setActiveSection('about');
                        }
                    } else {
                        // Mobile window scroll
                        const scrollY = window.scrollY || document.documentElement.scrollTop;
                        const docHeight = document.documentElement.scrollHeight;
                        const winHeight = window.innerHeight;

                        if (docHeight - (scrollY + winHeight) < 50) {
                            setActiveSection('contact');
                            return;
                        }

                        const sectionOffsets = navTabs.map((tab) => {
                            const elem = document.getElementById(tab.id);
                            if (!elem) return { id: tab.id, top: Infinity };
                            const rect = elem.getBoundingClientRect();
                            return {
                                id: tab.id,
                                top: rect.top,
                            };
                        });

                        const threshold = 150;
                        const past = sectionOffsets.filter((s) => s.top <= threshold);
                        if (past.length > 0) {
                            setActiveSection(past[past.length - 1].id);
                        } else {
                            setActiveSection('about');
                        }
                    }
                });
                ticking = true;
            }
        };

        // Attach scroll listeners: window handles mobile, container handles desktop
        window.addEventListener('scroll', handleScroll, { passive: true });
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
        }

        // Run initial scroll check
        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
            if (clickTimeoutRef.current) {
                clearTimeout(clickTimeoutRef.current);
            }
        };
    }, [scrollContainerId]);

    // Fast, responsive smooth scroll capped at 350ms with easeOutCubic curve
    const smoothScrollTo = (targetElem: HTMLElement | null, isDesktop: boolean, container: HTMLElement | null) => {
        if (!targetElem) return;

        if (isDesktop && container) {
            const containerRect = container.getBoundingClientRect();
            const targetRect = targetElem.getBoundingClientRect();
            const startY = container.scrollTop;
            const targetY = Math.max(0, targetRect.top - containerRect.top + startY - 64);
            const diff = targetY - startY;
            if (Math.abs(diff) < 2) return;

            const duration = Math.min(380, Math.max(200, Math.abs(diff) * 0.15));
            const startTime = performance.now();

            const step = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // easeOutCubic: fast departure, soft landing
                const ease = 1 - Math.pow(1 - progress, 3);
                container.scrollTop = startY + diff * ease;

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        } else {
            const navBar = document.querySelector('.top-nav-bar');
            const navHeight = navBar ? navBar.getBoundingClientRect().height : 56;
            const startY = window.scrollY || document.documentElement.scrollTop;
            const targetTop = Math.max(0, targetElem.getBoundingClientRect().top + startY - navHeight - 12);
            const diff = targetTop - startY;
            if (Math.abs(diff) < 2) return;

            const duration = Math.min(380, Math.max(200, Math.abs(diff) * 0.15));
            const startTime = performance.now();

            const step = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                window.scrollTo(0, startY + diff * ease);

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    };

    const handleTabClick = useCallback((sectionId: string) => {
        setActiveSection(sectionId);

        isClickScrollingRef.current = true;
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = setTimeout(() => {
            isClickScrollingRef.current = false;
        }, 450);

        const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
        const container = document.getElementById(scrollContainerId);
        const target = document.getElementById(sectionId);

        smoothScrollTo(target, isDesktop, container);
    }, [scrollContainerId]);

    return (
        <nav className="top-nav-bar" aria-label="Section Navigation">
            <div className="top-nav-container" ref={navContainerRef}>
                {navTabs.map((tab) => {
                    const isActive = activeSection === tab.id;
                    return (
                        <button
                            key={tab.id}
                            type="button"
                            data-tab-id={tab.id}
                            className={`top-nav-tab ${isActive ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab.id)}
                            aria-current={isActive ? 'page' : undefined}
                            aria-label={`Navigate to ${tab.label} section`}
                        >
                            <span className="tab-label">{tab.label}</span>
                            {isActive && <span className="tab-active-indicator" aria-hidden="true" />}
                        </button>
                    );
                })}
            </div>
            <ThemeToggle />
        </nav>
    );
};

export default TopNav;
