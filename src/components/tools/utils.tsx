'use client';
import { useState, useEffect } from 'react';

type Tool = 'password' | 'uuid' | 'json' | 'color' | 'qr' | 'jwt' | 'text' | 'regex' | 'unit' | 'age' | 'bmi' | 'timer' | 'stopwatch' | 'interest' | 'tip' | 'random' | 'notepad' | 'todo' | 'worldclock';

const UTIL_TOOL_TAB_MAP: Record<string, Tool> = {
  'password-generator': 'password',
  'uuid-generator': 'uuid',
  'lorem-ipsum': 'uuid',
  'unit-converter': 'unit',
  'color-picker': 'color',
  'qr-generator': 'qr',
  'vcard-generator': 'qr',
  'wifi-qr-generator': 'qr',
  'jwt-decoder': 'jwt',
  'text-analyzer': 'text',
  'regex-tester': 'regex',
  'age-calculator': 'age',
  'bmi-calculator': 'bmi',
  'countdown-timer': 'timer',
  'stopwatch': 'stopwatch',
  'interest-calculator': 'interest',
  'tip-calculator': 'tip',
  'random-number': 'random',
  'notepad': 'notepad',
  'todo-list': 'todo',
  'world-clock': 'worldclock',
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
        <button style={{ ...styles.tab, ...(activeTab === 'unit' ? styles.tabActive : {}) }} onClick={() => setActiveTab('unit')}>📐 Unit</button>
        <button style={{ ...styles.tab, ...(activeTab === 'color' ? styles.tabActive : {}) }} onClick={() => setActiveTab('color')}>🎨 Color</button>
        <button style={{ ...styles.tab, ...(activeTab === 'qr' ? styles.tabActive : {}) }} onClick={() => setActiveTab('qr')}>📱 QR Code</button>
        <button style={{ ...styles.tab, ...(activeTab === 'jwt' ? styles.tabActive : {}) }} onClick={() => setActiveTab('jwt')}>🔓 JWT</button>
        <button style={{ ...styles.tab, ...(activeTab === 'text' ? styles.tabActive : {}) }} onClick={() => setActiveTab('text')}>📝 Text</button>
        <button style={{ ...styles.tab, ...(activeTab === 'regex' ? styles.tabActive : {}) }} onClick={() => setActiveTab('regex')}>⚙️ Regex</button>
        <button style={{ ...styles.tab, ...(activeTab === 'age' ? styles.tabActive : {}) }} onClick={() => setActiveTab('age')}>🎂 Age</button>
        <button style={{ ...styles.tab, ...(activeTab === 'bmi' ? styles.tabActive : {}) }} onClick={() => setActiveTab('bmi')}>⚖️ BMI</button>
        <button style={{ ...styles.tab, ...(activeTab === 'timer' ? styles.tabActive : {}) }} onClick={() => setActiveTab('timer')}>⏱️ Timer</button>
        <button style={{ ...styles.tab, ...(activeTab === 'stopwatch' ? styles.tabActive : {}) }} onClick={() => setActiveTab('stopwatch')}>⏲️ Stopwatch</button>
        <button style={{ ...styles.tab, ...(activeTab === 'interest' ? styles.tabActive : {}) }} onClick={() => setActiveTab('interest')}>💰 Interest</button>
        <button style={{ ...styles.tab, ...(activeTab === 'tip' ? styles.tabActive : {}) }} onClick={() => setActiveTab('tip')}>🍽️ Tip</button>
        <button style={{ ...styles.tab, ...(activeTab === 'random' ? styles.tabActive : {}) }} onClick={() => setActiveTab('random')}>🎲 Random</button>
        <button style={{ ...styles.tab, ...(activeTab === 'notepad' ? styles.tabActive : {}) }} onClick={() => setActiveTab('notepad')}>📒 Notepad</button>
        <button style={{ ...styles.tab, ...(activeTab === 'todo' ? styles.tabActive : {}) }} onClick={() => setActiveTab('todo')}>✅ Todo</button>
        <button style={{ ...styles.tab, ...(activeTab === 'worldclock' ? styles.tabActive : {}) }} onClick={() => setActiveTab('worldclock')}>🌍 Clock</button>
      </div>
      <div style={styles.content}>
        {activeTab === 'password' && <PasswordGenerator />}
        {activeTab === 'uuid' && <UuidGenerator />}
        {activeTab === 'unit' && <UnitConverter />}
        {activeTab === 'color' && <ColorConverter />}
        {activeTab === 'qr' && <QrGenerator />}
        {activeTab === 'jwt' && <JwtDecoder />}
        {activeTab === 'text' && <TextAnalyzer />}
        {activeTab === 'regex' && <RegexTester />}
        {activeTab === 'age' && <AgeCalculator />}
        {activeTab === 'bmi' && <BmiCalculator />}
        {activeTab === 'timer' && <CountdownTimer />}
        {activeTab === 'stopwatch' && <Stopwatch />}
        {activeTab === 'interest' && <InterestCalculator />}
        {activeTab === 'tip' && <TipCalculator />}
        {activeTab === 'random' && <RandomNumberGenerator />}
        {activeTab === 'notepad' && <Notepad />}
        {activeTab === 'todo' && <TodoList />}
        {activeTab === 'worldclock' && <WorldClock />}
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

// ─── Unit Converter ───
export function UnitConverter() {
  const [category, setCategory] = useState('length');
  const [value, setValue] = useState('1');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('ft');

  const categories: Record<string, { units: { key: string; label: string; factor: number }[] }> = {
    length: { units: [
      { key: 'm', label: 'Meter (m)', factor: 1 },
      { key: 'km', label: 'Kilometer (km)', factor: 1000 },
      { key: 'cm', label: 'Centimeter (cm)', factor: 0.01 },
      { key: 'mm', label: 'Millimeter (mm)', factor: 0.001 },
      { key: 'mi', label: 'Mile (mi)', factor: 1609.344 },
      { key: 'yd', label: 'Yard (yd)', factor: 0.9144 },
      { key: 'ft', label: 'Foot (ft)', factor: 0.3048 },
      { key: 'in', label: 'Inch (in)', factor: 0.0254 },
    ]},
    weight: { units: [
      { key: 'kg', label: 'Kilogram (kg)', factor: 1 },
      { key: 'g', label: 'Gram (g)', factor: 0.001 },
      { key: 'mg', label: 'Milligram (mg)', factor: 0.000001 },
      { key: 'lb', label: 'Pound (lb)', factor: 0.453592 },
      { key: 'oz', label: 'Ounce (oz)', factor: 0.0283495 },
    ]},
    temperature: { units: [
      { key: 'c', label: 'Celsius (°C)', factor: 1 },
      { key: 'f', label: 'Fahrenheit (°F)', factor: 1 },
      { key: 'k', label: 'Kelvin (K)', factor: 1 },
    ]},
    data: { units: [
      { key: 'b', label: 'Bytes (B)', factor: 1 },
      { key: 'kb', label: 'Kilobytes (KB)', factor: 1024 },
      { key: 'mb', label: 'Megabytes (MB)', factor: 1024 * 1024 },
      { key: 'gb', label: 'Gigabytes (GB)', factor: 1024 * 1024 * 1024 },
      { key: 'tb', label: 'Terabytes (TB)', factor: 1024 * 1024 * 1024 * 1024 },
    ]},
  };

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return 0;
    if (category === 'temperature') {
      if (fromUnit === 'c' && toUnit === 'f') return (num * 9) / 5 + 32;
      if (fromUnit === 'f' && toUnit === 'c') return ((num - 32) * 5) / 9;
      if (fromUnit === 'c' && toUnit === 'k') return num + 273.15;
      if (fromUnit === 'k' && toUnit === 'c') return num - 273.15;
      if (fromUnit === 'f' && toUnit === 'k') return ((num - 32) * 5) / 9 + 273.15;
      if (fromUnit === 'k' && toUnit === 'f') return ((num - 273.15) * 9) / 5 + 32;
      return num;
    }
    const fromFactor = categories[category].units.find(u => u.key === fromUnit)?.factor || 1;
    const toFactor = categories[category].units.find(u => u.key === toUnit)?.factor || 1;
    return (num * fromFactor) / toFactor;
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    select: { padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.9rem' },
    input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '1rem', width: '100%', boxSizing: 'border-box' },
    result: { padding: '20px', borderRadius: '8px', background: 'var(--color-surface-high)', fontSize: '1.5rem', fontWeight: 600, textAlign: 'center', color: 'var(--color-primary)' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
  };

  return (
    <div style={styles.wrapper}>
      <select value={category} onChange={e => { setCategory(e.target.value); setFromUnit(categories[e.target.value].units[0].key); setToUnit(categories[e.target.value].units[1]?.key || categories[e.target.value].units[0].key); }} style={styles.select}>
        {Object.keys(categories).map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
      </select>
      <div style={styles.row}>
        <div>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>From</label>
          <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} style={styles.select}>
            {categories[category].units.map(u => <option key={u.key} value={u.key}>{u.label}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>To</label>
          <select value={toUnit} onChange={e => setToUnit(e.target.value)} style={styles.select}>
            {categories[category].units.map(u => <option key={u.key} value={u.key}>{u.label}</option>)}
          </select>
        </div>
      </div>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} style={styles.input} placeholder="Enter value" />
      <div style={styles.result}>{convert().toLocaleString(undefined, { maximumFractionDigits: 6 })}</div>
    </div>
  );
}

// ─── Age Calculator ───
export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<{ years: number; months: number; days: number; totalDays: number } | null>(null);

  const calculate = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    setResult({ years, months, days, totalDays });
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '1rem' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: 600, cursor: 'pointer' },
    result: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' },
    card: { padding: '16px', borderRadius: '8px', background: 'var(--color-surface-high)', textAlign: 'center' },
    value: { fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' },
    label: { fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' },
  };

  return (
    <div style={styles.wrapper}>
      <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} style={styles.input} />
      <button style={styles.btn} onClick={calculate}>Calculate Age</button>
      {result && (
        <div style={styles.result}>
          <div style={styles.card}><div style={styles.value}>{result.years}</div><div style={styles.label}>Years</div></div>
          <div style={styles.card}><div style={styles.value}>{result.months}</div><div style={styles.label}>Months</div></div>
          <div style={styles.card}><div style={styles.value}>{result.days}</div><div style={styles.label}>Days</div></div>
          <div style={styles.card}><div style={styles.value}>{result.totalDays.toLocaleString()}</div><div style={styles.label}>Total Days</div></div>
        </div>
      )}
    </div>
  );
}

