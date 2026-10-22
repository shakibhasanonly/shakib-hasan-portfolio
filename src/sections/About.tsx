import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal className="about-label" as="div">
          <span className="section-label">About</span>
        </Reveal>
        <Reveal className="about-body" delay={100}>
          <h2 className="about-title">
            I design and build digital experiences with identity in mind.
          </h2>
          <p className="about-text">
            I'm Shakib Hasan, a Full Stack Developer and Brand Identity Designer based in
            Meherpur, Bangladesh. I create responsive websites and digital products while
            also crafting visual identities — logos, brand systems, and design assets — that
            help businesses look credible and stay consistent.
          </p>
          <p className="about-text">
            My work sits between engineering and design: clean, functional interfaces paired
            with intentional visual language. Whether it's a web application or a brand from
            scratch, I focus on clarity, performance, and details that scale.
          </p>
        </Reveal>
      </div>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-6);
        }
        .about-title {
          font-size: clamp(1.6rem, 3.2vw, 2.4rem);
          font-weight: 600;
          line-height: 1.2;
          max-width: 22ch;
        }
        .about-text {
          color: var(--text-secondary);
          margin-top: var(--space-2);
          font-size: 1.02rem;
          max-width: 60ch;
        }
        .about-text + .about-text { margin-top: var(--space-2); }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: var(--space-2); }
        }
      `}</style>
    </section>
  );
}
