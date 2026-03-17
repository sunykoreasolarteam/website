import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Car from './pages/Car';
import Contact from './pages/Contact';
import './App.css';
import logoImg from './assets/Home-Logo.png';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Scroll Restoration Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout
function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when navigating
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="nav-container container">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <img 
              src={logoImg} 
              alt="SUNY Korea Solar Team Logo" 
              className="nav-logo-icon"
            />
          </Link>
          
          {/* Mobile Toggle Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <div className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="nav-links">
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/sponsors" onClick={closeMenu}>Sponsors</Link>
              <Link to="/team" onClick={closeMenu}>Team</Link>
              <Link to="/car" onClick={closeMenu}>The Car</Link>
              <Link to="/history" onClick={closeMenu}>History</Link>
              <Link to="/education" onClick={closeMenu}>Education</Link>
              <Link to="/media" onClick={closeMenu}>Media</Link>
            </div>
            <div className="nav-actions">
              <Link to="/join" className="btn btn-secondary" onClick={closeMenu}>Join Us</Link>
              <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SUNY Korea Solar Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Placeholder Pages
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import History from './pages/History';
import Education from './pages/Education';
import Media from './pages/Media';

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/car" element={<Car />} />
          <Route path="/history" element={<History />} />
          <Route path="/education" element={<Education />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