// ─── BMI Calculator ───
export function BmiCalculator() {
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('70');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) return;
    let bmiValue: number;
    if (unit === 'metric') {
      bmiValue = w / ((h / 100) * (h / 100));
    } else {
      bmiValue = (w / (h * h)) * 703;
    }
    setBmi(Math.round(bmiValue * 10) / 10);
  };

  useEffect(() => { if (height && weight) calculate(); }, [height, weight, unit]);

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: 'Underweight', color: '#3B82F6' };
    if (bmi < 25) return { label: 'Normal', color: '#22C55E' };
    if (bmi < 30) return { label: 'Overweight', color: '#F59E0B' };
    return { label: 'Obese', color: '#EF4444' };
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '1rem', width: '100%', boxSizing: 'border-box' },
    toggle: { display: 'flex', gap: '8px' },
    btn: { padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 },
    btnActive: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: '1px solid var(--color-primary)' },
    result: { padding: '24px', borderRadius: '12px', background: 'var(--color-surface-high)', textAlign: 'center' },
    bmiValue: { fontSize: '3rem', fontWeight: 700 },
    category: { fontSize: '1.2rem', fontWeight: 600, marginTop: '8px' },
    range: { fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '8px' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.toggle}>
        <button style={{ ...styles.btn, ...(unit === 'metric' ? styles.btnActive : {}) }} onClick={() => setUnit('metric')}>Metric (cm/kg)</button>
        <button style={{ ...styles.btn, ...(unit === 'imperial' ? styles.btnActive : {}) }} onClick={() => setUnit('imperial')}>Imperial (in/lb)</button>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>{unit === 'metric' ? 'Height (cm)' : 'Height (in)'}</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} style={styles.input} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>{unit === 'metric' ? 'Weight (kg)' : 'Weight (lb)'}</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={styles.input} />
        </div>
      </div>
      {bmi !== null && (
        <div style={styles.result}>
          <div style={{ ...styles.bmiValue, color: getCategory(bmi).color }}>{bmi}</div>
          <div style={{ ...styles.category, color: getCategory(bmi).color }}>{getCategory(bmi).label}</div>
          <div style={styles.range}>Normal BMI range: 18.5 - 24.9</div>
        </div>
      )}
    </div>
  );
}

