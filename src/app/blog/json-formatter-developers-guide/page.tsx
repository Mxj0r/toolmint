import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Every Developer Needs a JSON Formatter — ToolMint Blog',
  description: 'Debug JSON faster, spot errors instantly, and prettify messy API responses — the tool every developer should have bookmarked.',
};

export default function JsonFormatterGuide() {
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
            <span>Developer Tools</span>
          </div>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span style={{ display: 'inline-block', padding: '4px 12px', background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-5)' }}>Developer Tools</span>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>Why Every Developer Needs a JSON Formatter</h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>Messy API responses, minified config files, copy-pasted payloads from logs — we've all tried to read them. Here's how a good JSON formatter saves hours of debugging time.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}><span>May 3, 2026</span><span>·</span><span>3 min read</span></div>
          </div>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', marginBottom: 'var(--space-10)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <div><p style={{ fontWeight: 600, marginBottom: '4px' }}>Format, validate, and minify JSON</p><p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Free — no signup, works in your browser</p></div>
            <Link href="/tools/json-formatter" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>Open JSON Formatter →</Link>
          </div>
          <div style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>What is JSON and why does it need formatting?</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>JSON (JavaScript Object Notation) is the dominant data format for APIs, config files, and data interchange. When minified it looks like <code style={{ background: 'var(--color-surface-high)', padding: '2px 6px', borderRadius: '4px' }}>{'{"a":1,"b":2,"c":{"d":3}}'}</code> — nearly impossible to read. Formatting it prettifies it with indentation and line breaks so humans can navigate it.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Common debugging tasks a JSON formatter handles</h2>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <li><strong style={{ color: 'var(--color-text)' }}>Validate</strong> — catch syntax errors before your code does. Point out the exact line and character where parsing fails.</li>
              <li><strong style={{ color: 'var(--color-text)' }}>Prettify</strong> — add indentation so you can read nested structures at a glance.</li>
              <li><strong style={{ color: 'var(--color-text)' }}>Minify</strong> — remove whitespace for production. Useful when building API request payloads.</li>
              <li><strong style={{ color: 'var(--color-text)' }}>Path lookup</strong> — navigate to specific keys in deeply nested objects without squinting.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>How to use ToolMint's JSON Formatter</h2>
            <ol style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              <li>Paste any JSON into the left panel</li>
              <li>Instantly see formatted output in the right panel</li>
              <li>Errors are highlighted inline with line numbers</li>
              <li>Use the Minify button to compress for production use</li>
            </ol>
            <p>Works entirely in your browser — no data is sent to any server. Safe for working with sensitive API payloads.</p>
          </div>
          <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>Try the JSON Formatter now</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>Free browser-based tool — paste, validate, and prettify in seconds.</p>
            <Link href="/tools/json-formatter" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>JSON Formatter →</Link>
          </div>
        </div>
      </main>
    </>
  );
}