import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaNewspaper, FaEnvelope } from 'react-icons/fa';

const Controls = ({ activeSection, setActiveSection }) => {
    return (
        <div className="controls">
            <div
                className={`control ${activeSection === 'home' ? 'active-btn' : ''}`}
                onClick={() => setActiveSection('home')}
                title="Home"
            >
                <FaHome />
            </div>
            <div
                className={`control ${activeSection === 'about' ? 'active-btn' : ''}`}
                onClick={() => setActiveSection('about')}
                title="About"
            >
                <FaUser />
            </div>
            <div
                className={`control ${activeSection === 'skills' ? 'active-btn' : ''}`}
                onClick={() => setActiveSection('skills')}
                title="Skills"
            >
                <i className="fas fa-code"></i>
            </div>
            <div
                className={`control ${activeSection === 'portfolio' ? 'active-btn' : ''}`}
                onClick={() => setActiveSection('portfolio')}
                title="Projects"
            >
                <FaBriefcase />
            </div>
            <div
                className={`control ${activeSection === 'experience' ? 'active-btn' : ''}`}
                onClick={() => setActiveSection('experience')}
                title="Experience"
            >
                <i className="fas fa-history"></i>
            </div>
            <div
                className={`control ${activeSection === 'education' ? 'active-btn' : ''}`}
                onClick={() => setActiveSection('education')}
                title="Education"
            >
                <i className="fas fa-graduation-cap"></i>
            </div>
            <div
                className={`control ${activeSection === 'contact' ? 'active-btn' : ''}`}
                onClick={() => setActiveSection('contact')}
                title="Contact"
            >
                <FaEnvelope />
            </div>
        </div>
    );
};

export default Controls;
