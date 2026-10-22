import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Lightbulb, Wrench } from "lucide-react";
import { webProjects } from "../data/content";
import NotFound from "./NotFound";

export default function WebProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = webProjects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  return (
    <main className="detail">
      <section className="detail-hero">
        <div className="container">
          <Link to="/" className="detail-back">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <span className="section-label">Web Development Project</span>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">{project.description}</p>
        </div>
      </section>

      <section className="detail-image-section">
        <div className="container">
          <div className="detail-image-frame">
            <img
              src={`/images/portfolio/${project.thumbnail}`}
              alt={`${project.title} screenshot`}
            />
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="container detail-body-grid">
          <div className="detail-main">
            <div className="detail-block">
              <h2 className="detail-h2">Project overview</h2>
              <p className="detail-text">{project.overview}</p>
            </div>

            <div className="detail-block">
              <h2 className="detail-h2"><CheckCircle2 size={18} /> Main features</h2>
              <ul className="detail-list">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="detail-block">
              <h2 className="detail-h2"><Wrench size={18} /> Technology stack</h2>
              <div className="detail-tags">
                {project.stack.map((t) => (
                  <span key={t} className="detail-tag">{t}</span>
                ))}
              </div>
            </div>

            {project.challenges.length > 0 && (
              <div className="detail-block">
                <h2 className="detail-h2">Challenges & solutions</h2>
                <ul className="detail-list">
                  {project.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.futureIdeas.length > 0 && (
              <div className="detail-block">
                <h2 className="detail-h2"><Lightbulb size={18} /> Future ideas</h2>
                <ul className="detail-list detail-list-muted">
                  {project.futureIdeas.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="detail-side">
            <div className="detail-side-row">
              <span className="detail-side-label">Stack</span>
              <span className="detail-side-value">{project.stack.length} technologies</span>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary detail-cta"
            >
              Live Website <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost detail-cta"
            >
              GitHub Repository <Github size={16} />
            </a>
          </aside>
        </div>
      </section>

      <style>{`
        .detail-subtitle {
          color: var(--text-secondary);
          margin-top: var(--space-2);
          font-size: 1.05rem;
          max-width: 60ch;
        }
        .detail-body-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-4);
          align-items: start;
        }
        .detail-main { display: flex; flex-direction: column; gap: var(--space-4); }
        .detail-block { display: flex; flex-direction: column; gap: var(--space-2); }
        .detail-h2 {
          font-size: 1.2rem;
          font-family: var(--font-display);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .detail-text { color: var(--text-secondary); font-size: 1.02rem; }
        .detail-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          list-style: none;
          padding: 0;
        }
        .detail-list li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--text-secondary);
        }
        .detail-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }
        .detail-list-muted li::before { background: var(--text-secondary); }
        .detail-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .detail-tag {
          padding: 0.4rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 0.85rem;
          color: var(--text);
          background: var(--card-bg);
        }
        .detail-side {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: var(--space-3);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          position: sticky;
          top: 96px;
        }
        .detail-side-row {
          display: flex;
          justify-content: space-between;
          gap: var(--space-2);
          padding-bottom: var(--space-2);
          border-bottom: 1px solid var(--border);
        }
        .detail-side-label { color: var(--text-secondary); font-size: 0.85rem; }
        .detail-side-value { color: var(--text); font-weight: 500; }
        .detail-cta { width: 100%; }
        @media (max-width: 760px) {
          .detail-body-grid { grid-template-columns: 1fr; }
          .detail-side { position: static; }
        }
      `}</style>
    </main>
  );
}
