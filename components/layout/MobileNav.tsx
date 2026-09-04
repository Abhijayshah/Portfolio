'use client';

import React, { useState, useEffect } from 'react';
import {
    FiHome,
    FiUser,
    FiBriefcase,
    FiCode,
    FiFolder,
    FiBook,
    FiAward,
    FiBookOpen,
    FiMail,
    FiMenu,
    FiX
} from 'react-icons/fi';
import { FaYoutube, FaTrophy } from 'react-icons/fa';

interface NavItem {
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}

const navItems: NavItem[] = [
    { id: 'about', icon: FiUser, label: 'About' },
    { id: 'experience', icon: FiBriefcase, label: 'Experience' },
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'projects', icon: FiFolder, label: 'Projects' },
    { id: 'education', icon: FiBook, label: 'Education' },
    { id: 'certificates', icon: FiAward, label: 'Certificates' },
    { id: 'publications', icon: FiBookOpen, label: 'Publications' },
    { id: 'achievements', icon: FaTrophy, label: 'Achievements' },
    { id: 'youtube', icon: FaYoutube, label: 'YouTube' },
    { id: 'contact', icon: FiMail, label: 'Contact' },
];

const primaryMobileIds = ['about', 'skills', 'projects', 'youtube'];

export const MobileNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            {/* Bottom Navigation Bar (Mobile) */}
            <nav className="mobile-nav" aria-label="Mobile Navigation">
                {/* Show 4 main items */}
                {navItems.filter(item => primaryMobileIds.includes(item.id)).map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => handleNavClick(item.id)}
                            aria-label={item.label}
                            type="button"
                        >
                            <Icon />
                            <span>{item.label}</span>
                        </button>
                    );
                })}

                {/* Menu button for remaining items */}
                <button
                    className="mobile-nav-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="More navigation options"
                    type="button"
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                    <span>More</span>
                </button>
            </nav>

            {/* Full Menu Overlay (when "More" is clicked) */}
            {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-menu-header">
                            <h3>Navigation</h3>
                            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" type="button">
                                <FiX />
                            </button>
                        </div>

                        <div className="mobile-menu-items">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        className={`mobile-menu-item ${activeSection === item.id ? 'active' : ''}`}
                                        onClick={() => handleNavClick(item.id)}
                                        type="button"
                                    >
                                        <Icon />
                                        <span>{item.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileNav;
