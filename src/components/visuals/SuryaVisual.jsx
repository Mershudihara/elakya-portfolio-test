import './SuryaVisual.css'

export default function SuryaVisual() {
  return (
    <div
      className="surya"
      role="img"
      aria-label="Abstract artwork for Surya OS: a striped orange sun rising over a horizon inside a minimal operating system frame."
    >
      <div className="surya__bar">
        <span>Surya</span>
        <span className="surya__dots">
          <i />
          <i />
          <i />
        </span>
        <span>06:42</span>
      </div>

      <div className="surya__sky">
        <div className="surya__orbit">
          <div className="surya__ring surya__ring--outer" />
          <div className="surya__ring" />
          <div className="surya__sun" />
        </div>
      </div>
      <div className="surya__horizon" />

      <div className="surya__reflection">
        <i />
        <i />
        <i />
        <i />
      </div>

      <span className="surya__note surya__note--left">Dawn · 3200K</span>
      <span className="surya__note surya__note--right">Light follows time</span>

      <div className="surya__dock">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}
