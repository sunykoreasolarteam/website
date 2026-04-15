import './Team.css';

export const metadata = {
  title: 'Our Team | SUNY Korea Solar Team',
  description: 'Meet the multidisciplinary student engineers designing and building our solar racing vehicle.',
};

const leadership = [
  {
    id: 'team-manager',
    role: 'Team Manager',
    name: 'Name TBD',
    department: 'Department TBD',
    photoMain: '/assets/team/placeholder-main.svg',
    photoAlt: '/assets/team/placeholder-alt.svg',
  },
  {
    id: 'team-vice-manager',
    role: 'Team Vice Manager',
    name: 'Name TBD',
    department: 'Department TBD',
    photoMain: '/assets/team/placeholder-main.svg',
    photoAlt: '/assets/team/placeholder-alt.svg',
  },
  {
    id: 'team-treasurer',
    role: 'Team Treasurer',
    name: 'Name TBD',
    department: 'Department TBD',
    photoMain: '/assets/team/placeholder-main.svg',
    photoAlt: '/assets/team/placeholder-alt.svg',
  },
];

export default function Team() {
  return (
    <main className="team-page">
      <div className="container">
        <header className="team-header">
          <h1 className="team-page-title">The Team</h1>
          <p className="team-page-subtitle">
            The people behind the mission.
          </p>
        </header>

        <section className="team-leadership" aria-label="Team Leadership">
          <h2 className="team-section-label">Leadership</h2>
          <div className="leadership-grid">
            {leadership.map((member) => (
              <article key={member.id} className="leader-card" id={member.id}>
                <figure className="leader-photo-wrapper">
                  <img
                    src={member.photoMain}
                    alt={`${member.name} — ${member.role}`}
                    className="leader-photo leader-photo--main"
                    loading="lazy"
                    width={320}
                    height={400}
                  />
                  <img
                    src={member.photoAlt}
                    alt={`${member.name} — alternate photo`}
                    className="leader-photo leader-photo--alt"
                    loading="lazy"
                    width={320}
                    height={400}
                    aria-hidden="true"
                  />
                </figure>
                <figcaption className="leader-info">
                  <span className="leader-role">{member.role}</span>
                  <h3 className="leader-name">{member.name}</h3>
                  <span className="leader-department">{member.department}</span>
                </figcaption>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
