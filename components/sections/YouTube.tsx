import React from 'react';
import { videos, youtubeChannelInfo } from '@/lib/data/videos';
import YouTubeCarousel from '@/components/ui/YouTubeCarousel';
import { FaYoutube } from 'react-icons/fa';
import { FiExternalLink, FiRadio } from 'react-icons/fi';

export const YouTube: React.FC = () => {
    return (
        <div className="youtube-content">
            {/* Top Stream Pill Badge */}
            <div className="stream-badge-container">
                <span className="live-stream-pill">
                    <FiRadio className="radio-icon" aria-hidden="true" />
                    <span>Tech Guides & Architecture Breakdowns (Watch & Learn)</span>
                </span>
            </div>

            {/* Main Section Header */}
            <div className="youtube-section-header">
                <div className="main-title">
                    <h2>Official <span>YouTube Channel</span></h2>
                    <span className="bg-text" aria-hidden="true">VIDEOS</span>
                </div>

                <p className="youtube-subtitle">
                    Production software walkthroughs, full-stack systems, iOS development with SwiftUI,
                    and practical engineering workflows:
                </p>

                {/* Prominent Subscribe Bar */}
                <div className="youtube-subscribe-bar">
                    <div className="subscribe-info">
                        <div className="yt-avatar-box">
                            <FaYoutube className="yt-big-icon" aria-hidden="true" />
                        </div>
                        <div className="channel-text">
                            <span className="channel-title">{youtubeChannelInfo.channelName}</span>
                            <span className="channel-handle">{youtubeChannelInfo.handle}</span>
                        </div>
                    </div>

                    <div className="subscribe-actions">
                        {/* Direct High-Performance Official YouTube Subscribe Button */}
                        <a
                            href={`${youtubeChannelInfo.channelUrl}?sub_confirmation=1`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary btn--sm yt-subscribe-direct-btn"
                            aria-label="Subscribe to Abhijay Shah on YouTube"
                            style={{
                                backgroundColor: '#cc0000',
                                borderColor: '#cc0000',
                                color: '#ffffff',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                fontWeight: 600,
                                borderRadius: '24px',
                                padding: '0.45rem 1.1rem',
                                boxShadow: '0 4px 14px rgba(204, 0, 0, 0.4)'
                            }}
                        >
                            <FaYoutube aria-hidden="true" style={{ fontSize: '1.15rem' }} />
                            <span>Subscribe</span>
                        </a>

                        {/* Direct Channel Fallback Button */}
                        <a
                            href={youtubeChannelInfo.channelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--secondary btn--sm channel-cta-btn"
                            aria-label="View all videos on official YouTube Channel"
                        >
                            <FaYoutube aria-hidden="true" />
                            <span>View All on YouTube</span>
                            <FiExternalLink aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Interactive Moving Video Carousel & Modal Playback */}
            <YouTubeCarousel videos={videos} />
        </div>
    );
};

export default YouTube;
