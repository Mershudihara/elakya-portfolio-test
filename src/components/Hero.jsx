import { hero, site } from '../content.js'
import './Hero.css'

const year = new Date().getFullYear()

function Word({ children, index, className = '' }) {
  return (
    <span className="hero__mask">
      <span className={`hero__word ${className}`} style={{ '--i': index }}>
        {children}
      </span>
    </span>
  )
}

export default function Hero() {
  const [first, last] = site.name.split(' ')

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__meta label">
          <span>Portfolio — {year}</span>
          <span className="hero__meta-mid">Selected work 01—03</span>
          <span className="hero__status">
            <span className="hero__pulse" aria-hidden="true" />
            {site.availability}
          </span>
        </div>

        <div className="hero__display">
          <span className="hero__crop hero__crop--tl" aria-hidden="true" />
          <span className="hero__crop hero__crop--tr" aria-hidden="true" />
          <span className="hero__crop hero__crop--bl" aria-hidden="true" />
          <span className="hero__crop hero__crop--br" aria-hidden="true" />

          <h1 className="hero__title" id="hero-title">
            <span className="hero__line hero__line--1">
              <Word index={0}>{first}</Word> <Word index={1}>{last}</Word>
            </span>
            <span className="visually-hidden">, </span>
            <span className="hero__line hero__line--2">
              <Word index={2} className="hero__accent">
                Visual
              </Word>{' '}
              <Word index={3}>Designer</Word>
            </span>
          </h1>

          <p className="hero__definition">
            <span className="hero__def-pos">{hero.intro.label}</span>
            <span className="hero__def-text">{hero.intro.text}</span>
          </p>

          <span className="hero__spec hero__spec--baseline label" aria-hidden="true">
            Baseline
          </span>
        </div>

        <div className="hero__footer">
          <ol className="hero__disciplines label" aria-label="Capabilities">
            {hero.disciplines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <div className="hero__intro">
            <p className="hero__statement">{hero.statement}</p>
            <a href="#work" className="hero__cta">
              <span className="text-link">View selected work</span>
              <span className="hero__cta-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="16" height="16">
                  <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
