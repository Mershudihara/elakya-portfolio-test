import './SpatialVisual.css'

export default function SpatialVisual() {
  return (
    <div
      className="spatial"
      role="img"
      aria-label="Abstract artwork for Spatial UI: three interface layers floating in perspective, separated by depth."
    >
      <span className="spatial__note spatial__note--tl">Layer study — 03 planes</span>
      <span className="spatial__note spatial__note--br">Depth as hierarchy</span>

      <div className="spatial__stage">
        <div className="spatial__stack">
          <div className="spatial__plane spatial__plane--shadow" />
          <div className="spatial__plane spatial__plane--base">
            <span className="spatial__grid" />
          </div>
          <div className="spatial__plane spatial__plane--ui">
            <span className="spatial__ui-bar" />
            <span className="spatial__ui-line" />
            <span className="spatial__ui-line spatial__ui-line--short" />
            <span className="spatial__ui-dot" />
          </div>
          <div className="spatial__plane spatial__plane--focus" />
        </div>
      </div>
    </div>
  )
}
