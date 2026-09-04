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

                    {/* Working Official YouTube Subscribe Embed */}
                    <div className="subscribe-actions">
                        <div className="yt-subscribe-embed-wrapper" title="Official YouTube Subscribe Button">
                            <iframe
                                src={`https://www.youtube.com/subscribe_embed?channelid=${youtubeChannelInfo.channelId}&layout=default&theme=default`}
                                title="Subscribe to Abhijay Shah on YouTube"
                                className="yt-subscribe-iframe"
                                loading="lazy"
                            />
                        </div>

                        {/* Direct Channel Fallback Button */}
                        <a
                            href={youtubeChannelInfo.channelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary btn--sm channel-cta-btn"
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
