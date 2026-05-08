'use client';
import { useState, useRef, useEffect } from 'react';

type Tool = 'base64' | 'hash' | 'url' | 'cron';

// ─── Base64 Encoder/Decoder ───
export function Base64Tool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const process = () => {
    if (!input) { setOutput(''); return; }
    try {
      if (mode === 'encode') setOutput(btoa(input));
      else setOutput(atob(input));
    } catch { setOutput('Error: Invalid input for decoding'); }
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    toggle: { display: 'flex', gap: '8px', marginBottom: '8px' },
    toggleBtn: { flex: 1, padding: '10px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', transition: 'all 150ms' },
    toggleBtnActive: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: '1px solid var(--color-primary)' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '100px', fontFamily: 'var(--font-mono)' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--color-text)', wordBreak: 'break-all', minHeight: '60px' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
    error: { color: 'var(--color-error)', fontSize: '0.875rem' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.toggle}>
        <button style={{ ...styles.toggleBtn, ...(mode === 'encode' ? styles.toggleBtnActive : {}) }} onClick={() => { setMode('encode'); setOutput(''); }}>Encode</button>
        <button style={{ ...styles.toggleBtn, ...(mode === 'decode' ? styles.toggleBtnActive : {}) }} onClick={() => { setMode('decode'); setOutput(''); }}>Decode</button>
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Input</label>
        <textarea style={styles.textarea} placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter base64 to decode...'} value={input} onChange={e => setInput(e.target.value)} />
      </div>
      <button style={styles.btn} onClick={process}>Convert</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Output</span>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <div style={styles.output}>{output}</div>
        </div>
      )}
      {output.startsWith('Error:') && <div style={styles.error}>{output}</div>}
    </div>
  );
}

// ─── Hash Generator ───
export function HashGenerator() {
  const [input, setInput] = useState('');
  const [hashes, setHashes] = useState<{ algo: string; hash: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!input) { setHashes([]); return; }
    setLoading(true);
    try {
      const enc = new TextEncoder();
      const data = enc.encode(input);
      const results: { algo: string; hash: string }[] = [];

      const [sha1, sha256, sha384, sha512] = await Promise.all([
        crypto.subtle.digest('SHA-1', data),
        crypto.subtle.digest('SHA-256', data),
        crypto.subtle.digest('SHA-384', data),
        crypto.subtle.digest('SHA-512', data),
      ]);

      const toHex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');

      results.push({ algo: 'SHA-1', hash: toHex(sha1) });
      results.push({ algo: 'SHA-256', hash: toHex(sha256) });
      results.push({ algo: 'SHA-384', hash: toHex(sha384) });
      results.push({ algo: 'SHA-512', hash: toHex(sha512) });

      setHashes(results);
    } catch {
      setHashes([]);
    }
    setLoading(false);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '100px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    hashItem: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px' },
    hashLabel: { fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' },
    hashValue: { fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text)', wordBreak: 'break-all' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '4px 8px', color: 'var(--color-text)', fontSize: '0.75rem', cursor: 'pointer' },
    loading: { color: 'var(--color-text-muted)', textAlign: 'center', padding: '24px' },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Input Text</label>
        <textarea style={styles.textarea} placeholder="Enter text to hash..." value={input} onChange={e => setInput(e.target.value)} />
      </div>
      <button style={styles.btn} onClick={generate} disabled={loading}>{loading ? 'Generating...' : 'Generate Hashes'}</button>
      {hashes.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {hashes.map((h, i) => (
            <div key={i} style={styles.hashItem}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={styles.hashLabel}>{h.algo}</span>
                <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(h.hash)}>Copy</button>
              </div>
              <div style={styles.hashValue}>{h.hash}</div>
            </div>
          ))}
        </div>
      )}
      {loading && <div style={styles.loading}>Computing hashes...</div>}
    </div>
  );
}

