import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Home.css';
import carRenderImg from "../assets/car-render.PNG";
import renderPreviewImg from '../assets/render-preview.png';

// Dynamically load all sponsor logos from asset folders
const allSponsorModules = {
  ...import.meta.glob('../assets/sponsors/principle-partners/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG}', { eager: true, as: 'url' }),
  ...import.meta.glob('../assets/sponsors/technical-partners/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG}', { eager: true, as: 'url' }),
  ...import.meta.glob('../assets/sponsors/industry-partners/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG}', { eager: true, as: 'url' }),
  ...import.meta.glob('../assets/sponsors/academic-support/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG}', { eager: true, as: 'url' }),
};
const allSponsorLogos = Object.values(allSponsorModules).map(mod => mod.default || mod);

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set correct value if loaded mid-scroll
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tiered opacities based on scroll position
  const maxScroll = typeof window !== 'undefined' ? window.innerHeight : 800;

  // 1. Dark Overlay: Keeps car visible longer, reaches max darkness further down
  const overlayOpacity = Math.min(scrollY / (maxScroll * 1.5), 0.95);

  // 2. Title: Appears as soon as user starts scrolling
  // Fades in from scroll 50px to 350px
  const titleOpacity = Math.min(Math.max((scrollY - 50) / 300, 0), 1);

  // 3. Subtitle & Actions: Appears significantly after the title
  // Fades in from scroll 650px to 950px (gives the title much more dedicated space)
  const contentOpacity = Math.min(Math.max((scrollY - 650) / 300, 0), 1);

  // 4. About Us: Appears as the Hero section scrolls up
  const aboutOpacity = Math.min(Math.max((scrollY - maxScroll + 200) / 300, 0), 1);

  return (
    <div className="home-container">
      {/* Fixed Sticky Background */}
      <div className="fixed-scene">
        <div className="car-container">
          <img 
            src={carRenderImg} 
            alt="Solar Car Render" 
            className="center-car-img" 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x500/0a0a0a/E59E58?text=Solar+Car'; }} 
          />
        </div>
        <div 
          className="dark-overlay"
          style={{ backgroundColor: `rgba(10, 10, 10, ${overlayOpacity})` }}
        ></div>
      </div>

      {/* Scrolling Content */}
      <div className="scrolling-content">
        
        {/* Placeholder spacer to allow scrolling before hero content appears */}
        <div className="initial-scroll-spacer"></div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-sticky-track">
            <div className="container hero-content">
              <h1 
                className="hero-title"
                style={{ opacity: titleOpacity, transform: `translateY(${20 - (titleOpacity * 20)}px)` }}
              >
                SUNY Korea Solar Team
              </h1>
              <div 
                className="hero-fade-content"
                style={{ opacity: contentOpacity, transform: `translateY(${20 - (contentOpacity * 20)}px)` }}
              >
                <p className="hero-subtitle">
                  We are a student-led international engineering team developing a solar race vehicle aimed at competing in the Bridgestone World Solar Challenge.
                </p>
                <div className="hero-actions">
                  <a href="/sponsors" className="btn btn-primary btn-orange">Sponsor</a>
                  <a href="/join" className="btn btn-outline btn-white">Join</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="content-panel transparent-panel">
          <div 
            className="container"
            style={{ opacity: aboutOpacity, transform: `translateY(${30 - (aboutOpacity * 30)}px)`, transition: 'none' }}
          >
            <h2 className="scroll-title">About Us</h2>
            <p className="scroll-paragraph">
              The SUNY Korea Solar Team is a student-led engineering team focused on designing and building solar-powered race vehicles. Bringing together students from multiple disciplines, the team works collaboratively to develop innovative solutions in aerodynamics, electrical systems, software, and mechanical design while gaining hands-on engineering experience.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="content-panel">
          <div className="container">
            <h2 className="scroll-title">Our Mission</h2>
            <p className="scroll-paragraph">
              Our mission is to advance student-driven innovation in sustainable transportation by developing a competitive solar racing vehicle and pursuing international competitions such as the Bridgestone World Solar Challenge. Through this effort, we aim to cultivate technical talent, foster collaboration with industry partners, and contribute to the future of solar mobility.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="content-panel stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-value">2029</span>
                <span className="stat-label">World Solar Challenge Target</span>
              </div>
              <div className="stat-card">
                <span className="stat-value stat-value-long">Challenger</span>
                <span className="stat-label">Class Focus</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">100%</span>
                <span className="stat-label">Student-Led Team</span>
              </div>
              <div className="stat-card">
                <span className="stat-value stat-value-long">Multidisciplinary</span>
                <span className="stat-label">Collaborative Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Car Preview */}
        <section className="content-panel img-section">
          <div className="container text-center">
            <h2 className="scroll-title">The Car</h2>
            <p className="scroll-paragraph mb-space">
              A high-efficiency solar-powered race vehicle designed for international competition. Engineered from the ground up for superior aerodynamic performance, lightweight structural integrity, and maximum electrical efficiency.
            </p>
            
            <div className="preview-image-container mb-space">
              <img 
                src={renderPreviewImg} 
                alt="Solar Car Render Preview" 
                className="preview-image"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/1000x500/0a0a0a/E59E58?text=Vehicle+Render'; }} 
              />
            </div>

            <a href="/car" className="btn btn-outline btn-white mt-space">
              View the Car <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Team / Disciplines Preview */}
        <section className="content-panel">
          <div className="container text-center">
            <h2 className="scroll-title">Team Disciplines</h2>
            <p className="scroll-paragraph mb-space">
              We operate as a structured organization with specialized sub-teams working together to form a multidisciplinary team.
            </p>
            <div className="disciplines-grid">
              <div className="discipline-tag">Mechanical</div>
              <div className="discipline-tag">Aerodynamics</div>
              <div className="discipline-tag">Electrical</div>
              <div className="discipline-tag">Software</div>
              <div className="discipline-tag">Operations</div>
              <div className="discipline-tag">Education</div>
              <div className="discipline-tag">Media</div>
            </div>
            <a href="/team" className="btn btn-outline btn-white mt-space">
              Meet the Team <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Education Program Preview */}
        <section className="content-panel">
          <div className="container text-center">
            <h2 className="scroll-title">Education Initiative</h2>
            <p className="scroll-paragraph mb-space">
              The team supports engineering education through outreach programs, workshops, and hands-on learning opportunities designed to introduce students and the broader community to engineering, renewable energy, and solar vehicle technology.
            </p>
            <a href="/education" className="btn btn-outline btn-white mt-space">
              Education Programs <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Sponsors Preview */}
        <section className="content-panel sponsors-preview-section">
          <div className="container text-center">
            <h2 className="scroll-title">Our Partners</h2>
            <p className="scroll-paragraph mb-space">
              We are actively building partnerships with forward-thinking companies interested in supporting student engineering, sustainable mobility innovation, and cultivating the next generation of technical leaders.
            </p>
            <div className="home-sponsor-logos mb-space">
              {allSponsorLogos.length > 0 ? (
                allSponsorLogos.map((src, i) => (
                  <div key={i} className="home-sponsor-card">
                    <img src={src} alt={`Partner ${i + 1}`} className="home-sponsor-logo" />
                  </div>
                ))
              ) : (
                <p className="scroll-paragraph">Sponsorship opportunities available.</p>
              )}
            </div>
            <a href="/sponsors" className="btn btn-outline btn-white mt-space">
              View All Sponsors <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="content-panel final-cta-section">
          <div className="container text-center">
            <h2 className="scroll-title">Get Involved</h2>
            <p className="scroll-paragraph mb-space">
              Join us in pushing the boundaries of sustainable technology or support our mission to build a world-class solar racing vehicle.
            </p>
            <div className="hero-actions flex-center mt-space">
              <a href="/contact" className="btn btn-primary btn-orange">Sponsor</a>
              <a href="/join" className="btn btn-outline btn-white">Join</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
