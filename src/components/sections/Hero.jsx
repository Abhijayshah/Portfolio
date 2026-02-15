import { FiDownload, FiArrowRight } from 'react-icons/fi';

function Hero() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                {/* Text Content */}
                <div className="hero-text">
                    <h1 className="hero-title">
                        Building Intelligent Digital
                        <span className="gradient-text"> Experiences</span> with Purpose.
                    </h1>

                    <p className="hero-subtitle">
                        I am <strong>Abhijay Kumar Shah</strong>. I architect scalable MERN applications,
                        native iOS experiences, and AI-driven systems. From automating academic workflows
                        at VIT to preserving global spiritual heritage, I turn complex logic into elegant,
                        performant solutions.
                    </p>

                    <div className="hero-tags">
                        <span className="tag">Full-Stack Developer</span>
                        <span className="tag">AI Orchestrator</span>
                        <span className="tag">Native iOS Builder</span>
                        <span className="tag">EdTech Founder</span>
                    </div>

                    <div className="btn-group">
                        <button
                            className="btn btn--primary btn--lg"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work <FiArrowRight />
                        </button>
                        <button
                            className="btn btn--secondary btn--lg"
                            onClick={() => scrollToSection('contact')}
                        >
                            Let's Connect
                        </button>
                        <a
                            href="/resume.pdf"
                            download
                            className="btn btn--outline btn--lg"
                        >
                            <FiDownload /> Download CV
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="hero-image">
                    <div className="hero-img-wrapper">
                        <img src="/img/hero.png" alt="Abhijay Kumar Shah" loading="lazy" />

                        {/* Floating decoration */}
                        <div className="hero-decoration hero-decoration--1"></div>
                        <div className="hero-decoration hero-decoration--2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