// ─── URL Encoder/Decoder ───
export function UrlTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const process = () => {
    if (!input) { setOutput(''); return; }
    try {
      if (mode === 'encode') {
        const enc = new TextEncoder();
        const bytes = enc.encode(input);
        let encoded = '';
        bytes.forEach(b => { encoded += '%' + b.toString(16).padStart(2, '0').toUpperCase(); });
        setOutput(encoded);
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch { setOutput('Error: Invalid URL encoded string'); }
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    toggle: { display: 'flex', gap: '8px', marginBottom: '8px' },
    toggleBtn: { flex: 1, padding: '10px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', transition: 'all 150ms' },
    toggleBtnActive: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: '1px solid var(--color-primary)' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '100px', fontFamily: 'var(--font-mono)' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--color-text)', wordBreak: 'break-all', minHeight: '60px' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
    error: { color: 'var(--color-error)', fontSize: '0.875rem' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.toggle}>
        <button style={{ ...styles.toggleBtn, ...(mode === 'encode' ? styles.toggleBtnActive : {}) }} onClick={() => { setMode('encode'); setOutput(''); }}>Encode</button>
        <button style={{ ...styles.toggleBtn, ...(mode === 'decode' ? styles.toggleBtnActive : {}) }} onClick={() => { setMode('decode'); setOutput(''); }}>Decode</button>
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Input</label>
        <textarea style={styles.textarea} placeholder={mode === 'encode' ? 'Enter text to URL encode...' : 'Enter URL encoded string...'} value={input} onChange={e => setInput(e.target.value)} />
      </div>
      <button style={styles.btn} onClick={process}>Convert</button>
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Output</span>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <div style={styles.output}>{output}</div>
        </div>
      )}
      {output.startsWith('Error:') && <div style={styles.error}>{output}</div>}
    </div>
  );
}

// ─── Cron Expression Validator ───
export function CronValidator() {
  const [expr, setExpr] = useState('');
  const [valid, setValid] = useState<boolean | null>(null);
  const [description, setDescription] = useState('');

  const validate = () => {
    if (!expr.trim()) { setValid(null); setDescription(''); return; }
    const parts = expr.trim().split(/\s+/);
    if (parts.length < 5 || parts.length > 6) { setValid(false); setDescription('Invalid: Expected 5-6 fields (minute hour day month weekday [command])'); return; }

    const [min, hour, day, month, weekday] = parts;

    const inRange = (val: string, minVal: number, maxVal: number): boolean => {
      if (val === '*') return true;
      if (val.includes('/')) { const [, step] = val.split('/'); return parseInt(step) > 0; }
      if (val.includes(',')) return val.split(',').every(v => inRange(v.trim(), minVal, maxVal));
      if (val.includes('-')) { const [start, end] = val.split('-').map(v => parseInt(v)); return !isNaN(start) && !isNaN(end) && start >= minVal && end <= maxVal && start <= end; }
      const n = parseInt(val); return !isNaN(n) && n >= minVal && n <= maxVal;
    };

    const minuteValid = inRange(min, 0, 59);
    const hourValid = inRange(hour, 0, 23);
    const dayValid = inRange(day, 1, 31);
    const monthValid = inRange(month, 1, 12);
    const weekdayValid = inRange(weekday, 0, 7);

    if (!minuteValid || !hourValid || !dayValid || !monthValid || !weekdayValid) {
      setValid(false);
      setDescription('Invalid: One or more fields have out-of-range values');
      return;
    }

    setValid(true);
    const desc = [];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    desc.push(`Runs at ${min === '*' ? 'every minute' : `minute ${min}`} past ${hour === '*' ? 'every hour' : `hour ${hour}`}`);
    if (day !== '*') desc.push(`on day ${day}`);
    if (month !== '*') { const m = parseInt(month); desc.push(`in ${monthNames[m] || month}`); }
    if (weekday !== '*') { const w = parseInt(weekday); desc.push(`on ${dayNames[w] || weekday}`); }

    setDescription(desc.join(' '));
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', fontFamily: 'var(--font-mono)' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    result: { borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px' },
    resultValid: { background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)' },
    resultInvalid: { background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)' },
    resultText: { fontSize: '0.95rem', fontWeight: 500 },
    descValid: { color: '#22C55E' },
    descInvalid: { color: '#EF4444' },
    descText: { fontSize: '0.875rem', marginTop: '8px' },
    helper: { fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Cron Expression</label>
        <input style={styles.input} placeholder="* * * * * (minute hour day month weekday)" value={expr} onChange={e => setExpr(e.target.value)} onKeyDown={e => e.key === 'Enter' && validate()} />
        <div style={styles.helper}>5 fields: minute (0-59) hour (0-23) day (1-31) month (1-12) weekday (0-7)</div>
      </div>
      <button style={styles.btn} onClick={validate}>Validate</button>
      {valid !== null && (
        <>
          <div style={{ ...styles.result, ...(valid ? styles.resultValid : styles.resultInvalid) }}>
            <span style={{ fontSize: '1.1rem' }}>{valid ? '✅' : '❌'}</span>
            <span style={{ ...styles.resultText, ...(valid ? styles.descValid : styles.descInvalid) }}>{valid ? 'Valid expression' : 'Invalid expression'}</span>
          </div>
          {description && <div style={styles.descText}>{description}</div>}
        </>
      )}
    </div>
  );
}

