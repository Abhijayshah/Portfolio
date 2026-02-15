import React, { useState, useEffect } from 'react';
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiAward, FiMail } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle';

const navItems = [
    { id: 'home', icon: FiHome, label: 'Home' },
    { id: 'about', icon: FiUser, label: 'About' },
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'experience', icon: FiBriefcase, label: 'Experience' },
    { id: 'projects', icon: FiFolder, label: 'Projects' },
    { id: 'education', icon: FiBook, label: 'Education' },
    { id: 'certificates', icon: FiAward, label: 'Certificates' },
    { id: 'contact', icon: FiMail, label: 'Contact' },
];

function Sidebar() {
    const [activeSection, setActiveSection] = useState('home');

    // Detect which section is in view
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // 30% of section visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Smooth scroll to section
    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="theme-toggle-wrapper" style={{ position: 'fixed', top: '5%', right: '3%', zIndex: '15' }}>
                <ThemeToggle />
            </div>

            <nav className="controls">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.id}
                            className={`control ${activeSection === item.id ? 'active-btn' : ''}`}
                            onClick={() => handleNavClick(item.id)}
                            title={item.label}
                        >
                            <Icon />
                        </div>
                    );
                })}
            </nav>
        </>
    );
}

export default Sidebar;
