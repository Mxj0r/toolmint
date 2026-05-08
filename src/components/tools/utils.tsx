'use client';
import { useState, useEffect } from 'react';

type Tool = 'password' | 'uuid' | 'json' | 'color' | 'qr' | 'jwt' | 'text' | 'regex';

const UTIL_TOOL_TAB_MAP: Record<string, Tool> = {
  'password-generator': 'password',
  'uuid-generator': 'uuid',
  'lorem-ipsum': 'uuid',
  'unit-converter': 'color',
  'color-picker': 'color',
  'qr-generator': 'qr',
  'vcard-generator': 'qr',
  'wifi-qr-generator': 'qr',
  'jwt-decoder': 'jwt',
  'text-analyzer': 'text',
  'regex-tester': 'regex',
};

interface UtilityToolsProps { toolId?: string }

// ─── Main Utility Tools Component with Tabs ───
export function UtilityTools({ toolId }: UtilityToolsProps) {
  const getInitialTab = (): Tool => {
    if (toolId && toolId in UTIL_TOOL_TAB_MAP) return UTIL_TOOL_TAB_MAP[toolId];
    return 'password';
  };
  const [activeTab, setActiveTab] = useState<Tool>(getInitialTab);

  // Sync tab after hydration — fixes SSG where toolId is undefined at render time
  useEffect(() => {
    const tab = getInitialTab();
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
        <button style={{ ...styles.tab, ...(activeTab === 'password' ? styles.tabActive : {}) }} onClick={() => setActiveTab('password')}>🔐 Password</button>
        <button style={{ ...styles.tab, ...(activeTab === 'uuid' ? styles.tabActive : {}) }} onClick={() => setActiveTab('uuid')}>🆔 UUID</button>
        <button style={{ ...styles.tab, ...(activeTab === 'json' ? styles.tabActive : {}) }} onClick={() => setActiveTab('json')}>📋 JSON</button>
        <button style={{ ...styles.tab, ...(activeTab === 'color' ? styles.tabActive : {}) }} onClick={() => setActiveTab('color')}>🎨 Color</button>
        <button style={{ ...styles.tab, ...(activeTab === 'qr' ? styles.tabActive : {}) }} onClick={() => setActiveTab('qr')}>📱 QR Code</button>
        <button style={{ ...styles.tab, ...(activeTab === 'jwt' ? styles.tabActive : {}) }} onClick={() => setActiveTab('jwt')}>🔓 JWT</button>
        <button style={{ ...styles.tab, ...(activeTab === 'text' ? styles.tabActive : {}) }} onClick={() => setActiveTab('text')}>📝 Text</button>
        <button style={{ ...styles.tab, ...(activeTab === 'regex' ? styles.tabActive : {}) }} onClick={() => setActiveTab('regex')}>⚙️ Regex</button>
      </div>
      <div style={styles.content}>
        {activeTab === 'password' && <PasswordGenerator />}
        {activeTab === 'uuid' && <UuidGenerator />}
        {activeTab === 'json' && <JsonFormatter />}
        {activeTab === 'color' && <ColorConverter />}
        {activeTab === 'qr' && <QrGenerator />}
        {activeTab === 'jwt' && <JwtDecoder />}
        {activeTab === 'text' && <TextAnalyzer />}
        {activeTab === 'regex' && <RegexTester />}
      </div>
      <style>{`
        button:not(:disabled):hover { opacity: 0.85; }
        button:active:not(:disabled) { transform: scale(0.98); }
        textarea:focus, input:focus { border-color: var(--color-primary) !important; }
      `}</style>
    </div>
  );
}

// ─── Password Generator ───
export function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: true });
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let chars = '';
    if (options.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (options.numbers) chars += '0123456789';
    if (options.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (!chars) { setPassword(''); return; }
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    setPassword(Array.from(arr).map(x => chars[x % chars.length]).join(''));
  };

  useEffect(() => { generate(); }, [length, options]);

  const copy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--color-text)', wordBreak: 'break-all', textAlign: 'center', letterSpacing: '2px' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
    slider: { width: '100%', accentColor: 'var(--color-primary)' },
    label: { fontSize: '0.875rem', fontWeight: 500 },
    checkbox: { width: '18px', height: '18px', cursor: 'pointer' },
    checkboxRow: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' },
    copyBtn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', transition: 'background 150ms' },
    strength: { height: '8px', borderRadius: '4px', marginTop: '8px', transition: 'all 300ms' },
  };

  const strengthColors = ['#EF4444', '#F59E0B', '#22C55E'];
  const getStrength = () => {
    let s = 0;
    if (length >= 8) s++;
    if (length >= 12) s++;
    if (length >= 16) s++;
    if (options.symbols) s++;
    return Math.min(s, 3);
  };
  const str = getStrength();

  return (
    <div style={styles.wrapper}>
      <div style={styles.output}>{password || 'Select options...'}</div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={styles.label}>Length: {length}</span>
        <input type="range" min={8} max={64} value={length} onChange={e => setLength(parseInt(e.target.value))} style={styles.slider} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <label style={styles.checkboxRow}><input type="checkbox" checked={options.uppercase} onChange={e => setOptions({ ...options, uppercase: e.target.checked })} style={styles.checkbox} />Uppercase (A-Z)</label>
        <label style={styles.checkboxRow}><input type="checkbox" checked={options.lowercase} onChange={e => setOptions({ ...options, lowercase: e.target.checked })} style={styles.checkbox} />Lowercase (a-z)</label>
        <label style={styles.checkboxRow}><input type="checkbox" checked={options.numbers} onChange={e => setOptions({ ...options, numbers: e.target.checked })} style={styles.checkbox} />Numbers (0-9)</label>
        <label style={styles.checkboxRow}><input type="checkbox" checked={options.symbols} onChange={e => setOptions({ ...options, symbols: e.target.checked })} style={styles.checkbox} />Symbols (!@#$...)</label>
      </div>
      <div style={{ height: '8px', background: 'var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ ...styles.strength, width: `${(str / 3) * 100}%`, background: strengthColors[str - 1] || 'transparent' }} />
      </div>
      <button style={styles.copyBtn} onClick={copy} disabled={!password}>{copied ? '✅ Copied!' : '📋 Copy Password'}</button>
    </div>
  );
}

// ─── UUID Generator ───
export function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [version, setVersion] = useState('v4');
  const [count, setCount] = useState(5);

  const generate = () => {
    const newUuids: string[] = [];
    for (let i = 0; i < count; i++) {
      if (version === 'v4') {
        const arr = new Uint8Array(16);
        crypto.getRandomValues(arr);
        arr[6] = (arr[6] & 0x0f) | 0x40;
        arr[8] = (arr[8] & 0x3f) | 0x80;
        const hex = Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
        newUuids.push(`${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`);
      } else {
        newUuids.push('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, () => Math.floor(Math.random() * 16).toString(16)));
      }
    }
    setUuids(newUuids);
  };

  useEffect(() => { generate(); }, [version, count]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    row: { display: 'grid', gridTemplateColumns: '1fr 100px', gap: '12px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    select: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer' },
    uuidItem: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', cursor: 'pointer', transition: 'all 150ms' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '4px 8px', color: 'var(--color-text)', fontSize: '0.75rem', cursor: 'pointer' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>UUID Version</label>
          <select style={styles.select} value={version} onChange={e => setVersion(e.target.value)}>
            <option value="v4">UUID v4 (Random)</option>
            <option value="v1">UUID v1 (Timestamp)</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Count</label>
          <input type="number" style={styles.input} min={1} max={50} value={count} onChange={e => setCount(parseInt(e.target.value) || 1)} />
        </div>
      </div>
      <button style={styles.btn} onClick={generate}>🔄 Generate UUIDs</button>
      {uuids.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {uuids.map((uuid, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={styles.uuidItem} onClick={() => navigator.clipboard.writeText(uuid)}>{uuid}</div>
              <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(uuid)}>Copy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── JSON Formatter & Validator ───
export function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [tabSize, setTabSize] = useState(2);

  const format = () => {
    if (!input.trim()) { setOutput(''); setError(''); return; }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, tabSize));
      setError('');
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
      setOutput('');
    }
  };

  useEffect(() => { format(); }, [tabSize]);

  const minify = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
    }
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '140px', fontFamily: 'var(--font-mono)' },
    row: { display: 'flex', gap: '8px', alignItems: 'center' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' },
    btnOutline: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '10px 20px', color: 'var(--color-text)', fontSize: '0.85rem', cursor: 'pointer' },
    select: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '10px 16px', color: 'var(--color-text)', fontSize: '0.85rem', outline: 'none' },
    output: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text)', whiteSpace: 'pre-wrap', maxHeight: '300px', overflow: 'auto' },
    error: { color: 'var(--color-error)', fontSize: '0.875rem', padding: '12px', background: 'rgba(239,68,68,0.1)', borderRadius: '8px' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 12px', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer' },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Input JSON</label>
        <textarea style={styles.textarea} placeholder="Paste your JSON here..." value={input} onChange={e => setInput(e.target.value)} />
      </div>
      <div style={styles.row}>
        <button style={styles.btn} onClick={format}>Format</button>
        <button style={styles.btnOutline} onClick={minify}>Minify</button>
        <select style={styles.select} value={tabSize} onChange={e => setTabSize(parseInt(e.target.value))}>
          <option value={2}>2 spaces</option>
          <option value={4}>4 spaces</option>
          <option value={0}>No indent</option>
        </select>
      </div>
      {error && <div style={styles.error}>{error}</div>}
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

