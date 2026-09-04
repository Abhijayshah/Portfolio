'use client';

import React from 'react';
import { videos } from '@/lib/data/videos';
import { projects } from '@/lib/data/projects';
import { publications } from '@/lib/data/publications';
import { achievements } from '@/lib/data/achievements';
import { FiYoutube, FiFolder, FiBookOpen, FiAward, FiExternalLink, FiClock } from 'react-icons/fi';

interface LatestItem {
    type: 'video' | 'project' | 'publication' | 'achievement';
    badge: string;
    title: string;
    subtitle: string;
    dateOrTag: string;
    url: string;
    isExternal: boolean;
    icon: React.ReactNode;
}

export const LatestRail: React.FC = () => {
    // Dynamically get the most recent item from each category
    const latestVideo = videos[0];
    const latestProject = projects[0];
    const latestPublication = publications[0];
    const latestAchievement = achievements[0];

    const latestItems: LatestItem[] = [
        {
            type: 'video',
            badge: 'Latest Video',
            title: latestVideo ? latestVideo.title : 'New Tech Video',
            subtitle: (latestVideo && latestVideo.tag) ? latestVideo.tag : 'YouTube Release',
            dateOrTag: 'Recent Upload',
            url: latestVideo ? latestVideo.youtubeUrl : '#youtube',
            isExternal: true,
            icon: <FiYoutube className="latest-icon video-icon" aria-hidden="true" />,
        },
        {
            type: 'project',
            badge: 'New Project',
            title: latestProject ? latestProject.name : 'Production App',
            subtitle: (latestProject && (latestProject.tag || latestProject.category)) ? (latestProject.tag || latestProject.category) : 'Full-Stack System',
            dateOrTag: 'Production Ready',
            url: latestProject ? (latestProject.liveLink || latestProject.githubLink) : '#projects',
            isExternal: true,
            icon: <FiFolder className="latest-icon project-icon" aria-hidden="true" />,
        },
        {
            type: 'achievement',
            badge: 'Top Honor',
            title: latestAchievement ? latestAchievement.title : 'National Hackathon',
            subtitle: (latestAchievement && latestAchievement.organization) ? latestAchievement.organization : 'Award & Distinction',
            dateOrTag: (latestAchievement && latestAchievement.date) ? latestAchievement.date : '2026',
            url: (latestAchievement && latestAchievement.url) ? latestAchievement.url : '#achievements',
            isExternal: !!latestAchievement?.url,
            icon: <FiAward className="latest-icon achievement-icon" aria-hidden="true" />,
        },
        {
            type: 'publication',
            badge: 'Latest Book',
            title: latestPublication ? `${latestPublication.title}: ${latestPublication.subtitle}` : 'Published Playbook',
            subtitle: (latestPublication && latestPublication.platform) ? `${latestPublication.platform} Published` : 'Amazon KDP',
            dateOrTag: (latestPublication && latestPublication.publishedDate) ? latestPublication.publishedDate : '2025',
            url: (latestPublication && latestPublication.url) ? latestPublication.url : '#publications',
            isExternal: true,
            icon: <FiBookOpen className="latest-icon publication-icon" aria-hidden="true" />,
        },
    ];

    return (
        <aside className="latest-rail" aria-label="Latest Activity and Highlights">
            {/* Header */}
            <div className="latest-rail-header">
                <div className="rail-title-group">
                    <span className="live-beacon" aria-hidden="true">
                        <span className="beacon-ping" />
                        <span className="beacon-dot" />
                    </span>
                    <h3 className="latest-rail-title">Recent Activity</h3>
                </div>
                <span className="rail-subtitle">Live Highlights</span>
            </div>

            {/* Stack of Cards */}
            <div className="latest-cards-stack">
                {latestItems.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.url}
                        target={item.isExternal ? '_blank' : '_self'}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        className={`latest-card latest-card--${item.type}`}
                        aria-label={`${item.badge}: ${item.title}`}
                    >
                        <div className="latest-card-top">
                            <span className="latest-card-badge">
                                {item.icon}
                                {item.badge}
                            </span>
                            <span className="latest-card-date">
                                <FiClock aria-hidden="true" />
                                {item.dateOrTag}
                            </span>
                        </div>

                        <h4 className="latest-card-title">{item.title}</h4>
                        <p className="latest-card-meta">{item.subtitle}</p>

                        <div className="latest-card-action">
                            <span className="action-text">
                                {item.type === 'video' && 'Watch Video'}
                                {item.type === 'project' && 'View Live App'}
                                {item.type === 'achievement' && 'View Accolade'}
                                {item.type === 'publication' && 'View on Amazon'}
                            </span>
                            <FiExternalLink className="action-icon" aria-hidden="true" />
                        </div>
                    </a>
                ))}
            </div>
        </aside>
    );
};

export default LatestRail;
