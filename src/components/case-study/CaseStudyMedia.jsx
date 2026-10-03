const assetPath = (file) => `${import.meta.env.BASE_URL}images/surya-os/${file}`

export function Placeholder({ label, ratio, compact = false }) {
  return (
    <div
      className={`cs-placeholder${compact ? ' cs-placeholder--compact' : ''}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      {!compact && (
        <>
          <span className="cs-placeholder__corner cs-placeholder__corner--tl" />
          <span className="cs-placeholder__corner cs-placeholder__corner--tr" />
          <span className="cs-placeholder__corner cs-placeholder__corner--bl" />
          <span className="cs-placeholder__corner cs-placeholder__corner--br" />
          <span className="cs-placeholder__tag label">Placeholder</span>
        </>
      )}
      <span className="cs-placeholder__title">{label}</span>
      {!compact && ratio && (
        <span className="cs-placeholder__hint label">
          Surya OS asset needed · {ratio.replaceAll(' ', '')}
        </span>
      )}
    </div>
  )
}

export function MediaFill({ item, compact = false }) {
  return item.file ? (
    <img src={assetPath(item.file)} alt={item.alt} loading="lazy" decoding="async" />
  ) : (
    <Placeholder label={item.label} ratio={item.ratio} compact={compact} />
  )
}

export default function CaseStudyMedia({ item, fig, className = '', delay = 0 }) {
  return (
    <figure
      className={`cs-media ${className}`}
      data-reveal
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      <div className="cs-frame" style={{ aspectRatio: item.ratio }}>
        <MediaFill item={item} />
      </div>
      {fig && (
        <figcaption className="cs-caption label">
          <span>Fig. {fig}</span>
          <span>{item.caption ?? item.label}</span>
        </figcaption>
      )}
    </figure>
  )
}

export function MediaGrid({ items, figPrefix }) {
  return (
    <div className="cs-grid">
      {items.map((item, i) => (
        <CaseStudyMedia
          key={item.label}
          item={item}
          fig={`${figPrefix}.${i + 1}`}
          className={`cs-span-${item.span ?? 12}`}
          delay={(i % 3) * 90}
        />
      ))}
    </div>
  )
}
