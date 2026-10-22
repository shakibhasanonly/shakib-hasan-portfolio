import { movingBannerPhrases } from "../data/content";

export default function MovingBanner() {
  const sequence = [...movingBannerPhrases, ...movingBannerPhrases];
  return (
    <section className="moving-banner" aria-hidden="false" aria-label="Highlights">
      <div className="moving-banner-track marquee" style={{ ["--dur" as any]: "30s" }}>
        {sequence.map((phrase, i) => (
          <span key={i} className="moving-banner-item">
            {phrase}
            <span className="moving-banner-dot" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
      <style>{`
        .moving-banner {
          padding: var(--space-4) 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          background: var(--bg);
        }
        .moving-banner-track {
          align-items: center;
          gap: var(--space-3);
        }
        .moving-banner-item {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 500;
          color: var(--text);
          letter-spacing: -0.01em;
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          white-space: nowrap;
        }
        .moving-banner-dot {
          color: var(--accent);
          font-size: 0.9em;
        }
        @media (prefers-reduced-motion: reduce) {
          .moving-banner-track { animation: none; flex-wrap: wrap; justify-content: center; width: 100%; }
        }
      `}</style>
    </section>
  );
}
