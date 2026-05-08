'use client';
import { useState } from 'react';

type AiTool = 'content' | 'email' | 'job' | 'bio' | 'slogan' | 'meta' | 'rewrite';

const AI_TOOL_TAB_MAP: Record<string, AiTool> = {
  'ai-writer': 'content',
  'ai-email-writer': 'email',
  'ai-job-description': 'job',
  'ai-bio-writer': 'bio',
  'ai-slogan-generator': 'slogan',
  'ai-meta-description': 'meta',
  'ai-article-rewriter': 'rewrite',
};

interface AIToolsProps { toolId?: string }

// ─── Main AI Tools Component with Tabs ───
export function AITools({ toolId }: AIToolsProps) {
  const getInitialTab = (): AiTool => {
    if (toolId && toolId in AI_TOOL_TAB_MAP) return AI_TOOL_TAB_MAP[toolId];
    return 'content';
  };
  const [activeTab, setActiveTab] = useState<AiTool>(getInitialTab);

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
        <button style={{ ...styles.tab, ...(activeTab === 'content' ? styles.tabActive : {}) }} onClick={() => setActiveTab('content')}>📝 Content Writer</button>
        <button style={{ ...styles.tab, ...(activeTab === 'email' ? styles.tabActive : {}) }} onClick={() => setActiveTab('email')}>📧 Email Writer</button>
        <button style={{ ...styles.tab, ...(activeTab === 'job' ? styles.tabActive : {}) }} onClick={() => setActiveTab('job')}>💼 Job Description</button>
        <button style={{ ...styles.tab, ...(activeTab === 'bio' ? styles.tabActive : {}) }} onClick={() => setActiveTab('bio')}>👤 Bio Writer</button>
        <button style={{ ...styles.tab, ...(activeTab === 'slogan' ? styles.tabActive : {}) }} onClick={() => setActiveTab('slogan')}>💡 Slogan Generator</button>
        <button style={{ ...styles.tab, ...(activeTab === 'meta' ? styles.tabActive : {}) }} onClick={() => setActiveTab('meta')}>🔍 Meta Description</button>
        <button style={{ ...styles.tab, ...(activeTab === 'rewrite' ? styles.tabActive : {}) }} onClick={() => setActiveTab('rewrite')}>✏️ Article Rewriter</button>
      </div>
      <div style={styles.content}>
        {activeTab === 'content' && <AicontentWriter />}
        {activeTab === 'email' && <AiEmailWriter />}
        {activeTab === 'job' && <JobDescriptionGenerator />}
        {activeTab === 'bio' && <BioWriter />}
        {activeTab === 'slogan' && <SloganGenerator />}
        {activeTab === 'meta' && <MetaDescriptionGenerator />}
        {activeTab === 'rewrite' && <ArticleRewriter />}
      </div>
      <style>{`
        button:not(:disabled):hover { opacity: 0.85; }
        button:active:not(:disabled) { transform: scale(0.98); }
        textarea:focus, input:focus { border-color: var(--color-primary) !important; }
      `}</style>
    </div>
  );
}

// ─── AI Content Writer ───
export function AicontentWriter() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!topic) return;
    setLoading(true);
    try {
      const res = await fetch('https://uojngefdcchlubnezpgc.supabase.co/functions/v1/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Write a ${length} blog post about "${topic}" with a ${tone} tone.`, tool: 'ai-writer' }),
      });
      const data = await res.json();
      setOutput(data.text || data.content || '');
    } catch { setOutput(''); }
    setLoading(false);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    select: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms', display: 'inline-flex', alignItems: 'center', gap: '8px' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.8, whiteSpace: 'pre-wrap' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
    loading: { color: 'var(--color-text-muted)', textAlign: 'center', padding: '24px' },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Topic</label>
        <input style={styles.input} placeholder="What do you want to write about?" value={topic} onChange={e => setTopic(e.target.value)} />
      </div>
      <div style={styles.row}>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Tone</label>
          <select style={styles.select} value={tone} onChange={e => setTone(e.target.value)}>
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="friendly">Friendly</option>
            <option value="persuasive">Persuasive</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Length</label>
          <select style={styles.select} value={length} onChange={e => setLength(e.target.value)}>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
      </div>
      <button style={styles.btn} onClick={generate} disabled={loading}>{loading ? '🤖 Generating...' : '✍️ Generate Content'}</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <pre style={styles.output}>{output}</pre>
        </div>
      )}
      {loading && <div style={styles.loading}>🤖 AI is writing your content...</div>}
    </div>
  );
}

