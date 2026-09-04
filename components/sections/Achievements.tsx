import React from 'react';
import { achievements } from '@/lib/data/achievements';
import { FiAward, FiExternalLink, FiCalendar, FiBriefcase } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';

export const Achievements: React.FC = () => {
    return (
        <div className="achievements-content">
            <div className="main-title">
                <h2>Honors & <span>Achievements</span></h2>
                <span className="bg-text" aria-hidden="true">AWARDS</span>
            </div>

            <p className="achievements-intro">
                National hackathon recognitions, competitive engineering milestones, and academic honors:
            </p>

            <div className="achievements-grid">
                {achievements.map((item) => (
                    <article key={item.id} className="achievement-card">
                        <div className="achievement-top">
                            <div className="achievement-icon-box" aria-hidden="true">
                                <FaTrophy />
                            </div>
                            {item.badge && (
                                <span className="achievement-badge">{item.badge}</span>
                            )}
                        </div>

                        <div className="achievement-body">
                            <div className="achievement-meta">
                                {item.organization && (
                                    <span className="org-name">
                                        <FiBriefcase aria-hidden="true" />
                                        {item.organization}
                                    </span>
                                )}
                                <span className="meta-date">
                                    <FiCalendar aria-hidden="true" />
                                    {item.date}
                                </span>
                            </div>

                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-description">{item.description}</p>

                            {item.url && (
                                <div className="achievement-action">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn--secondary btn--sm achievement-btn"
                                        aria-label={`View documentation for ${item.title}`}
                                    >
                                        <FiAward aria-hidden="true" />
                                        <span>View Credential</span>
                                        <FiExternalLink aria-hidden="true" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
