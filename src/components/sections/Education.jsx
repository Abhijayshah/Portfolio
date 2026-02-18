import React from 'react';
import { education } from '../../data/education';
import { FaUniversity, FaSchool } from 'react-icons/fa';
import Card from '../ui/Card';

const Education = () => {
    return (
        <div className="education-content" style={{ paddingBottom: '5rem' }}>
            <div className="main-title">
                <h2>My <span>Education</span></h2>
            </div>

            <div className="timeline-container">
                {education.map((edu, index) => (
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
                            {edu.degree.includes('Technology') ? <FaUniversity /> : <FaSchool />}
                        </div>

                        <div className="tl-content">
                            <span className="tl-duration">
                                {edu.duration}
                            </span>

                            <h5>
                                {edu.degree}
                            </h5>
                            <h6>
                                {edu.institution} | {edu.location}
                            </h6>
                            <p className="grade">
                                {edu.grade}
                            </p>

                            <ul>
                                {edu.details.map((detail, idx) => (
                                    <li key={idx}>
                                        {detail}
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

export default Education;
