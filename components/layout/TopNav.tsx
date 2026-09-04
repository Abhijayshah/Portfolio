'use client';

import React, { useState, useEffect } from 'react';

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

export const TopNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-20% 0px -40% 0px',
            threshold: 0.15,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navTabs.forEach((tab) => {
            const el = document.getElementById(tab.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleTabClick = (sectionId: string) => {
        setActiveSection(sectionId);
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
