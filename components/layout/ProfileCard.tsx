'use client';

import React from 'react';
import Image from 'next/image';
import { FiMail, FiCode } from 'react-icons/fi';
import {
    SiLinkedin,
    SiX,
    SiInstagram,
    SiYoutube,
    SiGithub,
    SiLeetcode,
    SiGeeksforgeeks,
    SiCodeforces,
    SiGooglescholar,
} from 'react-icons/si';
import { socialLinks } from '@/lib/data/socials';

export const ProfileCard: React.FC = () => {
    const email = 'abhijayshah74@gmail.com';

    // Social media icon mapping
    const getSocialIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case 'linkedin':
                return <SiLinkedin aria-hidden="true" />;
            case 'twitter':
            case 'x':
                return <SiX aria-hidden="true" />;
            case 'instagram':
                return <SiInstagram aria-hidden="true" />;
            case 'youtube':
                return <SiYoutube aria-hidden="true" />;
            default:
                return null;
        }
    };

    // Coding profile icon mapping
    const getCodingIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case 'github':
                return <SiGithub className="coding-icon github" aria-hidden="true" />;
            case 'leetcode':
                return <SiLeetcode className="coding-icon leetcode" aria-hidden="true" />;
            case 'gfg':
                return <SiGeeksforgeeks className="coding-icon gfg" aria-hidden="true" />;
            case 'codolio':
                return <FiCode className="coding-icon codolio" aria-hidden="true" />;
            case 'codeforces':
                return <SiCodeforces className="coding-icon codeforces" aria-hidden="true" />;
            case 'google scholar':
                return <SiGooglescholar className="coding-icon scholar" aria-hidden="true" />;
            default:
                return <FiCode className="coding-icon default" aria-hidden="true" />;
        }
    };

    const getCodingShortLabel = (name: string) => {
        if (name.toLowerCase() === 'google scholar') return 'Scholar';
        return name;
    };

    return (
        <aside className="profile-card" aria-label="Abhijay Kumar Shah Profile Card">
            {/* Top Photo with Glowing Rounded Frame */}
            <div className="profile-photo-wrapper">
                <div className="profile-photo-frame">
                    <Image
                        src="/img/abhijay_photo_chat.webp"
                        alt="Abhijay Kumar Shah"
                        width={140}
                        height={140}
                        priority
                        className="profile-photo-img"
                    />
                </div>
            </div>

            {/* Name */}
            <h2 className="profile-name">Abhijay Kumar Shah</h2>

            {/* Short Bio Description Pill */}
            <div className="profile-bio-badge">
                <p>
                    Full-Stack Software Engineer & Applied AI Developer building scalable healthcare, queue systems & production web apps.
                </p>
            </div>

            {/* Divider */}
            <hr className="profile-divider" />

            {/* Email Contact Block */}
            <div className="profile-contact-block">
                <div className="contact-icon-box">
                    <FiMail aria-hidden="true" />
                </div>
                <div className="contact-details">
                    <span className="contact-label">EMAIL</span>
                    <a
                        href={`mailto:${email}`}
                        className="contact-value"
                        title={`Send an email to ${email}`}
                    >
                        {email}
                    </a>
                </div>
            </div>

            {/* Divider */}
            <hr className="profile-divider" />

            {/* CONNECT Section (Social Media) */}
            <div className="profile-section">
                <h3 className="profile-section-title">CONNECT</h3>
                <div className="profile-social-icons">
                    {socialLinks.socialMedia.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-btn"
                            aria-label={`Connect with Abhijay on ${item.name}`}
                            title={item.name}
                        >
                            {getSocialIcon(item.name)}
                        </a>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <hr className="profile-divider" />

            {/* CODING Section */}
            <div className="profile-section">
                <h3 className="profile-section-title">CODING</h3>
                <div className="profile-coding-grid">
                    {socialLinks.codingProfiles.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="coding-profile-tile"
                            aria-label={`View Abhijay's ${item.name} profile`}
                            title={`${item.name} (${item.username})`}
                        >
                            <div className="coding-tile-icon-box">
                                {getCodingIcon(item.name)}
                            </div>
                            <span className="coding-tile-label">
                                {getCodingShortLabel(item.name)}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default ProfileCard;
