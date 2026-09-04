'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';
import { FiExternalLink, FiGithub, FiPlayCircle } from 'react-icons/fi';

export const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Full-Stack AI', 'AI/LLM', 'MERN Stack', 'iOS Native', 'Dev Tools'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p =>
            p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            (p.tag && p.tag.toLowerCase().includes(activeFilter.toLowerCase()))
        );

    return (
        <div className="projects-container">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
                A showcase of production-ready applications across healthcare systems, community platforms, retail POS, and voice AI.
            </p>

            {/* Filter Tabs */}
            <div className="project-filters" role="tablist" aria-label="Project categories">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        onClick={() => setActiveFilter(cat)}
                        type="button"
                        role="tab"
                        aria-selected={activeFilter === cat}
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
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={500}
                                height={300}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />

                            {/* Overlay with buttons */}
                            <div className="project-overlay">
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                                        <FiExternalLink aria-hidden="true" /> Live Demo
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">
                                        <FiGithub aria-hidden="true" /> Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="project-content">
                            <div className="project-header">
                                <span className="project-category">{project.category}</span>
                                {project.tag && <span className="project-tag-badge">{project.tag}</span>}
                            </div>
                            <h3 className="project-title">{project.name}</h3>

                            {project.caseStudy ? (
                                <div className="project-case-study">
                                    <div className="case-study-item">
                                        <span className="cs-label cs-label--problem">Problem</span>
                                        <p className="cs-text">{project.caseStudy.problem}</p>
                                    </div>
                                    <div className="case-study-item">
                                        <span className="cs-label cs-label--solution">What I Built</span>
                                        <p className="cs-text">{project.caseStudy.whatIBuilt}</p>
                                    </div>
                                    <div className="case-study-item">
                                        <span className="cs-label cs-label--outcome">Outcome</span>
                                        <p className="cs-text">{project.caseStudy.outcome}</p>
                                    </div>
                                </div>
                            ) : (
                                <p className="project-description">{project.description}</p>
                            )}

                            {/* Tech Stack */}
                            <div className="project-tech">
                                {project.techStack.slice(0, 4).map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="project-links">
                                {project.videoLink && (
                                    <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                                        <FiPlayCircle aria-hidden="true" /> Watch Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
