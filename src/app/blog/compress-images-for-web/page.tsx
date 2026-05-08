import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Compress Images for Web Without Losing Visual Quality — ToolMint Blog',
  description: 'Page speed affects SEO and conversions. Learn exactly how to reduce image file size by 80% while keeping photos sharp.',
};

export default function CompressImagesGuide() {
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
            <span>Image Tools</span>
          </div>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span style={{ display: 'inline-block', padding: '4px 12px', background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-5)' }}>Image Tools</span>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>How to Compress Images for Web Without Losing Visual Quality</h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>Every extra second of load time costs you visitors. Here's the exact process to get images 60–80% smaller with no visible quality loss — using free tools.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}><span>May 8, 2026</span><span>·</span><span>5 min read</span></div>
          </div>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', marginBottom: 'var(--space-10)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <div><p style={{ fontWeight: 600, marginBottom: '4px' }}>Try it free</p><p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Reduce image file size by up to 80%</p></div>
            <Link href="/tools/image-compressor" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>Compress Images Free →</Link>
          </div>
          <div style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Why image size matters for your website</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>Images typically make up 50–80% of a webpage's total size. A 3MB hero image alone can push your load time past the 3-second threshold where visitors abandon you. Google uses page speed as a ranking factor — slow sites rank lower, get fewer clicks, and convert less.</p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Choose the right format first</h2>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <li><strong style={{ color: 'var(--color-text)' }}>JPEG</strong> — photographs, screenshots, any image with many colors. Use 80% quality for web; you won't see the difference but you'll cut size in half.</li>
              <li><strong style={{ color: 'var(--color-text)' }}>PNG</strong> — logos, icons, images that need transparency. Only use for these — PNGs are 2–5x larger than JPEGs of similar visual quality.</li>
              <li><strong style={{ color: 'var(--color-text)' }}>WebP</strong> — modern format, 30% smaller than JPEG at equivalent quality. Supported by all modern browsers. Use as your default when possible.</li>
            </ul>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Resize to the right dimensions</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>Don't upload a 4000px wide photo to display at 800px. Resize images to exactly the maximum width they'll display. For most websites, 1200–1600px is sufficient for hero images, 600–800px for content images. Use ToolMint's Image Resizer to set exact pixel dimensions before compressing.</p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>The compression workflow</h2>
            <ol style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              <li><strong style={{ color: 'var(--color-text)' }}>Resize</strong> — set the maximum display width using <Link href="/tools/image-resizer" style={{ color: 'var(--color-primary)' }}>Image Resizer</Link></li>
              <li><strong style={{ color: 'var(--color-text)' }}>Compress</strong> — run through <Link href="/tools/image-compressor" style={{ color: 'var(--color-primary)' }}>Image Compressor</Link> at 80% quality</li>
              <li><strong style={{ color: 'var(--color-text)' }}>Convert to WebP</strong> — use the JPG↔PNG converter to convert to WebP for even smaller files</li>
            </ol>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Typical results</h2>
            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', marginBottom: 'var(--space-6)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', textAlign: 'center' }}>
              {[{ before: '2.4 MB', after: '420 KB', label: 'Product photo (1200px)' }, { before: '1.1 MB', after: '180 KB', label: 'Blog hero image' }, { before: '890 KB', after: '110 KB', label: 'Team photo' }].map((r) => <div key={r.label}><div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)' }}>{r.after}</div><div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>from {r.before}</div><div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{r.label}</div></div>)}
            </div>
          </div>
          <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>Compress your images now</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>Free, takes under 10 seconds, no signup required.</p>
            <Link href="/tools/image-compressor" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>Compress Images Free →</Link>
          </div>
        </div>
      </main>
    </>
  );
}