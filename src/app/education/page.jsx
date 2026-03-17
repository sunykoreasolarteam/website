import './Education.css';

export const metadata = {
  title: 'Education Initiative | SUNY Korea Solar Team',
  description: 'Join our parametric CAD and digital prototyping curriculum to start your engineering journey.',
};

export default function Education() {
  return (
    <div className="education-page">
      <div className="container education-container">
        <h1 className="education-title">Education</h1>
        <div className="education-placeholder-box">
          <h2 className="education-placeholder-heading">Fusion 360 Education Program</h2>
          <p className="education-placeholder-text">
            Interested in our parametric CAD and digital prototyping curriculum? Click the button below to apply and start your engineering journey.
          </p>
          <div className="education-btn-group">
            <a href="https://forms.gle/MDBnMjejnm7rDpqWA" target="_blank" rel="noopener noreferrer" className="education-apply-btn">Apply Now</a>
            <a href="https://docs.google.com/document/d/1OVcSymDJ_zYVA3oGxNsV3MZ6xCdPIWk63YIQwnY6Fds/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="education-apply-btn education-details-btn">Program Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}
