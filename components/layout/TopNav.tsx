'use client';

import React, { useState, useEffect, useCallback } from 'react';

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

    useEffect(() => {
        const container = document.getElementById(scrollContainerId);

        // Options: if container exists (desktop app shell), use it as root; otherwise fallback to window viewport
        const observerOptions: IntersectionObserverInit = {
            root: container || null,
            rootMargin: '-60px 0px -45% 0px',
            threshold: [0, 0.1, 0.25],
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            // Find intersecting entries
            const visibleEntries = entries.filter((entry) => entry.isIntersecting);
            if (visibleEntries.length > 0) {
                // Pick the entry with the highest intersection ratio or top position
                const bestEntry = visibleEntries.reduce((prev, curr) =>
                    curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                );
                if (bestEntry.target.id) {
                    setActiveSection(bestEntry.target.id);
                }
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navTabs.forEach((tab) => {
            const el = document.getElementById(tab.id);
            if (el) observer.observe(el);
        });

        // Add scroll listener for edge cases (top and bottom of container)
        const handleScroll = () => {
            if (!container) return;
            // If near bottom of container, set to contact
            if (container.scrollHeight - container.scrollTop - container.clientHeight < 40) {
                setActiveSection('contact');
            } else if (container.scrollTop < 80) {
                setActiveSection('about');
            }
        };

        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            observer.disconnect();
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [scrollContainerId]);

    const handleTabClick = useCallback((sectionId: string) => {
        setActiveSection(sectionId);
        const container = document.getElementById(scrollContainerId);
        const target = document.getElementById(sectionId);

        if (container && target) {
            const containerRect = container.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const scrollOffset = targetRect.top - containerRect.top + container.scrollTop - 64;
            container.scrollTo({ top: Math.max(0, scrollOffset), behavior: 'smooth' });
        } else if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollContainerId]);

    return (
        <nav className="top-nav-bar" aria-label="Section Navigation">
            <div className="top-nav-container">
                {navTabs.map((tab) => {
                    const isActive = activeSection === tab.id;
                    return (
                        <button
                            key={tab.id}
                            type="button"
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
