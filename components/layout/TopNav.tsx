'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

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
                        if (scrollTop < 80) {
                            setActiveSection('about');
                            return;
                        }

                        const containerRect = scrollElem.getBoundingClientRect();
                        const triggerY = containerRect.top + 100;

                        for (let i = navTabs.length - 1; i >= 0; i--) {
                            const el = document.getElementById(navTabs[i].id);
                            if (el) {
                                const rect = el.getBoundingClientRect();
                                if (rect.top <= triggerY && rect.bottom > triggerY - 40) {
                                    setActiveSection(navTabs[i].id);
                                    return;
                                }
                            }
                        }
                    } else {
                        // Mobile window scroll
                        const scrollY = window.scrollY || document.documentElement.scrollTop;
                        const windowHeight = window.innerHeight;
                        const docHeight = document.documentElement.scrollHeight;

                        // Edge case: bottom of the page
                        if (windowHeight + scrollY >= docHeight - 60) {
                            setActiveSection('contact');
                            return;
                        }
                        // Edge case: top of the page
                        if (scrollY < 80) {
                            setActiveSection('about');
                            return;
                        }

                        const navBar = document.querySelector('.top-nav-bar');
                        const navHeight = navBar ? navBar.getBoundingClientRect().height : 56;
                        const triggerY = navHeight + 80;

                        for (let i = navTabs.length - 1; i >= 0; i--) {
                            const el = document.getElementById(navTabs[i].id);
                            if (el) {
                                const rect = el.getBoundingClientRect();
                                if (rect.top <= triggerY && rect.bottom > triggerY - 40) {
                                    setActiveSection(navTabs[i].id);
                                    return;
                                }
                            }
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

    const handleTabClick = useCallback((sectionId: string) => {
        setActiveSection(sectionId);

        isClickScrollingRef.current = true;
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = setTimeout(() => {
            isClickScrollingRef.current = false;
        }, 850);

        const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
        const container = document.getElementById(scrollContainerId);
        const target = document.getElementById(sectionId);

        if (!target) return;

        if (isDesktop && container) {
            const containerRect = container.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const scrollOffset = targetRect.top - containerRect.top + container.scrollTop - 64;
            container.scrollTo({ top: Math.max(0, scrollOffset), behavior: 'smooth' });
        } else {
            const navBar = document.querySelector('.top-nav-bar');
            const navHeight = navBar ? navBar.getBoundingClientRect().height : 56;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
            window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        }
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
        </nav>
    );
};

export default TopNav;
