import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "../data/content";
import { socialIcons } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Link to="/" className="footer-brand">
              <img src="/logo.png" alt="Shakib Hasan" />
            </Link>
            <p className="footer-description">
              Full-stack websites and thoughtful brand identities built for ambitious businesses and creators.
            </p>
          </div>

          <nav className="footer-social" aria-label="Social links">
            {socialLinks.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-link"
                >
                  {Icon ? <Icon size={18} /> : s.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {year} Shakib Hasan. All rights reserved.</p>
          <Link to="/contact" className="footer-contact link-underline">
            Contact <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: var(--space-8) 0 var(--space-4);
          background: var(--bg);
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--space-5);
          flex-wrap: wrap;
          padding-bottom: var(--space-5);
          border-bottom: 1px solid var(--border);
        }
        .footer-brand-block {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          max-width: 360px;
        }
        .footer-brand {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          line-height: 0;
        }
        .footer-brand img {
          display: block;
          width: clamp(190px, 24vw, 280px);
          height: auto;
          max-height: 76px;
          object-fit: contain;
        }
        .footer-description {
          max-width: 36ch;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        @media (max-width: 600px) {
          .footer-brand img { width: min(78vw, 250px); }
        }
        .footer-social {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          align-items: center;
          padding-top: 0.35rem;
        }
        .footer-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          transition: all 0.3s var(--ease);
        }
        .footer-social-link:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: var(--space-2);
          flex-wrap: wrap;
          padding-top: var(--space-3);
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .footer-contact {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--text);
        }
        @media (max-width: 600px) {
          .footer-top { flex-direction: column; align-items: flex-start; gap: var(--space-4); }
          .footer-bottom { align-items: flex-start; flex-direction: column; }
        }
      `}</style>
    </footer>
  );
}
