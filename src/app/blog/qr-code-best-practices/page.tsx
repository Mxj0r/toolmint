import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QR Code Best Practices: 8 Rules for Scannable Codes — ToolMint Blog',
  description: 'Most QR codes fail because of these common mistakes. Learn the right size, contrast, error correction level, and design tips that actually work.',
};

export default function QRCodeBestPractices() {
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
            <span>QR Tools</span>
          </div>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span style={{ display: 'inline-block', padding: '4px 12px', background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-5)' }}>QR Tools</span>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>QR Code Best Practices: 8 Rules for Scannable Codes</h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>A QR code that doesn't scan is worse than no QR code at all. These eight rules cover the technical and design mistakes that cause scan failures — and how to avoid them every time.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}><span>May 1, 2026</span><span>·</span><span>5 min read</span></div>
          </div>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', marginBottom: 'var(--space-10)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <div><p style={{ fontWeight: 600, marginBottom: '4px' }}>Create scannable QR codes in seconds</p><p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Free — no signup, no watermarks</p></div>
            <Link href="/tools/qr-generator" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>Generate QR Code →</Link>
          </div>
          <div style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Rule 1: Size matters — and bigger is always better</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>The minimum recommended size for a QR code is 1×1 cm (0.4 inches). But that's the bare minimum for close-range scanning with a high-quality scanner. For real-world use — menus, posters, business cards — aim for at least 2×2 cm (0.8 inches) printed, or 200×200px digitally. If in doubt, go larger. There is no penalty for a QR code being too big.</p>
            <p style={{ marginBottom: 'var(--space-6)' }}>As a rule of thumb: the distance to scan should be no more than 10× the QR code's dimension. For a 2cm code, maximum comfortable scan distance is about 20cm (8 inches). Scale up accordingly for posters and wall installations.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Rule 2: High contrast is non-negotiable</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>QR codes work by having a scanner distinguish between dark and light modules. Anything that reduces contrast — low-quality printing, similar colors, patterns behind the code — causes failure. The safest combination is a black code on a white background. If you need color, make the background white or very light, and use a dark, saturated color for the code modules.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Rule 3: Use sufficient error correction</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>QR codes have four error correction levels: L (7%), M (15%), Q (25%), H (30%). Higher levels allow more of the code to be damaged or covered and still scan successfully. If you're adding a logo on top of the QR code, or it will be printed on textured material, use Level Q or H. ToolMint's QR Generator defaults to M — upgrade to H for challenging surfaces.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Rule 4: Leave a quiet zone</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>The quiet zone is the blank white border around a QR code. It sounds trivial, but placing a QR code flush against other design elements — text, images, page edges — makes it unscannable. Include at least a 4-module-wide white border on all sides. This is why logos placed inside QR codes need the surrounding error correction to compensate.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Rule 5: Test with multiple phones</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>An iPhone scanner and a Samsung scanner can behave differently. Always test your QR code with at least two different phones — an iPhone and an Android — before printing or publishing. If only one phone can scan it, you have a problem. The code should work universally.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Rule 6: Test print before full run</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>What looks sharp on screen can blur badly in print. Low DPI printing, bleed issues, and ink spread can all break a QR code. Always print a test copy and scan it with phones before committing to a full print run. For outdoor or large format printing, specify 300 DPI minimum.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Rule 7: Keep the URL short</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>The more data a QR code contains, the more modules it has and the denser it becomes. Short URLs are easier to scan and more reliable. Use a URL shortener (like Bitly or TinyURL) to condense long links before encoding them. This also makes the QR code less complex and more robust across print quality variations.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Rule 8: Choose the right use case</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>QR codes work best for: menus, ticketing, product packaging, event registration, WiFi sharing, and linking to reviews or portfolios. They don't work well for: primary navigation on a website (people hate it), time-sensitive transactions (print + scan delay), or audiences unfamiliar with scanning (young kids, elderly). Use them where they genuinely add convenience.</p>
          </div>
          <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>Generate a QR code that actually scans</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>Customize size, color, error correction level, and format. Download as PNG or SVG.</p>
            <Link href="/tools/qr-generator" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>QR Generator →</Link>
          </div>
        </div>
      </main>
    </>
  );
}