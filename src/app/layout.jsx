import './globals.css';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'SUNY Korea Solar Team | Multidisciplinary Student Engineering',
  description: 'The standard-bearer for student engineering at SUNY Korea. We design, build, and race solar-powered vehicles, bringing together engineering, business, and tech.',
  keywords: 'SUNY Korea, Solar Team, Solar Car, Engineering, Student Team, Vehicle Design',
  openGraph: {
    title: 'SUNY Korea Solar Team',
    description: 'Designing and building solar-powered vehicles for global competition.',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Navigation />
          <main className="main-content">
            {children}
          </main>
          <footer className="footer">
            <div className="container footer-content">
              <div className="footer-group footer-org">
                <h4>SUNY Korea Solar Team</h4>
                <address className="footer-address">
                  <p>Based in Songdo, Incheon, Republic of Korea – SUNY Korea</p>
                </address>
                <p className="footer-text">We’d love to hear from you. Whether it’s a question, collaboration, or idea, feel free to reach out we’ll get back to you as soon as possible.</p>
              </div>

              <div className="footer-links">
                <nav className="footer-group" aria-label="Contact links">
                  <h4>Contact</h4>
                  <ul>
                    <li><a href="mailto:contact@sksolarteam.com">contact@sksolarteam.com</a></li>
                    <li><a href="mailto:sponsor@sksolarteam.com">sponsor@sksolarteam.com</a></li>
                    <li><a href="mailto:apply@sksolarteam.com">apply@sksolarteam.com</a></li>
                    <li><a href="mailto:education@sksolarteam.com">education@sksolarteam.com</a></li>
                  </ul>
                </nav>

                <nav className="footer-group" aria-label="Social links">
                  <h4>Social</h4>
                  <ul>
                    <li><a href="https://instagram.com/sksolarteam" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/sksolarteam" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            
            <div className="container">
              <div className="footer-bottom">
                <p>&copy; 2026 SUNY Korea Solar Team. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
