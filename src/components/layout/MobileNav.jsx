import { useState, useEffect } from 'react';
import {
    FiHome,
    FiUser,
    FiCode,
    FiBriefcase,
    FiFolder,
    FiBook,
    FiAward,
    FiMail,
    FiMenu,
    FiX
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

function MobileNav() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            {/* Bottom Navigation Bar (Mobile) */}
            <nav className="mobile-nav">
                {/* Show 4 main items */}
                {navItems.slice(0, 4).map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => handleNavClick(item.id)}
                            aria-label={item.label}
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
                    aria-label="More"
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
                            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
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
}

export default MobileNav;
