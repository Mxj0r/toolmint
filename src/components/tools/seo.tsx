'use client';
import { useState, useEffect } from 'react';

type SeoTool = 'meta' | 'robots' | 'slug' | 'density' | 'headings' | 'serp';

// ─── Main SEO Tools Component with Tabs ───
const SEO_TOOL_TAB_MAP: Record<string, SeoTool> = {
  'keyword-research': 'density',
  'meta-tag-generator': 'meta',
  'robots-txt-generator': 'robots',
  'url-slug-generator': 'slug',
  'heading-analyzer': 'headings',
  'sitemap-generator': 'density',
  'broken-link-checker': 'serp',
};

interface SeoToolsProps { toolId?: string }

export function SeoTools({ toolId }: SeoToolsProps) {
  const getInitialTab = (): SeoTool => {
    if (toolId && toolId in SEO_TOOL_TAB_MAP) return SEO_TOOL_TAB_MAP[toolId];
    return 'meta';
  };
  const [activeTab, setActiveTab] = useState<SeoTool>(getInitialTab);

  // Sync tab after hydration — fixes SSG where toolId is undefined at render time
  useEffect(() => {
    const tab = getInitialTab();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- tab derived from static prop, runs once
    setActiveTab(tab);
  }, [toolId]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '20px' },
    tabs: { display: 'flex', gap: '8px', flexWrap: 'wrap', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' },
    tab: { padding: '10px 18px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', transition: 'all 150ms' },
    tabActive: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: '1px solid var(--color-primary)' },
    content: { minHeight: '300px' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.tabs}>
        <button style={{ ...styles.tab, ...(activeTab === 'meta' ? styles.tabActive : {}) }} onClick={() => setActiveTab('meta')}>🏷️ Meta Tags</button>
        <button style={{ ...styles.tab, ...(activeTab === 'robots' ? styles.tabActive : {}) }} onClick={() => setActiveTab('robots')}>🤖 Robots.txt</button>
        <button style={{ ...styles.tab, ...(activeTab === 'slug' ? styles.tabActive : {}) }} onClick={() => setActiveTab('slug')}>🔗 URL Slug</button>
        <button style={{ ...styles.tab, ...(activeTab === 'density' ? styles.tabActive : {}) }} onClick={() => setActiveTab('density')}>📊 Density</button>
        <button style={{ ...styles.tab, ...(activeTab === 'headings' ? styles.tabActive : {}) }} onClick={() => setActiveTab('headings')}>📑 Headings</button>
        <button style={{ ...styles.tab, ...(activeTab === 'serp' ? styles.tabActive : {}) }} onClick={() => setActiveTab('serp')}>🔍 SERP Preview</button>
      </div>
      <div style={styles.content}>
        {activeTab === 'meta' && <MetaTagGenerator />}
        {activeTab === 'robots' && <RobotsTxtGenerator />}
        {activeTab === 'slug' && <UrlSlugGenerator />}
        {activeTab === 'density' && <KeywordDensityChecker />}
        {activeTab === 'headings' && <HeadingAnalyzer />}
        {activeTab === 'serp' && <SerpPreview />}
      </div>
      <style>{`
        button:not(:disabled):hover { opacity: 0.85; }
        button:active:not(:disabled) { transform: scale(0.98); }
        textarea:focus, input:focus { border-color: var(--color-primary) !important; }
      `}</style>
    </div>
  );
}

// ─── Meta Tag Generator ───
export function MetaTagGenerator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [ogType, setOgType] = useState('website');
  const [output, setOutput] = useState('');

  const generate = () => {
    const truncatedDesc = description.slice(0, 160);
    const tags = `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${truncatedDesc}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="${ogType}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${truncatedDesc}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url}">
<meta property="twitter:title" content="${title}">
<meta property="twitter:description" content="${truncatedDesc}">`;
    setOutput(tags);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', transition: 'border-color 150ms' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '100px', fontFamily: 'var(--font-mono)' },
    select: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text)', whiteSpace: 'pre-wrap', wordBreak: 'break-all' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
    charCount: { fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'right' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Page Title</label>
          <input style={styles.input} placeholder="Your page title (50-60 chars)" value={title} onChange={e => setTitle(e.target.value)} maxLength={60} />
        </div>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Page URL</label>
          <input style={styles.input} placeholder="https://example.com/page" value={url} onChange={e => setUrl(e.target.value)} />
        </div>
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Meta Description</label>
        <textarea style={styles.textarea} placeholder="Write a compelling description (150-160 chars)..." value={description} onChange={e => setDescription(e.target.value)} />
        <div style={styles.charCount}>{description.length} / 160 characters</div>
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Open Graph Type</label>
        <select style={styles.select} value={ogType} onChange={e => setOgType(e.target.value)}>
          <option value="website">Website</option>
          <option value="article">Article</option>
          <option value="product">Product</option>
        </select>
      </div>
      <button style={styles.btn} onClick={generate}>Generate Meta Tags</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Generated Tags</span>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <pre style={styles.output}>{output}</pre>
        </div>
      )}
    </div>
  );
}

