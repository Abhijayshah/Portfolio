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
    FiChevronLeft,
    FiChevronRight,
} from 'react-icons/fi';
import { FaYoutube, FaTrophy } from 'react-icons/fa';

interface NavItem {
    id: string;
    icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
    label: string;
}

const navItems: NavItem[] = [
    { id: 'home', icon: FiHome, label: 'Home' },
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

export const DesktopNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Initialize preference from localStorage (defaults to expanded if not set)
    useEffect(() => {
        try {
            const saved = localStorage.getItem('portfolio_nav_collapsed');
            if (saved === 'true') {
                setIsCollapsed(true);
                document.body.classList.add('nav-collapsed');
            } else {
                setIsCollapsed(false);
                document.body.classList.remove('nav-collapsed');
            }
        } catch {
            // LocalStorage might be inaccessible in some sandbox environments
        }

        return () => {
            if (typeof document !== 'undefined') {
                document.body.classList.remove('nav-collapsed');
            }
        };
    }, []);

    const toggleCollapse = () => {
        setIsCollapsed((prev) => {
            const next = !prev;
            if (typeof document !== 'undefined') {
                document.body.classList.toggle('nav-collapsed', next);
                try {
                    localStorage.setItem('portfolio_nav_collapsed', String(next));
                } catch {
                    // Ignore storage errors
                }
            }
            return next;
        });
    };

    // Scrollspy with intersection observer
    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-15% 0px -35% 0px',
            threshold: 0.2,
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
        setActiveSection(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`desktop-nav ${isCollapsed ? 'is-collapsed' : 'is-expanded'}`}
            aria-label="Main Desktop Navigation"
        >
            {/* Top Navigation Header with Title & Collapse Toggle */}
            <div className="desktop-nav-header">
                {!isCollapsed && (
                    <div className="nav-header-info">
                        <span className="nav-header-dot" aria-hidden="true" />
                        <span className="nav-header-title">Menu</span>
                    </div>
                )}
                <button
                    type="button"
                    className="nav-collapse-toggle-btn"
                    onClick={toggleCollapse}
                    aria-label={isCollapsed ? 'Expand navigation to show section titles' : 'Collapse navigation to icons only'}
                    title={isCollapsed ? 'Expand navigation (Show names)' : 'Collapse navigation (Icons only)'}
                >
                    {isCollapsed ? (
                        <FiChevronRight className="toggle-chevron" aria-hidden="true" />
                    ) : (
                        <FiChevronLeft className="toggle-chevron" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Nav Items List (Shows Icon + Title by default) */}
            <div className="desktop-nav-items">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            className={`desktop-nav-item-btn ${isActive ? 'active' : ''}`}
                            onClick={() => handleNavClick(item.id)}
                            aria-label={`Navigate to ${item.label}`}
                            aria-current={isActive ? 'page' : undefined}
                            type="button"
                        >
                            <span className="nav-item-icon">
                                <Icon aria-hidden="true" />
                            </span>
                            <span className="nav-item-label">{item.label}</span>
                            {isCollapsed && (
                                <span className="nav-tooltip" role="tooltip">
                                    {item.label}
                                </span>
                            )}
                            {isActive && !isCollapsed && (
                                <span className="nav-active-pill" aria-hidden="true" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Bottom Footer Collapse Action */}
            <div className="desktop-nav-footer">
                <button
                    type="button"
                    className="nav-footer-collapse-btn"
                    onClick={toggleCollapse}
                    aria-label={isCollapsed ? 'Expand navigation sidebar' : 'Collapse navigation sidebar'}
                    title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    {isCollapsed ? (
                        <FiChevronRight className="footer-chevron" aria-hidden="true" />
                    ) : (
                        <>
                            <FiChevronLeft className="footer-chevron" aria-hidden="true" />
                            <span className="footer-collapse-label">Collapse Menu</span>
                        </>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default DesktopNav;
