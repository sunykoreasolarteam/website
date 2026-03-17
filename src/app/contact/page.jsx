import { Mail, Briefcase, Users, BookOpen, Instagram, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import './Contact.css';

export const metadata = {
  title: 'Contact Us | SUNY Korea Solar Team',
  description: 'Reach out for general inquiries, sponsorship opportunities, or education initiatives.',
};

export default function Contact() {
  return (
    <div className="contact-page container">
      <header className="contact-header">
        <h1 className="contact-title">Contact <span className="text-accent">Us</span></h1>
        <p className="contact-intro">
          Reach out to the SUNY Korea Solar Team for general inquiries, sponsorship opportunities, membership applications, or education initiatives.
        </p>
      </header>

      <section className="contact-cards-section">
        <div className="contact-grid">
          {/* General Inquiries */}
          <a href="mailto:contact@sksolarteam.com" className="contact-card">
            <div className="card-icon-wrapper">
              <Mail className="contact-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">General Inquiries</h3>
              <p className="card-desc">For media requests, general questions, and other inquiries.</p>
              <span className="card-email">contact@sksolarteam.com</span>
            </div>
            <ArrowUpRight className="card-arrow" />
          </a>

          {/* Sponsorship */}
          <a href="mailto:sponsor@sksolarteam.com" className="contact-card">
            <div className="card-icon-wrapper">
              <Briefcase className="contact-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Sponsorship</h3>
              <p className="card-desc">Partner with us to support sustainable engineering and innovation.</p>
              <span className="card-email">sponsor@sksolarteam.com</span>
            </div>
            <ArrowUpRight className="card-arrow" />
          </a>

          {/* Join the Team */}
          <a href="mailto:apply@sksolarteam.com" className="contact-card">
            <div className="card-icon-wrapper">
              <Users className="contact-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Join the Team</h3>
              <p className="card-desc">Reach out if you have questions about recruitment and applications.</p>
              <span className="card-email">apply@sksolarteam.com</span>
            </div>
            <ArrowUpRight className="card-arrow" />
          </a>

          {/* Education Programs */}
          <a href="mailto:education@sksolarteam.com" className="contact-card">
            <div className="card-icon-wrapper">
              <BookOpen className="contact-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Education Programs</h3>
              <p className="card-desc">Inquire about our community outreach and educational workshops.</p>
              <span className="card-email">education@sksolarteam.com</span>
            </div>
            <ArrowUpRight className="card-arrow" />
          </a>
        </div>
      </section>

      <section className="social-section">
        <h2 className="social-title">Follow the Team</h2>
        <div className="social-links">
          <a href="https://instagram.com/sksolarteam" target="_blank" rel="noopener noreferrer" className="social-link">
            <Instagram size={24} />
            <span>@sksolarteam</span>
          </a>
          <a href="https://www.linkedin.com/company/sksolarteam" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
        
        <div className="location-info">
          <MapPin size={20} className="location-icon" />
          <p>SUNY Korea, Incheon Global Campus, Incheon, Republic of Korea</p>
        </div>
      </section>
    </div>
  );
}
