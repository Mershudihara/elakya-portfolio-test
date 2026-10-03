import { site } from '../content.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__head">
          <p className="section-label label">
            <span className="section-label__index">03</span> Contact
          </p>
          <p className="contact__status label">{site.availability}</p>
        </div>

        <h2 id="contact-title" className="contact__title" data-reveal>
          Let’s make something <em>considered</em>.
        </h2>

        <div className="contact__grid" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <p className="contact__invite">
            Have a product, brand or idea that needs a clear visual voice? I’d love to hear about
            it — big or small.
          </p>

          <ul className="contact__links">
            <li>
              <span className="label">Email</span>
              <a href={`mailto:${site.email}`} className="contact__link">
                <span className="text-link">{site.email}</span>
                <Arrow />
              </a>
            </li>
            <li>
              <span className="label">LinkedIn</span>
              <a href={site.linkedin.url} className="contact__link" target="_blank" rel="noreferrer">
                <span className="text-link">{site.linkedin.label}</span>
                <Arrow />
                <span className="visually-hidden">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg className="contact__arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}
