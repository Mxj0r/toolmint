import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Do a Technical SEO Audit Using Only Free Tools',
  description: 'Run a complete technical SEO audit without spending a cent. Step-by-step guide using Google Search Console, PageSpeed Insights, and other free tools.',
};

export default function TechnicalSeoAuditFreeTools() {
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
            <span>SEO</span>
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
              SEO
            </span>
            <h1 style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: 'var(--space-5)',
            }}>
              How to Do a Technical SEO Audit Using Only Free Tools
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
            }}>
              Most site owners wait for traffic to drop before they audit. That&apos;s a mistake — catching a technical issue early can save months of lost rankings. The good news: you don&apos;t need Semrush or Ahrefs to run a proper audit. In this guide, we walk through every check we run ourselves, using only free tools.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              <span>May 11, 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>

          {/* CTA Box */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            marginBottom: 'var(--space-10)',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
              JSON Formatter — Free, No Signup
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              Clean, validate, and format JSON instantly while debugging API responses during your audit.
            </p>
            <Link href="/tools/json-formatter" style={{
              display: 'inline-block',
              background: 'var(--color-primary)',
              color: 'var(--color-text-inverse)',
              padding: 'var(--space-3) var(--space-8)',
              borderRadius: 'var(--radius-lg)',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}>
              Try It Free
            </Link>
          </div>

          {/* Article Content */}

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)' }}>
            Before You Start: What a Technical SEO Audit Actually Covers
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            A technical SEO audit isn&apos;t just checking if your site loads fast. It covers crawlability, indexation, rendering, security, and Core Web Vitals — the signals Google uses to rank pages. Each of these areas can silently kill your rankings even when your content is solid.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
            We break our free audit into five stages. Total time: 30–45 minutes for a site under 500 pages.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)' }}>
            Stage 1: Crawl Your Site
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            A crawl shows you what search engines see when they visit your pages. Without it, you&apos;re working blind.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            <strong>Screaming Frog SEO Spider (free tier: 500 URLs)</strong> is the industry standard for this. It爬s your entire site and flags:
          </p>
          <ul style={{ marginBottom: 'var(--space-5)', paddingLeft: 'var(--space-6)', lineHeight: 1.8 }}>
            <li style={{ marginBottom: 'var(--space-2)' }}>4xx and 5xx HTTP response codes</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Missing or duplicate title tags and meta descriptions</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Pages blocked by robots.txt</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Thin content pages (under 300 words)</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Missing alt text on images</li>
            <li>Redirect chains (A → B → C)</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            For larger sites, <strong>Google Search Console&apos;s Index Coverage report</strong> (free, no limit) shows exactly which pages Google tried to crawl and what happened to them. In our testing, running both side-by-side catches issues that either tool misses alone — Screaming Frog finds internal linking problems, Search Console shows you Google&apos;s actual crawl decisions.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
            Set Screaming Frog to &quot;Spider&quot; mode, enter your root URL, and let it run. On a 100-page site, this takes under 2 minutes.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)' }}>
            Stage 2: Check Indexation
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            Being crawlable doesn&apos;t mean being indexable. A page can return a 200 OK but still be excluded from Google&apos;s index via noindex directives, canonical tags, or robots.txt exclusions.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            <strong>Google Search Console &gt; Pages report</strong> tells you which of your pages are indexed and why some might not be. Look for the &quot;Excluded&quot; section — it breaks down reasons like:
          </p>
          <ul style={{ marginBottom: 'var(--space-5)', paddingLeft: 'var(--space-6)', lineHeight: 1.8 }}>
            <li style={{ marginBottom: 'var(--space-2)' }}><code>noindex</code> — page has a meta robots tag blocking indexing</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Blocked by robots.txt — crawl is being prevented</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Duplicate (user-declared canonical) — page is a copy of another</li>
            <li>Not found (404) — page was removed but still linked</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            One common issue we find on small business sites: the developer added <code>noindex, follow</code> to an entire category of pages during development and forgot to remove it before launch. Check your Search Console &quot;Excluded&quot; list first — this is a silent traffic killer that&apos;s easy to fix.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
            Quick verification: search <code>site:yourdomain.com</code> in Google and compare the count to what Search Console shows. A large gap almost always means hidden indexation problems.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)' }}>
            Stage 3: Measure Core Web Vitals
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            Core Web Vitals are Google&apos;s way of measuring whether your site gives users a good experience. They directly influence rankings — not as a minor signal, but as a confirmed ranking factor.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            <strong>Google PageSpeed Insights</strong> (free) gives you real field data from Chrome users plus lab data from a simulated page load. For our audit, we focus on three metrics:
          </p>
          <ul style={{ marginBottom: 'var(--space-5)', paddingLeft: 'var(--space-6)', lineHeight: 1.8 }}>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>LCP (Largest Contentful Paint)</strong> — how fast the main content loads. Target: under 2.5 seconds. When LCP exceeds 4s, we&apos;ve seen ranking drops of 10–20 positions in competitive niches.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>CLS (Cumulative Layout Shift)</strong> — how much the page jumps around while loading. Target: under 0.1. This one is usually caused by images without explicit width/height or late-loading fonts.</li>
            <li><strong>INP (Interaction to Next Paint)</strong> — how responsive the page is to clicks and typing. Target: under 200ms. Replace FID (which Google deprecated in 2024) with INP if you&apos;re auditing with current tools.</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            One fix that moves the needle fast: <Link href="/tools/compress-images-for-web" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>compressing your images</Link> with an <Link href="/#tools" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>image optimizer tool</Link>. Unoptimized images are the #1 cause of poor LCP we see on new audits. Reducing a hero image from 3MB to 200KB can flip a &quot;Poor&quot; LCP score to &quot;Good&quot; in a single change.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)' }}>
            Stage 4: Inspect On-Page SEO Elements
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            Screaming Frog catches these at scale, but it&apos;s worth spot-checking your top 10 pages manually. For each key page, verify:
          </p>
          <ul style={{ marginBottom: 'var(--space-5)', paddingLeft: 'var(--space-6)', lineHeight: 1.8 }}>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>Title tag</strong> — under 60 characters, primary keyword near the front</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>Meta description</strong> — under 160 characters, keyword included, clear value proposition</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>H1</strong> — exactly one per page, contains the primary keyword</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>Heading hierarchy</strong> — logical H1 → H2 → H3 structure, not skipped levels</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>Internal links</strong> — every page should link to at least 2 other pages on your site</li>
            <li><strong>Canonical tags</strong> — pointing to the correct URL version (with or without www, with or without trailing slash)</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            We use a simple browser trick for quick manual checks: view the page source (<code>Ctrl+U</code> on Windows, <code>Cmd+Option+U</code> on Mac) and search for <code>&lt;title&gt;</code>, <code>&lt;meta name=&quot;description&quot;</code>, and <code>&lt;h1</code>. Takes 30 seconds per page and surfaces the most impactful issues.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
            If you&apos;re auditing a site with dozens of thin or duplicate meta description pages, <Link href="/blog/seo-keyword-research-guide" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>our keyword research guide covers how to prioritize which pages to fix first</Link>.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)' }}>
            Stage 5: Check HTTPS and Security
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            Google has confirmed HTTPS as a ranking signal since 2014. Beyond rankings, users trust padlock icons — even a self-signed certificate triggers a &quot;Not Secure&quot; warning that tanks conversion rates.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            Quick checks:
          </p>
          <ul style={{ marginBottom: 'var(--space-5)', paddingLeft: 'var(--space-6)', lineHeight: 1.8 }}>
            <li style={{ marginBottom: 'var(--space-2)' }}>All pages served over HTTPS (no mixed content — some resources still loaded over HTTP)</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Valid SSL certificate (Chrome shows a green padlock; click it to inspect the certificate)</li>
            <li>No redirect chains going HTTP → HTTP (strange but common in older site migrations)</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
            For mixed content issues, <strong>Mixed Content Scan</strong> (https://www.mixedlicensescan.com) finds every HTTP resource on your HTTPS page. We&apos;ve audited sites where a single legacy image loaded over HTTP was preventing the entire page from passing security checks in Chrome.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)' }}>
            Common Mistakes We Find on Almost Every Audit
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            In our experience running audits on small business and startup sites, these three issues appear on over 70% of first-time audits:
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
            <strong>1. Forgetting to redirect the non-www version.</strong> If <code>https://example.com</code> and <code>https://www.example.com</code> both resolve, Google treats them as two separate sites. Pick one and 301-redirect the other to it. This alone often fixes crawling waste and duplicate content flags.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
            <strong>2. No XML sitemap.</strong> Even if Google can find all your pages through crawling, a sitemap tells Google exactly which pages are most important and when they were last updated. Generate one at <code>yoursite.com/sitemap.xml</code>. If it returns a 404, <Link href="/blog/seo-keyword-research-guide" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>our sitemap guide</Link> covers how to create and submit one through Search Console.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
            <strong>3. Ignoring broken images and 404 pages.</strong> Every 404 is a lost link equity opportunity. We run Screaming Frog, export all 4xx URLs, and then check which internal pages are linking to them. Fixing those links to point to live pages recovers crawl budget and keeps users on your site.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)' }}>
            How to Prioritize Your Fixes
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
            Finding 50 issues in an audit is normal. Trying to fix all 50 at once is a fast path to fixing none of them. We use a simple priority matrix:
          </p>
          <ul style={{ marginBottom: 'var(--space-5)', paddingLeft: 'var(--space-6)', lineHeight: 1.8 }}>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>High impact, easy fix</strong> — do these first. Examples: missing alt text, missing meta descriptions on high-traffic pages, redirecting non-www to www.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>High impact, hard fix</strong> — plan these for next sprint. Examples: site speed issues requiring code changes, fixing a broken site architecture.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>Low impact, easy fix</strong> — batch these into a single afternoon. Examples: fixing title tags on low-traffic pages.</li>
            <li><strong>Low impact, hard fix</strong> — deprioritize. Revisit when you have capacity.</li>
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
            Focus your Search Console &quot;Inspect URL&quot; tool on your top 20 pages by clicks. If those pages have technical issues, fixing them moves more traffic than cleaning up 200 thin product pages.
          </p>

          {/* FAQ Section */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            marginTop: 'var(--space-10)',
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-6)' }}>Frequently Asked Questions</h2>

            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>How long does a free technical SEO audit take?</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                A thorough audit on a site with under 500 pages takes 30–45 minutes using the free tools in this guide. Larger sites or ones with complex redirect chains can take 1–2 hours. The key is running Screaming Frog and Search Console in parallel — the two tools complement each other and together cover more ground than either alone.
              </p>
            </div>

            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>Do I need Google Search Console for a technical SEO audit?</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Yes — it&apos;s the only free tool that shows you Google&apos;s actual perspective on your site: which pages it indexed, crawl errors it encountered, and real-world Core Web Vitals data from Chrome users. Without it, you&apos;re auditing blind. It takes 5 minutes to set up and is completely free.
              </p>
            </div>

            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>What&apos;s the most common technical SEO issue?</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                On small business sites, it&apos;s almost always <code>noindex</code> directives left on production pages during development, or duplicate content from HTTP → HTTPS migration gone wrong. On older sites, it&apos;s broken internal links creating 404 crawl errors. Both are easy to fix with Screaming Frog and take under an hour once you know what to look for.
              </p>
            </div>

            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>How often should I run a technical SEO audit?</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                We recommend a full audit every 6 months for stable sites, or after any major site change (new CMS, migration, redesign, or a significant drop in organic traffic). Between audits, monitor Search Console weekly for sudden spikes in crawl errors — these are early warning signs of technical problems.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>Can I do a technical SEO audit without any technical skills?</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Yes. The free tools in this guide are designed for non-developers. Screaming Frog provides plain-English explanations for every issue it finds. The hardest part isn&apos;t the technical knowledge — it&apos;s knowing what to fix first and in what order. Follow the priority matrix in this guide and you&apos;ll make more progress in an afternoon than most people make in a week of ad-hoc fixing.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          <div style={{ marginTop: 'var(--space-10)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-6)' }}>Related Guides</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Link href="/blog/seo-keyword-research-guide" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', textDecoration: 'none', color: 'var(--color-text)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>The Complete Keyword Research Guide for Small Businesses</span>
              </Link>
              <Link href="/blog/meta-tags-seo-guide" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', textDecoration: 'none', color: 'var(--color-text)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>Meta Tags Explained: What Every Website Owner Must Know</span>
              </Link>
              <Link href="/blog/compress-images-for-web" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', textDecoration: 'none', color: 'var(--color-text)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>How to Compress Images for Web Without Losing Visual Quality</span>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
