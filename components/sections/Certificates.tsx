'use client';

import React, { useState } from 'react';
import { certificates } from '@/lib/data/education';
import { FaAward } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Card from '@/components/ui/Card';

export const Certificates: React.FC = () => {
    const certs = certificates || [];
    const [showAll, setShowAll] = useState(false);

    const visibleCerts = showAll ? certs : certs.slice(0, 5);

    return (
        <div className="certificates-content" style={{ paddingBottom: '5rem' }}>
            <div className="main-title">
                <h2>My <span>Certificates</span></h2>
            </div>

            <div className="certificates-grid">
                {visibleCerts.map((cert, index) => (
                    <Card key={index} className="certificate-item">
                        <div className="cert-icon">
                            <FaAward aria-hidden="true" />
                        </div>
                        <h4>
                            {cert.name}
                        </h4>
                        {cert.date && (
                            <span className="cert-date">
                                {cert.date}
                            </span>
                        )}
                        <p>
                            {cert.description}
                        </p>
                        {cert.link && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--ghost btn--sm"
                                style={{ marginTop: '0.5rem', width: 'fit-content' }}
                            >
                                View Certificate
                            </a>
                        )}
                    </Card>
                ))}
            </div>

            {certs.length > 5 && (
                <div className="certificates-toggle-container">
                    <button
                        type="button"
                        className="btn btn--secondary btn--md toggle-expand-btn"
                        onClick={() => setShowAll(prev => !prev)}
                        aria-expanded={showAll}
                    >
                        {showAll ? "Show Featured Only" : `View All Certificates (${certs.length})`}
                        <FiChevronDown
                            aria-hidden="true"
                            style={{
                                marginLeft: '0.5rem',
                                transform: showAll ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.3s ease'
                            }}
                        />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Certificates;