// ─── Countdown Timer ───
export function CountdownTimer() {
  const [duration, setDuration] = useState('60');
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const start = () => {
    const secs = parseInt(duration);
    if (isNaN(secs) || secs <= 0) return;
    setTimeLeft(secs);
    setIsRunning(true);
    const id = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === null || prev <= 1) { clearInterval(id); setIsRunning(false); return 0; }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const stop = () => {
    if (intervalId) clearInterval(intervalId);
    setIsRunning(false);
  };

  const reset = () => {
    if (intervalId) clearInterval(intervalId);
    setIsRunning(false);
    setTimeLeft(null);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' },
    input: { padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '1rem', width: '120px', textAlign: 'center' },
    display: { fontSize: '5rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: timeLeft === 0 ? 'var(--color-error)' : 'var(--color-primary)' },
    buttons: { display: 'flex', gap: '12px' },
    btn: { padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' },
    btnPrimary: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)' },
    btnSecondary: { background: 'var(--color-surface-high)', color: 'var(--color-text)' },
  };

  return (
    <div style={styles.wrapper}>
      {!isRunning && timeLeft === null ? (
        <input type="number" value={duration} onChange={e => setDuration(e.target.value)} style={styles.input} min="1" placeholder="Seconds" />
      ) : (
        <div style={styles.display}>{formatTime(timeLeft || 0)}</div>
      )}
      <div style={styles.buttons}>
        {!isRunning ? (
          <button style={{ ...styles.btn, ...styles.btnPrimary }} onClick={start}>▶ Start</button>
        ) : (
          <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={stop}>⏸ Pause</button>
        )}
        <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={reset}>⏹ Reset</button>
      </div>
    </div>
  );
}

// ─── Stopwatch ───
export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const start = () => {
    setIsRunning(true);
    const id = setInterval(() => setTime(prev => prev + 1), 1000);
    setIntervalId(id);
  };

  const stop = () => {
    if (intervalId) clearInterval(intervalId);
    setIsRunning(false);
  };

  const reset = () => {
    if (intervalId) clearInterval(intervalId);
    setIsRunning(false);
    setTime(0);
  };

  const lap = () => { /* Lap functionality placeholder */ };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600).toString().padStart(2, '0');
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' },
    display: { fontSize: '4rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' },
    buttons: { display: 'flex', gap: '12px' },
    btn: { padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' },
    btnPrimary: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)' },
    btnSecondary: { background: 'var(--color-surface-high)', color: 'var(--color-text)' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.display}>{formatTime(time)}</div>
      <div style={styles.buttons}>
        {!isRunning ? (
          <button style={{ ...styles.btn, ...styles.btnPrimary }} onClick={start}>▶ Start</button>
        ) : (
          <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={stop}>⏸ Pause</button>
        )}
        <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={reset}>⏹ Reset</button>
        {isRunning && <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={lap}>⏱ Lap</button>}
      </div>
    </div>
  );
}

