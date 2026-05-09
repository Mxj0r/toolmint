import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { TOOLS, getToolById, getToolsByCat, CATEGORY_META } from '@/lib/tools';
import { SEO_DESCRIPTIONS } from '@/lib/seo-descriptions';
import ToolUI from '@/components/tools/ToolUI';

interface Props {
  params: Promise<{ slug: string }>;
}

// ── Static paths ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return TOOLS.map(tool => ({ slug: tool.id }));
}

// ── Per-tool metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolById(slug);
  if (!tool) return {};

  const catMeta = CATEGORY_META[tool.cat];
  const colorHex = catMeta?.color ?? '#00E5A0';

  return {
    title: `${tool.name} — Free Online Tool`,
    description: `${tool.desc} Use this free ${tool.name} tool on ToolMint. No signup required.`,
    keywords: [tool.name, tool.desc, 'free online tool', 'toolmint'],
    openGraph: {
      title: `${tool.name} | ToolMint`,
      description: `${tool.desc} — Free, instant, no signup needed.`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${tool.name} | ToolMint`,
      description: tool.desc,
    },
    other: {
      'theme-color': colorHex,
    },
  };
}

// ── Tool placeholder component ────────────────────────────────────────────────
function ToolPlaceholder({ toolId }: { toolId: string }) {
  return (
    <div className={`tool-placeholder ${toolId}`}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '320px',
        gap: '16px',
        color: 'var(--color-text-muted)',
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '8px' }}>
            Tool coming soon
          </p>
          <p style={{ fontSize: '0.9rem', maxWidth: '340px' }}>
            This tool is being built. Check back soon — it&apos;ll be live and free, like everything on ToolMint.
          </p>
        </div>
        <Link href="/" className="btn-secondary" style={{ marginTop: '8px' }}>
          Browse all tools
        </Link>
      </div>
    </div>
  );
}

// ── Page component ───────────────────────────────────────────────────────────
export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolById(slug);

  if (!tool) notFound();

  const catMeta = CATEGORY_META[tool.cat];
  const related = getToolsByCat(tool.cat)
    .filter(t => t.id !== tool.id)
    .slice(0, 5);

  return (
    <>
      {/* ── HEADER ── */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="header-logo">
              <Image src="/logo-mark.svg" alt="ToolMint" width={36} height={36} />
              <span className="header-logo-text">Tool<span>Mint</span></span>
            </Link>
            <nav>
              <ul className="header-nav">
                <li><Link href="/#tools">Tools</Link></li>
                <li><Link href="/#categories">Categories</Link></li>
              </ul>
            </nav>
            <Link href="/#tools" className="header-cta">All Tools</Link>
          </div>
        </div>
      </header>

      {/* ── TOOL PAGE ── */}
      <main className="tool-page">
        <div className="container">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-5)', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: 'var(--color-text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--color-text-muted)', margin: '0 8px' }}>›</span>
            <Link href="/#categories" style={{ color: 'var(--color-text-muted)' }}>
              {catMeta ? catMeta.title.split(' ')[0] + ' ' + catMeta.title.split(' ')[1] : tool.cat}
            </Link>
            <span style={{ color: 'var(--color-text-muted)', margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--color-text)' }}>{tool.name}</span>
          </nav>

          {/* Page header */}
          <div className="tool-page-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-4)' }}>
              <div
                className="tool-icon-sm"
                style={{ background: `${tool.color}18`, width: '52px', height: '52px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={tool.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              {tool.tags.map(tag => {
                if (tag === 'popular') return <span key="popular" className="tag tag-popular">Popular</span>;
                if (tag === 'ai') return <span key="ai" className="tag tag-ai">AI</span>;
                if (tag === 'new') return <span key="new" className="tag tag-new">New</span>;
                return null;
              })}
            </div>
            <h1 className="tool-page-title">{tool.name}</h1>
            <p className="tool-page-desc">{tool.desc}</p>
          </div>

          {/* Tool layout */}
          <div className="tool-layout">

            {/* Main content area */}
            <div className="tool-main">
              <ToolUI toolId={tool.id} />

              {/* SEO Description */}
              {SEO_DESCRIPTIONS[tool.id] && (
                <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--color-border)' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
                    About the {tool.name}
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 'var(--space-4)' }}>
                    {SEO_DESCRIPTIONS[tool.id].intro}
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 'var(--space-4)' }}>
                    {SEO_DESCRIPTIONS[tool.id].body}
                  </p>
                  {SEO_DESCRIPTIONS[tool.id].example && (
                    <div style={{
                      background: 'var(--color-surface-high)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-4)',
                      marginTop: 'var(--space-4)',
                    }}>
                      <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>
                        Example
                      </p>
                      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.9rem', fontStyle: 'italic' }}>
                        {SEO_DESCRIPTIONS[tool.id].example}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="tool-sidebar">

              {/* Related tools */}
              {related.length > 0 && (
                <div className="sidebar-card">
                  <div className="sidebar-card-title">More {catMeta?.title?.split(' ').slice(2).join(' ') ?? tool.cat} Tools</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {related.map(t => (
                      <Link
                        key={t.id}
                        href={`/tools/${t.id}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '8px 10px',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--color-bg)',
                          border: '1px solid var(--color-border)',
                          textDecoration: 'none',
                          transition: 'all var(--transition-fast)',
                          color: 'var(--color-text)',
                        }}
                      >
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{t.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to category */}
              <div className="sidebar-card">
                <div className="sidebar-card-title">Browse</div>
                <Link
                  href="/#categories"
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  ← All Categories
                </Link>
              </div>

            </aside>
          </div>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-muted)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <span>© {new Date().getFullYear()} ToolMint. Free forever.</span>
            <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
              <Link href="/privacy" style={{ color: 'var(--color-text-muted)' }}>Privacy</Link>
              <Link href="/terms" style={{ color: 'var(--color-text-muted)' }}>Terms</Link>
              <Link href="/" style={{ color: 'var(--color-text-muted)' }}>Home</Link>
            </div>
          </div>
        </div>
      </footer>
      <style>{`
        .related-tool-link:hover { border-color: var(--color-primary) !important; }
        .popular-link:hover { border-color: var(--color-primary) !important; background: var(--color-surface-high) !important; }
      `}</style>
    </>
  );
}