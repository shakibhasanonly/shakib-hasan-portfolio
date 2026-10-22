import { useNavigate } from 'react-router-dom';
import { brandProjects } from '../data/content';

export default function BrandMarquee() {
  const navigate = useNavigate();

  // Duplicate sequence for seamless loop
  const sequence = [...brandProjects, ...brandProjects];

  return (
    <section
      className="brand-marquee-section"
      aria-label="Brand Identity Design marquee"
    >
      <div className="container">
        <div className="brand-marquee-heading">
          <span className="section-label brand-marquee-label">
            Brand Identity Design
          </span>

          <p className="brand-marquee-sub">
            Selected brand identities &amp; logo designs
          </p>
        </div>
      </div>

      <div className="brand-marquee" aria-label="Brand identity logos">
        <div
          className="marquee brand-marquee-track"
          style={{ ['--dur' as any]: '10s' }}
        >
          {sequence.map((p, i) => (
            <button
              key={`${p.slug}-${i}`}
              className="brand-marquee-item"
              onClick={() => navigate(p.route)}
              aria-label={`View ${p.shortTitle} project`}
              title={p.shortTitle}
            >
              <img
                src={`/images/portfolio/${p.marqueeLogo}`}
                alt={`${p.shortTitle} logo`}
                loading="lazy"
                style={{ transform: `scale(${p.scale ?? 1})` }}
              />
            </button>
          ))}
        </div>

        <div className="brand-marquee-fade" aria-hidden="true" />
      </div>

      <style>{`
        .brand-marquee-section {
          padding: var(--space-12) 0 var(--space-10);
        }

        .brand-marquee-heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.35rem;
          margin-bottom: var(--space-5);
        }

        /* Remove the line beside this heading only */
        .brand-marquee-label::before,
        .brand-marquee-label::after {
          display: none !important;
          content: none !important;
          border: none !important;
        }

        .brand-marquee-label {
          border-left: none !important;
          border-right: none !important;
        }

        .brand-marquee-sub {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .brand-marquee {
          position: relative;
          overflow: hidden;
          padding: var(--space-3) 0;
        }

        .brand-marquee-track {
          gap: 3.5rem;
          align-items: center;
        }

        .brand-marquee-item {
          flex: 0 0 auto;
          height: 88px;
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.3s var(--ease);
        }

        .brand-marquee-item:hover {
          transform: translateY(-4px);
        }

        .brand-marquee-item img {
          max-height: 88px;
          max-width: 200px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(1) brightness(1.4) opacity(0.92);
          transition: filter 0.4s var(--ease), transform 0.4s var(--ease);
        }

        .brand-marquee-item:hover img {
          filter: grayscale(0) brightness(1) opacity(1);
        }

        .brand-marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            var(--bg) 0%,
            transparent 8%,
            transparent 92%,
            var(--bg) 100%
          );
        }

        @media (max-width: 768px) {
          .brand-marquee-item {
            height: 64px;
            width: 150px;
          }

          .brand-marquee-item img {
            max-height: 64px;
            max-width: 150px;
          }

          .brand-marquee-track {
            gap: 2.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
