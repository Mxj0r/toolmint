'use client';

import React from 'react';
import { SeoTools } from '@/components/tools/seo';
import { DeveloperTools } from '@/components/tools/developer';
import { UtilityTools } from '@/components/tools/utils';
import { QrGenerator } from '@/components/tools/qr';
import { AITools } from '@/components/tools/ai';
import { ImageTools } from '@/components/tools/image';
import { PdfTools } from '@/components/tools/pdf';

interface Props { toolId: string }

export default function ToolUI({ toolId }: Props) {
  const toolComponents: Record<string, React.ComponentType> = {
    // SEO
    'keyword-research': SeoTools,
    'meta-tag-generator': SeoTools,
    'robots-txt-generator': SeoTools,
    'broken-link-checker': SeoTools,
    'keyword-density': SeoTools,
    'sitemap-generator': SeoTools,
    'heading-analyzer': SeoTools,
    'url-slug-generator': SeoTools,
    // Developer
    'json-formatter': DeveloperTools,
    'json-validator': DeveloperTools,
    'html-editor': DeveloperTools,
    'css-formatter': DeveloperTools,
    'base64-encoder': DeveloperTools,
    'url-encoder': DeveloperTools,
    'regex-tester': DeveloperTools,
    'cron-parser': DeveloperTools,
    'hash-generator': DeveloperTools,
    'jwt-decoder': DeveloperTools,
    // Utils
    'password-generator': UtilityTools,
    'uuid-generator': UtilityTools,
    'lorem-ipsum': UtilityTools,
    'unit-converter': UtilityTools,
    'color-picker': UtilityTools,
    'age-calculator': UtilityTools,
    'bmi-calculator': UtilityTools,
    'countdown-timer': UtilityTools,
    'stopwatch': UtilityTools,
    'interest-calculator': UtilityTools,
    'tip-calculator': UtilityTools,
    'random-number': UtilityTools,
    'notepad': UtilityTools,
    'todo-list': UtilityTools,
    'world-clock': UtilityTools,
    'text-analyzer': UtilityTools,
    // QR
    'qr-generator': QrGenerator,
    'qr-reader': QrGenerator,
    'vcard-generator': QrGenerator,
    'wifi-qr-generator': QrGenerator,
    // AI
    'ai-writer': AITools,
    'ai-email-writer': AITools,
    'ai-job-description': AITools,
    'ai-bio-writer': AITools,
    'ai-slogan-generator': AITools,
    'ai-meta-description': AITools,
    'ai-article-rewriter': AITools,
    // Image
    'image-resizer': ImageTools,
    'image-compressor': ImageTools,
    'image-converter': ImageTools,
    'image-cropper': ImageTools,
    'image-rotator': ImageTools,
    'image-flip': ImageTools,
    'image-grayscale': ImageTools,
    'image-blur': ImageTools,
    'image-to-base64': ImageTools,
    'gif-resizer': ImageTools,
    'jpg-png-converter': ImageTools,
    // PDF
    'pdf-merge': PdfTools,
    'pdf-split': PdfTools,
    'pdf-compress': PdfTools,
    'pdf-to-jpg': PdfTools,
    'jpg-to-pdf': PdfTools,
    'pdf-to-text': PdfTools,
    'pdf-text': PdfTools,
    'pdf-password': PdfTools,
    'pdf-rotate': PdfTools,
    'pdf-info': PdfTools,
    'pdf-pages': PdfTools,
  };

  const contentTools = [
    'word-counter', 'sentence-counter', 'paragraph-counter', 'readability-checker',
    'article-rewriter', 'paragraph-generator', 'content-ideas', 'hashtag-generator',
    'instagram-caption', 'bio-writer', 'sentence-rewriter', 'paragraph-rewriter',
  ];

  if (contentTools.includes(toolId)) {
    return <ContentTool toolId={toolId} />;
  }

  const Component = toolComponents[toolId] as React.ComponentType<{ toolId?: string }>;
  if (!Component) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', minHeight: '320px', gap: '16px',
        color: 'var(--color-text-muted)',
      }}>
        <p>Tool coming soon</p>
      </div>
    );
  }

  return <Component toolId={toolId} />;
}

