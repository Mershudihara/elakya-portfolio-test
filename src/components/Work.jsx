import { projects } from '../content.js'
import ProjectEntry from './ProjectEntry.jsx'
import './Work.css'

export default function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="section-label label">
            <span className="section-label__index">01</span> Work
          </p>
          <h2 id="work-title" className="section-title">
            Selected <em>work</em>
          </h2>
          <p className="section-head__intro">
            A few recent explorations across operating systems, consumer products and spatial
            interfaces.
          </p>
        </header>

        <ol className="projects">
          {projects.map((project, index) => (
            <li key={project.id}>
              <ProjectEntry project={project} flipped={index % 2 === 1} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
