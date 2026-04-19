/**
 * TeamCard — Reusable team member card component.
 *
 * Uses the existing CSS class names (leader-card, leader-photo-wrapper, etc.)
 * so the current design and hover crossfade effect are preserved.
 *
 * If `imageAlt` is not provided, only the main image is shown
 * with no broken hover behavior.
 */
export default function TeamCard({ member }) {
  const { id, name, role, department, imageMain, imageAlt } = member;

  return (
    <article className="leader-card" id={id}>
      <figure className="leader-photo-wrapper">
        <img
          src={imageMain}
          alt={`${name} — ${role}`}
          className="leader-photo leader-photo--main"
          loading="lazy"
          width={320}
          height={400}
        />
        {imageAlt && (
          <img
            src={imageAlt}
            alt={`${name} — alternate photo`}
            className="leader-photo leader-photo--alt"
            loading="lazy"
            width={320}
            height={400}
            aria-hidden="true"
          />
        )}
      </figure>
      <figcaption className="leader-info">
        <span className="leader-role">{role}</span>
        <h3 className="leader-name">{name}</h3>
        <span className="leader-department">{department}</span>
      </figcaption>
    </article>
  );
}
