import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <div className="container education-container">
        
        {/* Hero Section */}
        <section className="education-hero-section">
          <h1 className="education-hero-title">Engineering the Future</h1>
          <p className="education-hero-subtitle">Empowering the next generation of innovators through hands-on learning.</p>
        </section>

        {/* Overview Section */}
        <section className="education-overview-section">
          <div className="section-aside">
            <h2 className="section-aside-heading">Education Initiative</h2>
          </div>
          <div className="section-content">
            <p className="education-intro-text">
              The SUNY Korea Solar Team is dedicated to advancing engineering education through comprehensive hands-on learning programs, technical workshops, and community outreach. We bridge the gap between theoretical coursework and real-world application, introducing students to sustainable mobility, high-performance vehicle design, and cutting-edge manufacturing processes.
            </p>
          </div>
        </section>

        {/* Programs List Section */}
        <section className="education-programs-section">
          <h2 className="section-heading">Our Core Programs</h2>
          <div className="programs-list">
            
            <div className="program-card-horizontal">
              <h3 className="program-title">Engineering Training</h3>
              <p className="program-desc">
                Comprehensive onboarding and continuous learning modules designed to build foundational engineering intuition, covering CAD, CFD, systems integration, and power electronics.
              </p>
            </div>

            <div className="program-card-horizontal">
              <h3 className="program-title">Fusion 360 Education</h3>
              <p className="program-desc">
                A structured internal curriculum focusing on parametric CAD design, digital prototyping, and simulation to equip members with industry-standard mechanical design tools.
              </p>
            </div>

            <div className="program-card-horizontal">
              <h3 className="program-title">STEM Outreach</h3>
              <p className="program-desc">
                Engaging with local schools and the broader community to inspire younger students, sparking an interest in STEM fields through interactive demonstrations and mentorship.
              </p>
            </div>

          </div>
        </section>

        {/* Detailed Sections */}
        <section className="education-details-section">
          
          <div className="detail-row">
            <div className="section-aside">
              <h3 className="section-aside-heading">Fusion 360 Education</h3>
            </div>
            <div className="section-content">
              <p className="detail-text">
                Our flagship internal training initiative is the Fusion 360 Education Program. We recognize that proficiency in Computer-Aided Design is non-negotiable for modern hardware engineering. Through a rigorous, multi-week curriculum, new team recruits are trained from the ground up in parametric modeling, generative design, and digital prototyping. This ensures that every member can conceptualize, test, and iterate on complex mechanical assemblies before physical manufacturing begins.
              </p>
            </div>
          </div>

          <div className="detail-row">
            <div className="section-aside">
              <h3 className="section-aside-heading">STEM Outreach</h3>
            </div>
            <div className="section-content">
              <p className="detail-text">
                Innovation extends beyond our garage. The SUNY Korea Solar Team is committed to working with local schools and the greater community to demystify engineering and renewable energy technologies. By showcasing our solar vehicle and discussing the physics, mathematics, and environmental science behind it, we aim to inspire the next generation to pursue careers in STEM and sustainable development.
              </p>
            </div>
          </div>

          <div className="detail-row">
            <div className="section-aside">
              <h3 className="section-aside-heading">Future Programs</h3>
            </div>
            <div className="section-content">
              <p className="detail-text">
                As the team matures and our internal infrastructure strengthens, we plan to significantly expand our educational footprint. Future initiatives include hosting high school engineering camps, publishing open-source vehicle design data for academic study, and establishing formal technical symposiums to share our research with peer universities.
              </p>
            </div>
          </div>

        </section>

        {/* CTA Contact Section */}
        <section className="education-cta-section">
          <div className="education-cta-box">
            <div className="education-cta-text-wrapper">
              <h2 className="education-cta-heading">Collaborate With Us</h2>
              <p className="education-cta-text">
                Are you an educator, student, or organization interested in partnering on our outreach initiatives, or looking to learn more about our engineering curriculum? We are always looking for new ways to support engineering education.
              </p>
            </div>
            <a href="mailto:education@sksolarteam.com" className="btn btn-primary education-cta-btn">
              education@sksolarteam.com
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Education;
