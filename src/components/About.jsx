import { about } from '../content.js'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
        <div className="about__aside">
          <p className="section-label label">
            <span className="section-label__index">02</span> About
          </p>
        </div>

        <div className="about__content">
          <h2 id="about-title" className="visually-hidden">
            About Elakya
          </h2>
          <p className="about__lead" data-reveal>
            {about.lead}
          </p>

          <div className="about__body" data-reveal style={{ '--reveal-delay': '100ms' }}>
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="capabilities" data-reveal>
            <h3 className="capabilities__title label">What I do</h3>
            <ol className="capabilities__list">
              {about.capabilities.map((item, i) => (
                <li key={item.title} className="capability">
                  <span className="capability__index" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h4 className="capability__name">{item.title}</h4>
                  <p className="capability__text">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
