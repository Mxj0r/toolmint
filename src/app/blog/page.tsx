import { Metadata } from 'next';
import Link from 'next/link';
import './blog.css';

export const metadata: Metadata = {
  title: 'Blog — ToolMint',
  description: 'SEO guides, how-tos, and tips for getting the most out of ToolMint free online tools. Learn to compress PDFs, boost SEO, and work faster.',
};

const articles = [
  {
    slug: 'how-to-compress-pdf-without-losing-quality',
    title: 'How to Compress a PDF Without Losing Quality',
    excerpt: 'File too big to send? Learn the best way to reduce PDF size while keeping your documents crisp and professional — for free.',
    category: 'PDF Tools',
    readTime: '4 min read',
    date: 'May 12, 2026',
  },
  {
    slug: 'seo-keyword-research-guide',
    title: 'The Complete Keyword Research Guide for Small Businesses',
    excerpt: 'Discover how to find high-volume, low-competition keywords that drive real traffic to your website — without expensive tools.',
    category: 'SEO',
    readTime: '8 min read',
    date: 'May 10, 2026',
  },
  {
    slug: 'compress-images-for-web',
    title: 'How to Compress Images for Web Without Losing Visual Quality',
    excerpt: 'Page speed affects SEO and conversions. Learn exactly how to reduce image file size by 80% while keeping photos looking sharp.',
    category: 'Image Tools',
    readTime: '5 min read',
    date: 'May 8, 2026',
  },
  {
    slug: 'meta-tags-seo-guide',
    title: 'Meta Tags Explained: What Every Website Owner Must Know',
    excerpt: 'Title tags, meta descriptions, and Open Graph — a complete breakdown of the tags that control how your site appears in search and social.',
    category: 'SEO',
    readTime: '6 min read',
    date: 'May 5, 2026',
  },
  {
    slug: 'json-formatter-developers-guide',
    title: 'Why Every Developer Needs a JSON Formatter',
    excerpt: 'Debug JSON faster, spot errors instantly, and prettify messy API responses — the tool every developer should have bookmarked.',
    category: 'Developer Tools',
    readTime: '3 min read',
    date: 'May 3, 2026',
  },
  {
    slug: 'qr-code-best-practices',
    title: 'QR Code Best Practices: 8 Rules for Scannable Codes',
    excerpt: 'Most QR codes fail because of these common mistakes. Learn the right size, contrast, error correction level, and design tips that actually work.',
    category: 'QR Tools',
    readTime: '5 min read',
    date: 'May 1, 2026',
  },
];

export default function BlogPage() {
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

      <main>
        {/* Hero */}
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-inner">
              <div className="blog-hero-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                Free Guides & How-Tos
              </div>
              <h1 className="blog-hero-title">The ToolMint Blog</h1>
              <p className="blog-hero-subtitle">
                Practical guides, SEO tips, and step-by-step tutorials to help you get more out of our free tools.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="blog-grid-section">
          <div className="container">
            <div className="blog-grid">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="blog-card"
                >
                  <div className="blog-card-header">
                    <span className="blog-card-tag">{article.category}</span>
                    <span className="blog-card-read-time">{article.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{article.title}</h2>
                  <p className="blog-card-excerpt">{article.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-date">{article.date}</span>
                    <span className="blog-card-cta">
                      Read guide
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}