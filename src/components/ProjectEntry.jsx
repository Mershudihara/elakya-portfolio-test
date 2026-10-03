import { visuals } from './visuals/index.js'

export default function ProjectEntry({ project, flipped }) {
  const Visual = visuals[project.visual]
  const titleId = `${project.id}-title`

  return (
    <article className={`project${flipped ? ' project--flipped' : ''}`} aria-labelledby={titleId}>
      <figure className="project__media" data-reveal>
        <div className="project__frame">
          <div className="project__visual">{Visual && <Visual />}</div>
        </div>
        <figcaption className="project__caption label">
          <span>Fig. {project.number}</span>
          <span>{project.title} — visual study</span>
        </figcaption>
      </figure>

      <div className="project__body" data-reveal style={{ '--reveal-delay': '120ms' }}>
        <p className="project__number" aria-hidden="true">
          {project.number}
        </p>
        <h3 id={titleId} className="project__title">
          <span className="visually-hidden">Project {project.number}: </span>
          {project.title}
        </h3>
        <p className="project__category label">{project.category}</p>
        <p className="project__description">{project.description}</p>
        <dl className="project__meta">
          <div>
            <dt className="label">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="label">Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt className="label">Status</dt>
            <dd>Case study in progress</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
