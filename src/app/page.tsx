'use client';
import Link from 'next/link';
import { useState } from 'react';
import { TOOLS, CATEGORIES } from '@/lib/tools';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const filtered = TOOLS.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
                        t.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCat === 'all' || t.cat === activeCat;
    return matchSearch && matchCat;
  });

  return (
    <>
      {/* ── HEADER ── */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="header-logo">
              <img src="/logo-mark.svg" alt="ToolMint" width={36} height={36} />
              <span className="header-logo-text">Tool<span>Mint</span></span>
            </Link>
            <nav>
              <ul className="header-nav">
                <li><Link href="/#tools">Tools</Link></li>
                <li><Link href="/#categories">Categories</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </nav>
            <Link href="/#tools" className="header-cta">All Tools</Link>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-badge">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" fill="currentColor"/>
                </svg>
                100% Free · No Signup · No Limits
              </div>
              <h1 className="hero-title">
                The tools you need,<br /><span>all in one place</span>
              </h1>
              <p className="hero-sub">
                100+ free online tools for SEO, PDF, images, AI writing, QR codes and more. No downloads, no signup — just open and use.
              </p>
              <div className="hero-search">
                <input
                  type="text"
                  placeholder="Search tools… try 'JSON formatter' or 'PDF merge'"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { const el = document.querySelector('.tool-grid'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }}
                />
                <button className="btn-primary" onClick={() => { document.querySelector('.tool-grid')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Search
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
              {['JSON Formatter', 'QR Generator', 'PDF Merger', 'AI Writer', 'Password Generator'].map((name, i) => {
                const tool = TOOLS.find(t => t.name === name);
                return tool ? (
                  <Link key={tool.id} href={`/tools/${tool.id}`} style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    padding: '12px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 200ms',
                    animation: `fadeSlideIn 400ms ease-out ${i * 80}ms both`,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: tool.color, flexShrink: 0 }} />
                    {tool.name}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            <div className="stat-item"><strong>100+</strong> Free Tools</div>
            <div className="stat-item"><strong>100%</strong> Free Forever</div>
            <div className="stat-item"><strong>No</strong> Signup Required</div>
          </div>
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <section className="section" id="categories">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-sub">Find the right tool for the job — organized by what you need to do.</p>
          <div className="cat-grid">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} href={`/tools?cat=${cat.id}`} className="cat-card" data-cat={cat.id}>
                <div className="cat-icon">{cat.icon}</div>
                <div className="cat-name">{cat.name}</div>
                <div className="cat-count">{cat.count} tools</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section className="section" id="tools">
        <div className="container">
          <h2 className="section-title">All Tools</h2>
          <p className="section-sub">
            {search ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${search}"` : 'Every tool, free forever.'}
          </p>
          <div className="tool-filters">
            <button className={`filter-btn ${activeCat === 'all' ? 'active' : ''}`} onClick={() => setActiveCat('all')}>All</button>
            {CATEGORIES.map(cat => (
              <button key={cat.id} className={`filter-btn ${activeCat === cat.id ? 'active' : ''}`} onClick={() => setActiveCat(cat.id)}>
                {cat.name}
              </button>
            ))}
          </div>
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
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
              <p style={{ fontSize: '1.1rem' }}>No tools found for <strong style={{ color: 'var(--color-text)' }}>&quot;{search}&quot;</strong></p>
              <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>Try a different search term or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── SEO TEXT ── */}
      <section className="seo-block">
        <div className="container">
          <h2>Free Online Tools for Everyone — No Signup Required</h2>
          <p>
            ToolMint brings together 100+ free online tools covering everything from SEO optimization and PDF management to AI-powered content generation and developer utilities. Whether you&apos;re a marketer looking to audit your website, a developer needing quick code formatting, or a content creator generating copy — ToolMint has it covered.
          </p>
          <p>
            Every tool on ToolMint works directly in your browser. No software to download, no account to create, no watermarks on your output. We built ToolMint because most free tool websites are cluttered, slow, and full of paywalls. This is our answer: clean, fast, and genuinely free forever.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" id="faq">
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know about ToolMint.</p>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                q: 'Do I need to sign up or create an account?',
                a: 'No. Every tool on ToolMint works instantly in your browser. No signup, no email, no watermark — just open and use.',
              },
              {
                q: 'Are these tools really free?',
                a: 'Yes, 100% free. We built ToolMint to be the tool we wished existed — clean, fast, and genuinely free forever. No hidden paywalls.',
              },
              {
                q: 'Is my data safe? Are files uploaded to your servers?',
                a: 'Most tools process everything locally in your browser. For PDF and image tools that need server-side processing, files are handled transiently and never stored permanently. We do not sell or share any data.',
              },
              {
                q: 'Do tools work on mobile and tablet?',
                a: 'Yes. ToolMint is fully responsive — every tool works on desktop, tablet, and mobile devices.',
              },
              {
                q: 'How do I report a bug or request a new tool?',
                a: 'Visit our contact page and send us a message. We read every submission and aim to respond within 48 hours.',
              },
              {
                q: 'How often are new tools added?',
                a: 'We add new tools regularly based on user requests. Follow our blog to stay updated on new releases and feature announcements.',
              },
            ].map((faq, i) => (
              <div key={i} style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    gap: '16px',
                  }}
                >
                  {faq.q}
                  <span style={{
                    flexShrink: 0,
                    fontSize: '1.2rem',
                    color: 'var(--color-primary)',
                    transform: faqOpen === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 200ms ease',
                  }}>+</span>
                </button>
                {faqOpen === i && (
                  <div style={{
                    padding: '0 24px 20px',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}