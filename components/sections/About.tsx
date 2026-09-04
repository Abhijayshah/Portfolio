import React from 'react';
import { personalInfo } from '@/lib/data/personalInfo';
import { FaTasks, FaProjectDiagram, FaBook, FaCode } from 'react-icons/fa';
import Card from '@/components/ui/Card';
import WhatIBuildCarousel from '@/components/ui/WhatIBuildCarousel';

export const About: React.FC = () => {
    return (
        <div className="about-content">
            <div className="main-title">
                <h2>About <span>me</span></h2>
            </div>

            <div className="about-container">
                <div className="left-about">
                    <h4>Engineering Across Diverse Niches</h4>
                    <p>
                        {personalInfo.about}
                    </p>
                    <ul className="about-highlights">
                        <li className="about-highlight">
                            <FaProjectDiagram aria-hidden="true" /> 20+ production web, mobile, and enterprise apps delivered.
                        </li>
                        <li className="about-highlight">
                            <FaTasks aria-hidden="true" /> Systems engineering: real-time queues, sub-50ms sync, and 99.9% uptime.
                        </li>
                        <li className="about-highlight">
                            <FaCode aria-hidden="true" /> 30+ technologies mastered across TypeScript, Next.js, Node.js, and Python.
                        </li>
                        <li className="about-highlight">
                            <FaBook aria-hidden="true" /> Published Author of 2 books on Amazon KDP & technical lead of 5.
                        </li>
                    </ul>
                    {personalInfo.status && (
                        <div className="about-status" role="note">
                            {personalInfo.status}
                        </div>
                    )}
                </div>
                <div className="right-about">
                    <Card className="about-item">
                        <div className="abt-text">
                            <p className="large-text">20+</p>
                            <p className="small-text">Production Apps <br /> Shipped</p>
                        </div>
                    </Card>
                    <Card className="about-item">
                        <div className="abt-text">
                            <p className="large-text">3+</p>
                            <p className="small-text">Years of <br /> Engineering</p>
                        </div>
                    </Card>
                    <Card className="about-item">
                        <div className="abt-text">
                            <p className="large-text">30+</p>
                            <p className="small-text">Technologies <br /> Mastered</p>
                        </div>
                    </Card>
                    <Card className="about-item">
                        <div className="abt-text">
                            <p className="large-text">2</p>
                            <p className="small-text">Books Published <br /> on Amazon KDP</p>
                        </div>
                    </Card>
                </div>
            </div>

            {/* What I Build Auto-Scrolling Carousel Section */}
            <WhatIBuildCarousel />
        </div>
    );
};

export default About;
