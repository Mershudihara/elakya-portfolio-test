export default function Chapter({ id, index, total, title, lead, body = [], children }) {
  const titleId = `${id}-title`

  return (
    <section className="cs-chapter container" id={id} aria-labelledby={titleId}>
      <header className="cs-chapter__head" data-reveal>
        <p className="section-label label">
          <span className="section-label__index">{index}</span> / {total}
        </p>
        <h2 id={titleId} className="cs-chapter__title section-title">
          {title}
        </h2>
      </header>

      {(lead || body.length > 0) && (
        <div
          className={`cs-chapter__body${body.length ? '' : ' cs-chapter__body--lead-only'}`}
          data-reveal
          style={{ '--reveal-delay': '100ms' }}
        >
          {lead && <p className="cs-chapter__lead">{lead}</p>}
          {body.length > 0 && (
            <div className="cs-chapter__text">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      )}

      {children}
    </section>
  )
}
