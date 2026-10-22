import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { webProjects } from "../data/content";

export default function WebProjects() {
  return (
    <section className="section web-projects" id="projects">
      <div className="container">
        <Reveal className="web-projects-head">
          <span className="section-label">Web Development</span>
          <h2 className="section-title">Selected web projects</h2>
          <p className="section-intro">
            A selection of websites and applications I've built — focused on responsive
            interfaces, clean structure, and real functionality.
          </p>
        </Reveal>

        <div className="web-projects-grid">
          {webProjects.map((p, i) => (
            <Reveal key={p.slug} className="web-card" delay={i * 80}>
              <Link to={p.route} className="web-card-media">
                <img
                  src={`/images/portfolio/${p.thumbnail}`}
                  alt={`${p.title} thumbnail`}
                  loading="lazy"
                />
                <span className="web-card-overlay">
                  View Details <ArrowUpRight size={16} />
                </span>
              </Link>
              <div className="web-card-body">
                <h3 className="web-card-title">{p.title}</h3>
                <p className="web-card-desc">{p.description}</p>
                <div className="web-card-links">
                  <Link to={p.route} className="link-underline web-card-link">
                    View Details
                  </Link>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline web-card-link"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .web-projects-head {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: var(--space-6);
        }
        .web-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
        }
        .web-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          transition: transform 0.4s var(--ease), border-color 0.4s var(--ease);
        }
        .web-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
        }
        .web-card-media {
          position: relative;
          display: block;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #0a0d12;
        }
        .web-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease);
        }
        .web-card:hover .web-card-media img { transform: scale(1.05); }
        .web-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: rgba(0,0,0,0.5);
          color: var(--accent);
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.3s var(--ease);
        }
        .web-card-media:hover .web-card-overlay { opacity: 1; }
        .web-card-body { padding: var(--space-3); }
        .web-card-title {
          font-size: 1.2rem;
          font-family: var(--font-display);
        }
        .web-card-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }
        .web-card-links {
          display: flex;
          gap: var(--space-2);
          margin-top: var(--space-2);
          font-size: 0.9rem;
        }
        .web-card-link { color: var(--text); }
        .web-card-link:hover { color: var(--accent); }
        @media (max-width: 760px) {
          .web-projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