// ─── Interest Calculator ───
export function InterestCalculator() {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('5');
  const [time, setTime] = useState('2');
  const [type, setType] = useState<'simple' | 'compound'>('simple');
  const [result, setResult] = useState<{ interest: number; total: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    if (isNaN(p) || isNaN(r) || isNaN(t)) return;
    let interest: number;
    if (type === 'simple') {
      interest = (p * r * t) / 100;
    } else {
      interest = p * Math.pow(1 + r / 100, t) - p;
    }
    setResult({ interest: Math.round(interest * 100) / 100, total: Math.round((p + interest) * 100) / 100 });
  };

  useEffect(() => { calculate(); }, [principal, rate, time, type]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '1rem', width: '100%', boxSizing: 'border-box' },
    toggle: { display: 'flex', gap: '8px' },
    btn: { padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, flex: 1 },
    btnActive: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: '1px solid var(--color-primary)' },
    resultGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
    card: { padding: '16px', borderRadius: '8px', background: 'var(--color-surface-high)', textAlign: 'center' },
    value: { fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' },
    label: { fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.toggle}>
        <button style={{ ...styles.btn, ...(type === 'simple' ? styles.btnActive : {}) }} onClick={() => setType('simple')}>Simple Interest</button>
        <button style={{ ...styles.btn, ...(type === 'compound' ? styles.btnActive : {}) }} onClick={() => setType('compound')}>Compound Interest</button>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>Principal ($)</label>
          <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} style={styles.input} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>Rate (%)</label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} style={styles.input} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>Time (years)</label>
          <input type="number" value={time} onChange={e => setTime(e.target.value)} style={styles.input} />
        </div>
      </div>
      {result && (
        <div style={styles.resultGrid}>
          <div style={styles.card}><div style={styles.value}>${result.interest.toLocaleString()}</div><div style={styles.label}>Interest</div></div>
          <div style={styles.card}><div style={styles.value}>${result.total.toLocaleString()}</div><div style={styles.label}>Total Amount</div></div>
        </div>
      )}
    </div>
  );
}

