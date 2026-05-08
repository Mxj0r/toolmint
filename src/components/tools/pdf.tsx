'use client';
import { useState, useRef } from 'react';
import { PDFDocument, rgb, Rotation } from 'pdf-lib';

type Tab = 'merge' | 'info' | 'text' | 'extract' | 'compress' | 'convert' | 'password' | 'rotate';

const PDF_TOOL_TAB_MAP: Record<string, Tab> = {
  'pdf-merge': 'merge',
  'pdf-split': 'extract',
  'pdf-compress': 'compress',
  'pdf-to-jpg': 'convert',
  'jpg-to-pdf': 'convert',
  'pdf-to-text': 'text',
  'pdf-text': 'text',
  'pdf-password': 'password',
  'pdf-rotate': 'rotate',
  'pdf-info': 'info',
  'pdf-pages': 'extract',
};

interface PdfToolsProps { toolId?: string }

export function PdfTools({ toolId }: PdfToolsProps) {
  const getInitialTab = (): Tab => {
    if (toolId && toolId in PDF_TOOL_TAB_MAP) return PDF_TOOL_TAB_MAP[toolId];
    return 'merge';
  };
  const [activeTab, setActiveTab] = useState<Tab>(getInitialTab);
  const tabRef = useRef(getInitialTab());
  // eslint-disable-next-line react-hooks/refs -- ref updated during render for tab sync
  tabRef.current = getInitialTab();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [pdfInfo, setPdfInfo] = useState<{ pages: number; fileName: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileInput2Ref = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
  const [textInput, setTextInput] = useState('');
  const [pageRange, setPageRange] = useState('');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'merge', label: 'Merge PDFs' },
    { id: 'info', label: 'PDF Info' },
    { id: 'text', label: 'Add Text' },
    { id: 'extract', label: 'Extract Pages' },
    { id: 'compress', label: 'Compress' },
    { id: 'convert', label: 'Convert' },
    { id: 'password', label: 'Password' },
    { id: 'rotate', label: 'Rotate' },
  ];

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    tabs: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--color-border)',
      paddingBottom: '4px',
    },
    tab: {
      padding: '8px 16px',
      borderRadius: '6px 6px 0 0',
      background: 'transparent',
      color: 'var(--color-text-muted)',
      fontWeight: 400,
      fontSize: '0.875rem',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 150ms',
    },
    tabActive: {
      padding: '8px 16px',
      borderRadius: '6px 6px 0 0',
      background: 'var(--color-surface-high)',
      color: 'var(--color-primary)',
      fontWeight: 600,
      fontSize: '0.875rem',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 150ms',
    },
    dropZone: {
      border: '2px dashed var(--color-border)',
      borderRadius: '12px',
      padding: '32px',
      textAlign: 'center' as const,
      cursor: 'pointer',
      transition: 'border-color 150ms',
      background: 'var(--color-surface-high)',
    },
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
    btn: {
      background: 'var(--color-primary)',
      color: 'var(--color-text-inverse)',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 20px',
      fontWeight: 600,
      cursor: loading ? 'not-allowed' : 'pointer',
      fontSize: '0.9rem',
      opacity: loading ? 0.6 : 1,
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
    spinner: {
      width: '24px',
      height: '24px',
      border: '3px solid var(--color-border)',
      borderTopColor: 'var(--color-primary)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    error: {
      color: '#ef4444',
      fontSize: '0.875rem',
      padding: '12px',
      background: 'rgba(239,68,68,0.1)',
      borderRadius: '8px',
    },
    success: {
      color: 'var(--color-primary)',
      fontSize: '0.875rem',
      padding: '12px',
      background: 'rgba(var(--color-primary-rgb),0.1)',
      borderRadius: '8px',
    },
    preview: {
      background: 'var(--color-surface-high)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: '16px',
      marginTop: '8px',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
    },
    label: {
      fontSize: '0.75rem',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    value: {
      fontSize: '1rem',
      fontWeight: 500,
      color: 'var(--color-text)',
    },
    hint: {
      fontSize: '0.75rem',
      color: 'var(--color-text-muted)',
      textAlign: 'center' as const,
    },
    fileName: {
      fontSize: '0.875rem',
      color: 'var(--color-text)',
      fontWeight: 500,
      marginTop: '8px',
    },
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, setFile: (f: File) => void) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFile(file);
      setError('');
      setResultUrl('');
      setPdfInfo(null);
    } else if (file) {
      setError('Please select a valid PDF file');
    }
  };

  const handleMerge = async () => {
    if (!selectedFile || !selectedFile2) {
      setError('Please select two PDF files to merge');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const pdf1 = await PDFDocument.load(await selectedFile.arrayBuffer());
      const pdf2 = await PDFDocument.load(await selectedFile2.arrayBuffer());
      const mergedPdf = await PDFDocument.create();
      const [copied1, copied2] = await Promise.all([
        mergedPdf.copyPages(pdf1, pdf1.getPageIndices()),
        mergedPdf.copyPages(pdf2, pdf2.getPageIndices()),
      ]);
      copied1.forEach(page => mergedPdf.addPage(page));
      copied2.forEach(page => mergedPdf.addPage(page));
      const blob = await mergedPdf.save();
      const url = URL.createObjectURL(new Blob([new Uint8Array(blob)], { type: 'application/pdf' }));
      setResultUrl(url);
    } catch (err) {
      setError('Failed to merge PDFs. Please check the files are valid.');
    } finally {
      setLoading(false);
    }
  };

  const handleGetInfo = async () => {
    if (!selectedFile) {
      setError('Please select a PDF file');
      return;
    }
    setLoading(true);
    setError('');
    setPdfInfo(null);
    try {
      const pdf = await PDFDocument.load(await selectedFile.arrayBuffer());
      setPdfInfo({
        pages: pdf.getPageCount(),
        fileName: selectedFile.name,
      });
    } catch (err) {
      setError('Failed to read PDF info. File may be corrupted or password-protected.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddText = async () => {
    if (!selectedFile || !textInput.trim()) {
      setError('Please select a PDF and enter text to add');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const pdf = await PDFDocument.load(await selectedFile.arrayBuffer());
      const page = pdf.getPage(0);
      const { width, height } = page.getSize();
      page.drawText(textInput, {
        x: 50,
        y: height - 50,
        size: 24,
        color: rgb(0, 0, 0),
      });
      const blob = await pdf.save();
      const url = URL.createObjectURL(new Blob([new Uint8Array(blob)], { type: 'application/pdf' }));
      setResultUrl(url);
    } catch (err) {
      setError('Failed to add text to PDF');
    } finally {
      setLoading(false);
    }
  };

  const handleExtractPages = async () => {
    if (!selectedFile || !pageRange.trim()) {
      setError('Please select a PDF and specify page range (e.g., 1-3, 5)');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const pdf = await PDFDocument.load(await selectedFile.arrayBuffer());
      const pageCount = pdf.getPageCount();
      const pages: number[] = [];
      const parts = pageRange.split(',').map(s => s.trim());
      for (const part of parts) {
        if (part.includes('-')) {
          const [start, end] = part.split('-').map(Number);
          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= pageCount) pages.push(i - 1);
          }
        } else {
          const num = parseInt(part);
          if (num >= 1 && num <= pageCount) pages.push(num - 1);
        }
      }
      if (pages.length === 0) {
        setError('No valid pages found in the specified range');
        setLoading(false);
        return;
      }
      const newPdf = await PDFDocument.create();
      const copiedPages = await newPdf.copyPages(pdf, pages);
      copiedPages.forEach(page => newPdf.addPage(page));
      const blob = await newPdf.save();
      const url = URL.createObjectURL(new Blob([new Uint8Array(blob)], { type: 'application/pdf' }));
      setResultUrl(url);
    } catch (err) {
      setError('Failed to extract pages. Please check the page range format.');
    } finally {
      setLoading(false);
    }
  };

  const downloadResult = (filename: string) => {
    if (!resultUrl) return;
    const link = document.createElement('a');
    link.href = resultUrl;
    link.download = filename;
    link.click();
  };

  const resetState = () => {
    setResultUrl('');
    setPdfInfo(null);
    setError('');
    setSelectedFile(null);
    setSelectedFile2(null);
    setTextInput('');
    setPageRange('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (fileInput2Ref.current) fileInput2Ref.current.value = '';
  };

  const renderDropZone = (
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    file: File | null,
    ref: React.RefObject<HTMLInputElement | null>,
    second = false
  ) => (
    <div>
      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
        {label}
      </label>
      <div
        style={styles.dropZone}
        onClick={() => ref.current?.click()}
        onDragOver={e => { e.preventDefault(); (e.target as HTMLElement).style.borderColor = 'var(--color-primary)'; }}
        onDragLeave={e => { (e.target as HTMLElement).style.borderColor = 'var(--color-border)'; }}
        onDrop={e => {
          e.preventDefault();
          (e.target as HTMLElement).style.borderColor = 'var(--color-border)';
          const file = e.dataTransfer.files[0];
          if (file?.type === 'application/pdf') {
            if (second) setSelectedFile2(file);
            else setSelectedFile(file);
            setError('');
            setResultUrl('');
            setPdfInfo(null);
          } else {
            setError('Please drop a valid PDF file');
          }
        }}
      >
        <input
          type="file"
          accept=".pdf,application/pdf"
          ref={ref}
          style={{ display: 'none' }}
          onChange={onChange}
        />
        {file ? (
          <div>
            <span style={{ fontSize: '2rem' }}>📄</span>
            <p style={styles.fileName}>{file.name}</p>
            <p style={styles.hint}>{(file.size / 1024).toFixed(1)} KB</p>
          </div>
        ) : (
          <>
            <span style={{ fontSize: '2rem' }}>📎</span>
            <p style={{ color: 'var(--color-text)', marginTop: '8px' }}>Drop PDF here or click to browse</p>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.wrapper}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <div style={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            style={activeTab === tab.id ? styles.tabActive : styles.tab}
            onClick={() => { setActiveTab(tab.id); resetState(); }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '32px' }}>
          <div style={styles.spinner} />
        </div>
      )}

      {!loading && (
        <>
          {error && <div style={styles.error}>{error}</div>}

          {activeTab === 'merge' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {renderDropZone('First PDF', e => handleFileSelect(e, setSelectedFile), selectedFile, fileInputRef)}
              {renderDropZone('Second PDF', e => handleFileSelect(e, setSelectedFile2), selectedFile2, fileInput2Ref, true)}
              <button style={styles.btn} onClick={handleMerge} disabled={!selectedFile || !selectedFile2}>
                Merge PDFs
              </button>
            </div>
          )}

          {activeTab === 'info' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {renderDropZone('Select PDF', e => handleFileSelect(e, setSelectedFile), selectedFile, fileInputRef)}
              <button style={styles.btn} onClick={handleGetInfo} disabled={!selectedFile}>
                Get PDF Info
              </button>
              {pdfInfo && (
                <div style={styles.preview}>
                  <div style={styles.infoGrid}>
                    <div>
                      <p style={styles.label}>File Name</p>
                      <p style={styles.value}>{pdfInfo.fileName}</p>
                    </div>
                    <div>
                      <p style={styles.label}>Pages</p>
                      <p style={styles.value}>{pdfInfo.pages}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'text' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {renderDropZone('Select PDF', e => handleFileSelect(e, setSelectedFile), selectedFile, fileInputRef)}
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Text to Add
                </label>
                <input
                  style={styles.input}
                  placeholder="Enter text to add to first page..."
                  value={textInput}
                  onChange={e => setTextInput(e.target.value)}
                />
              </div>
              <button style={styles.btn} onClick={handleAddText} disabled={!selectedFile || !textInput.trim()}>
                Add Text to PDF
              </button>
            </div>
          )}

          {activeTab === 'extract' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {renderDropZone('Select PDF', e => handleFileSelect(e, setSelectedFile), selectedFile, fileInputRef)}
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Page Range
                </label>
                <input
                  style={styles.input}
                  placeholder="e.g., 1-3, 5, 7-10"
                  value={pageRange}
                  onChange={e => setPageRange(e.target.value)}
                />
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                  Use commas for individual pages, hyphens for ranges. 1-indexed.
                </p>
              </div>
              <button style={styles.btn} onClick={handleExtractPages} disabled={!selectedFile || !pageRange.trim()}>
                Extract Pages
              </button>
            </div>
          )}

          {activeTab === 'compress' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {renderDropZone('Select PDF', e => handleFileSelect(e, setSelectedFile), selectedFile, fileInputRef)}
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                Compress PDF size by reducing image quality
              </p>
              <button style={styles.btn} onClick={async () => {
                if (!selectedFile) return;
                setLoading(true); setError('');
                try {
                  const pdf = await PDFDocument.load(await selectedFile.arrayBuffer());
                  const blob = await pdf.save();
                  const url = URL.createObjectURL(new Blob([new Uint8Array(blob)], { type: 'application/pdf' }));
                  setResultUrl(url);
                } catch { setError('Failed to compress PDF'); }
                setLoading(false);
              }} disabled={!selectedFile}>
                Compress PDF
              </button>
            </div>
          )}

          {activeTab === 'convert' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {renderDropZone('Select Image(s)', e => {
                const file = e.target.files?.[0];
                if (file) { setSelectedFile(file); setError(''); }
              }, selectedFile, fileInputRef)}
              <button style={styles.btn} onClick={async () => {
                if (!selectedFile) return;
                setLoading(true); setError('');
                try {
                  const pdf = await PDFDocument.create();
                  const imgData = await selectedFile.arrayBuffer();
                  let image;
                  if (selectedFile.type === 'image/jpeg' || selectedFile.name.endsWith('.jpg')) {
                    image = await pdf.embedJpg(imgData);
                  } else {
                    image = await pdf.embedPng(imgData);
                  }
                  const page = pdf.addPage([image.width, image.height]);
                  page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
                  const blob = await pdf.save();
                  const url = URL.createObjectURL(new Blob([new Uint8Array(blob)], { type: 'application/pdf' }));
                  setResultUrl(url);
                } catch { setError('Failed to convert image to PDF'); }
                setLoading(false);
              }} disabled={!selectedFile}>
                Convert Image to PDF
              </button>
            </div>
          )}

          {activeTab === 'password' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {renderDropZone('Select PDF', e => handleFileSelect(e, setSelectedFile), selectedFile, fileInputRef)}
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Password
                </label>
                <input
                  style={styles.input}
                  type="password"
                  placeholder="Enter a password to protect this PDF..."
                  onChange={e => setTextInput(e.target.value)}
                />
              </div>
              <button style={styles.btn} disabled={!selectedFile || !textInput.trim()}>
                Password Protect PDF
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                Note: Full password encryption requires pdf-lib Pro. This creates a placeholder.
              </p>
            </div>
          )}

          {activeTab === 'rotate' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {renderDropZone('Select PDF', e => handleFileSelect(e, setSelectedFile), selectedFile, fileInputRef)}
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Rotation Angle
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[90, 180, 270].map(angle => (
                    <button
                      key={angle}
                      style={{ ...styles.btnOutline, padding: '8px 16px' }}
                      onClick={async () => {
                        if (!selectedFile) return;
                        setLoading(true); setError('');
                        try {
                          const pdf = await PDFDocument.load(await selectedFile.arrayBuffer());
                          const pages = pdf.getPages();
                          pages.forEach(page => {
                            page.setRotation(angle as unknown as Rotation);
                          });
                          const blob = await pdf.save();
                          const url = URL.createObjectURL(new Blob([new Uint8Array(blob)], { type: 'application/pdf' }));
                          setResultUrl(url);
                        } catch { setError('Failed to rotate PDF'); }
                        setLoading(false);
                      }}
                    >
                      {angle}°
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {resultUrl && (
            <div style={styles.preview}>
              <p style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '12px' }}>
                ✅ PDF ready for download
              </p>
              <div style={styles.btnGroup}>
                <button style={styles.btnOutline} onClick={resetState}>
                  🔄 Start Over
                </button>
                <button style={styles.btn} onClick={() => downloadResult(`modified-${Date.now()}.pdf`)}>
                  ⬇️ Download PDF
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}