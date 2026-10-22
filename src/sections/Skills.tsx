import Reveal from "../components/Reveal";
import { skillGroups } from "../data/content";
import { skillIcons } from "../components/SkillIcons";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal className="skills-head">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Tools I work with</h2>
          <p className="section-intro">
            Technologies and design tools I use across full-stack development and brand
            identity work.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} className="skill-group" delay={gi * 80}>
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill.icon];
                  return (
                    <li key={skill.name} className="skill-item">
                      <span className="skill-icon" aria-hidden="true">
                        {Icon ? <Icon size={22} /> : null}
                      </span>
                      <span className="skill-name">{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .skills-head {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: var(--space-6);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
        }
        .skill-group {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: var(--space-3);
        }
        .skill-group-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          margin-bottom: var(--space-2);
          color: var(--accent);
        }
        .skill-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--text);
        }
        .skill-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          color: var(--text);
          flex-shrink: 0;
        }
        .skill-item:hover .skill-icon { color: var(--accent); }
        @media (max-width: 860px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .skill-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