// ─── Robots.txt Generator ───
export function RobotsTxtGenerator() {
  const [userAgent, setUserAgent] = useState('*');
  const [disallow, setDisallow] = useState(['/admin/', '/private/', '/tmp/']);
  const [allow, setAllow] = useState(['/']);
  const [sitemap, setSitemap] = useState('');
  const [output, setOutput] = useState('');

  const generate = () => {
    let content = `User-agent: ${userAgent}\n`;
    allow.forEach(a => { if (a) content += `Allow: ${a}\n`; });
    disallow.forEach(d => { if (d) content += `Disallow: ${d}\n`; });
    if (sitemap) content += `\nSitemap: ${sitemap}\n`;
    setOutput(content);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', fontFamily: 'var(--font-mono)' },
    chipRow: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
    chip: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' },
    chipRemove: { cursor: 'pointer', color: 'var(--color-error)', fontWeight: 700, fontSize: '0.9rem' },
    addRow: { display: 'flex', gap: '8px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    btnSm: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '8px 14px', color: 'var(--color-text)', fontSize: '0.85rem', cursor: 'pointer' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text)', whiteSpace: 'pre-wrap' },
  };

  const addDisallow = (val: string) => { if (val && !disallow.includes(val)) setDisallow([...disallow, val]); };
  const addAllow = (val: string) => { if (val && !allow.includes(val)) setAllow([...allow, val]); };

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>User Agent</label>
        <input style={styles.input} placeholder="* (all bots)" value={userAgent} onChange={e => setUserAgent(e.target.value)} />
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px', display: 'block' }}>Disallow</label>
        <div style={styles.chipRow}>
          {disallow.map((d, i) => <span key={i} style={styles.chip}>{d}<span style={styles.chipRemove} onClick={() => setDisallow(disallow.filter((_, idx) => idx !== i))}>×</span></span>)}
        </div>
        <div style={{ ...styles.addRow, marginTop: '8px' }}>
          <input style={styles.input} placeholder="/path/to/disallow" onKeyDown={e => { if (e.key === 'Enter') { addDisallow((e.target as HTMLInputElement).value); (e.target as HTMLInputElement).value = ''; } }} />
          <button style={styles.btnSm} onClick={e => { const inp = (e.currentTarget.parentNode as HTMLElement).querySelector('input') as HTMLInputElement; addDisallow(inp.value); inp.value = ''; }}>Add</button>
        </div>
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px', display: 'block' }}>Allow</label>
        <div style={styles.chipRow}>
          {allow.map((a, i) => <span key={i} style={styles.chip}>{a}<span style={styles.chipRemove} onClick={() => setAllow(allow.filter((_, idx) => idx !== i))}>×</span></span>)}
        </div>
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Sitemap URL (optional)</label>
        <input style={styles.input} placeholder="https://example.com/sitemap.xml" value={sitemap} onChange={e => setSitemap(e.target.value)} />
      </div>
      <button style={styles.btn} onClick={generate}>Generate robots.txt</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button style={styles.btnSm} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <pre style={styles.output}>{output}</pre>
        </div>
      )}
    </div>
  );
}