// ─── Color Converter ───
export function ColorConverter() {
  const [color, setColor] = useState('#3B82F6');
  const [values, setValues] = useState({ hex: '#3B82F6', rgb: { r: 59, g: 130, b: 246 }, hsl: { h: 217, s: 90, l: 60 } });

  useEffect(() => {
    if (!color.match(/^#?[0-9A-Fa-f]{6}$/)) return;
    const hex = color.startsWith('#') ? color : '#' + color;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm: h = ((gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0)) / 6; break;
        case gNorm: h = ((bNorm - rNorm) / d + 2) / 6; break;
        case bNorm: h = ((rNorm - gNorm) / d + 4) / 6; break;
      }
    }
    setValues({ hex: hex.toUpperCase(), rgb: { r, g, b }, hsl: { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) } });
  }, [color]);

  const copy = (val: string) => navigator.clipboard.writeText(val);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    colorBox: { width: '100%', height: '100px', borderRadius: '8px', border: '1px solid var(--color-border)', transition: 'background 200ms' },
    card: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    cardLabel: { fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' },
    cardValue: { fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--color-text)' },
    copyBtn: { background: 'var(--color-surface-high)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '4px 8px', color: 'var(--color-text)', fontSize: '0.75rem', cursor: 'pointer' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.colorBox} onClick={() => copy(values.hex)}>{/* @ts-ignore */}
        <input type="color" value={values.hex} onChange={e => setColor(e.target.value)} style={{ width: '100%', height: '100px', border: 'none', cursor: 'pointer', borderRadius: '8px' }} />
      </div>
      <input style={styles.input} placeholder="#RRGGBB" value={color} onChange={e => setColor(e.target.value)} />
      <div style={styles.card} onClick={() => copy(`rgb(${values.rgb.r}, ${values.rgb.g}, ${values.rgb.b})`)}>
        <div><div style={styles.cardLabel}>RGB</div><div style={styles.cardValue}>rgb({values.rgb.r}, {values.rgb.g}, {values.rgb.b})</div></div>
        <button style={styles.copyBtn}>Copy</button>
      </div>
      <div style={styles.card} onClick={() => copy(`hsl(${values.hsl.h}, ${values.hsl.s}%, ${values.hsl.l}%)`)}>
        <div><div style={styles.cardLabel}>HSL</div><div style={styles.cardValue}>hsl({values.hsl.h}, {values.hsl.s}%, {values.hsl.l}%)</div></div>
        <button style={styles.copyBtn}>Copy</button>
      </div>
      <div style={styles.card} onClick={() => copy(values.hex)}>
        <div><div style={styles.cardLabel}>HEX</div><div style={styles.cardValue}>{values.hex}</div></div>
        <button style={styles.copyBtn}>Copy</button>
      </div>
    </div>
  );
}