// ─── Developer Tool Tab Mapping ───
type DevTool = 'base64' | 'hash' | 'url' | 'cron' | 'json' | 'html' | 'regex';

const DEV_TOOL_TAB_MAP: Record<string, DevTool> = {
  'base64-encoder': 'base64',
  'json-formatter': 'json',
  'json-validator': 'json',
  'html-editor': 'html',
  'css-formatter': 'html',
  'url-encoder': 'url',
  'regex-tester': 'regex',
  'cron-parser': 'cron',
  'hash-generator': 'hash',
  'jwt-decoder': 'base64',
};

interface DeveloperToolsProps { toolId?: string }

export function DeveloperTools({ toolId }: DeveloperToolsProps) {
  const getInitialTab = (): DevTool => {
    if (toolId && toolId in DEV_TOOL_TAB_MAP) return DEV_TOOL_TAB_MAP[toolId];
    return 'base64';
  };
  const [activeTab, setActiveTab] = useState<DevTool>(getInitialTab);
  const tabRef = useRef(getInitialTab());
  // eslint-disable-next-line react-hooks/refs -- ref updated during render for tab sync
  tabRef.current = getInitialTab();

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
        <button style={{ ...styles.tab, ...(activeTab === 'base64' ? styles.tabActive : {}) }} onClick={() => setActiveTab('base64')}>Base64</button>
        <button style={{ ...styles.tab, ...(activeTab === 'hash' ? styles.tabActive : {}) }} onClick={() => setActiveTab('hash')}>Hash Generator</button>
        <button style={{ ...styles.tab, ...(activeTab === 'url' ? styles.tabActive : {}) }} onClick={() => setActiveTab('url')}>URL Encoder</button>
        <button style={{ ...styles.tab, ...(activeTab === 'cron' ? styles.tabActive : {}) }} onClick={() => setActiveTab('cron')}>Cron Validator</button>
        <button style={{ ...styles.tab, ...(activeTab === 'json' ? styles.tabActive : {}) }} onClick={() => setActiveTab('json')}>JSON Formatter</button>
        <button style={{ ...styles.tab, ...(activeTab === 'html' ? styles.tabActive : {}) }} onClick={() => setActiveTab('html')}>HTML Editor</button>
        <button style={{ ...styles.tab, ...(activeTab === 'regex' ? styles.tabActive : {}) }} onClick={() => setActiveTab('regex')}>Regex Tester</button>
      </div>
      <div style={styles.content}>
        {activeTab === 'base64' && <Base64Tool />}
        {activeTab === 'hash' && <HashGenerator />}
        {activeTab === 'url' && <UrlTool />}
        {activeTab === 'cron' && <CronValidator />}
        {activeTab === 'json' && <JsonFormatterTool />}
        {activeTab === 'html' && <HtmlEditorTool />}
        {activeTab === 'regex' && <RegexTesterTool />}
      </div>
      <style>{`
        button:not(:disabled):hover { opacity: 0.85; }
        button:active:not(:disabled) { transform: scale(0.98); }
        textarea:focus, input:focus { border-color: var(--color-primary) !important; }
      `}</style>
    </div>
  );
}

