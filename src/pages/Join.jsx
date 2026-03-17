import React from 'react';
import './Join.css';
import { Settings, Wind, Zap, Terminal, Briefcase, BookOpen, Camera, Hammer, Users, Lightbulb, ArrowRight, Globe } from 'lucide-react';

const Join = () => {
  return (
    <div className="join-page container">
      <header className="join-header">
        <h1 className="join-title">Join the <span className="text-accent">Team</span></h1>
        <p className="join-intro">
          The SUNY Korea Solar Team is a student-led engineering project where students collaborate to design and develop a solar-powered race vehicle. Gain unmatched hands-on experience in engineering, leadership, and project development while pushing the boundaries of sustainable technology.
        </p>
      </header>

      <div className="join-apply-top">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYRD0YPhVTxiorHxqPAcVbtNxGtTL32re6mpRmPi-IbxgWyA/viewform?usp=sharing&ouid=108327334141436215470" target="_blank" rel="noopener noreferrer" className="btn btn-primary accent btn-cta">
          Apply Now <ArrowRight size={20} />
        </a>
      </div>

      <section>
        <h2 className="section-title">Why Join?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <Hammer className="benefit-icon" />
            <h3 className="benefit-title">Hands-On Experience</h3>
            <p className="benefit-desc">Apply theoretical knowledge to real-world engineering problems by building a physical, high-performance solar race vehicle.</p>
          </div>
          <div className="benefit-card">
            <Users className="benefit-icon" />
            <h3 className="benefit-title">Interdisciplinary Collaboration</h3>
            <p className="benefit-desc">Work closely with passionate students across mechanical, electrical, software, and business disciplines.</p>
          </div>
          <div className="benefit-card">
            <Lightbulb className="benefit-icon" />
            <h3 className="benefit-title">Industry Connections</h3>
            <p className="benefit-desc">Engage directly with industry partners, sponsors, and engineering professionals throughout the project lifecycle.</p>
          </div>
          <div className="benefit-card">
            <Globe className="benefit-icon" />
            <h3 className="benefit-title">International Competition</h3>
            <p className="benefit-desc">Contribute to the development of a solar race vehicle aimed at competing in international events such as the Bridgestone World Solar Challenge.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Our Sub-Teams</h2>
        <div className="teams-grid">
          <div className="team-card">
            <h3 className="team-title"><Settings size={24} className="text-accent" /> Mechanical</h3>
            <p className="team-desc">Design and manufacture the chassis, suspension, steering, and braking systems, ensuring structural integrity and safety.</p>
          </div>
          <div className="team-card">
            <h3 className="team-title"><Wind size={24} className="text-accent" /> Aerodynamics</h3>
            <p className="team-desc">Optimize the vehicle's exterior shape using CFD to minimize drag and maximize efficiency during high-speed travel.</p>
          </div>
          <div className="team-card">
            <h3 className="team-title"><Zap size={24} className="text-accent" /> Electrical</h3>
            <p className="team-desc">Develop the solar array, battery management system (BMS), motor controllers, and power distribution network.</p>
          </div>
          <div className="team-card">
            <h3 className="team-title"><Terminal size={24} className="text-accent" /> Software</h3>
            <p className="team-desc">Build telemetry systems, real-time data visualization dashboards, and race strategy optimization algorithms.</p>
          </div>
          <div className="team-card">
            <h3 className="team-title"><Briefcase size={24} className="text-accent" /> Operations</h3>
            <p className="team-desc">Manage project budgets, secure corporate sponsorships, handle logistics, and oversee team marketing campaigns.</p>
          </div>
          <div className="team-card">
            <h3 className="team-title"><BookOpen size={24} className="text-accent" /> Education</h3>
            <p className="team-desc">Develop curriculum and outreach programs to share our knowledge of renewable energy with the wider community.</p>
          </div>
          <div className="team-card">
            <h3 className="team-title"><Camera size={24} className="text-accent" /> Media</h3>
            <p className="team-desc">Document the team's journey through photography, videography, and social media management.</p>
          </div>
        </div>
      </section>

      <section className="content-block">
        <h2 className="section-title">Who Should Apply & Expectations</h2>
        <p>
          We welcome students from <strong>all academic backgrounds and experience levels</strong>. Prior technical experience is not required to join—motivation, dedication, and a strong interest in learning about engineering, teamwork, and sustainable technology are the most important qualities we look for.
        </p>
        <p>
          As a member of the SUNY Korea Solar Team, you will be expected to commit to weekly team meetings, actively participate in your sub-team's development goals, and demonstrate a willingness to learn and collaborate. Building a solar car to compete in the Bridgestone World Solar Challenge requires immense dedication, but the reward is unparalleled.
        </p>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">How to Join</h2>
        <p className="cta-desc">
          Ready to be part of the future of solar mobility? Applications are currently open. Click below to fill out our interest form and start your journey with the team.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYRD0YPhVTxiorHxqPAcVbtNxGtTL32re6mpRmPi-IbxgWyA/viewform?usp=sharing&ouid=108327334141436215470" target="_blank" rel="noopener noreferrer" className="btn btn-primary accent btn-cta">
          Apply to Join <ArrowRight size={24} />
        </a>
      </section>
    </div>
  );
};

export default Join;
