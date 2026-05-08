import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ToolMint',
  description: 'Learn about ToolMint — 100+ free online tools for SEO, PDF, images, AI writing, QR codes, and developer utilities. No signup, no limits.',
};

export default function AboutPage() {
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
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <Link href="/" className="header-cta">All Tools</Link>
          </div>
        </div>
      </header>

      <main style={{ padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Tools
              </Link>
            </div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-4)',
            }}>
              About ToolMint
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              Free tools, no clutter, no paywalls.
            </p>
          </div>

          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            marginBottom: 'var(--space-6)',
          }}>
            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                Our Mission
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                ToolMint was built on a simple idea: everyone deserves access to powerful tools without friction. We&apos;re building a suite of 100+ free online utilities covering SEO, PDF processing, image manipulation, AI writing, QR codes, developer utilities, and more — all working directly in your browser, with no signup and no limits.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                Why ToolMint?
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-5)' }}>
                Most free tool websites are cluttered with ads, require accounts, impose usage limits, or watermark your output. We built ToolMint to be different:
              </p>
              <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <li><strong style={{ color: 'var(--color-text)' }}>No signup required</strong> — open any tool and start using it instantly.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>No usage limits</strong> — process as many files or queries as you need.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>No watermarks</strong> — your output stays yours.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Privacy-first</strong> — most tools process everything locally in your browser. Your data never touches our servers.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Fast and clean</strong> — no pop-ups, no interstitials, no tracking.</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                What We Offer
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                Our toolkit spans eight categories:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                {[
                  { cat: 'SEO Tools', desc: 'Keyword research, rank tracking, meta analyzers' },
                  { cat: 'PDF Tools', desc: 'Merge, split, compress, convert PDFs' },
                  { cat: 'Image Tools', desc: 'Compress, resize, convert, optimize images' },
                  { cat: 'AI Writing', desc: 'Generate, rewrite, and summarize content' },
                  { cat: 'Developer Tools', desc: 'JSON formatter, regex tester, base64 encoder' },
                  { cat: 'QR Codes', desc: 'Generate and decode QR codes instantly' },
                  { cat: 'Unit Converters', desc: 'Length, weight, temperature, and more' },
                  { cat: 'Content Tools', desc: 'Word counters, readability checkers' },
                ].map(item => (
                  <div key={item.cat} style={{
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-4)',
                  }}>
                    <div style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '4px' }}>{item.cat}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                Our Values
              </h2>
              <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <li><strong style={{ color: 'var(--color-text)' }}>Free forever.</strong> We will never put a paywall in front of our core tools.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Privacy by design.</strong> Where possible, we process data in your browser so it never leaves your device.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Transparency.</strong> No dark patterns, no hidden data collection, no misleading tool counts.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Open improvement.</strong> We listen to user feedback and ship improvements quickly.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                Get in Touch
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                Have feedback, a tool suggestion, or found a bug? We&apos;d love to hear from you.
              </p>
              <p style={{ color: 'var(--color-text)', fontWeight: 500 }}>
                Email: <a href="mailto:hello@toolmint.io" style={{ color: 'var(--color-primary)' }}>hello@toolmint.io</a>
              </p>
            </section>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-4)',
            textAlign: 'center',
          }}>
            {[
              { number: '100+', label: 'Free Tools' },
              { number: '50K+', label: 'Monthly Users' },
              { number: '8', label: 'Categories' },
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.03em',
                  marginBottom: '4px',
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