// ─── JSON Formatter & Validator ───
function JsonFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [tabSize, setTabSize] = useState(2);

  const format = () => {
    if (!input.trim()) { setOutput(''); return; }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, tabSize));
    } catch (e) {
      setOutput(`Error: ${(e as Error).message}`);
    }
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '120px', fontFamily: 'var(--font-mono)' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text)', whiteSpace: 'pre-wrap', minHeight: '60px' },
  };

  return (
    <div style={styles.wrapper}>
      <textarea style={styles.textarea} placeholder="Paste JSON here..." value={input} onChange={e => setInput(e.target.value)} />
      <button style={styles.btn} onClick={format}>Format JSON</button>
      {output && <pre style={styles.output}>{output}</pre>}
    </div>
  );
}

// ─── HTML Editor ───
function HtmlEditorTool() {
  const [html, setHtml] = useState('<html>\n  <head>\n    <title>Hello</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>');
  const [preview, setPreview] = useState(true);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '200px', fontFamily: 'var(--font-mono)' },
    preview: { background: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', minHeight: '200px', color: '#333' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{ background: preview ? 'var(--color-primary)' : 'var(--color-surface-high)', color: preview ? 'var(--color-text-inverse)' : 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '8px 16px', cursor: 'pointer' }} onClick={() => setPreview(true)}>Preview</button>
        <button style={{ background: !preview ? 'var(--color-primary)' : 'var(--color-surface-high)', color: !preview ? 'var(--color-text-inverse)' : 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '8px 16px', cursor: 'pointer' }} onClick={() => setPreview(false)}>Edit</button>
      </div>
      {preview ? (
        <iframe srcDoc={html} style={{ width: '100%', minHeight: '300px', border: '1px solid var(--color-border)', borderRadius: '8px' }} title="HTML Preview" />
      ) : (
        <textarea style={styles.textarea} value={html} onChange={e => setHtml(e.target.value)} />
      )}
    </div>
  );
}

// ─── Regex Tester ───
function RegexTesterTool() {
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('The quick brown fox jumps over the lazy dog.');
  const [matches, setMatches] = useState<string[]>([]);

  const test = () => {
    if (!pattern.trim()) { setMatches([]); return; }
    try {
      const regex = new RegExp(pattern, 'g');
      const found = testString.match(regex);
      setMatches(found || []);
    } catch { setMatches([]); }
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', fontFamily: 'var(--font-mono)' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '80px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' },
    matches: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
    match: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '4px 8px', fontSize: '0.85rem' },
  };

  return (
    <div style={styles.wrapper}>
      <input style={styles.input} placeholder="Regex pattern..." value={pattern} onChange={e => setPattern(e.target.value)} onKeyDown={e => e.key === 'Enter' && test()} />
      <textarea style={styles.textarea} placeholder="Test string..." value={testString} onChange={e => setTestString(e.target.value)} />
      <button style={styles.btn} onClick={test}>Test Regex</button>
      {matches.length > 0 && (
        <div style={styles.matches}>
          {matches.map((m, i) => <span key={i} style={styles.match}>{m}</span>)}
        </div>
      )}
    </div>
  );
}
