import './Team.css';

export const metadata = {
  title: 'Our Team | SUNY Korea Solar Team',
  description: 'Meet the multidisciplinary student engineers designing and building our solar racing vehicle.',
};

export default function Team() {
  return (
    <div className="team-page">
      <div className="container team-container">
        <h1 className="team-page-title">Our Team</h1>
        <div className="team-placeholder-box">
          <p className="team-placeholder-text">
            This section is yet to be made. We will update the website further in the future.
          </p>
        </div>
      </div>
    </div>
  );
}
