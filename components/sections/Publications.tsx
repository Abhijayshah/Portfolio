import React from 'react';
import { publications } from '@/lib/data/publications';
import { FiBookOpen, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { FaAmazon } from 'react-icons/fa';

export const Publications: React.FC = () => {
    return (
        <div className="publications-content">
            <div className="main-title">
                <h2>My <span>Publications</span></h2>
                <span className="bg-text" aria-hidden="true">BOOKS</span>
            </div>

            <p className="publications-intro">
                Published technical books on Amazon KDP focused on applied AI prompt engineering,
                autonomous developer workflows, and technical communication for engineers:
            </p>

            <div className="publications-grid">
                {publications.map((book) => (
                    <article key={book.id} className="publication-card">
                        <div className="book-spine-accent" aria-hidden="true" />
                        <div className="book-card-inner">
                            <div className="book-header">
                                <span className="platform-badge">
                                    <FaAmazon className="badge-icon" aria-hidden="true" />
                                    {book.platform}
                                </span>
                                {book.publishedDate && (
                                    <span className="published-date">{book.publishedDate}</span>
                                )}
                            </div>

                            <div className="book-icon-wrapper" aria-hidden="true">
                                <FiBookOpen />
                            </div>

                            <h3 className="book-title">{book.title}</h3>
                            {book.subtitle && (
                                <p className="book-subtitle">{book.subtitle}</p>
                            )}

                            <p className="book-description">{book.description}</p>

                            {book.highlights && book.highlights.length > 0 && (
                                <div className="book-highlights">
                                    <h4 className="highlights-title">Core Takeaways:</h4>
                                    <ul>
                                        {book.highlights.map((highlight, idx) => (
                                            <li key={idx}>
                                                <FiCheckCircle className="highlight-icon" aria-hidden="true" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="book-actions">
                                <a
                                    href={book.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--primary btn--md"
                                    aria-label={`View ${book.title} on Amazon`}
                                >
                                    <FaAmazon aria-hidden="true" />
                                    <span>View on Amazon</span>
                                    <FiExternalLink aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Publications;