// ─── Tip Calculator ───
export function TipCalculator() {
  const [bill, setBill] = useState('100');
  const [tip, setTip] = useState('15');
  const [split, setSplit] = useState('1');

  const calculate = () => {
    const b = parseFloat(bill) || 0;
    const t = parseFloat(tip) || 0;
    const s = parseInt(split) || 1;
    const tipAmount = (b * t) / 100;
    const total = b + tipAmount;
    const perPerson = total / s;
    return { tipAmount: Math.round(tipAmount * 100) / 100, total: Math.round(total * 100) / 100, perPerson: Math.round(perPerson * 100) / 100 };
  };

  const result = calculate();

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '1rem', width: '100%', boxSizing: 'border-box' },
    resultCard: { padding: '20px', borderRadius: '8px', background: 'var(--color-surface-high)', textAlign: 'center' },
    value: { fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' },
    label: { fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px' },
    tipButtons: { display: 'flex', gap: '8px' },
    tipBtn: { padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', cursor: 'pointer', fontSize: '0.9rem', flex: 1 },
    tipBtnActive: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: '1px solid var(--color-primary)' },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>Bill Amount ($)</label>
        <input type="number" value={bill} onChange={e => setBill(e.target.value)} style={styles.input} />
      </div>
      <div>
        <label style={{ fontSize: '0.8rem', marginBottom: '8px', display: 'block' }}>Tip %</label>
        <div style={styles.tipButtons}>
          {[10, 15, 18, 20, 25].map(p => (
            <button key={p} style={{ ...styles.tipBtn, ...(tip === p.toString() ? styles.tipBtnActive : {}) }} onClick={() => setTip(p.toString())}>{p}%</button>
          ))}
        </div>
      </div>
      <div>
        <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>Split ({split} {parseInt(split) === 1 ? 'person' : 'people'})</label>
        <input type="range" min="1" max="20" value={split} onChange={e => setSplit(e.target.value)} style={{ width: '100%', accentColor: 'var(--color-primary)' }} />
      </div>
      <div style={styles.resultCard}>
        <div style={styles.grid}>
          <div><div style={styles.value}>${result.tipAmount}</div><div style={styles.label}>Tip</div></div>
          <div><div style={styles.value}>${result.total}</div><div style={styles.label}>Total</div></div>
          <div style={{ gridColumn: '1 / -1' }}><div style={styles.value}>${result.perPerson}</div><div style={styles.label}>Per Person</div></div>
        </div>
      </div>
    </div>
  );
}

