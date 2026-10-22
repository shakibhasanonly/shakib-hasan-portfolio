import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <h1>404</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
      <style>{`
        .not-found {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 80px;
        }
        .not-found h1 {
          font-size: clamp(4rem, 12vw, 8rem);
          color: var(--accent);
          font-family: var(--font-display);
        }
        .not-found p { color: var(--text-secondary); margin: var(--space-2) 0 var(--space-4); }
      `}</style>
    </main>
  );
}
