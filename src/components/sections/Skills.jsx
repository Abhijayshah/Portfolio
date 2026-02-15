import React from 'react';
import { skills } from '../../data/skills';
import Card from '../ui/Card';

const Skills = () => {
    return (
        <div className="skills-content">
            <div className="main-title">
                <h2>My <span>Skills</span></h2>
            </div>

            <div className="about-stats">
                <h4 className="stat-title">My Tech Ecosystem</h4>
                <div className="progress-bars">
                    {skills.map((category, index) => (
                        <Card key={index} className="skill-category">
                            <div className="skill-header">
                                <category.icon className="skill-icon" />
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
