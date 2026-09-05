'use client';

import React from 'react';

interface MotionSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

/**
 * High-performance section wrapper ensuring immediate, zero-delay rendering
 * across all portfolio sections (About, Experience, Skills, Projects, etc.)
 * Eliminates sluggish intersection observer freezes and opacity: 0 blank flashes.
 */
export const MotionSection: React.FC<MotionSectionProps> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`motion-section-instant ${className}`}>
            {children}
        </div>
    );
};

export default MotionSection;
