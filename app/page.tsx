import React from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileNav from '@/components/layout/MobileNav';
import DesktopNav from '@/components/layout/DesktopNav';
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
            {/* Theme Toggle (visible on all screens) */}
            <ThemeToggle />

            {/* Mobile Navigation (visible only on mobile/tablet) */}
            <MobileNav />

            {/* Desktop Navigation (visible only on desktop) */}
            <DesktopNav />

            {/* Main Content */}
            <main className="main-content">
                <section id="home" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Hero />
                        </MotionSection>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <About />
                        </MotionSection>
                    </div>
                </section>

                <section id="experience" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Experience />
                        </MotionSection>
                    </div>
                </section>

                <section id="skills" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Skills />
                        </MotionSection>
                    </div>
                </section>

                <section id="projects" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Projects />
                        </MotionSection>
                    </div>
                </section>

                <section id="education" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Education />
                        </MotionSection>
                    </div>
                </section>

                <section id="certificates" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Certificates />
                        </MotionSection>
                    </div>
                </section>

                <section id="publications" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Publications />
                        </MotionSection>
                    </div>
                </section>

                <section id="achievements" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Achievements />
                        </MotionSection>
                    </div>
                </section>

                <section id="youtube" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <YouTube />
                        </MotionSection>
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="section-container">
                        <MotionSection>
                            <Contact />
                        </MotionSection>
                    </div>
                </section>
            </main>
        </div>
    );
}