// ─── AI Email Writer ───
export function AiEmailWriter() {
  const [emailType, setEmailType] = useState('cold');
  const [recipient, setRecipient] = useState('');
  const [purpose, setPurpose] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!purpose) return;
    setLoading(true);
    try {
      const res = await fetch('https://uojngefdcchlubnezpgc.supabase.co/functions/v1/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Write a ${emailType} email to ${recipient || 'someone'} about: ${purpose}`, tool: 'ai-email-writer' }),
      });
      const data = await res.json();
      setOutput(data.text || data.content || '');
    } catch { setOutput(''); }
    setLoading(false);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    select: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.8, whiteSpace: 'pre-wrap' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Email Type</label>
        <select style={styles.select} value={emailType} onChange={e => setEmailType(e.target.value)}>
          <option value="cold">Cold Email</option>
          <option value="follow-up">Follow-up</option>
          <option value="introduction">Introduction</option>
          <option value="thank-you">Thank You</option>
        </select>
      </div>
      <input style={styles.input} placeholder="Recipient (optional)" value={recipient} onChange={e => setRecipient(e.target.value)} />
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>What do you want to say?</label>
        <textarea style={{ ...styles.input, resize: 'vertical', minHeight: '100px' }} placeholder="Describe the purpose of your email..." value={purpose} onChange={e => setPurpose(e.target.value)} />
      </div>
      <button style={styles.btn} onClick={generate} disabled={loading}>{loading ? '🤖 Writing...' : '✉️ Write Email'}</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <pre style={styles.output}>{output}</pre>
        </div>
      )}
    </div>
  );
}

// ─── Job Description Generator ───
export function JobDescriptionGenerator() {
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [type, setType] = useState('full-time');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!title) return;
    setLoading(true);
    try {
      const res = await fetch('https://uojngefdcchlubnezpgc.supabase.co/functions/v1/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Create a job description for ${title} in the ${department} department. Job type: ${type}. Include responsibilities, requirements, and nice-to-haves.`, tool: 'ai-job-description' }),
      });
      const data = await res.json();
      setOutput(data.text || data.content || '');
    } catch { setOutput(''); }
    setLoading(false);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    select: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.8, whiteSpace: 'pre-wrap' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        <input style={styles.input} placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input style={styles.input} placeholder="Department" value={department} onChange={e => setDepartment(e.target.value)} />
      </div>
      <select style={styles.select} value={type} onChange={e => setType(e.target.value)}>
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="contract">Contract</option>
        <option value="remote">Remote</option>
      </select>
      <button style={styles.btn} onClick={generate} disabled={loading}>{loading ? '🤖 Generating...' : '💼 Generate Description'}</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <pre style={styles.output}>{output}</pre>
        </div>
      )}
    </div>
  );
}

// ─── Bio Writer ───
export function BioWriter() {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [style, setStyle] = useState('professional');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!name || !profession) return;
    setLoading(true);
    try {
      const res = await fetch('https://uojngefdcchlubnezpgc.supabase.co/functions/v1/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Write a ${style} bio for ${name}, a ${profession}. Keep it concise and compelling.`, tool: 'ai-bio-writer' }),
      });
      const data = await res.json();
      setOutput(data.text || data.content || '');
    } catch { setOutput(''); }
    setLoading(false);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    select: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.8, whiteSpace: 'pre-wrap' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        <input style={styles.input} placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input style={styles.input} placeholder="Profession/Title" value={profession} onChange={e => setProfession(e.target.value)} />
      </div>
      <select style={styles.select} value={style} onChange={e => setStyle(e.target.value)}>
        <option value="professional">Professional</option>
        <option value="casual">Casual</option>
        <option value="funny">Funny</option>
        <option value="inspirational">Inspirational</option>
      </select>
      <button style={styles.btn} onClick={generate} disabled={loading}>{loading ? '🤖 Writing...' : '✍️ Write Bio'}</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <pre style={styles.output}>{output}</pre>
        </div>
      )}
    </div>
  );
}

