'use client';

import React, { useState } from 'react';
import {
    FiGlobe,
    FiActivity,
    FiShoppingCart,
    FiCpu,
    FiPlay,
    FiPause,
    FiArrowRight,
    FiArrowLeft,
    FiCheckCircle,
} from 'react-icons/fi';

export interface SystemItem {
    id: string;
    title: string;
    description: string;
    badge: string;
    icon: React.ReactNode;
    techPills: string[];
    highlightMetric: string;
}

export const systemsShipped: SystemItem[] = [
    {
        id: 'web-platforms',
        title: 'Production Web Platforms',
        description:
            'High-performance, accessible web applications built with Next.js, React, TypeScript, and modern responsive design systems.',
        badge: 'Full-Stack Web',
        icon: <FiGlobe aria-hidden="true" />,
        techPills: ['Next.js', 'React', 'TypeScript', 'Tailwind/SCSS'],
        highlightMetric: 'Sub-Second TTFB • 100 Lighthouse',
    },
    {
        id: 'healthcare-booking',
        title: 'Healthcare & Booking Systems',
        description:
            'Real-time queuing engines, appointment workflows, sub-50ms WebSocket synchronization, and automated SMS/payment integrations.',
        badge: 'Mission-Critical Healthcare',
        icon: <FiActivity aria-hidden="true" />,
        techPills: ['PostgreSQL', 'Supabase', 'WebSockets', 'SMS/Payment'],
        highlightMetric: '65% Wait Reduction • Sub-50ms Sync',
    },
    {
        id: 'retail-pos',
        title: 'Retail & POS Commerce',
        description:
            'Fast-checkout point-of-sale systems with offline-first caching, SKU barcode searching, and automated inventory sync.',
        badge: 'Retail & POS Commerce',
        icon: <FiShoppingCart aria-hidden="true" />,
        techPills: ['Offline Cache', 'Barcode Scan', 'Thermal Print', 'Inventory'],
        highlightMetric: '100% Offline-First • Multi-Register',
    },
    {
        id: 'ai-automation',
        title: 'AI-Assisted & Automation Tools',
        description:
            'Multi-model LLM orchestration (OpenAI, Claude, Gemini) and n8n workflow automations that eliminate operational manual toil.',
        badge: 'Applied GenAI & Automation',
        icon: <FiCpu aria-hidden="true" />,
        techPills: ['Gemini Live', 'Claude', 'OpenAI', 'n8n Automations'],
        highlightMetric: 'Autonomous Agents • Zero Toil',
    },
];

export const WhatIBuildCarousel: React.FC = () => {
    // Default scroll direction is left-to-right as explicitly requested by user
    const [scrollDirection, setScrollDirection] = useState<'left-to-right' | 'right-to-left'>('left-to-right');
    const [isPaused, setIsPaused] = useState(false);

    const toggleDirection = () => {
        setScrollDirection((prev) => (prev === 'left-to-right' ? 'right-to-left' : 'left-to-right'));
    };

    const renderCard = (system: SystemItem, prefix: string, isDuplicate = false) => {
        const uniqueKey = `${prefix}-${system.id}`;
        return (
            <div
                key={uniqueKey}
                className="system-ship-card"
                role="article"
                aria-label={isDuplicate ? undefined : system.title}
                tabIndex={isDuplicate ? -1 : 0}
            >
                {/* Top Badge & Icon */}
                <div className="system-card-topbar">
                    <div className="system-icon-wrapper">
                        {system.icon}
                    </div>
                    <span className="system-badge">{system.badge}</span>
                </div>

                {/* Title */}
                <h4 className="system-card-title">{system.title}</h4>

                {/* Description */}
                <p className="system-card-desc">{system.description}</p>

                {/* Tech Pills */}
                <div className="system-tech-row" aria-label="Key Technologies">
                    {system.techPills.map((pill, idx) => (
                        <span key={idx} className="system-tech-pill">
                            {pill}
                        </span>
                    ))}
                </div>

                {/* Metric Footer */}
                <div className="system-card-footer">
                    <FiCheckCircle className="metric-icon" aria-hidden="true" />
                    <span className="metric-text">{system.highlightMetric}</span>
                </div>
            </div>
        );
    };

    return (
        <section className="what-i-build-section" aria-label="What I Build and Systems I Ship">
            {/* Header with Title and Marquee Controls */}
            <div className="what-i-build-header">
                <div className="what-i-build-title-box">
                    <h3 className="what-i-build-title">What I Build & Systems I Ship</h3>
                    <p className="what-i-build-subtitle">
                        Production-proven software architectures engineered for high throughput, offline reliability, and intelligent automation.
                    </p>
                </div>

                {/* Interactive Controls (Direction Toggle + Pause/Play) */}
                <div className="what-i-build-controls" role="group" aria-label="Systems Marquee Controls">
                    <button
                        type="button"
                        className="marquee-control-btn"
                        onClick={toggleDirection}
                        aria-label={`Switch scroll direction to ${scrollDirection === 'left-to-right' ? 'right-to-left' : 'left-to-right'}`}
                        title={scrollDirection === 'left-to-right' ? 'Switch to Right-to-Left' : 'Switch to Left-to-Right'}
                    >
                        {scrollDirection === 'left-to-right' ? (
                            <>
                                <FiArrowRight aria-hidden="true" />
                                <span className="control-label">Left to Right</span>
                            </>
                        ) : (
                            <>
                                <FiArrowLeft aria-hidden="true" />
                                <span className="control-label">Right to Left</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        className="marquee-control-btn marquee-pause-btn"
                        onClick={() => setIsPaused((prev) => !prev)}
                        aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                        title={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
                    >
                        {isPaused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Continuous Infinite Auto-Scrolling Marquee Track */}
            <div
                className="what-i-build-track-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className={`what-i-build-track direction-${scrollDirection === 'left-to-right' ? 'ltr' : 'rtl'} ${
                        isPaused ? 'paused' : ''
                    }`}
                >
                    {/* Primary Set */}
                    <div className="marquee-group">
                        {systemsShipped.map((system) => renderCard(system, 'prim'))}
                    </div>
                    {/* Duplicated Set for Seamless Continuous Infinite Loop */}
                    <div className="marquee-group" aria-hidden="true">
                        {systemsShipped.map((system) => renderCard(system, 'dup', true))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIBuildCarousel;
