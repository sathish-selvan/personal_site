export default function InfoCard({
  title,
  subtitle,
  description,
  meta,
  badge,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  meta?: string;
  badge?: string;
}) {
  return (
    <div className="info-card">
      <div className="info-head">
        <span className="info-title">{title}</span>
        {badge && <span className="info-badge">{badge}</span>}
        {meta && <span className="info-meta">{meta}</span>}
      </div>
      {subtitle && <div className="info-sub">{subtitle}</div>}
      {description && <p className="info-desc">{description}</p>}
    </div>
  );
}
