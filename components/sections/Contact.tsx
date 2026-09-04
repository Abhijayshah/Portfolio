'use client';

import React from 'react';
import { socialLinks } from '@/lib/data/socials';
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaGlobe,
    FaPhone,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaCode,
} from 'react-icons/fa';
import {
    SiLeetcode,
    SiGeeksforgeeks,
    SiCodeforces,
    SiGooglescholar,
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import Card from '@/components/ui/Card';

// Helper to map profile names to branded icons
const getIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower === 'linkedin') return <FaLinkedin aria-hidden="true" />;
    if (lower === 'twitter') return <FaTwitter aria-hidden="true" />;
    if (lower === 'instagram') return <FaInstagram aria-hidden="true" />;
    if (lower === 'youtube') return <FaYoutube aria-hidden="true" />;
    if (lower === 'github') return <FaGithub aria-hidden="true" />;
    if (lower === 'leetcode') return <SiLeetcode aria-hidden="true" />;
    if (lower === 'gfg' || lower.includes('geeks')) return <SiGeeksforgeeks aria-hidden="true" />;
    if (lower === 'codeforces') return <SiCodeforces aria-hidden="true" />;
    if (lower === 'codolio') return <FaCode aria-hidden="true" />;
    if (lower === 'google scholar') return <SiGooglescholar aria-hidden="true" />;
    return <FaGlobe aria-hidden="true" />;
};

export const Contact: React.FC = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        // Simple client-side validation
        if (!data.get('email') || !data.get('message')) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xwpnwkgz", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Thanks for your message! I'll get back to you soon.");
                form.reset();
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch {
            alert("Error sending message. Please try again.");
        }
    };

    return (
        <div className="contact-content" style={{ paddingBottom: '5rem' }}>
            <div className="main-title">
                <h2>Contact <span>Me</span></h2>
            </div>

            <div className="contact-content-con">
                <div className="left-contact">
                    <h4>Contact Information</h4>
                    <p>
                        I'm actively seeking Full-Time Software Engineer / SDE / Full-Stack Developer roles. If you have an opportunity or want to discuss building high-impact software together, let's connect!
                    </p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="icon">
                                <span><FaMapMarkerAlt aria-hidden="true" /></span>
                                <span>Location : Bengaluru | Bhopal, India</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <span><FaEnvelope aria-hidden="true" /></span>
                                <span>Email : <a href="mailto:abhijayshah74@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>abhijayshah74@gmail.com</a></span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <span><FaPhone aria-hidden="true" /></span>
                                <span>Phone : <a href="tel:+917879028316" style={{ color: 'inherit', textDecoration: 'none' }}>+91 78790 28316</a></span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <span><FaGlobe aria-hidden="true" /></span>
                                <span>Website : <a href="https://abhijayshah.online" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>abhijayshah.online</a></span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Group (Only LinkedIn, Twitter, Instagram, YouTube) */}
                    <div className="contact-profiles-group">
                        <h5 className="profiles-group-title">
                            <span className="group-title-icon">🌐</span> SOCIAL MEDIA
                        </h5>
                        <div className="contact-pill-grid">
                            {socialLinks.socialMedia.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`contact-profile-pill pill-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    title={`Connect with Abhijay on ${social.name}`}
                                    aria-label={`Connect on ${social.name}`}
                                >
                                    <span className="pill-icon">{getIcon(social.name)}</span>
                                    <span className="pill-label">{social.name}</span>
                                    <FiExternalLink className="pill-arrow" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Coding Profiles Group (GitHub, LeetCode, GFG, Codolio, Google Scholar) */}
                    <div className="contact-profiles-group">
                        <h5 className="profiles-group-title">
                            <span className="group-title-icon">💻</span> CODING PROFILES
                        </h5>
                        <div className="contact-pill-grid">
                            {socialLinks.codingProfiles.map((profile) => (
                                <a
                                    key={profile.name}
                                    href={profile.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`contact-profile-pill pill-${profile.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    title={`View Abhijay's ${profile.name} profile`}
                                    aria-label={`View profile on ${profile.name}`}
                                >
                                    <span className="pill-icon">{getIcon(profile.name)}</span>
                                    <span className="pill-label">{profile.name}</span>
                                    <FiExternalLink className="pill-arrow" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="right-contact">
                    <Card>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="input-control i-c-2">
                                <input type="text" name="name" required placeholder="YOUR NAME" />
                                <input type="email" name="email" required placeholder="YOUR EMAIL" />
                            </div>
                            <div className="input-control">
                                <input type="text" name="subject" required placeholder="ENTER SUBJECT" />
                            </div>
                            <div className="input-control">
                                <textarea name="message" required id="message" cols={15} rows={8} placeholder="Message Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <button type="submit" className="btn btn--primary btn--lg">
                                    Send Message <FaEnvelope aria-hidden="true" />
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
