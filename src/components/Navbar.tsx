import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "Skills", to: "/#skills" },
  { label: "Experience", to: "/#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleHash = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname !== "/") {
        window.location.href = `/#${id}`;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" aria-label="Shakib Hasan home">
          <img src="/logo.png" alt="Shakib Hasan" />
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {navLinks.map((link) =>
            link.to.startsWith("/#") ? (
              <button
                key={link.to}
                className="navbar-link link-underline"
                onClick={() => handleHash(link.to)}
              >
                {link.label}
              </button>
            ) : (
              <Link key={link.to} to={link.to} className="navbar-link link-underline">
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link to="/contact" className="btn btn-primary navbar-cta">
          Get In Touch
        </Link>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar-mobile ${open ? "is-open" : ""}`}>
        {navLinks.map((link) =>
          link.to.startsWith("/#") ? (
            <button
              key={link.to}
              className="navbar-mobile-link"
              onClick={() => handleHash(link.to)}
            >
              {link.label}
            </button>
          ) : (
            <Link key={link.to} to={link.to} className="navbar-mobile-link">
              {link.label}
            </Link>
          )
        )}
        <Link to="/contact" className="btn btn-primary">
          Get In Touch
        </Link>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background 0.4s var(--ease), border-color 0.4s var(--ease), backdrop-filter 0.4s;
          border-bottom: 1px solid transparent;
        }
        .navbar.is-scrolled {
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom-color: var(--border);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-3);
          height: 72px;
        }
        .navbar-logo {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          line-height: 0;
        }
        .navbar-logo img {
          display: block;
          width: clamp(150px, 17vw, 210px);
          height: auto;
          max-height: 48px;
          object-fit: contain;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }
        .navbar-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.92rem;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }
        .navbar-link:hover {
          color: var(--text);
        }
        .navbar-cta {
          padding: 0.6rem 1.2rem;
          font-size: 0.9rem;
        }
        .navbar-toggle {
          display: none;
          background: none;
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text);
          padding: 0.5rem;
          cursor: pointer;
        }
        .navbar-mobile {
          display: none;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0 var(--space-3);
          background: rgba(0,0,0,0.96);
          border-bottom: 1px solid transparent;
          height: 0;
          max-height: 0;
          overflow: hidden;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transition: height 0.4s var(--ease), max-height 0.4s var(--ease), padding 0.4s var(--ease), border-color 0.4s var(--ease), opacity 0.2s var(--ease), visibility 0s linear 0.4s;
        }
        .navbar-mobile.is-open {
          height: auto;
          max-height: 420px;
          padding: var(--space-2) var(--space-3) var(--space-3);
          border-bottom-color: var(--border);
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          transition-delay: 0s;
        }
        .navbar-mobile-link {
          color: var(--text-secondary);
          padding: 0.7rem 0;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
        }
        .navbar-mobile-link:hover { color: var(--text); }

        @media (max-width: 860px) {
          .navbar { position: sticky; }
          .navbar-links, .navbar-cta { display: none; }
          .navbar-toggle { display: inline-flex; }
          .navbar-mobile { display: flex; }
          .navbar-logo img { width: clamp(145px, 42vw, 190px); }
        }
      `}</style>
    </header>
  );
}
