import React from 'react';
import { experience } from '../../data/experience';
import { FaBriefcase, FaCalendarAlt, FaGlobe, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
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

                            {job.links && (
                                <div className="tl-links" style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    marginBottom: '1rem',
                                    fontSize: '0.9rem'
                                }}>
                                    {job.links.website && (
                                        <a href={job.links.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                                            <FaGlobe /> Website
                                        </a>
                                    )}
                                    {job.links.github && (
                                        <a href={job.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {job.links.youtube && (
                                        <a href={job.links.youtube} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                                            <FaYoutube /> YouTube
                                        </a>
                                    )}
                                    {job.links.instagram && (
                                        <a href={job.links.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                                            <FaInstagram /> Instagram
                                        </a>
                                    )}
                                </div>
                            )}

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