// ─── QR Code Generator ───
export function QrGenerator() {
  const [text, setText] = useState('https://example.com');
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    if (!text.trim()) { setQrUrl(''); return; }
    const encoded = encodeURIComponent(text);
    setQrUrl(`https://api.qrserver.com/v1/create-qr/?size=200x200&data=${encoded}`);
  }, [text]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none' },
    qrBox: { background: 'white', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '220px', border: '1px solid var(--color-border)' },
    qrImg: { maxWidth: '200px', maxHeight: '200px' },
    hint: { fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' },
  };

  return (
    <div style={styles.wrapper}>
      <input style={styles.input} placeholder="Enter URL or text..." value={text} onChange={e => setText(e.target.value)} />
      <div style={styles.qrBox}>
        {qrUrl && <img src={qrUrl} alt="QR Code" style={styles.qrImg} />}
      </div>
      <div style={styles.hint}>QR code updates live as you type</div>
    </div>
  );
}

// ─── JWT Decoder ───
export function JwtDecoder() {
  const [token, setToken] = useState('');
  const [header, setHeader] = useState<Record<string, unknown> | null>(null);
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState('');

  const decode = (val: string) => {
    if (!val.trim()) { setHeader(null); setPayload(null); setError(''); return; }
    try {
      const parts = val.split('.');
      if (parts.length !== 3) throw new Error('Invalid JWT format');
      const decodeBase64 = (str: string) => {
        const padded = str + '='.repeat((4 - str.length % 4) % 4);
        return JSON.parse(atob(padded.replace(/-/g, '+').replace(/_/g, '/')));
      };
      setHeader(decodeBase64(parts[0]));
      setPayload(decodeBase64(parts[1]));
      setError('');
    } catch (e) {
      setError(`Invalid JWT: ${(e as Error).message}`);
      setHeader(null);
      setPayload(null);
    }
  };

  useEffect(() => { decode(token); }, [token]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '80px', fontFamily: 'var(--font-mono)' },
    section: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px' },
    sectionTitle: { fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '8px' },
    json: { fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text)', whiteSpace: 'pre-wrap', wordBreak: 'break-all' },
    error: { color: 'var(--color-error)', fontSize: '0.875rem', padding: '12px', background: 'rgba(239,68,68,0.1)', borderRadius: '8px' },
    exp: { fontSize: '0.8rem', marginTop: '8px', color: 'var(--color-text-muted)' },
  };

  const formatExp = (exp: number) => {
    const date = new Date(exp * 1000);
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    if (diff < 0) return `Expired ${date.toLocaleDateString()}`;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 30) return `Expires ${date.toLocaleDateString()}`;
    return `Expires in ${days} day${days !== 1 ? 's' : ''}`;
  };

  return (
    <div style={styles.wrapper}>
      <textarea style={styles.input} placeholder="Paste your JWT token here..." value={token} onChange={e => setToken(e.target.value)} />
      {error && <div style={styles.error}>{error}</div>}
      {header && (
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Header</div>
          <pre style={styles.json}>{JSON.stringify(header, null, 2)}</pre>
        </div>
      )}
      {payload && (
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Payload</div>
          <pre style={styles.json}>{JSON.stringify(payload, null, 2)}</pre>
          {typeof payload.exp === 'number' && <div style={styles.exp}>{formatExp(payload.exp)}</div>}
        </div>
      )}
    </div>
  );
}

