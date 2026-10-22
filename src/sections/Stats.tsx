import Reveal from "../components/Reveal";
import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="section stats" aria-label="Statistics">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={i * 100}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </Reveal>
        ))}
      </div>
      <style>{`
        .stats { padding: var(--space-10) 0; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--space-3);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: var(--space-6) 0;
        }
        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 0 var(--space-2);
          border-left: 1px solid var(--border);
        }
        .stat:first-child { border-left: none; padding-left: 0; }
        .stat-value {
          display: flex;
          align-items: center;
          min-height: 3.4rem;
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.02em;
        }
        .stat:last-child .stat-value {
          font-size: clamp(2.4rem, 5vw, 3.2rem);
          line-height: 1;
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        @media (max-width: 900px) and (min-width: 681px) {
          .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: var(--space-4); }
          .stat:nth-child(3) { border-left: none; padding-left: 0; }
          .stat:nth-child(n + 3) { border-top: 1px solid var(--border); padding-top: var(--space-4); }
        }
        @media (max-width: 680px) {
          .stats-grid { grid-template-columns: 1fr; gap: var(--space-4); padding: var(--space-4) 0; }
          .stat { border-left: none; padding-left: 0; }
          .stat + .stat { border-top: 1px solid var(--border); padding-top: var(--space-4); }
        }
      `}</style>
    </section>
  );
}
