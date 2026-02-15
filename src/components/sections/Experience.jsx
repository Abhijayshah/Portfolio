import React from 'react';
import { experience } from '../../data/experience';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import Card from '../ui/Card';

const Experience = () => {
    return (
        <div className="experience-content" style={{ paddingBottom: '5rem' }}>
            <div className="main-title">
                <h2>My <span>Experience</span></h2>
            </div>

            <div className="timeline-container">
                {experience.map((job, index) => (
                    <Card key={index} className="timeline-item">
                        <div className="tl-icon" style={{
                            backgroundColor: 'var(--color-secondary)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.6rem',
                            color: 'var(--color-white)',
                            marginBottom: '1rem'
                        }}>
                            <FaBriefcase />
                        </div>

                        <div className="tl-content">
                            <span className="tl-duration">
                                <FaCalendarAlt /> {job.duration}
                            </span>

                            <h5>
                                {job.role} <span>{job.company}</span>
                            </h5>

                            <p>
                                {job.description}
                            </p>

                            <ul>
                                {job.achievements.map((item, idx) => (
                                    <li key={idx}>
                                        <span><FiCheckCircle /></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Experience;
