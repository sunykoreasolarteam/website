"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container container">
        <Link href="/" className="nav-brand" onClick={closeMenu}>
          <img 
            src="/assets/Home-Logo.png" 
            alt="SUNY Korea Solar Team Logo" 
            className="nav-logo-icon"
          />
        </Link>
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-links">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/sponsors" onClick={closeMenu}>Sponsors</Link>
            <Link href="/team" onClick={closeMenu}>Team</Link>
            <Link href="/car" onClick={closeMenu}>The Car</Link>
            <Link href="/history" onClick={closeMenu}>History</Link>
            <Link href="/education" onClick={closeMenu}>Education</Link>
            <Link href="/media" onClick={closeMenu}>Media</Link>
          </div>
          <div className="nav-actions">
            <Link href="/join" className="btn btn-secondary" onClick={closeMenu}>Join Us</Link>
            <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
