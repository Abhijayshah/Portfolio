import React from 'react';
import Image from 'next/image';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                {/* Text Content */}
                <div className="hero-text">
                    <h1 className="hero-title">
                        Full-Stack Software Engineer Shipping
                        <span className="gradient-text"> Production Systems</span> Across Niches.
                    </h1>

                    <p className="hero-subtitle">
                        I am <strong>Abhijay Kumar Shah</strong>. From high-volume healthcare queue engines and spiritual community portals to POS billing systems and automated AI workflows, I engineer scalable, resilient software with measurable real-world outcomes.
                    </p>

                    <div className="hero-tags">
                        <span className="tag">Full-Stack Software Engineer</span>
                        <span className="tag">Healthcare & Queue Architecture</span>
                        <span className="tag">Retail POS & Commerce</span>
                        <span className="tag">Voice AI & LLM Orchestration</span>
                        <span className="tag">Amazon KDP Published Author</span>
                    </div>

                    <div className="btn-group">
                        <a
                            href="#projects"
                            className="btn btn--primary btn--lg"
                        >
                            View My Work <FiArrowRight aria-hidden="true" />
                        </a>
                        <a
                            href="#contact"
                            className="btn btn--secondary btn--lg"
                        >
                            Hire for a Project
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="btn btn--outline btn--lg"
                        >
                            <FiDownload aria-hidden="true" /> Download CV
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="hero-image">
                    <div className="hero-img-wrapper">
                        <Image
                            src="/img/abhijay_photo_chat.webp"
                            alt="Abhijay Kumar Shah"
                            width={450}
                            height={450}
                            priority
                            sizes="(max-width: 480px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 320px, 450px"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />

                        {/* Floating decoration */}
                        <div className="hero-decoration hero-decoration--1"></div>
                        <div className="hero-decoration hero-decoration--2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
