import './Media.css';

export const metadata = {
  title: 'Media | SUNY Korea Solar Team',
  description: 'View the latest media, photography, and press releases covering the progress of the SUNY Korea Solar Team.',
};

export default function Media() {
  return (
    <div className="media-page">
      <div className="container media-container">
        <h1 className="media-page-title">Media</h1>
        <div className="media-placeholder-box">
          <p className="media-placeholder-text">
            This section is yet to be made. We will update the website further in the future.
          </p>
        </div>
      </div>
    </div>
  );
}