// eslint-disable react-hooks/set-state-in-effect -- all setOutput calls are synchronous derived computations
function ContentTool({ toolId }: { toolId: string }) {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');

  React.useEffect(() => {
    if (toolId === 'word-counter') {
      const words = input.trim() ? input.trim().split(/\s+/).length : 0;
      const chars = input.length;
      const sentences = input.split(/[.!?]+/).filter(s => s.trim()).length;
      const paragraphs = input.split(/\n\n+/).filter(p => p.trim()).length;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- derived output computation
      setOutput(`${words} words | ${chars} characters | ${sentences} sentences | ${paragraphs} paragraphs`);
    } else if (toolId === 'sentence-counter') {
      const sentences = input.split(/[.!?]+/).filter(s => s.trim()).length;
      setOutput(`${sentences} sentences`);
    } else if (toolId === 'paragraph-counter') {
      const paragraphs = input.split(/\n\n+/).filter(p => p.trim()).length;
      setOutput(`${paragraphs} paragraphs`);
    } else if (toolId === 'readability-checker') {
      const words = input.trim() ? input.trim().split(/\s+/).length : 0;
      const avg = words > 0 ? Math.round(words / 200) : 0;
      const level = words < 30 ? 'Beginner' : words < 60 ? 'Easy' : words < 100 ? 'Medium' : 'Advanced';
      setOutput(`Reading time: ~${avg} min | Difficulty: ${level}`);
    } else if (toolId === 'hashtag-generator') {
      const words = input.split(/[\s,]+/).filter(w => w.length > 2);
      const tags = words.map(w => `#${w.replace(/[^a-zA-Z0-9]/g, '')}`).slice(0, 10).join(' ');
      setOutput(tags);
    } else if (toolId === 'bio-writer') {
      setOutput(input ? `Professional bio based on your input: ${input.slice(0, 100)}...` : 'Enter your details above to generate a bio.');
    } else if (toolId === 'article-rewriter' || toolId === 'paragraph-rewriter' || toolId === 'sentence-rewriter') {
      setOutput(input ? `[Rewritten content would appear here for: ${input.slice(0, 50)}...]` : 'Enter text to rewrite.');
    } else if (toolId === 'paragraph-generator' || toolId === 'content-ideas') {
      setOutput(input ? `Content ideas based on: "${input}"` : 'Enter a topic to generate content ideas.');
    } else if (toolId === 'instagram-caption') {
      setOutput(input ? `#InstagramCaption #Content #Creative ${input.slice(0, 50)}...` : 'Enter a topic for your caption.');
    }
  }, [input, toolId]);

  const styles: Record<string, React.CSSProperties> = {
    wrapper: { display: 'flex', flexDirection: 'column', gap: '16px' },
    label: { fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '4px' },
    textarea: {
      width: '100%', minHeight: '120px', background: 'var(--color-bg)',
      border: '1px solid var(--color-border)', borderRadius: '8px',
      padding: '12px 16px', color: 'var(--color-text)', fontSize: '0.95rem',
      outline: 'none', resize: 'vertical', fontFamily: 'var(--font-body)',
    },
    output: {
      minHeight: '60px', background: 'var(--color-surface)',
      border: '1px solid var(--color-border)', borderRadius: '8px',
      padding: '12px 16px', color: 'var(--color-primary)', fontSize: '0.95rem',
      whiteSpace: 'pre-wrap',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <p style={styles.label}>Enter your text</p>
        <textarea style={styles.textarea} value={input} onChange={e => setInput(e.target.value)} placeholder="Type or paste your text here..." />
      </div>
      <div>
        <p style={styles.label}>Result</p>
        <div style={styles.output}>{output}</div>
      </div>
    </div>
  );
}
