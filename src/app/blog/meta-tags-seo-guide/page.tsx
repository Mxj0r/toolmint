import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Meta Tags Explained: What Every Website Owner Must Know — ToolMint Blog',
  description: 'Title tags, meta descriptions, and Open Graph — a complete breakdown of the tags that control how your site appears in search and social.',
};

export default function MetaTagsGuide() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="header-logo"><img src="/logo-mark.svg" alt="ToolMint" width={36} height={36} /><span className="header-logo-text">Tool<span>Mint</span></span></Link>
            <nav><ul className="header-nav"><li><Link href="/">Home</Link></li><li><Link href="/#tools">Tools</Link></li><li><Link href="/about">About</Link></li><li><Link href="/contact">Contact</Link></li></ul></nav>
            <Link href="/" className="header-cta">All Tools</Link>
          </div>
        </div>
      </header>
      <main style={{ padding: 'var(--space-12) 0 var(--space-16)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ marginBottom: 'var(--space-8)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            <Link href="/blog" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>Blog</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            <span>SEO</span>
          </div>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span style={{ display: 'inline-block', padding: '4px 12px', background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-5)' }}>SEO</span>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>Meta Tags Explained: What Every Website Owner Must Know</h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>The title tag and meta description are your first impression in Google. This guide covers every meta tag that matters — and how to write ones that actually get clicked.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}><span>May 5, 2026</span><span>·</span><span>6 min read</span></div>
          </div>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', marginBottom: 'var(--space-10)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <div><p style={{ fontWeight: 600, marginBottom: '4px' }}>Generate optimized meta tags instantly</p><p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Free tool — enter your keyword, get ready-to-use tags</p></div>
            <Link href="/tools/meta-tag-generator" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>Meta Tag Generator →</Link>
          </div>
          <div style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>The title tag — your most important meta tag</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>The title tag appears in three places: the browser tab, the clickable blue link in Google search results, and social shares when no Open Graph tag is set. It is the single most important on-page SEO element.</p>
            <p style={{ marginBottom: 'var(--space-5)' }}><strong style={{ color: 'var(--color-text)' }}>Character limit:</strong> 50–60 characters. Beyond that, Google cuts it off with "..." — and your message is lost.</p>
            <p style={{ marginBottom: 'var(--space-5)' }}><strong style={{ color: 'var(--color-text)' }}>Format that works:</strong> <code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>Primary Keyword | Brand Name</code> — or <code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>How to [do something] | Brand</code></p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>The meta description — your ad copy</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>The meta description doesn't directly affect your Google ranking. But it directly affects your click-through rate. A compelling description gets more clicks, which signals to Google your result is relevant — indirectly helping rankings.</p>
            <p style={{ marginBottom: 'var(--space-5)' }}><strong style={{ color: 'var(--color-text)' }}>Character limit:</strong> 150–160 characters. Same truncation rules apply.</p>
            <p style={{ marginBottom: 'var(--space-5)' }}>Write it like an ad: lead with the benefit, include a subtle call to action, and naturally incorporate your target keyword so searchers see it highlighted.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Open Graph tags — how you look on social</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>When someone shares your page on Facebook, LinkedIn, or X (Twitter), Open Graph tags control what image, title, and description appear. Without them, social platforms scrape your page and often pick the wrong image or description.</p>
            <p style={{ marginBottom: 'var(--space-5)' }}>The four essential Open Graph tags:</p>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <li><code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>og:title</code> — title shown on social (can differ from title tag)</li>
              <li><code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>og:description</code> — description shown on social</li>
              <li><code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>og:image</code> — the image card (use 1200×630px for best results)</li>
              <li><code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>og:url</code> — the canonical URL</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Twitter Cards</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>X (Twitter) uses its own card tags. If you set Open Graph tags, Twitter will usually fall back to those — but explicitly setting Twitter Card tags ensures your image and description appear correctly when your link is shared.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Other meta tags worth knowing</h2>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <li><code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>viewport</code> — essential for mobile responsiveness</li>
              <li><code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>robots</code> — control indexing behavior (e.g., <code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>noindex, nofollow</code> for thank-you pages)</li>
              <li><code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem' }}>canonical</code> — tells Google the preferred URL version to index (critical for duplicate content issues)</li>
            </ul>
          </div>
          <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>Generate meta tags in seconds</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>Enter your page topic and target keyword — get fully optimized title, description, and Open Graph tags.</p>
            <Link href="/tools/meta-tag-generator" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>Meta Tag Generator →</Link>
          </div>
        </div>
      </main>
    </>
  );
}