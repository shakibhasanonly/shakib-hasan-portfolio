import Reveal from "../components/Reveal";
import { Code2, Palette, Smartphone, PenTool, Layout } from "lucide-react";

const areas = [
  { icon: Code2, title: "Web Development", desc: "Building responsive, functional websites and web apps end-to-end." },
  { icon: Smartphone, title: "Responsive Interfaces", desc: "Designing layouts that work cleanly across mobile, tablet, and desktop." },
  { icon: Palette, title: "Brand Identity Design", desc: "Crafting visual identities — logos, color systems, and brand guidelines." },
  { icon: PenTool, title: "Logo Design", desc: "Creating memorable logos tailored to each business and audience." },
  { icon: Layout, title: "Visual Design", desc: "Designing UI graphics and social media assets that stay on-brand." },
];

export default function Freelance() {
  return (
    <section className="section freelance" id="experience">
      <div className="container">
        <Reveal className="freelance-head">
          <span className="section-label">Freelance Experience</span>
          <h2 className="section-title">Independent work across web & design</h2>
          <p className="section-intro">
            I work as a freelance Full Stack Developer and Brand Identity Designer, helping
            clients launch websites and build consistent visual identities.
          </p>
        </Reveal>

        <div className="freelance-grid">
          {areas.map((a, i) => (
            <Reveal key={a.title} className="freelance-item" delay={i * 70}>
              <span className="freelance-icon" aria-hidden="true">
                <a.icon size={22} />
              </span>
              <h3 className="freelance-title">{a.title}</h3>
              <p className="freelance-desc">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .freelance-head {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: var(--space-5);
        }
        .freelance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }
        .freelance-item {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: var(--space-3);
          transition: transform 0.3s var(--ease), border-color 0.3s var(--ease);
        }
        .freelance-item:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
        }
        .freelance-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--accent-soft);
          color: var(--accent);
          margin-bottom: var(--space-2);
        }
        .freelance-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
        }
        .freelance-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-top: 0.4rem;
        }
        @media (max-width: 860px) {
          .freelance-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .freelance-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
