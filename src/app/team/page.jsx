import './Team.css';
import { getMembersBySection } from '../../data/teamData';
import TeamCard from '../../components/TeamCard';

export const metadata = {
  title: 'Our Team | SUNY Korea Solar Team',
  description:
    'Meet the multidisciplinary student engineers designing and building our solar racing vehicle.',
};

export default function Team() {
  const executive = getMembersBySection('executive');
  const subteam = getMembersBySection('subteam');

  return (
    <main className="team-page">
      <div className="container">
        <header className="team-header">
          <h1 className="team-page-title">The Team</h1>
          <p className="team-page-subtitle">The people behind the mission.</p>
        </header>

        <section className="team-section" aria-label="Executive Team">
          <h2 className="team-section-label">Executive Team</h2>
          <div className="leadership-grid">
            {executive.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <hr className="team-divider" />

        <section className="team-section" aria-label="Sub-Team Leads">
          <h2 className="team-section-label">Sub-Team Leads</h2>
          <div className="subteam-grid">
            {subteam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
