'use client';

import React from 'react';

interface StarProps {
    className?: string;
    style?: React.CSSProperties;
    size?: number;
}

const SparkleStar: React.FC<StarProps> = ({ className = '', style = {}, size = 24 }) => (
    <svg
        className={`sparkle-star ${className}`}
        style={{ ...style, width: size, height: size }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z"
            fill="url(#starGradient)"
        />
        <defs>
            <linearGradient id="starGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#fda4af" />
            </linearGradient>
        </defs>
    </svg>
);

export const CloudyBackground: React.FC = () => {
    return (
        <div className="cloudy-background-container" aria-hidden="true">
            {/* Ambient Blurred Cloudy Bubbles */}
            <div className="cloudy-bubble cloudy-bubble--1" />
            <div className="cloudy-bubble cloudy-bubble--2" />
            <div className="cloudy-bubble cloudy-bubble--3" />
            <div className="cloudy-bubble cloudy-bubble--4" />
            <div className="cloudy-bubble cloudy-bubble--5" />
            <div className="cloudy-bubble cloudy-bubble--6" />

            {/* Sparkling Decorative Stars in the Background */}
            <SparkleStar
                className="sparkle-star--1"
                size={22}
                style={{ top: '8%', right: '14%', animationDelay: '0s' }}
            />
            <SparkleStar
                className="sparkle-star--2"
                size={16}
                style={{ top: '14%', left: '10%', animationDelay: '1.2s' }}
            />
            <SparkleStar
                className="sparkle-star--3"
                size={26}
                style={{ top: '38%', right: '6%', animationDelay: '0.8s' }}
            />
            <SparkleStar
                className="sparkle-star--4"
                size={18}
                style={{ top: '52%', left: '5%', animationDelay: '2.4s' }}
            />
            <SparkleStar
                className="sparkle-star--5"
                size={24}
                style={{ top: '72%', right: '18%', animationDelay: '1.6s' }}
            />
            <SparkleStar
                className="sparkle-star--6"
                size={16}
                style={{ top: '85%', left: '16%', animationDelay: '0.4s' }}
            />
            <SparkleStar
                className="sparkle-star--7"
                size={20}
                style={{ top: '26%', right: '35%', animationDelay: '3.0s' }}
            />
            <SparkleStar
                className="sparkle-star--8"
                size={14}
                style={{ top: '64%', left: '42%', animationDelay: '2.0s' }}
            />
        </div>
    );
};

export default CloudyBackground;
