'use client';
import { useState, useRef } from 'react';

type Tab = 'resize' | 'compress' | 'convert' | 'crop' | 'rotate' | 'flip' | 'grayscale' | 'blur' | 'base64';
type OutputFormat = 'png' | 'jpeg' | 'webp' | 'gif';

interface ImageInfo {
  width: number;
  height: number;
  fileName: string;
  fileSize: number;
  format: string;
}

const IMAGE_TOOL_TAB_MAP: Record<string, Tab> = {
  'image-resizer': 'resize',
  'image-compressor': 'compress',
  'image-converter': 'convert',
  'jpg-png-converter': 'convert',
  'image-cropper': 'crop',
  'image-rotator': 'rotate',
  'image-flip': 'flip',
  'image-grayscale': 'grayscale',
  'image-blur': 'blur',
  'image-to-base64': 'base64',
  'gif-resizer': 'resize',
};

interface ImageToolsProps { toolId?: string }

export function ImageTools({ toolId }: ImageToolsProps) {
  const getInitialTab = (): Tab => {
    if (toolId && toolId in IMAGE_TOOL_TAB_MAP) return IMAGE_TOOL_TAB_MAP[toolId];
    return 'resize';
  };
  const [activeTab, setActiveTab] = useState<Tab>(getInitialTab);
  const tabRef = useRef(getInitialTab());
  // eslint-disable-next-line react-hooks/refs -- ref updated during render for tab sync
  tabRef.current = getInitialTab();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Tab-specific states
  const [resizeWidth, setResizeWidth] = useState(800);
  const [resizeHeight, setResizeHeight] = useState(600);
  const [maintainAspect, setMaintainAspect] = useState(true);

  const [compressQuality, setCompressQuality] = useState(80);

  const [outputFormat, setOutputFormat] = useState<OutputFormat>('jpeg');

  const [cropX, setCropX] = useState(0);
  const [cropY, setCropY] = useState(0);
  const [cropWidth, setCropWidth] = useState(100);
  const [cropHeight, setCropHeight] = useState(100);

  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'resize', label: 'Resize' },
    { id: 'compress', label: 'Compress' },
    { id: 'convert', label: 'Convert' },
    { id: 'crop', label: 'Crop' },
    { id: 'rotate', label: 'Rotate' },
    { id: 'flip', label: 'Flip' },
    { id: 'grayscale', label: 'Grayscale' },
    { id: 'blur', label: 'Blur' },
    { id: 'base64', label: 'Base64' },
  ];

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    tabs: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--color-border)',
      paddingBottom: '4px',
      overflowX: 'auto',
      flexWrap: 'nowrap',
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
      whiteSpace: 'nowrap',
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
      whiteSpace: 'nowrap',
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
    inputSmall: {
      width: '80px',
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: '8px 12px',
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
    preview: {
      background: 'var(--color-surface-high)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: '16px',
      marginTop: '8px',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
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
    row: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
    },
    slider: {
      width: '100%',
      cursor: 'pointer',
    },
    previewCanvas: {
      maxWidth: '100%',
      maxHeight: '400px',
      borderRadius: '8px',
      border: '1px solid var(--color-border)',
    },
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const loadImage = (file: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const getImageFormat = (file: File): string => {
    if (file.type === 'image/png') return 'PNG';
    if (file.type === 'image/jpeg' || file.type === 'image/jpg') return 'JPEG';
    if (file.type === 'image/webp') return 'WebP';
    if (file.type === 'image/gif') return 'GIF';
    return file.type || 'Unknown';
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setError('');
      setResultUrl('');
      setImageInfo(null);

      try {
        const img = await loadImage(file);
        setImageInfo({
          width: img.width,
          height: img.height,
          fileName: file.name,
          fileSize: file.size,
          format: getImageFormat(file),
        });
        setResizeWidth(img.width);
        setResizeHeight(img.height);
        setCropWidth(Math.round(img.width / 2));
        setCropHeight(Math.round(img.height / 2));

        const canvasEl = document.createElement('canvas');
        canvasEl.width = img.width;
        canvasEl.height = img.height;
        const ctx = canvasEl.getContext('2d')!;
        ctx.drawImage(img, 0, 0);
        setCanvas(canvasEl);
        setPreviewUrl(canvasEl.toDataURL());
      } catch (err) {
        setError('Failed to load image. Please try another file.');
      }
    } else if (file) {
      setError('Please select a valid image file');
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setError('');
      setResultUrl('');

      try {
        const img = await loadImage(file);
        setImageInfo({
          width: img.width,
          height: img.height,
          fileName: file.name,
          fileSize: file.size,
          format: getImageFormat(file),
        });
        setResizeWidth(img.width);
        setResizeHeight(img.height);
        setCropWidth(Math.round(img.width / 2));
        setCropHeight(Math.round(img.height / 2));

        const canvasEl = document.createElement('canvas');
        canvasEl.width = img.width;
        canvasEl.height = img.height;
        const ctx = canvasEl.getContext('2d')!;
        ctx.drawImage(img, 0, 0);
        setCanvas(canvasEl);
        setPreviewUrl(canvasEl.toDataURL());
      } catch (err) {
        setError('Failed to load image. Please try another file.');
      }
    } else {
      setError('Please drop a valid image file');
    }
  };

  const createCanvasFromFile = async (): Promise<{ canvas: HTMLCanvasElement; img: HTMLImageElement } | null> => {
    if (!selectedFile) return null;
    const img = await loadImage(selectedFile);
    const canvasEl = document.createElement('canvas');
    canvasEl.width = img.width;
    canvasEl.height = img.height;
    const ctx = canvasEl.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    return { canvas: canvasEl, img };
  };

  const handleResize = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const result = await createCanvasFromFile();
      if (!result) throw new Error('Failed to create canvas');
      const { canvas: c } = result;

      const canvasEl = document.createElement('canvas');
      canvasEl.width = resizeWidth;
      canvasEl.height = resizeHeight;
      const ctx = canvasEl.getContext('2d')!;
      ctx.drawImage(c, 0, 0, resizeWidth, resizeHeight);
      processAndSetResult(canvasEl);
    } catch (err) {
      setError('Failed to resize image');
    } finally {
      setLoading(false);
    }
  };

  const handleCompress = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const result = await createCanvasFromFile();
      if (!result) throw new Error('Failed to create canvas');
      const { canvas: c } = result;

      const mimeType = `image/${outputFormat}`;
      const quality = compressQuality / 100;
      const dataUrl = c.toDataURL(mimeType, quality);
      setResultUrl(dataUrl);
    } catch (err) {
      setError('Failed to compress image');
    } finally {
      setLoading(false);
    }
  };

  const handleConvert = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const result = await createCanvasFromFile();
      if (!result) throw new Error('Failed to create canvas');
      const { canvas: c } = result;

      const mimeType = `image/${outputFormat}`;
      let quality = 0.92;
      if (outputFormat === 'jpeg') quality = compressQuality / 100;
      if (outputFormat === 'webp') quality = compressQuality / 100;

      const dataUrl = c.toDataURL(mimeType, quality);
      setResultUrl(dataUrl);
    } catch (err) {
      setError('Failed to convert image');
    } finally {
      setLoading(false);
    }
  };

  const handleCrop = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const result = await createCanvasFromFile();
      if (!result) throw new Error('Failed to create canvas');
      const { canvas: c } = result;

      const canvasEl = document.createElement('canvas');
      canvasEl.width = cropWidth;
      canvasEl.height = cropHeight;
      const ctx = canvasEl.getContext('2d')!;
      ctx.drawImage(c, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
      processAndSetResult(canvasEl);
    } catch (err) {
      setError('Failed to crop image');
    } finally {
      setLoading(false);
    }
  };

  const handleRotate = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const result = await createCanvasFromFile();
      if (!result) throw new Error('Failed to create canvas');
      const { canvas: c, img } = result;

      const angle = (rotation * Math.PI) / 180;
      const cos = Math.abs(Math.cos(angle));
      const sin = Math.abs(Math.sin(angle));

      const newWidth = Math.round(img.width * cos + img.height * sin);
      const newHeight = Math.round(img.width * sin + img.height * cos);

      const canvasEl = document.createElement('canvas');
      canvasEl.width = newWidth;
      canvasEl.height = newHeight;
      const ctx = canvasEl.getContext('2d')!;

      ctx.translate(newWidth / 2, newHeight / 2);
      ctx.rotate(angle);
      ctx.drawImage(c, -img.width / 2, -img.height / 2);
      processAndSetResult(canvasEl);
    } catch (err) {
      setError('Failed to rotate image');
    } finally {
      setLoading(false);
    }
  };

  const handleFlip = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const result = await createCanvasFromFile();
      if (!result) throw new Error('Failed to create canvas');
      const { canvas: c } = result;

      const canvasEl = document.createElement('canvas');
      canvasEl.width = c.width;
      canvasEl.height = c.height;
      const ctx = canvasEl.getContext('2d')!;

      if (flipH) {
        ctx.translate(c.width, 0);
        ctx.scale(-1, 1);
      }
      if (flipV) {
        ctx.translate(0, c.height);
        ctx.scale(1, -1);
      }
      ctx.drawImage(c, 0, 0);
      processAndSetResult(canvasEl);
    } catch (err) {
      setError('Failed to flip image');
    } finally {
      setLoading(false);
    }
  };

  const handleGrayscale = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const result = await createCanvasFromFile();
      if (!result) throw new Error('Failed to create canvas');
      const { canvas: c } = result;

      const canvasEl = document.createElement('canvas');
      canvasEl.width = c.width;
      canvasEl.height = c.height;
      const ctx = canvasEl.getContext('2d')!;

      ctx.drawImage(c, 0, 0);
      const imageData = ctx.getImageData(0, 0, c.width, c.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const avg = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
      }

      ctx.putImageData(imageData, 0, 0);
      processAndSetResult(canvasEl);
    } catch (err) {
      setError('Failed to apply grayscale');
    } finally {
      setLoading(false);
    }
  };

  const [blurRadius, setBlurRadius] = useState(10);

  const handleBlur = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const result = await createCanvasFromFile();
      if (!result) throw new Error('Failed to create canvas');
      const { canvas: c } = result;

      const canvasEl = document.createElement('canvas');
      canvasEl.width = c.width;
      canvasEl.height = c.height;
      const ctx = canvasEl.getContext('2d')!;

      ctx.filter = `blur(${blurRadius}px)`;
      ctx.drawImage(c, 0, 0);
      ctx.filter = 'none';
      processAndSetResult(canvasEl);
    } catch (err) {
      setError('Failed to apply blur');
    } finally {
      setLoading(false);
    }
  };

  const [base64Output, setBase64Output] = useState('');

  const handleBase64 = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError('');
    try {
      const buffer = await selectedFile.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
      const ext = selectedFile.name.split('.').pop() || 'png';
      const mime = `image/${ext}`;
      setBase64Output(`data:${mime};base64,${base64}`);
      setResultUrl(`data:${mime};base64,${base64}`);
    } catch (err) {
      setError('Failed to encode image');
    } finally {
      setLoading(false);
    }
  };

  const processAndSetResult = (canvasEl: HTMLCanvasElement) => {
    const mimeType = `image/${outputFormat}`;
    const quality = outputFormat === 'png' ? undefined : compressQuality / 100;
    const dataUrl = canvasEl.toDataURL(mimeType, quality);
    setResultUrl(dataUrl);
    setPreviewUrl(canvasEl.toDataURL());
    setCanvas(canvasEl);
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
    setImageInfo(null);
    setError('');
    setSelectedFile(null);
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setPreviewUrl('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const getOutputExtension = (): string => {
    switch (outputFormat) {
      case 'jpeg': return 'jpg';
      case 'webp': return 'webp';
      case 'gif': return 'gif';
      default: return 'png';
    }
  };

  const renderDropZone = () => (
    <div>
      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
        Select Image
      </label>
      <div
        style={styles.dropZone}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); (e.target as HTMLElement).style.borderColor = 'var(--color-primary)'; }}
        onDragLeave={e => { (e.target as HTMLElement).style.borderColor = 'var(--color-border)'; }}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />
        {selectedFile ? (
          <div>
            <span style={{ fontSize: '2rem' }}>🖼️</span>
            <p style={styles.fileName}>{selectedFile.name}</p>
            <p style={styles.hint}>{formatFileSize(selectedFile.size)}</p>
          </div>
        ) : (
          <>
            <span style={{ fontSize: '2rem' }}>📁</span>
            <p style={{ color: 'var(--color-text)', marginTop: '8px' }}>Drop image here or click to browse</p>
            <p style={styles.hint}>Supports PNG, JPEG, WebP, GIF</p>
          </>
        )}
      </div>
    </div>
  );

  const renderImageInfo = () => {
    if (!imageInfo) return null;
    return (
      <div style={styles.preview}>
        <div style={styles.infoGrid}>
          <div>
            <p style={styles.label}>File Name</p>
            <p style={styles.value}>{imageInfo.fileName}</p>
          </div>
          <div>
            <p style={styles.label}>Dimensions</p>
            <p style={styles.value}>{imageInfo.width} × {imageInfo.height}</p>
          </div>
          <div>
            <p style={styles.label}>Format</p>
            <p style={styles.value}>{imageInfo.format}</p>
          </div>
          <div>
            <p style={styles.label}>File Size</p>
            <p style={styles.value}>{formatFileSize(imageInfo.fileSize)}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderPreview = () => {
    if (!previewUrl) return null;
    return (
      <div style={{ marginTop: '16px', textAlign: 'center' as const }}>
        <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px' }}>
          Preview
        </p>
        <img src={previewUrl} alt="Preview" style={styles.previewCanvas} />
      </div>
    );
  };

  return (
    <div style={styles.wrapper}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <div style={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            style={activeTab === tab.id ? styles.tabActive : styles.tab}
            onClick={() => { setActiveTab(tab.id); setError(''); }}
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

          {renderDropZone()}
          {renderImageInfo()}
          {renderPreview()}

          {activeTab === 'resize' && selectedFile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={styles.row}>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                    Width (px)
                  </label>
                  <input
                    type="number"
                    style={styles.inputSmall}
                    value={resizeWidth}
                    onChange={e => {
                      const val = parseInt(e.target.value) || 1;
                      setResizeWidth(val);
                      if (maintainAspect && imageInfo) {
                        setResizeHeight(Math.round(val * (imageInfo.height / imageInfo.width)));
                      }
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                    Height (px)
                  </label>
                  <input
                    type="number"
                    style={styles.inputSmall}
                    value={resizeHeight}
                    onChange={e => {
                      const val = parseInt(e.target.value) || 1;
                      setResizeHeight(val);
                      if (maintainAspect && imageInfo) {
                        setResizeWidth(Math.round(val * (imageInfo.width / imageInfo.height)));
                      }
                    }}
                  />
                </div>
              </div>
              <label style={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={maintainAspect}
                  onChange={e => setMaintainAspect(e.target.checked)}
                />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>
                  Maintain aspect ratio
                </span>
              </label>
              <button style={styles.btn} onClick={handleResize}>
                Resize Image
              </button>
            </div>
          )}

          {activeTab === 'compress' && selectedFile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Quality: {compressQuality}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={compressQuality}
                  onChange={e => setCompressQuality(parseInt(e.target.value))}
                  style={styles.slider}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Output Format
                </label>
                <select
                  style={styles.input}
                  value={outputFormat}
                  onChange={e => setOutputFormat(e.target.value as OutputFormat)}
                >
                  <option value="jpeg">JPEG</option>
                  <option value="png">PNG</option>
                  <option value="webp">WebP</option>
                </select>
              </div>
              <button style={styles.btn} onClick={handleCompress}>
                Compress Image
              </button>
            </div>
          )}

          {activeTab === 'convert' && selectedFile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Output Format
                </label>
                <select
                  style={styles.input}
                  value={outputFormat}
                  onChange={e => setOutputFormat(e.target.value as OutputFormat)}
                >
                  <option value="jpeg">JPEG</option>
                  <option value="png">PNG</option>
                  <option value="webp">WebP</option>
                </select>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                  {outputFormat === 'png' && 'PNG: Lossless, supports transparency'}
                  {outputFormat === 'jpeg' && 'JPEG: Smaller size, ideal for photos'}
                  {outputFormat === 'webp' && 'WebP: Modern format, best compression'}
                </p>
              </div>
              {outputFormat !== 'png' && (
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                    Quality: {compressQuality}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={compressQuality}
                    onChange={e => setCompressQuality(parseInt(e.target.value))}
                    style={styles.slider}
                  />
                </div>
              )}
              <button style={styles.btn} onClick={handleConvert}>
                Convert Image
              </button>
            </div>
          )}

          {activeTab === 'crop' && selectedFile && imageInfo && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={styles.row}>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '4px', display: 'block' }}>
                    X Position
                  </label>
                  <input
                    type="number"
                    style={styles.inputSmall}
                    value={cropX}
                    min="0"
                    max={imageInfo.width - cropWidth}
                    onChange={e => setCropX(Math.max(0, parseInt(e.target.value) || 0))}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '4px', display: 'block' }}>
                    Y Position
                  </label>
                  <input
                    type="number"
                    style={styles.inputSmall}
                    value={cropY}
                    min="0"
                    max={imageInfo.height - cropHeight}
                    onChange={e => setCropY(Math.max(0, parseInt(e.target.value) || 0))}
                  />
                </div>
              </div>
              <div style={styles.row}>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '4px', display: 'block' }}>
                    Width
                  </label>
                  <input
                    type="number"
                    style={styles.inputSmall}
                    value={cropWidth}
                    min="1"
                    max={imageInfo.width}
                    onChange={e => setCropWidth(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '4px', display: 'block' }}>
                    Height
                  </label>
                  <input
                    type="number"
                    style={styles.inputSmall}
                    value={cropHeight}
                    min="1"
                    max={imageInfo.height}
                    onChange={e => setCropHeight(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
              </div>
              <p style={styles.hint}>
                Original: {imageInfo.width} × {imageInfo.height}px
              </p>
              <button style={styles.btn} onClick={handleCrop}>
                Crop Image
              </button>
            </div>
          )}

          {activeTab === 'rotate' && selectedFile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Rotation: {rotation}°
                </label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={rotation}
                  onChange={e => setRotation(parseInt(e.target.value))}
                  style={styles.slider}
                />
              </div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                {[0, 90, 180, 270].map(angle => (
                  <button
                    key={angle}
                    style={{
                      ...styles.btnOutline,
                      background: rotation === angle ? 'var(--color-primary)' : 'var(--color-surface-high)',
                      color: rotation === angle ? 'var(--color-text-inverse)' : 'var(--color-text)',
                    }}
                    onClick={() => setRotation(angle)}
                  >
                    {angle}°
                  </button>
                ))}
              </div>
              <button style={styles.btn} onClick={handleRotate}>
                Rotate Image
              </button>
            </div>
          )}

          {activeTab === 'flip' && selectedFile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={flipH}
                  onChange={e => setFlipH(e.target.checked)}
                />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>
                  Flip Horizontally (← →)
                </span>
              </label>
              <label style={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={flipV}
                  onChange={e => setFlipV(e.target.checked)}
                />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>
                  Flip Vertically (↑ ↓)
                </span>
              </label>
              <p style={styles.hint}>
                Select one or both directions to flip
              </p>
              <button style={styles.btn} onClick={handleFlip} disabled={!flipH && !flipV}>
                Flip Image
              </button>
            </div>
          )}

          {activeTab === 'grayscale' && selectedFile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text)', textAlign: 'center' as const }}>
                Convert image to grayscale (black & white)
              </p>
              <button style={styles.btn} onClick={handleGrayscale}>
                Apply Grayscale
              </button>
            </div>
          )}

          {activeTab === 'blur' && selectedFile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '8px', display: 'block' }}>
                  Blur Radius: {blurRadius}px
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={blurRadius}
                  onChange={e => setBlurRadius(parseInt(e.target.value))}
                  style={styles.slider}
                />
              </div>
              <button style={styles.btn} onClick={handleBlur}>
                Apply Blur
              </button>
            </div>
          )}

          {activeTab === 'base64' && selectedFile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text)', textAlign: 'center' as const }}>
                Encode your image as a Base64 string for embedding in HTML/CSS
              </p>
              <button style={styles.btn} onClick={handleBase64}>
                Generate Base64
              </button>
              {base64Output && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
                    <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(base64Output)}>Copy</button>
                  </div>
                  <textarea
                    readOnly
                    value={base64Output}
                    style={{ ...styles.textarea, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', minHeight: '80px' }}
                  />
                </div>
              )}
            </div>
          )}

          {resultUrl && (
            <div style={styles.preview}>
              <p style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '12px' }}>
                ✅ Image ready for download
              </p>
              <div style={styles.btnGroup}>
                <button style={styles.btnOutline} onClick={resetState}>
                  🔄 Start Over
                </button>
                <button style={styles.btn} onClick={() => downloadResult(`modified-${Date.now()}.${getOutputExtension()}`)}>
                  ⬇️ Download Image
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
