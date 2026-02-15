import { ThemeProvider } from './context/ThemeContext';
import MobileNav from './components/layout/MobileNav';
import DesktopNav from './components/layout/DesktopNav';
import ThemeToggle from './components/ui/ThemeToggle';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import './styles/global.scss';

function App() {
  return (
    <ThemeProvider>
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
              <Hero />
            </div>
          </section>

          <section id="about" className="section">
            <div className="section-container">
              <About />
            </div>
          </section>

          <section id="skills" className="section">
            <div className="section-container">
              <Skills />
            </div>
          </section>

          <section id="experience" className="section">
            <div className="section-container">
              <Experience />
            </div>
          </section>

          <section id="projects" className="section">
            <div className="section-container">
              <Projects />
            </div>
          </section>

          <section id="education" className="section">
            <div className="section-container">
              <Education />
            </div>
          </section>

          <section id="certificates" className="section">
            <div className="section-container">
              <Certificates />
            </div>
          </section>

          <section id="contact" className="section">
            <div className="section-container">
              <Contact />
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