// ─── Random Number Generator ───
export function RandomNumberGenerator() {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [count, setCount] = useState('1');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [history, setHistory] = useState<number[][]>([]);

  const generate = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    const cnt = parseInt(count);
    if (isNaN(minVal) || isNaN(maxVal) || isNaN(cnt) || cnt < 1) return;
    const nums: number[] = [];
    for (let i = 0; i < cnt; i++) {
      nums.push(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
    }
    setNumbers(nums);
    setHistory(prev => [nums, ...prev.slice(0, 9)]);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '1rem', width: '100%', boxSizing: 'border-box' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' },
    btn: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: 600, cursor: 'pointer' },
    result: { padding: '20px', borderRadius: '8px', background: 'var(--color-surface-high)', fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', color: 'var(--color-primary)', wordBreak: 'break-all' },
    historyItem: { padding: '8px 12px', borderRadius: '6px', background: 'var(--color-surface-high)', fontSize: '0.9rem', marginBottom: '4px' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.row}>
        <div>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>Min</label>
          <input type="number" value={min} onChange={e => setMin(e.target.value)} style={styles.input} />
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>Max</label>
          <input type="number" value={max} onChange={e => setMax(e.target.value)} style={styles.input} />
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', marginBottom: '4px', display: 'block' }}>Count</label>
          <input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" style={styles.input} />
        </div>
      </div>
      <button style={styles.btn} onClick={generate}>🎲 Generate</button>
      {numbers.length > 0 && <div style={styles.result}>{numbers.join(', ')}</div>}
      {history.length > 0 && (
        <div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>History (last 10)</div>
          {history.map((h, i) => <div key={i} style={styles.historyItem}>{h.join(', ')}</div>)}
        </div>
      )}
    </div>
  );
}

