import React from 'react';

export interface WhatIBuildService {
    title: string;
    description: string;
}

export interface PersonalInfo {
    name: string;
    titles: string[];
    headline: string;
    subHeadline: string;
    about: string;
    status: string;
    roles?: string[];
    authorBio?: string;
    whatIBuild?: WhatIBuildService[];
}

export interface CaseStudy {
    problem: string;
    whatIBuilt: string;
    outcome: string;
}

export interface Project {
    id: number;
    name: string;
    category: string;
    tag: string;
    techStack: string[];
    description: string;
    features: string[];
    image: string;
    liveLink: string;
    videoLink: string;
    githubLink: string;
    caseStudy?: CaseStudy;
}

export interface SkillCategory {
    category: string;
    icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
    items: string[];
}

export interface ExperienceLinks {
    website?: string;
    github?: string;
    youtube?: string;
    instagram?: string;
}

export interface Experience {
    role: string;
    company: string;
    duration: string;
    type: string;
    description: string;
    achievements: string[];
    links?: ExperienceLinks;
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    duration: string;
    grade: string;
    details: string[];
}

export interface Certificate {
    name: string;
    date: string;
    description: string;
    link: string;
}

export interface SocialLinkItem {
    name: string;
    link: string;
    username?: string;
    category?: 'social' | 'coding';
}

export interface SocialLinks {
    socialMedia: SocialLinkItem[];
    codingProfiles: SocialLinkItem[];
    primary?: SocialLinkItem[];
}

export interface Publication {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    platform: string; // e.g. "Amazon KDP"
    url: string;
    coverImage?: string;
    publishedDate?: string;
    highlights?: string[];
}

export interface Achievement {
    id: number;
    title: string;
    organization?: string;
    description: string;
    date: string;
    badge?: string; // e.g. "National Semi-Finalist", "Participant", "Top Rank"
    category?: string; // e.g. "Hackathon", "Academic", "Recognition"
    url?: string;
}

export interface Video {
    id: string;
    title: string;
    videoId: string;
    youtubeUrl: string;
    description?: string;
    publishedDate?: string;
    tag?: string;
    channel?: string;
    thumbnailUrl?: string;
}
