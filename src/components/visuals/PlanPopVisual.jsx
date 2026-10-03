import './PlanPopVisual.css'

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const tiles = Array.from({ length: 28 }, (_, i) => ({
  column: (i % 7) + 1,
  row: Math.floor(i / 7) + 2,
}))

export default function PlanPopVisual() {
  return (
    <div
      className="planpop"
      role="img"
      aria-label="Abstract artwork for PlanPop: a cobalt calendar grid where colourful shapes pop out of individual days."
    >
      <div className="planpop__top">
        <span className="planpop__logo">
          planpop<i />
        </span>
        <span>Week 41</span>
      </div>

      <div className="planpop__board">
        {days.map((day, i) => (
          <span key={i} className="planpop__day" style={{ gridColumn: i + 1 }}>
            {day}
          </span>
        ))}
        {tiles.map((tile, i) => (
          <span
            key={i}
            className="planpop__tile"
            style={{ gridColumn: tile.column, gridRow: tile.row }}
          />
        ))}

        <span className="pop pop--circle" style={{ '--d': 0 }} />
        <span className="pop pop--pill" style={{ '--d': 1 }}>
          Studio day
        </span>
        <span className="pop pop--card" style={{ '--d': 2 }}>
          <b>11:00</b> Brunch
        </span>
        <span className="pop pop--star" style={{ '--d': 3 }} />
        <span className="pop pop--quarter" style={{ '--d': 4 }} />
        <span className="pop pop--long" style={{ '--d': 5 }} />
      </div>
    </div>
  )
}
