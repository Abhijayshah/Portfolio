import { useState } from 'react';
import { projects } from '../../data/projects';
import { FiExternalLink, FiGithub, FiPlayCircle } from 'react-icons/fi';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Full-Stack AI', 'AI/LLM', 'MERN Stack', 'iOS Native', 'Dev Tools'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || (p.tag && p.tag.toLowerCase().includes(activeFilter.toLowerCase())));

    return (
        <div className="projects-container">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
                A showcase of 13+ production-ready applications spanning MERN Full-Stack, Next.js, and n8n automation.
            </p>

            {/* Filter Tabs */}
            <div className="project-filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card">
                        {/* Image */}
                        <div className="project-img-container">
                            <img src={project.image} alt={project.name} />

                            {/* Overlay with buttons */}
                            <div className="project-overlay">
                                <a href={project.liveLink} className="btn btn--primary btn--sm">
                                    <FiExternalLink /> Live Demo
                                </a>
                                <a href={project.githubLink} className="btn btn--secondary btn--sm">
                                    <FiGithub /> Code
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="project-content">
                            <div className="project-header">
                                <span className="project-category">{project.category}</span>
                                {project.tag && <span className="project-tag-badge">{project.tag}</span>}
                            </div>
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-description">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="project-tech">
                                {project.techStack.slice(0, 4).map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="project-links">
                                {project.videoLink && (
                                    <a href={project.videoLink} className="btn btn--ghost btn--sm">
                                        <FiPlayCircle /> Watch Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