// ─── URL Slug Generator ───
export function UrlSlugGenerator() {
  const [text, setText] = useState('');
  const [slug, setSlug] = useState('');

  const generate = () => {
    const generated = text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    setSlug(generated);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--color-primary)', wordBreak: 'break-all' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
    tips: { fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' },
  };

  return (
    <div style={styles.wrapper}>
      <input style={styles.input} placeholder="Enter text to convert to URL slug..." value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && generate()} />
      <button style={styles.btn} onClick={generate}>Generate Slug</button>
      {slug && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Your Slug</span>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(slug)}>Copy</button>
          </div>
          <div style={styles.output}>{slug}</div>
        </div>
      )}
      <div style={styles.tips}>
        <span>💡 Tips for SEO-friendly slugs:</span>
        <span>• Use hyphens to separate words (not underscores)</span>
        <span>• Keep slugs short and descriptive</span>
        <span>• Include target keywords when relevant</span>
      </div>
    </div>
  );
}

// ─── Keyword Density Checker ───
export function KeywordDensityChecker() {
  const [text, setText] = useState('');
  const [targetKeyword, setTargetKeyword] = useState('');
  const [results, setResults] = useState<{ word: string; count: number; density: string }[]>([]);

  const analyze = () => {
    if (!text.trim()) return;
    const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
    const freq: Record<string, number> = {};
    words.forEach(w => { if (w.length > 3) freq[w] = (freq[w] || 0) + 1; });
    const total = words.length;
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 20);
    setResults(sorted.map(([word, count]) => ({ word, count, density: `${((count / total) * 100).toFixed(2)}%` })));
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '160px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    bar: { height: '8px', background: 'var(--color-border)', borderRadius: '4px', overflow: 'hidden' },
    barFill: { height: '100%', background: 'var(--color-primary)', borderRadius: '4px', transition: 'width 300ms' },
    table: { width: '100%', borderCollapse: 'collapse' },
    th: { textAlign: 'left', padding: '8px 12px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', borderBottom: '1px solid var(--color-border)' },
    td: { padding: '8px 12px', fontSize: '0.875rem', borderBottom: '1px solid var(--color-border)' },
    highlight: { color: 'var(--color-primary)', fontWeight: 600 },
  };

  const maxCount = results.length > 0 ? results[0].count : 1;

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Target Keyword</label>
        <input style={styles.input} placeholder="Enter focus keyword..." value={targetKeyword} onChange={e => setTargetKeyword(e.target.value)} />
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Content to Analyze</label>
        <textarea style={styles.textarea} placeholder="Paste your content here..." value={text} onChange={e => setText(e.target.value)} />
      </div>
      <button style={styles.btn} onClick={analyze}>Analyze Density</button>
      {results.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table style={styles.table}>
            <thead><tr><th style={styles.th}>Word</th><th style={styles.th}>Count</th><th style={styles.th}>Density</th><th style={styles.th}>Frequency</th></tr></thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i}>
                  <td style={{ ...styles.td, ...(r.word === targetKeyword.toLowerCase() ? styles.highlight : {}) }}>{r.word}</td>
                  <td style={styles.td}>{r.count}</td>
                  <td style={styles.td}>{r.density}</td>
                  <td style={{ ...styles.td, width: '40%' }}>
                    <div style={styles.bar}><div style={{ ...styles.barFill, width: `${(r.count / maxCount) * 100}%` }} /></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Heading Analyzer ───
