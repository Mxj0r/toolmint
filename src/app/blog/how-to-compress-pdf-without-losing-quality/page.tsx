import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Compress a PDF Without Losing Quality — ToolMint Blog',
  description: 'Discover the best way to reduce PDF file size while keeping your documents crisp and professional — completely free with ToolMint\'s PDF compressor.',
};

export default function CompressPdfGuide() {
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

      <main style={{ padding: 'var(--space-12) 0 var(--space-16)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: 'var(--space-8)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            <Link href="/blog" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>Blog</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            <span>PDF Tools</span>
          </div>

          {/* Article Header */}
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-5)',
            }}>
              PDF Tools
            </span>
            <h1 style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: 'var(--space-5)',
            }}>
              How to Compress a PDF Without Losing Quality
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
            }}>
              File too big to email? A 20MB PDF doesn't need to stay that way. This guide walks you through compressing PDFs effectively — and which settings to avoid so your documents stay crisp.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              <span>May 12, 2026</span>
              <span>·</span>
              <span>4 min read</span>
            </div>
          </div>

          {/* CTA Box */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-6)',
            marginBottom: 'var(--space-10)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
          }}>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '4px' }}>Try it now — free, no signup</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Compress PDFs up to 80% smaller in seconds</p>
            </div>
            <Link href="/tools/pdf-compress" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'var(--color-primary)',
              color: '#fff',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              flexShrink: 0,
            }}>
              Compress PDF Free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Article Content */}
          <div style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1rem' }}>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>
              Why PDFs get so large
            </h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>
              A PDF from a designer or a scanned document can easily be 10–50MB. The most common causes are high-resolution images embedded at full quality, uncompressed fonts, and unnecessary metadata from Adobe software. Understanding what's bloating your file helps you choose the right compression level.
            </p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>
              The three types of PDF compression
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>PDF compression falls into three categories, and choosing the right one matters:</p>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <li><strong style={{ color: 'var(--color-text)' }}>Lossy compression</strong> — dramatically reduces file size by removing image data permanently. Use for screenshotted or web-born images. Avoid for print-ready documents.</li>
              <li><strong style={{ color: 'var(--color-text)' }}>Lossless compression</strong> — shrinks the file by reorganizing data without removing anything. Ideal for documents with text, charts, and vector graphics. Quality is preserved exactly.</li>
              <li><strong style={{ color: 'var(--color-text)' }}>Remove metadata / flatten layers</strong> — strips hidden data, comments, and embedded print production info that inflate file size without affecting the visible document.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>
              Step-by-step: compress a PDF with ToolMint
            </h2>
            <ol style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              <li style={{ paddingLeft: 'var(--space-2)' }}><strong style={{ color: 'var(--color-text)' }}>Go to</strong> <Link href="/tools/pdf-compress" style={{ color: 'var(--color-primary)' }}>toolmint.io/tools/pdf-compress</Link> — no signup required</li>
              <li style={{ paddingLeft: 'var(--space-2)' }}><strong style={{ color: 'var(--color-text)' }}>Upload</strong> your PDF file (drag and drop or click to browse)</li>
              <li style={{ paddingLeft: 'var(--space-2)' }}><strong style={{ color: 'var(--color-text)' }}>Choose</strong> your compression level — <em>Extreme</em> for smallest size, <em>Balanced</em> for most documents</li>
              <li style={{ paddingLeft: 'var(--space-2)' }}><strong style={{ color: 'var(--color-text)' }}>Click</strong> Compress and wait a few seconds</li>
              <li style={{ paddingLeft: 'var(--space-2)' }}><strong style={{ color: 'var(--color-text)' }}>Download</strong> your compressed file — no watermarks, no limits</li>
            </ol>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>
              When NOT to compress
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>For print production — brochures, business cards, high-resolution photo PDFs — you should avoid heavy compression. The settings to watch out for:</p>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <li>Images downsampled below 300 DPI</li>
              <li>JPEG quality below 80% for photo content</li>
              <li>Font subsetting that breaks character support</li>
            </ul>
            <p>For digital use — emails, web uploads, sharing — extreme compression is perfectly fine and your recipients will thank you for the small file size.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>
              How much can you reduce?
            </h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>Typical results from our PDF compressor:</p>
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)',
              marginBottom: 'var(--space-6)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-4)',
              textAlign: 'center',
            }}>
              {[
                { before: '20 MB', after: '4 MB', label: 'Scanned document' },
                { before: '8 MB', after: '1.5 MB', label: 'Presentation deck' },
                { before: '12 MB', after: '3 MB', label: 'Image-heavy report' },
              ].map((row) => (
                <div key={row.label}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>{row.after}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>from {row.before}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{row.label}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>
              Batch compress multiple PDFs
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Need to compress dozens of files? ToolMint's PDF compressor handles multiple files in one go. Upload up to 20 PDFs, set your compression level once, and download a merged single file — or each file individually. No software to install, no account needed.
            </p>
            <p>For recurring workflows, you can open the page on any device — phone, tablet, work laptop — and compress files on the go.</p>
          </div>

          {/* Bottom CTA */}
          <div style={{
            marginTop: 'var(--space-12)',
            padding: 'var(--space-8)',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>
              Ready to compress your first PDF?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>Free, no signup, no watermarks — takes about 10 seconds.</p>
            <Link href="/tools/pdf-compress" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              background: 'var(--color-primary)',
              color: '#fff',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}>
              Compress PDF Now — It's Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Related Articles */}
          <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-5)' }}>More guides</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[
                { href: '/blog/seo-keyword-research-guide', title: 'The Complete Keyword Research Guide for Small Businesses' },
                { href: '/blog/compress-images-for-web', title: 'How to Compress Images for Web Without Losing Visual Quality' },
                { href: '/blog/meta-tags-seo-guide', title: 'Meta Tags Explained: What Every Website Owner Must Know' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-4)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'border-color var(--transition-fast)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}