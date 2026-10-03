import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Chapter from '../components/case-study/Chapter.jsx'
import CaseStudyMedia, { MediaFill, MediaGrid } from '../components/case-study/CaseStudyMedia.jsx'
import useReveal from '../hooks/useReveal.js'
import { suryaOS as c } from '../content/surya-os.js'
import '../components/case-study/CaseStudy.css'

const TOTAL = '08'

function BackLink({ children = 'Back to work' }) {
  return (
    <a href="/#work" className="cs-back label">
      <span className="cs-back__arrow" aria-hidden="true">
        ←
      </span>{' '}
      <span className="text-link">{children}</span>
    </a>
  )
}

function SubHead({ index, title, text, children }) {
  return (
    <div className="cs-sub__head" data-reveal>
      <p className="cs-sub__index label">{index}</p>
      <h3 className="cs-sub__title">{title}</h3>
      <div className="cs-sub__text">
        <p>{text}</p>
        {children}
      </div>
    </div>
  )
}

export default function SuryaCaseStudy() {
  useReveal()
  const { system, states, reflection } = c

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav base="/" />

      <main id="main" className="cs">
        {/* 1. Hero */}
        <header className="cs-hero container" id="top">
          <div className="cs-hero__top cs-fade">
            <BackLink />
            <p className="cs-hero__label label">
              <span className="cs-hero__index">{c.number}</span> — {c.title} {c.titleAccent}
            </p>
          </div>

          <h1 className="cs-hero__title">
            <span className="cs-mask">
              <span className="cs-rise" style={{ '--i': 0 }}>
                {c.title}
              </span>
            </span>{' '}
            <span className="cs-mask">
              <em className="cs-rise" style={{ '--i': 1 }}>
                {c.titleAccent}
              </em>
            </span>
          </h1>

          <div className="cs-hero__grid cs-fade" style={{ '--d': '0.55s' }}>
            <p className="cs-hero__subtitle">{c.subtitle}</p>
            <p className="cs-hero__intro">{c.intro}</p>
          </div>

          <dl className="cs-meta cs-fade" style={{ '--d': '0.7s' }}>
            {c.meta.map((item) => (
              <div key={item.label}>
                <dt className="label">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* 2. Hero visual */}
        <div className="container cs-hero-visual">
          <CaseStudyMedia item={c.heroVisual} fig="1.0" />
        </div>

        {/* 3. Challenge */}
        <Chapter id="challenge" index="01" total={TOTAL} {...c.challenge} />

        {/* 4. Visual direction */}
        <Chapter id="direction" index="02" total={TOTAL} {...c.direction}>
          <MediaGrid items={c.direction.media} figPrefix="2" />
        </Chapter>

        {/* 5–6. Wallpapers + iconography */}
        <Chapter id="system" index="03" total={TOTAL} title={system.title}>
          <div className="cs-sub">
            <SubHead {...system.wallpapers} />
            <MediaGrid items={system.wallpapers.media} figPrefix="3.1" />
          </div>

          <div className="cs-sub">
            <SubHead {...system.iconography}>
              <ol className="cs-points label">
                {system.iconography.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ol>
            </SubHead>
            <figure className="cs-media" data-reveal>
              <ul className="cs-icons" aria-label="Icon set">
                {system.iconography.icons.map((icon) => (
                  <li className="cs-icon" key={icon.label}>
                    <MediaFill item={icon} compact />
                  </li>
                ))}
              </ul>
              <figcaption className="cs-caption label">
                <span>Fig. 3.2</span>
                <span>Icon set</span>
              </figcaption>
            </figure>
          </div>
        </Chapter>

        {/* 7. States */}
        <Chapter id="states" index="04" total={TOTAL} {...states}>
          <div className="cs-states">
            {states.groups.map((group) => (
              <div className="cs-state" key={group.name} data-reveal>
                <h3 className="cs-state__name">
                  {group.name}
                  <span className="label">{group.steps.length} states</span>
                </h3>
                <ol className="cs-state__steps">
                  {group.steps.map((step, i) => (
                    <li className="cs-state__step" key={step.label} style={{ '--i': i }}>
                      <div className="cs-state__tile">
                        <div className="cs-frame" style={{ aspectRatio: step.ratio }}>
                          <MediaFill item={step} compact />
                        </div>
                      </div>
                      <span className="cs-state__caption label">State 0{i + 1}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Chapter>

        {/* 8. Details */}
        <Chapter id="details" index="05" total={TOTAL} title={c.details.title}>
          <MediaGrid items={c.details.media} figPrefix="5" />
        </Chapter>

        {/* 9. Refinement */}
        <Chapter id="refinement" index="06" total={TOTAL} {...c.refinement}>
          <figure className="cs-flow" data-reveal>
            <ol className="cs-flow__tools">
              {c.refinement.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ol>
            <figcaption className="label">SVG workflow</figcaption>
          </figure>
        </Chapter>

        {/* 10. Final direction */}
        <Chapter id="final" index="07" total={TOTAL} {...c.final}>
          <MediaGrid items={c.final.media} figPrefix="7" />
        </Chapter>

        {/* 11. Reflection */}
        <Chapter id="reflection" index="08" total={TOTAL} title={reflection.title} lead={reflection.lead} body={[reflection.setup]}>
          <blockquote className="cs-quote" data-reveal>
            <p>
              {reflection.quote[0]}
              <em>{reflection.quote[1]}</em>
              {reflection.quote[2]}
            </p>
          </blockquote>
          <p className="cs-closing" data-reveal>
            {reflection.closing}
          </p>
        </Chapter>

        {/* 12. Next project */}
        <nav className="cs-next container" aria-label="Next project">
          <div className="cs-next__inner" data-reveal>
            <p className="cs-next__label label">Next project</p>
            <a href={c.next.href} className="cs-next__link">
              <span className="cs-next__index">{c.next.number}</span>
              <span className="cs-next__title">{c.next.title}</span>
              <span className="cs-next__arrow" aria-hidden="true">
                →
              </span>
            </a>
            <div className="cs-next__back">
              <BackLink>Back to all work</BackLink>
            </div>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  )
}
