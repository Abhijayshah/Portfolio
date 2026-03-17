import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { FaTasks, FaProjectDiagram, FaChalkboardTeacher, FaCode } from 'react-icons/fa';
import Card from '../ui/Card';

const About = () => {
    return (
        <div className="about-content">
            <div className="main-title">
                <h2>About <span>me</span></h2>
            </div>

            <div className="about-container">
                <div className="left-about">
                    <h4>Information About me</h4>
                    <p>
                        {personalInfo.about}
                    </p>
                    <ul className="about-highlights">
                        <li className="about-highlight">
                            <FaProjectDiagram aria-hidden="true" /> 12+ real-world projects across web, AI, and iOS.
                        </li>
                        <li className="about-highlight">
                            <FaTasks aria-hidden="true" /> Systems focused on scalability, performance, and reliability.
                        </li>
                        <li className="about-highlight">
                            <FaCode aria-hidden="true" /> 30+ technologies mastered with practical applications.
                        </li>
                        <li className="about-highlight">
                            <FaChalkboardTeacher aria-hidden="true" /> 100+ students mentored via CatCatchCode.
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
                            <p className="large-text">12+</p>
                            <p className="small-text">Projects <br /> Completed</p>
                        </div>
                    </Card>
                    <Card className="about-item">
                        <div className="abt-text">
                            <p className="large-text">3+</p>
                            <p className="small-text">Years of <br /> experience</p>
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
                            <p className="large-text">100+</p>
                            <p className="small-text">Students <br /> Mentored</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default About;
