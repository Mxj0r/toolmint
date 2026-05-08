'use client';
import { useState, useEffect } from 'react';

export function QrGenerator() {
  const [text, setText] = useState('https://example.com');
  const [size, setSize] = useState(300);

  const qrUrl = text.trim()
    ? `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`
    : '';

  const downloadQr = () => {
    if (!qrUrl) return;
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = 'qr-code.png';
    link.click();
  };

  const copyToClipboard = () => {
    if (!qrUrl) return;
    navigator.clipboard.writeText(qrUrl);
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    input: {
      width: '100%',
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: '12px 16px',
      color: 'var(--color-text)',
      fontSize: '0.95rem',
      outline: 'none',
      boxSizing: 'border-box',
    },
    row: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
    },
    select: {
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: '12px 16px',
      color: 'var(--color-text)',
      fontSize: '0.95rem',
      outline: 'none',
      cursor: 'pointer',
    },
    qrBox: {
      background: 'white',
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '320px',
      border: '1px solid var(--color-border)',
    },
    qrImg: {
      maxWidth: '100%',
      maxHeight: '280px',
    },
    hint: {
      fontSize: '0.75rem',
      color: 'var(--color-text-muted)',
      textAlign: 'center',
    },
    btn: {
      background: 'var(--color-primary)',
      color: 'var(--color-text-inverse)',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 20px',
      fontWeight: 600,
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: 'opacity 150ms',
    },
    btnOutline: {
      background: 'var(--color-surface-high)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: '12px 20px',
      color: 'var(--color-text)',
      fontSize: '0.9rem',
      cursor: 'pointer',
    },
    btnGroup: {
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.wrapper}>
      <input
        style={styles.input}
        placeholder="Enter URL or text..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div style={styles.row}>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)' }}>
          Size:
        </label>
        <select
          style={styles.select}
          value={size}
          onChange={e => setSize(parseInt(e.target.value))}
        >
          <option value={150}>150x150</option>
          <option value={200}>200x200</option>
          <option value={300}>300x300</option>
          <option value={500}>500x500</option>
        </select>
      </div>
      <div style={styles.qrBox}>
        {qrUrl ? (
          <img src={qrUrl} alt="QR Code" style={styles.qrImg} />
        ) : (
          <span style={{ color: 'var(--color-text-muted)' }}>Enter text to generate QR code</span>
        )}
      </div>
      <div style={styles.hint}>QR code updates live as you type</div>
      {qrUrl && (
        <div style={styles.btnGroup}>
          <button style={styles.btnOutline} onClick={copyToClipboard}>
            📋 Copy URL
          </button>
          <button style={styles.btn} onClick={downloadQr}>
            ⬇️ Download
          </button>
        </div>
      )}
    </div>
  );
}
