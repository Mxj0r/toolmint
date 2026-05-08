'use client';
import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import { TOOLS, CATEGORIES } from '@/lib/tools';

function ToolsContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat') ?? 'all';
  const [activeCat, setActiveCat] = useState(initialCat);

  const filtered = useMemo(() =>
    TOOLS.filter(t => activeCat === 'all' || t.cat === activeCat),
    [activeCat]
  );

  const activeCategoryMeta = CATEGORIES.find(c => c.id === activeCat);

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
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </nav>
            <Link href="/" className="header-cta">All Tools</Link>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          {/* Page header */}
          <div style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-4)',
            }}>
              {activeCat === 'all' ? 'All Free Tools' : activeCategoryMeta?.name ?? 'Tools'}
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto' }}>
              {activeCat === 'all'
                ? '100+ free online tools — no signup, no limits.'
                : activeCategoryMeta?.desc ?? ''}
            </p>
          </div>

          {/* Category filters */}
          <div className="tool-filters" style={{ marginBottom: 'var(--space-10)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className={`filter-btn ${activeCat === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCat('all')}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCat === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCat(cat.id)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Tool count */}
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', fontSize: '0.9rem' }}>
            Showing {filtered.length} tool{filtered.length !== 1 ? 's' : ''}
            {activeCat !== 'all' && ` in ${activeCategoryMeta?.name ?? activeCat}`}
          </p>

          {/* Tools grid */}
          <div className="tool-grid">
            {filtered.map(tool => (
              <Link key={tool.id} href={`/tools/${tool.id}`} className="tool-card">
                <div className="tool-card-header">
                  <div className="tool-icon-sm" style={{ background: `${tool.color}18` }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={tool.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                    </svg>
                  </div>
                  {tool.tags.includes('popular') && <span className="tag tag-popular">Popular</span>}
                  {tool.tags.includes('ai') && <span className="tag tag-ai">AI</span>}
                  {tool.tags.includes('new') && <span className="tag tag-new">New</span>}
                </div>
                <div className="tool-card-name">{tool.name}</div>
                <div className="tool-card-desc">{tool.desc}</div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-text-muted)' }}>
              <p style={{ fontSize: '1.1rem' }}>No tools found in this category.</p>
              <button
                onClick={() => setActiveCat('all')}
                style={{
                  marginTop: '16px',
                  padding: '10px 24px',
                  background: 'var(--color-primary)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                View all tools
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img src="/logo-mark.svg" alt="ToolMint" width={32} height={32} />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)' }}>Tool<span style={{ color: 'var(--color-primary)' }}>Mint</span></span>
              </Link>
              <p>100+ free online tools for SEO, PDF, images, AI, QR codes, and developer utilities. No signup, no limits.</p>
            </div>
            <div>
              <div className="footer-col-title">Tools</div>
              <ul className="footer-links">
                <li><Link href="/tools/keyword-research">SEO Tools</Link></li>
                <li><Link href="/tools/pdf-merge">PDF Tools</Link></li>
                <li><Link href="/tools/image-compressor">Image Tools</Link></li>
                <li><Link href="/tools/ai-writer">AI Tools</Link></li>
                <li><Link href="/tools/json-formatter">Developer Tools</Link></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Categories</div>
              <ul className="footer-links">
                {CATEGORIES.map(c => (
                  <li key={c.id}><Link href={`/tools?cat=${c.id}`}>{c.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Legal</div>
              <ul className="footer-links">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Use</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} ToolMint. Free forever.</span>
            <span>Built with care · Made for everyone</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function ToolsPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--color-text-muted)' }}>Loading tools...</p>
      </div>
    }>
      <ToolsContent />
    </Suspense>
  );
}