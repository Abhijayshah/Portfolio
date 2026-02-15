import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="container header active" id="home">
            <div className="header-content">
                <div className="left-header">
                    <div className="h-shape"></div>
                    <div className="image">
                        <img src="/img/hero.png" alt="hero" />
                    </div>
                </div>
                <div className="right-header">
                    <h1 className="name">
                        Hi, I'm <span>{personalInfo.name}</span>
                        <span style={{ fontSize: '1.2rem', display: 'block', marginTop: '10px', color: 'var(--color-grey-1)' }}>
                            {personalInfo.titles.join(' | ')}
                        </span>
                    </h1>
                    <p>
                        {personalInfo.subHeadline}
                    </p>
                    <div className="btn-con">
                        <a href="" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><FaDownload /></span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
