import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { brandProjects } from "../data/content";
import NotFound from "./NotFound";

export default function BrandProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = brandProjects.find((p) => p.slug === slug);

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
          <span className="section-label">{project.category}</span>
          <h1 className="detail-title">{project.title}</h1>
        </div>
      </section>

      <section className="detail-image-section">
        <div className="container">
          <div className="detail-image-frame">
            <img
              src={`/images/portfolio/${project.thumbnail}`}
              alt={`${project.shortTitle} project thumbnail`}
            />
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="container detail-body-grid">
          <div className="detail-description">
            <h2 className="detail-h2">Project overview</h2>
            <p>{project.description}</p>
          </div>
          <aside className="detail-side">
            <div className="detail-side-row">
              <span className="detail-side-label">Category</span>
              <span className="detail-side-value">{project.category}</span>
            </div>
            <div className="detail-side-row">
              <span className="detail-side-label">Logo</span>
              <span className="detail-side-value">{project.shortTitle}</span>
            </div>
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary detail-cta"
            >
              View Project on Behance <ExternalLink size={16} />
            </a>
          </aside>
        </div>
      </section>

      <style>{`
        .detail { padding-top: 120px; padding-bottom: var(--space-12); }
        .detail-hero { padding: var(--space-4) 0 var(--space-3); }
        .detail-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: var(--space-2);
          transition: color 0.3s var(--ease);
        }
        .detail-back:hover { color: var(--accent); }
        .detail-title {
          font-size: clamp(1.8rem, 4.5vw, 3rem);
          font-weight: 600;
          margin-top: var(--space-2);
          max-width: 24ch;
        }
        .detail-image-section { padding: var(--space-3) 0 var(--space-5); }
        .detail-image-frame {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--card-bg);
        }
        .detail-image-frame img {
          width: 100%;
          height: auto;
          display: block;
        }
        .detail-body-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-4);
          align-items: start;
        }
        .detail-h2 {
          font-size: 1.25rem;
          font-family: var(--font-display);
          margin-bottom: var(--space-2);
        }
        .detail-description p {
          color: var(--text-secondary);
          font-size: 1.02rem;
        }
        .detail-side {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: var(--space-3);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .detail-side-row {
          display: flex;
          justify-content: space-between;
          gap: var(--space-2);
          padding-bottom: var(--space-2);
          border-bottom: 1px solid var(--border);
        }
        .detail-side-label {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .detail-side-value {
          color: var(--text);
          font-weight: 500;
        }
        .detail-cta { margin-top: var(--space-1); width: 100%; }
        @media (max-width: 760px) {
          .detail-body-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
