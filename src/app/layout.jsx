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
            <div className="container">
              <p>&copy; {new Date().getFullYear()} SUNY Korea Solar Team. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
