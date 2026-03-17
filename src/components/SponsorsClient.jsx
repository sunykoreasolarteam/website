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
  return (
    <div className="sponsor-category">
      <h3 className="sponsor-category-title">{title}</h3>
      {logos.length > 0 ? (
        <div className="sponsor-grid">
          {logos.map((src, index) => (
            <SponsorCard key={index} src={src} title={title} index={index} />
          ))}
        </div>
      ) : (
        <div className="sponsor-empty-state">
          <div className="empty-state-dot"></div>
          <p>Searching for partners to join our mission</p>
        </div>
      )}
    </div>
  );
};

const SponsorsClient = ({ principleLogos, technicalLogos, industryLogos, academicLogos }) => {
  return (
    <div className="sponsors-page">
      <div className="container sponsors-container">
        
        <section className="sponsors-hero-section">
          <h1 className="sponsors-hero-title">Driving Forward Together</h1>
          <p className="sponsors-hero-subtitle">Engineering the future of sustainable mobility, empowered by our dedicated partners.</p>
        </section>

        <section className="sponsors-intro-section">
          <h2 className="section-heading">Our Partners</h2>
          <p className="sponsors-intro-text">
            The SUNY Korea Solar Team respectfully acknowledges the vital organizations and institutions that make this project a reality. Through their generous technical guidance, material support, and financial backing, these strategic partnerships allow our student engineers to translate bold conceptual designs into fully realized, competition-ready solar vehicles.
          </p>
        </section>

        <section className="sponsors-grids-section">
          <SponsorCategory title="Principle Partners" logos={principleLogos} />
          <SponsorCategory title="Technical Partners" logos={technicalLogos} />
          <SponsorCategory title="Industry Partners" logos={industryLogos} />
          <SponsorCategory title="Academic Support" logos={academicLogos} />
        </section>

        <section className="sponsors-cta-section">
          <div className="sponsors-cta-box">
            <h2 className="sponsors-cta-heading">Join Our Mission</h2>
            <p className="sponsors-cta-text">
              We welcome partnerships with organizations passionate about supporting student-led engineering, advancing sustainable mobility, and investing in the next generation of technical innovators. Collaborate with us and become a crucial part of our journey to the Bridgestone World Solar Challenge.
            </p>
            <Link href="/contact" className="btn btn-primary sponsors-cta-btn">
              Become a Sponsor
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SponsorsClient;
