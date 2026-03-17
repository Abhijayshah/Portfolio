import { useState, useEffect } from 'react';
import {
    FiHome,
    FiUser,
    FiCode,
    FiBriefcase,
    FiFolder,
    FiBook,
    FiAward,
    FiMail
} from 'react-icons/fi';

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

function DesktopNav() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observerCallback = (entries) => {
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

    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="desktop-nav">
            <div className="desktop-nav-items">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            className={`desktop-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => handleNavClick(item.id)}
                            aria-label={item.label}
                        >
                            <Icon />
                            <span className="nav-tooltip">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}

export default DesktopNav;
