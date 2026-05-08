import Link from 'next/link';
import { Metadata } from 'next';
import { TOOLS } from '@/lib/tools';

export const metadata: Metadata = {
  title: '404 — Page Not Found | ToolMint',
  description: 'The page you are looking for does not exist.',
};

const POPULAR_TOOLS = ['json-formatter', 'qr-generator', 'pdf-merge'];

export default function NotFound() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="header-logo">
              <img src="/logo-mark.svg" alt="ToolMint" width={36} height={36} />
              <span className="header-logo-text">Tool<span>Mint</span></span>
            </Link>
            <nav>
              <ul className="header-nav">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#tools">Tools</Link></li>
              </ul>
            </nav>
            <Link href="/" className="header-cta">Go Home</Link>
          </div>
        </div>
      </header>

      <main style={{
        minHeight: 'calc(100dvh - 200px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-16) var(--space-6)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '520px' }}>
          <div style={{
            fontSize: '6rem',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #00C48C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            marginBottom: 'var(--space-6)',
            letterSpacing: '-0.04em',
          }}>
            404
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            marginBottom: 'var(--space-4)',
            letterSpacing: '-0.02em',
          }}>
            Page not found
          </h1>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            marginBottom: 'var(--space-8)',
          }}>
            Looks like this tool got lost in the mint patch. The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            Back to Home
          </Link>

          <div style={{ marginTop: 'var(--space-12)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'center' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: 'var(--space-2)' }}>
              Or try one of these popular tools:
            </p>
            {POPULAR_TOOLS.map(id => {
              const tool = TOOLS.find(t => t.id === id);
              return tool ? (
                <Link
                  key={id}
                  href={`/tools/${id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-3) var(--space-5)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  → {tool.name}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </main>

      <style>{`
        .popular-link:hover {
          border-color: var(--color-primary) !important;
          background: var(--color-surface-high) !important;
        }
      `}</style>
    </>
  );
}