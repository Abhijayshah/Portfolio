import React from 'react';
import MobileNav from '@/components/layout/MobileNav';
import ProfileCard from '@/components/layout/ProfileCard';
import TopNav from '@/components/layout/TopNav';
import LatestRail from '@/components/layout/LatestRail';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certificates from '@/components/sections/Certificates';
import Publications from '@/components/sections/Publications';
import Achievements from '@/components/sections/Achievements';
import YouTube from '@/components/sections/YouTube';
import Contact from '@/components/sections/Contact';

import MotionSection from '@/components/ui/MotionSection';

export const dynamic = 'force-static';

export default function Home() {
    return (
        <div className="app">
            {/* Mobile Navigation (bottom bar on mobile phones) */}
            <MobileNav />

            {/* Three-Column Application Shell */}
            <div className="app-shell">
                {/* Left Fixed Column: Profile Sidebar */}
                <aside className="app-sidebar-left">
                    <ProfileCard />
                </aside>

                {/* Center Column: Independent Scroll Container */}
                <main className="app-content-center" id="center-scroll-container">
                    {/* Sticky Top Horizontal Navigation Pill Bar */}
                    <TopNav scrollContainerId="center-scroll-container" />

                    <div className="portfolio-sections">
                        {/* Invisible anchor target for backwards compatibility */}
                        <div id="home" style={{ position: 'relative', top: '-60px' }} />

                        {/* About / Overview Section */}
                        <section id="about" className="section-card">
                            <MotionSection>
                                <Hero />
                                <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                    <About />
                                </div>
                            </MotionSection>
                        </section>

                        {/* Experience Section */}
                        <section id="experience" className="section-card">
                            <MotionSection>
                                <Experience />
                            </MotionSection>
                        </section>

                        {/* Skills Section */}
                        <section id="skills" className="section-card">
                            <MotionSection>
                                <Skills />
                            </MotionSection>
                        </section>

                        {/* Projects Section */}
                        <section id="projects" className="section-card">
                            <MotionSection>
                                <Projects />
                            </MotionSection>
                        </section>

                        {/* Education Section */}
                        <section id="education" className="section-card">
                            <MotionSection>
                                <Education />
                            </MotionSection>
                        </section>

                        {/* Certificates Section */}
                        <section id="certificates" className="section-card">
                            <MotionSection>
                                <Certificates />
                            </MotionSection>
                        </section>

                        {/* Publications Section */}
                        <section id="publications" className="section-card">
                            <MotionSection>
                                <Publications />
                            </MotionSection>
                        </section>

                        {/* Achievements Section */}
                        <section id="achievements" className="section-card">
                            <MotionSection>
                                <Achievements />
                            </MotionSection>
                        </section>

                        {/* YouTube Section */}
                        <section id="youtube" className="section-card">
                            <MotionSection>
                                <YouTube />
                            </MotionSection>
                        </section>

                        {/* Contact Section */}
                        <section id="contact" className="section-card">
                            <MotionSection>
                                <Contact />
                            </MotionSection>
                        </section>
                    </div>
                </main>

                {/* Right Fixed Column: Latest Activity Rail */}
                <aside className="app-rail-right">
                    <LatestRail />
                </aside>
            </div>
        </div>
    );
}
