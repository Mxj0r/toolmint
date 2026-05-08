import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Complete Keyword Research Guide for Small Businesses — ToolMint Blog',
  description: 'Discover how to find high-volume, low-competition keywords that drive real traffic to your website without expensive tools.',
};

export default function KeywordResearchGuide() {
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
          <div style={{ marginBottom: 'var(--space-8)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            <Link href="/blog" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>Blog</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            <span>SEO</span>
          </div>

          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span style={{ display: 'inline-block', padding: '4px 12px', background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-5)' }}>SEO</span>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>The Complete Keyword Research Guide for Small Businesses</h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>You don't need Ahrefs or SEMrush to find keywords that bring real visitors. Here's a practical, free methodology that works for local businesses and lean teams.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              <span>May 10, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', marginBottom: 'var(--space-10)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '4px' }}>Try it free — no account needed</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Find keyword ideas and analyze competition instantly</p>
            </div>
            <Link href="/tools/keyword-research" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>Keyword Research Tool →</Link>
          </div>

          <div style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>What keyword research actually means</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>Keyword research is the process of finding the words and phrases people type into Google when looking for something you offer. The goal isn't just volume — it's finding keywords where searchers are genuinely close to taking action (hiring, buying, booking) and where you have a realistic chance of ranking.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>The three types of keywords you need</h2>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <li><strong style={{ color: 'var(--color-text)' }}>Head terms</strong> — short, high-volume keywords like "plumber" or "SEO tools." Nearly impossible for new sites to rank for. Useful for brand awareness only.</li>
              <li><strong style={{ color: 'var(--color-text)' }}>Body keywords</strong> — 2–3 word phrases with decent search volume and moderate competition. Example: "emergency plumber London" or "PDF compressor online."</li>
              <li><strong style={{ color: 'var(--color-text)' }}>Long-tail keywords</strong> — 4+ word specific phrases. Lower volume individually, but combined they drive the majority of search traffic. Often the best ROI for small businesses.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Step 1: Brainstorm seed keywords</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>Start with what you sell. Write down the categories, products, and services you offer. For each, think about the problem it solves and the outcome it delivers. Example for a local electrician:</p>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
              <li>Services: fuse box repair, rewiring, socket installation, EV charger setup</li>
              <li>Problems: tripping breaker, flickering lights, power outage, high electric bill</li>
              <li>Outcomes: safe home, lower bills, compliant with regulations, faster sale</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Step 2: Expand with free tools</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>Plug your seed keywords into ToolMint's Keyword Research Tool to get related searches, volume estimates, and competition scores. Also use Google's autocomplete — type your seed into Google and note the suggestions. These are real queries people are searching.</p>
            <p style={{ marginBottom: 'var(--space-4)' }}>Also check the "People also ask" and "Related searches" sections on Google's results page — each is a keyword cluster worth exploring.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Step 3: Evaluate keyword difficulty</h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>A keyword with 1,000 monthly searches is worthless if you'd need 200 backlinks to rank for it. ToolMint's keyword tool shows a difficulty score — but as a rough guide:</p>
            <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <li><strong style={{ color: 'var(--color-text)' }}>0–30 difficulty</strong> — accessible for new pages with decent content</li>
              <li><strong style={{ color: 'var(--color-text)' }}>31–60 difficulty</strong> — requires some backlinks and time</li>
              <li><strong style={{ color: 'var(--color-text)' }}>60+ difficulty</strong> — established competitors; consider long-tail variants</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>Step 4: Match intent, not just words</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>"SEO software" and "best SEO tools for small business" might look similar on paper but attract very different searchers. The first could be a researcher; the second is likely ready to buy or sign up. Prioritize keywords where the searcher is clearly in buying mode or close to it. Questions starting with "how to," "best," or "vs" are often high-intent.</p>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-5)' }}>How many keywords should you target?</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>Focus on 3–5 primary keywords per page. Trying to rank for 20 keywords on one page dilutes your relevance signal. Build a separate page or article for each distinct keyword cluster. For a small business with 5–10 service pages, you can realistically cover a meaningful portion of your market's search intent.</p>
          </div>

          <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>Start your keyword research now</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>Free tool — no signup, no limits. Get volume, competition, and related keywords in seconds.</p>
            <Link href="/tools/keyword-research" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none' }}>Try Keyword Research Tool →</Link>
          </div>

          <div style={{ marginTop: 'var(--space-10)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-5)' }}>More guides</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[{ href: '/blog/meta-tags-seo-guide', title: 'Meta Tags Explained: What Every Website Owner Must Know' }, { href: '/blog/compress-images-for-web', title: 'How to Compress Images for Web Without Losing Visual Quality' }].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 500 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>{item.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}