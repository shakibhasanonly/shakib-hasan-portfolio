import { ArrowDown, Download, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-status-dot" /> Available for freelance work
          </span>

          <h1 className="hero-title">
            Shakib<br />Hasan
          </h1>

          <p className="hero-role">
            Full Stack Developer <span>&</span> Brand Identity Designer
          </p>

          <p className="hero-intro">
            I build responsive websites and craft visual identities — combining clean,
            functional interfaces with memorable brand systems for businesses and creators.
          </p>

          <div className="hero-actions">
            <a
              href="/documents/Shakib_Hasan_Resume.pdf"
              download
              className="btn btn-primary btn-large"
            >
              Download Resume <Download size={18} />
            </a>
            <a href="/#projects" className="btn btn-ghost btn-large">
              View Projects <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-portrait" aria-hidden="false">
          <div className="hero-portrait-frame">
            <img src="/images/portfolio/shakib.png" alt="Portrait of Shakib Hasan" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <ArrowDown size={18} />
      </a>

      <style>{`
        .hero {
          position: relative;
          padding: calc(72px + var(--space-10)) 0 var(--space-10);
          overflow: hidden;
        }
        .hero::before {
          content: "";
          position: absolute;
          top: -10%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          max-width: 720px;
          max-height: 720px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 65%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: var(--space-3);
        }
        .hero-status-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 4px var(--accent-soft);
          animation: pulse 2.2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero-title {
          font-size: clamp(3.2rem, 9vw, 7rem);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.04em;
        }
        .hero-role {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2.4vw, 1.6rem);
          color: var(--text);
          margin-top: var(--space-2);
          font-weight: 500;
        }
        .hero-role span { color: var(--accent); }
        .hero-intro {
          color: var(--text-secondary);
          font-size: 1.05rem;
          max-width: 52ch;
          margin-top: var(--space-3);
        }
        .hero-actions {
          display: flex;
          gap: var(--space-2);
          margin-top: var(--space-4);
          flex-wrap: wrap;
        }
        .hero-portrait {
          position: relative;
          justify-self: end;
        }
        .hero-portrait-frame {
          width: clamp(240px, 32vw, 380px);
          aspect-ratio: 4/5;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          background: linear-gradient(160deg, #11151c 0%, #0a0d12 100%);
          position: relative;
        }
        .hero-portrait-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-scroll {
          position: absolute;
          bottom: var(--space-4);
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          animation: bob 2.2s infinite;
        }
        @keyframes bob {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 6px); }
        }

        @media (max-width: 880px) {
          .hero {
            padding: var(--space-6) 0 var(--space-8);
          }
          .hero-inner {
            grid-template-columns: 1fr;
            gap: var(--space-5);
          }
          .hero-portrait {
            order: -1;
            justify-self: center;
            margin-bottom: var(--space-1);
          }
          .hero-portrait-frame {
            width: clamp(180px, 62vw, 320px);
            aspect-ratio: 1;
            border-radius: 50%;
          }
          .hero-content {
            align-items: flex-start;
            text-align: left;
          }
          .hero-title {
            font-size: clamp(2.8rem, 14vw, 4.5rem);
          }
          .hero-actions {
            width: 100%;
          }
          .hero-actions .btn {
            flex: 1 1 auto;
          }
          .hero-scroll { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-status-dot, .hero-scroll { animation: none; }
        }
      `}</style>
    </section>
  );
}