export function HeadingAnalyzer() {
  const [html, setHtml] = useState('');
  const [results, setResults] = useState<{ tag: string; text: string; issues: string[] }[]>([]);

  const analyze = () => {
    if (!html.trim()) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings: { tag: string; text: string; issues: string[] }[] = [];
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
      doc.querySelectorAll(tag).forEach(el => {
        const text = el.textContent || '';
        const issues: string[] = [];
        if (tag === 'h1' && doc.querySelectorAll('h1').length > 1) issues.push('Multiple H1 tags found');
        if (!text.trim()) issues.push('Empty heading');
        if (text.length > 70) issues.push('Heading too long (over 70 chars)');
        headings.push({ tag: tag.toUpperCase(), text, issues });
      });
    });
    setResults(headings);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '160px', fontFamily: 'var(--font-mono)' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    headingItem: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '6px' },
    headingTag: { fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: 'var(--color-surface-high)', color: 'var(--color-primary)', display: 'inline-block', width: 'fit-content' },
    headingText: { fontSize: '0.95rem', fontWeight: 500 },
    issue: { fontSize: '0.8rem', color: 'var(--color-warning)', display: 'flex', alignItems: 'center', gap: '4px' },
    pass: { fontSize: '0.8rem', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '4px' },
  };

  return (
    <div style={styles.wrapper}>
      <textarea style={styles.textarea} placeholder="Paste your HTML content here..." value={html} onChange={e => setHtml(e.target.value)} />
      <button style={styles.btn} onClick={analyze}>Analyze Headings</button>
      {results.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {results.map((r, i) => (
            <div key={i} style={styles.headingItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={styles.headingTag}>{r.tag}</span>
                <span style={styles.headingText}>{r.text || '(empty)'}</span>
              </div>
              {r.issues.length > 0 ? r.issues.map((issue, j) => <span key={j} style={styles.issue}>⚠️ {issue}</span>) : <span style={styles.pass}>✅ No issues</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── SERP Preview ───
export function SerpPreview() {
  const [title, setTitle] = useState('Example Title Tag - Your Brand Name');
  const [url, setUrl] = useState('https://example.com/example-page');
  const [description, setDescription] = useState('This is an example meta description that shows how your page might appear in Google search results. Keep it under 160 characters for best results.');
  const [darkMode, setDarkMode] = useState(false);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '80px' },
    previewBox: { borderRadius: '8px', padding: '24px', border: '1px solid var(--color-border)', transition: 'background 200ms' },
    serpResult: { maxWidth: '600px' },
    serpTitle: { fontSize: '18px', color: '#1a0dab', marginBottom: '4px', cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
    serpUrl: { fontSize: '13px', color: '#006621', marginBottom: '4px' },
    serpDesc: { fontSize: '13px', color: '#545454', lineHeight: 1.4 },
    toggle: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' },
    toggleTrack: { width: '44px', height: '24px', borderRadius: '12px', background: 'var(--color-border)', position: 'relative', cursor: 'pointer', transition: 'background 200ms' },
    toggleThumb: { width: '20px', height: '20px', borderRadius: '50%', background: 'white', position: 'absolute', top: '2px', left: '2px', transition: 'transform 200ms' },
    charCount: { fontSize: '0.75rem', color: 'var(--color-text-muted)' },
    warning: { fontSize: '0.8rem', color: 'var(--color-warning)', padding: '8px 12px', background: 'rgba(245,158,11,0.1)', borderRadius: '6px' },
  };

  const titleLen = title.length;
  const descLen = description.length;

  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Page Title</label>
          <input style={styles.input} placeholder="Title tag (50-60 chars)" value={title} onChange={e => setTitle(e.target.value)} maxLength={60} />
          <div style={styles.charCount}>{titleLen} / 60 characters</div>
        </div>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Page URL</label>
          <input style={styles.input} placeholder="https://example.com/page" value={url} onChange={e => setUrl(e.target.value)} />
        </div>
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Meta Description</label>
        <textarea style={styles.textarea} placeholder="Description (150-160 chars)..." value={description} onChange={e => setDescription(e.target.value)} />
        <div style={styles.charCount}>{descLen} / 160 characters</div>
      </div>
      <div style={styles.toggle}>
        <span>🌙 Dark Preview</span>
        <div style={{ ...styles.toggleTrack, background: darkMode ? 'var(--color-primary)' : 'var(--color-border)' }} onClick={() => setDarkMode(!darkMode)}>
          <div style={{ ...styles.toggleThumb, transform: darkMode ? 'translateX(20px)' : 'translateX(0)' }} />
        </div>
      </div>
      {titleLen > 60 && <div style={styles.warning}>⚠️ Title is too long and may be truncated in search results</div>}
      {descLen > 160 && <div style={styles.warning}>⚠️ Description is too long and may be truncated in search results</div>}
      <div style={{ ...styles.previewBox, background: darkMode ? '#202124' : '#fff' }}>
        <div style={{ ...styles.serpResult, cursor: 'pointer' }}>
          <div style={{ ...styles.serpTitle, color: darkMode ? '#8ab4f8' : '#1a0dab' }}>{title || 'Your Page Title'}</div>
          <div style={{ ...styles.serpUrl, color: darkMode ? '#bdc1c6' : '#006621' }}>{url || 'https://example.com'}</div>
          <div style={{ ...styles.serpDesc, color: darkMode ? '#bdc1c6' : '#545454' }}>{description || 'Your page description will appear here...'}</div>
        </div>
      </div>
    </div>
  );
}