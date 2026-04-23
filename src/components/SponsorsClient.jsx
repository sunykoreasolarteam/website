"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../app/sponsors/Sponsors.css';

const SponsorCard = ({ src, title, index }) => {
  const [description, setDescription] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetch(src)
      .then(res => res.text())
      .then(text => {
        const match = text.match(/<exif:UserComment>[\s\S]*?<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>/);
        if (match && match[1]) {
          setDescription(match[1].replace(/&#xA;/g, '\n').trim());
        }
      })
      .catch(err => console.error("Could not parse image metadata:", err));
  }, [src]);

  const handleCardClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`sponsor-card ${isExpanded ? 'expanded' : ''} ${description ? 'has-description' : ''}`}
      onClick={handleCardClick}
      title={description ? "Click to learn more" : ""}
    >
      <div className="sponsor-logo-wrapper">
        <img src={src} alt={`${title} Sponsor ${index + 1}`} className="sponsor-logo" />
      </div>
      {isExpanded && description && (
        <div className="sponsor-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const SponsorCategory = ({ title, logos }) => {
  if (!logos || logos.length === 0) return null;

  return (
    <div className="sponsor-category">
      <h3 className="sponsor-category-title">{title}</h3>
      <div className="sponsor-grid">
        {logos.map((src, index) => (
          <SponsorCard key={index} src={src} title={title} index={index} />
        ))}
      </div>
    </div>
  );
};

const SponsorsClient = ({ titleLogos, foundingLogos, goldLogos, silverLogos, bronzeLogos }) => {
  return (
    <div className="sponsors-page">
      <div className="container sponsors-container">
        
        <section className="sponsors-hero-section">
          <h1 className="sponsors-hero-title">Driving the Future</h1>
          <p className="sponsors-hero-text">
            We partner with visionary organizations passionate about advancing sustainable mobility and student-led engineering. Explore our partnership opportunities.
          </p>
          <div className="sponsors-cta-buttons" style={{marginTop: 'var(--space-8)'}}>
            <a
              href="/assets/Sponsorship-Packet/SUNY_Korea_Solar_Team_Sponsorship_Packet_2026SpringVer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary sponsors-cta-btn"
              aria-label="Download Sponsorship Packet"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{marginRight: '8px'}}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Sponsorship Packet (PDF)
            </a>
            <Link href="/contact" className="btn sponsors-download-btn sponsors-cta-btn">
              Contact Us
            </Link>
          </div>
        </section>

        <section className="sponsors-gallery-section">
          <h2 className="section-heading text-center" style={{marginBottom: 'var(--space-10)', fontFamily: 'var(--font-display)', fontSize: '2.5rem', textAlign: 'center'}}>Our Proud Partners</h2>
          <div className="sponsors-grids-section">
            <SponsorCategory title="Title Partner" logos={titleLogos} />
            <SponsorCategory title="Founding Partner" logos={foundingLogos} />
            <SponsorCategory title="Gold Partner" logos={goldLogos} />
            <SponsorCategory title="Silver Partner" logos={silverLogos} />
            <SponsorCategory title="Bronze Partner" logos={bronzeLogos} />
          </div>
        </section>

      </div>
    </div>
  );
};

export default SponsorsClient;