// ─── Slogan Generator ───
export function SloganGenerator() {
  const [brand, setBrand] = useState('');
  const [industry, setIndustry] = useState('');
  const [count, setCount] = useState(5);
  const [output, setOutput] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!brand) return;
    setLoading(true);
    try {
      const res = await fetch('https://uojngefdcchlubnezpgc.supabase.co/functions/v1/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Generate ${count} catchy slogans for ${brand}${industry ? ` (${industry})` : ''}. Return as JSON array of strings.`, tool: 'ai-slogan-generator' }),
      });
      const data = await res.json();
      setOutput(Array.isArray(data.slogans) ? data.slogans : []);
    } catch { setOutput([]); }
    setLoading(false);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr 120px', gap: '12px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer' },
    sloganCard: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'all 150ms' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        <input style={styles.input} placeholder="Brand Name" value={brand} onChange={e => setBrand(e.target.value)} />
        <input style={styles.input} placeholder="Industry (optional)" value={industry} onChange={e => setIndustry(e.target.value)} />
        <input style={styles.input} type="number" min={3} max={20} value={count} onChange={e => setCount(parseInt(e.target.value) || 5)} />
      </div>
      <button style={styles.btn} onClick={generate} disabled={loading}>{loading ? '🤖 Generating...' : '💡 Generate Slogans'}</button>
      {output.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {output.map((slogan, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={styles.sloganCard} onClick={() => navigator.clipboard.writeText(slogan)}>{slogan}</div>
              <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(slogan)}>Copy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Meta Description Generator ───
export function MetaDescriptionGenerator() {
  const [title, setTitle] = useState('');
  const [focus, setFocus] = useState('');
  const [length, setLength] = useState('medium');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!title) return;
    setLoading(true);
    try {
      const res = await fetch('https://uojngefdcchlubnezpgc.supabase.co/functions/v1/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Generate a SEO meta description for a page titled "${title}"${focus ? ` focusing on "${focus}"` : ''}. Keep it under 160 characters and compelling.`, tool: 'ai-meta-description' }),
      });
      const data = await res.json();
      setOutput(data.text || data.content || '');
    } catch { setOutput(''); }
    setLoading(false);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    select: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.8, whiteSpace: 'pre-wrap' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
    charCount: { fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'right' },
  };

  return (
    <div style={styles.wrapper}>
      <input style={styles.input} placeholder="Page Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input style={styles.input} placeholder="Focus Keyword (optional)" value={focus} onChange={e => setFocus(e.target.value)} />
      <select style={styles.select} value={length} onChange={e => setLength(e.target.value)}>
        <option value="short">Short (under 120 chars)</option>
        <option value="medium">Medium (120-155 chars)</option>
        <option value="standard">Standard (155-160 chars)</option>
      </select>
      <button style={styles.btn} onClick={generate} disabled={loading}>{loading ? '🤖 Generating...' : '🔍 Generate Description'}</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{output.length} / 160 characters</span>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <pre style={styles.output}>{output}</pre>
        </div>
      )}
    </div>
  );
}

// ─── Article Rewriter ───
function ArticleRewriter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState('professional');

  const rewrite = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('https://uojngefdcchlubnezpgc.supabase.co/functions/v1/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Rewrite the following article with a ${tone} tone, making it fresh and unique: ${input}`, tool: 'ai-article-rewriter' }),
      });
      const data = await res.json();
      setOutput(data.text || data.content || '');
    } catch { setOutput(''); }
    setLoading(false);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '140px' },
    select: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.8, whiteSpace: 'pre-wrap' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Original Text</label>
        <textarea style={styles.textarea} placeholder="Paste your article or paragraph here..." value={input} onChange={e => setInput(e.target.value)} />
      </div>
      <select style={styles.select} value={tone} onChange={e => setTone(e.target.value)}>
        <option value="professional">Professional</option>
        <option value="casual">Casual</option>
        <option value="creative">Creative</option>
        <option value="academic">Academic</option>
      </select>
      <button style={styles.btn} onClick={rewrite} disabled={loading}>{loading ? '🤖 Rewriting...' : '✏️ Rewrite Article'}</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <pre style={styles.output}>{output}</pre>
        </div>
      )}
    </div>
  );
}
