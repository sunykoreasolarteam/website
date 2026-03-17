import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Car from './pages/Car';
import Contact from './pages/Contact';
import './App.css';
import logoImg from './assets/Home-Logo.png';
import { Link } from 'react-router-dom';

// Layout
function Layout({ children }) {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="nav-container container">
          <Link to="/" className="nav-brand">
            <img 
              src={logoImg} 
              alt="SUNY Korea Solar Team Logo" 
              className="nav-logo-icon"
            />
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/team">Team</Link>
            <Link to="/car">The Car</Link>
            <Link to="/history">History</Link>
            <Link to="/education">Education</Link>
            <Link to="/media">Media</Link>
          </div>
          <div className="nav-actions">
            <Link to="/join" className="btn btn-secondary">Join Us</Link>
            <Link to="/contact" className="btn btn-primary">Contact</Link>
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