// ─── Text Analyzer ───
export function TextAnalyzer() {
  const [text, setText] = useState('');

  const stats = {
    chars: text.length,
    charsNoSpaces: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.split(/[.!?]+/).filter(s => s.trim()).length,
    paragraphs: text.split(/\n\n+/).filter(p => p.trim()).length,
    readingTime: Math.ceil(text.trim().split(/\s+/).length / 200),
  };

  useEffect(() => {}, [text]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '160px' },
    stats: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' },
    statCard: { background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', textAlign: 'center' },
    statValue: { fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' },
    statLabel: { fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginTop: '4px' },
    bar: { height: '6px', background: 'var(--color-border)', borderRadius: '3px', marginTop: '12px', overflow: 'hidden' },
    barFill: { height: '100%', background: 'var(--color-primary)', borderRadius: '3px', transition: 'width 150ms' },
    charCount: { fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'right', marginTop: '4px' },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <textarea style={styles.textarea} placeholder="Type or paste your text here..." value={text} onChange={e => setText(e.target.value)} />
        <div style={styles.charCount}>{text.length} characters</div>
      </div>
      <div style={styles.stats}>
        <div style={styles.statCard}><div style={styles.statValue}>{stats.words}</div><div style={styles.statLabel}>Words</div></div>
        <div style={styles.statCard}><div style={styles.statValue}>{stats.charsNoSpaces}</div><div style={styles.statLabel}>Chars (no spaces)</div></div>
        <div style={styles.statCard}><div style={styles.statValue}>{stats.sentences}</div><div style={styles.statLabel}>Sentences</div></div>
        <div style={styles.statCard}><div style={styles.statValue}>{stats.paragraphs}</div><div style={styles.statLabel}>Paragraphs</div></div>
        <div style={styles.statCard}><div style={styles.statValue}>{stats.readingTime}m</div><div style={styles.statLabel}>Read Time</div></div>
        <div style={styles.statCard}><div style={styles.statValue}>{text.split('\n').length}</div><div style={styles.statLabel}>Lines</div></div>
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>Character Progress (1000 chars)</div>
        <div style={styles.bar}><div style={{ ...styles.barFill, width: `${Math.min((text.length / 1000) * 100, 100)}%` }} /></div>
      </div>
    </div>
  );
}

// ─── Regex Tester ───
export function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('The quick brown fox jumps over the lazy dog.');
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!pattern.trim()) { setMatches([]); setError(''); return; }
    try {
      const regex = new RegExp(pattern, flags);
      const found = testString.match(regex);
      setMatches(found || []);
      setError('');
    } catch (e) {
      setError(`Invalid regex: ${(e as Error).message}`);
      setMatches([]);
    }
  }, [pattern, flags, testString]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', fontFamily: 'var(--font-mono)' },
    row: { display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'end' },
    textarea: { width: '100%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: '100px' },
    flagRow: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
    flagBtn: { padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.8rem', cursor: 'pointer', transition: 'all 150ms' },
    flagBtnActive: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: '1px solid ' },
    matchItem: { background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '6px', padding: '8px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--color-primary)' },
    error: { color: 'var(--color-error)', fontSize: '0.875rem', padding: '12px', background: 'rgba(239,68,68,0.1)', borderRadius: '8px' },
    matchCount: { fontSize: '0.875rem', color: 'var(--color-text-muted)' },
    preview: { fontFamily: 'var(--font-mono)', fontSize: '0.95rem', lineHeight: 1.8, whiteSpace: 'pre-wrap', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px 16px' },
  };

  const toggleFlag = (f: string) => {
    setFlags(prev => prev.includes(f) ? prev.replace(f, '') : prev + f);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Pattern</label>
          <input style={styles.input} placeholder="e.g., \b\w+\b or [A-Z]" value={pattern} onChange={e => setPattern(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Flags</label>
          <div style={styles.flagRow}>
            {['g', 'i', 'm', 's'].map(f => (
              <button key={f} style={{ ...styles.flagBtn, ...(flags.includes(f) ? styles.flagBtnActive : {}) }} onClick={() => toggleFlag(f)}>{f}</button>
            ))}
          </div>
        </div>
      </div>
      {error && <div style={styles.error}>{error}</div>}
      <div>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Test String</label>
        <textarea style={styles.textarea} placeholder="Enter text to test against..." value={testString} onChange={e => setTestString(e.target.value)} />
      </div>
      {matches.length > 0 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={styles.matchCount}>{matches.length} match{matches.length !== 1 ? 'es' : ''} found</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {matches.map((m, i) => <span key={i} style={styles.matchItem}>{m}</span>)}
          </div>
        </div>
      )}
      {pattern && !error && matches.length === 0 && (
        <div style={{ ...styles.error, color: 'var(--color-text-muted)', background: 'var(--color-surface-high)' }}>No matches found</div>
      )}
    </div>
  );
}
