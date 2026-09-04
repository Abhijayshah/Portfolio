'use client';
 
import React, { useState } from 'react';
import { skills, headlineSkills } from '@/lib/data/skills';
import Card from '@/components/ui/Card';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

export const Skills: React.FC = () => {
    const [isFullStackExpanded, setIsFullStackExpanded] = useState(false);

    return (
        <div className="skills-content">
            <div className="main-title">
                <h2>My <span>Skills</span></h2>
            </div>

            {/* Headline Skills Section */}
            <div className="headline-skills-wrapper">
                <p className="skills-intro">
                    Core technologies and architectural capabilities I use daily to build production systems:
                </p>
                <div className="headline-chips-grid">
                    {headlineSkills.map((skill, index) => (
                        <div key={index} className="headline-skill-chip">
                            <span className="chip-icon"><FiCheck aria-hidden="true" /></span>
                            <span className="chip-text">{skill}</span>
                        </div>
                    ))}
                </div>

                {/* Toggle Button */}
                <div className="skills-toggle-container">
                    <button
                        type="button"
                        className="btn btn--secondary btn--md toggle-expand-btn"
                        onClick={() => setIsFullStackExpanded(prev => !prev)}
                        aria-expanded={isFullStackExpanded}
                    >
                        {isFullStackExpanded ? "Hide Full Stack" : "View Full Stack (30+ Technologies)"}
                        <FiChevronDown
                            aria-hidden="true"
                            style={{
                                marginLeft: '0.5rem',
                                transform: isFullStackExpanded ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.3s ease'
                            }}
                        />
                    </button>
                </div>
            </div>

            {/* Full Stack Categories (Collapsible) */}
            <div
                className={`full-stack-wrapper ${isFullStackExpanded ? 'is-expanded' : 'is-collapsed'}`}
                aria-hidden={!isFullStackExpanded}
            >
                <div className="about-stats">
                    <h4 className="stat-title">Comprehensive Tech Ecosystem & Specializations</h4>
                    <div className="progress-bars">
                        {skills.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <Card key={index} className="skill-category">
                                    <div className="skill-header">
                                        <Icon className="skill-icon" aria-hidden="true" />
                                        <h5>{category.category}</h5>
                                    </div>
                                    <div className="skill-list">
                                        {category.items.map((item, idx) => (
                                            <span key={idx}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