// ─── Notepad ───
export function Notepad() {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState(false);

  const save = () => {
    localStorage.setItem('toolmint-notepad', text);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const clear = () => {
    setText('');
    localStorage.removeItem('toolmint-notepad');
  };

  useEffect(() => {
    const stored = localStorage.getItem('toolmint-notepad');
    if (stored) setText(stored);
  }, []);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' },
    textarea: { flex: 1, minHeight: '300px', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.95rem', fontFamily: 'var(--font-mono)', resize: 'vertical' },
    row: { display: 'flex', gap: '8px', justifyContent: 'flex-end' },
    btn: { padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' },
    btnSave: { background: 'var(--color-primary)', color: 'var(--color-text-inverse)' },
    btnClear: { background: 'var(--color-surface-high)', color: 'var(--color-text)' },
    wordCount: { fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'right' },
  };

  return (
    <div style={styles.wrapper}>
      <textarea value={text} onChange={e => setText(e.target.value)} style={styles.textarea} placeholder="Start typing..." />
      <div style={styles.row}>
        <span style={{ ...styles.wordCount, marginRight: 'auto', alignSelf: 'center' }}>{text.split(/\s+/).filter(Boolean).length} words | {text.length} chars</span>
        <button style={{ ...styles.btn, ...styles.btnClear }} onClick={clear}>🗑️ Clear</button>
        <button style={{ ...styles.btn, ...styles.btnSave }} onClick={save}>{saved ? '✅ Saved!' : '💾 Save'}</button>
      </div>
    </div>
  );
}

// ─── Todo List ───
export function TodoList() {
  const [tasks, setTasks] = useState<{ id: number; text: string; done: boolean }[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  useEffect(() => {
    const stored = localStorage.getItem('toolmint-todos');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('toolmint-todos', JSON.stringify(tasks));
  }, [tasks]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '12px' },
    inputRow: { display: 'flex', gap: '8px' },
    input: { flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontSize: '0.95rem' },
    btn: { padding: '10px 20px', borderRadius: '8px', border: 'none', background: 'var(--color-primary)', color: 'var(--color-text-inverse)', fontWeight: 600, cursor: 'pointer' },
    taskItem: { display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', background: 'var(--color-surface-high)', transition: 'opacity 150ms' },
    taskText: { flex: 1, fontSize: '0.95rem', cursor: 'pointer' },
    taskDone: { textDecoration: 'line-through', color: 'var(--color-text-muted)' },
    deleteBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', opacity: 0.6 },
    empty: { textAlign: 'center', color: 'var(--color-text-muted)', padding: '40px' },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.inputRow}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} style={styles.input} placeholder="Add a task..." />
        <button style={styles.btn} onClick={addTask}>Add</button>
      </div>
      {tasks.length === 0 ? (
        <div style={styles.empty}>No tasks yet. Add one above! ✅</div>
      ) : (
        tasks.map(task => (
          <div key={task.id} style={styles.taskItem}>
            <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <span style={{ ...styles.taskText, ...(task.done ? styles.taskDone : {}) }} onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button style={styles.deleteBtn} onClick={() => deleteTask(task.id)}>🗑️</button>
          </div>
        ))
      )}
    </div>
  );
}

// ─── World Clock ───
export function WorldClock() {
  const [timezones] = useState([
    { name: 'New York', zone: 'America/New_York' },
    { name: 'London', zone: 'Europe/London' },
    { name: 'Tokyo', zone: 'Asia/Tokyo' },
    { name: 'Sydney', zone: 'Australia/Sydney' },
    { name: 'Dubai', zone: 'Asia/Dubai' },
    { name: 'Singapore', zone: 'Asia/Singapore' },
    { name: 'Paris', zone: 'Europe/Paris' },
    { name: 'Los Angeles', zone: 'America/Los_Angeles' },
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (zone: string) => {
    return currentTime.toLocaleTimeString('en-US', { timeZone: zone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  const formatDate = (zone: string) => {
    return currentTime.toLocaleDateString('en-US', { timeZone: zone, weekday: 'short', month: 'short', day: 'numeric' });
  };

  const getOffset = (zone: string) => {
    const now = new Date();
    const utcTime = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzTime = new Date(now.toLocaleString('en-US', { timeZone: zone }));
    const offsetHours = (tzTime.getTime() - utcTime.getTime()) / (1000 * 60 * 60);
    const sign = offsetHours >= 0 ? '+' : '';
    return `UTC${sign}${offsetHours}`;
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '12px' },
    clockItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '8px', background: 'var(--color-surface-high)' },
    city: { fontWeight: 600, fontSize: '1rem' },
    time: { fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' },
    date: { fontSize: '0.8rem', color: 'var(--color-text-muted)' },
    offset: { fontSize: '0.75rem', color: 'var(--color-text-muted)', background: 'var(--color-bg)', padding: '2px 8px', borderRadius: '4px' },
  };

  return (
    <div style={styles.wrapper}>
      {timezones.map(tz => (
        <div key={tz.zone} style={styles.clockItem}>
          <div>
            <div style={styles.city}>{tz.name}</div>
            <div style={styles.date}>{formatDate(tz.zone)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={styles.time}>{formatTime(tz.zone)}</div>
            <div style={styles.offset}>{getOffset(tz.zone)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
