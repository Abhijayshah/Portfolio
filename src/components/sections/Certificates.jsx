import React from 'react';
import { certificates } from '../../data/education';
import { FaAward } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Certificates = () => {
    // If certificates is undefined in education.js, fallback to empty array
    const certs = certificates || [];

    return (
        <div className="certificates-content" style={{ paddingBottom: '5rem' }}>
            <div className="main-title">
                <h2>My <span>Certificates</span></h2>
            </div>

            <div className="certificates-grid">
                {certs.map((cert, index) => (
                    <Card key={index} className="certificate-item">
                        <div className="cert-icon">
                            <FaAward />
                        </div>
                        <h4>
                            {cert.name}
                        </h4>
                        <span className="cert-date">
                            {cert.date}
                        </span>
                        <p>
                            {cert.description}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
