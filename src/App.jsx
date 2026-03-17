import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Car from './pages/Car';
import Contact from './pages/Contact';
import './App.css';

// Layout
function Layout({ children }) {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="nav-container container">
          <a href="/" className="nav-brand">
            <img 
              src="/src/assets/Home-Logo.png" 
              alt="SUNY Korea Solar Team Logo" 
              className="nav-logo-icon"
            />
          </a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/sponsors">Sponsors</a>
            <a href="/team">Team</a>
            <a href="/car">The Car</a>
            <a href="/history">History</a>
            <a href="/education">Education</a>
            <a href="/media">Media</a>
          </div>
          <div className="nav-actions">
            <a href="/join" className="btn btn-secondary">Join Us</a>
            <a href="/contact" className="btn btn-primary">Contact</a>
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
  );
}

export default App;
