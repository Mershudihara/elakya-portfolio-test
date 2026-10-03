import { site } from '../content.js'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
        <p className="footer__name">{site.name}</p>
        <p>{site.role}</p>
        <p>
          © <time dateTime={String(year)}>{year}</time>
        </p>
        <a href="#top" className="footer__top">
          <span className="text-link">Back to top</span> <span aria-hidden="true">↑</span>
        </a>
        </div>
      </div>
    </footer>
  )
}
