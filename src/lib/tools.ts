export const TOOLS = [
  // ── SEO ──
  { id: 'keyword-research',       name: 'Keyword Research Tool',      desc: 'Find high-volume, low-competition keywords for SEO.',          cat: 'seo',       color: '#FFB800', tags: ['popular'] },
  { id: 'meta-tag-generator',    name: 'Meta Tag Generator',         desc: 'Generate optimized title & description tags instantly.',        cat: 'seo',       color: '#FFB800', tags: ['popular'] },
  { id: 'robots-txt-generator',  name: 'Robots.txt Generator',       desc: 'Create a robots.txt file for your website in seconds.',        cat: 'seo',       color: '#FFB800', tags: [] },
  { id: 'broken-link-checker',    name: 'Broken Link Checker',       desc: 'Find dead links on any URL — keep your site healthy.',         cat: 'seo',       color: '#FFB800', tags: [] },
  { id: 'keyword-density',       name: 'Keyword Density Checker',    desc: 'Check keyword frequency in your content for optimal SEO.',   cat: 'seo',       color: '#FFB800', tags: [] },
  { id: 'sitemap-generator',     name: 'XML Sitemap Generator',     desc: 'Generate a full XML sitemap for your website.',               cat: 'seo',       color: '#FFB800', tags: ['new'] },
  { id: 'heading-analyzer',      name: 'Heading Analyzer',          desc: 'Audit your H1–H6 structure for better SEO readability.',      cat: 'seo',       color: '#FFB800', tags: [] },
  { id: 'url-slug-generator',    name: 'URL Slug Generator',        desc: 'Convert any text into SEO-friendly URL slugs.',               cat: 'seo',       color: '#FFB800', tags: [] },

  // ── Content ──
  { id: 'word-counter',          name: 'Word Counter',               desc: 'Count words, characters, sentences & reading time.',         cat: 'content',   color: '#00E5A0', tags: ['popular'] },
  { id: 'article-rewriter',      name: 'Article Rewriter',           desc: 'Rewrite any paragraph with fresh, unique phrasing.',           cat: 'content',   color: '#00E5A0', tags: ['ai'] },
  { id: 'paragraph-generator',   name: 'Paragraph Generator',        desc: 'Generate well-structured paragraphs on any topic.',           cat: 'content',   color: '#00E5A0', tags: ['ai'] },
  { id: 'content-ideas',         name: 'Content Idea Generator',     desc: 'Never run out of blog post topics again.',                   cat: 'content',   color: '#00E5A0', tags: [] },
  { id: 'hashtag-generator',     name: 'Hashtag Generator',          desc: 'Generate trending hashtags for any social post.',            cat: 'content',   color: '#00E5A0', tags: [] },
  { id: 'seo-evaluator',         name: 'SEO Content Evaluator',      desc: 'Score your content on 10 key SEO factors.',                 cat: 'content',   color: '#00E5A0', tags: [] },
  { id: 'readability-checker',   name: 'Readability Checker',       desc: 'Check content readability score for any audience.',          cat: 'content',   color: '#00E5A0', tags: [] },
  { id: 'plagiarism-checker',    name: 'Plagiarism Checker',         desc: 'Scan text for duplicate content across the web.',            cat: 'content',   color: '#00E5A0', tags: [] },

  // ── PDF ──
  { id: 'pdf-merge',             name: 'PDF Merger',                 desc: 'Combine multiple PDFs into a single document.',             cat: 'pdf',       color: '#FF6B35', tags: ['popular'] },
  { id: 'pdf-split',             name: 'PDF Splitter',               desc: 'Split a PDF into separate pages or page ranges.',           cat: 'pdf',       color: '#FF6B35', tags: [] },
  { id: 'pdf-compress',          name: 'PDF Compressor',             desc: 'Reduce PDF file size without losing quality.',             cat: 'pdf',       color: '#FF6B35', tags: ['popular'] },
  { id: 'pdf-to-jpg',            name: 'PDF to JPG Converter',      desc: 'Convert PDF pages to high-quality JPG images.',             cat: 'pdf',       color: '#FF6B35', tags: [] },
  { id: 'jpg-to-pdf',            name: 'JPG to PDF Converter',      desc: 'Turn JPG images into a single PDF document.',              cat: 'pdf',       color: '#FF6B35', tags: [] },
  { id: 'pdf-to-text',           name: 'PDF to Text Extractor',     desc: 'Extract all text content from a PDF file.',                cat: 'pdf',       color: '#FF6B35', tags: [] },
  { id: 'pdf-password',         name: 'PDF Password Protector',    desc: 'Add password protection to any PDF.',                      cat: 'pdf',       color: '#FF6B35', tags: [] },
  { id: 'pdf-rotate',            name: 'PDF Page Rotator',           desc: 'Rotate individual or all pages in a PDF.',                cat: 'pdf',       color: '#FF6B35', tags: [] },

  // ── Image ──
  { id: 'image-compressor',       name: 'Image Compressor',           desc: 'Reduce image file size by up to 80% — no quality loss.',   cat: 'image',     color: '#A78BFA', tags: ['popular'] },
  { id: 'image-resizer',         name: 'Image Resizer',              desc: 'Resize images to exact dimensions in pixels.',             cat: 'image',     color: '#A78BFA', tags: ['popular'] },
  { id: 'jpg-png-converter',     name: 'JPG ↔ PNG Converter',       desc: 'Convert between JPG and PNG formats instantly.',             cat: 'image',     color: '#A78BFA', tags: [] },
  { id: 'image-cropper',         name: 'Image Cropper',              desc: 'Crop images to perfect proportions for social media.',     cat: 'image',     color: '#A78BFA', tags: [] },
  { id: 'color-picker',          name: 'Color Picker',               desc: 'Pick any color and get HEX & RGB codes.',                  cat: 'image',     color: '#A78BFA', tags: [] },
  { id: 'image-to-base64',       name: 'Image to Base64 Converter',  desc: 'Encode images as Base64 strings for embedding.',          cat: 'image',     color: '#A78BFA', tags: [] },
  { id: 'gif-resizer',           name: 'GIF Resizer',                desc: 'Resize animated GIFs without losing animation.',          cat: 'image',     color: '#A78BFA', tags: [] },
  { id: 'image-blur',            name: 'Background Blur Tool',       desc: 'Blur or pixelate the background of any photo.',           cat: 'image',     color: '#A78BFA', tags: ['new'] },

  // ── AI ──
  { id: 'ai-writer',             name: 'AI Content Writer',          desc: 'Generate blog posts, product descriptions & more.',        cat: 'ai',        color: '#F472B6', tags: ['ai', 'popular'] },
  { id: 'ai-email-writer',       name: 'AI Email Writer',           desc: 'Write professional cold emails, follow-ups & more.',      cat: 'ai',        color: '#F472B6', tags: ['ai'] },
  { id: 'ai-job-description',    name: 'Job Description Generator',  desc: 'Create compelling job postings in seconds.',              cat: 'ai',        color: '#F472B6', tags: ['ai'] },
  { id: 'ai-bio-writer',         name: 'Bio Writer',                 desc: 'Write a compelling personal or business bio.',             cat: 'ai',        color: '#F472B6', tags: ['ai'] },
  { id: 'ai-slogan-generator',   name: 'Slogan Generator',           desc: 'Create catchy brand slogans and taglines.',               cat: 'ai',        color: '#F472B6', tags: ['ai'] },
  { id: 'ai-meta-description',   name: 'Meta Description Generator', desc: 'Generate SEO meta descriptions with one click.',           cat: 'ai',        color: '#F472B6', tags: ['ai'] },

  // ── Developer ──
  { id: 'json-formatter',        name: 'JSON Formatter',             desc: 'Format, validate and minify JSON data.',                  cat: 'developer', color: '#38BDF8', tags: ['popular'] },
  { id: 'html-editor',          name: 'HTML Editor',                 desc: 'Write and preview HTML, CSS & JS in real time.',          cat: 'developer', color: '#38BDF8', tags: ['popular'] },
  { id: 'base64-encoder',       name: 'Base64 Encoder/Decoder',    desc: 'Encode or decode Base64 strings instantly.',             cat: 'developer', color: '#38BDF8', tags: [] },
  { id: 'url-encoder',          name: 'URL Encoder/Decoder',        desc: 'Encode special characters for URLs.',                     cat: 'developer', color: '#38BDF8', tags: [] },
  { id: 'regex-tester',         name: 'Regex Tester',               desc: 'Test and debug regular expressions live.',               cat: 'developer', color: '#38BDF8', tags: [] },
  { id: 'cron-parser',           name: 'Cron Expression Generator',  desc: 'Create and understand cron job schedules.',             cat: 'developer', color: '#38BDF8', tags: [] },
  { id: 'jwt-decoder',           name: 'JWT Decoder',                desc: 'Decode and inspect JSON Web Tokens.',                    cat: 'developer', color: '#38BDF8', tags: [] },
  { id: 'hash-generator',        name: 'Hash Generator (MD5/SHA)',   desc: 'Generate cryptographic hashes from any string.',          cat: 'developer', color: '#38BDF8', tags: [] },

  // ── QR ──
  { id: 'qr-generator',          name: 'QR Code Generator',         desc: 'Create QR codes for URLs, text, WiFi, contacts & more.', cat: 'qr',        color: '#34D399', tags: ['popular'] },
  { id: 'qr-reader',            name: 'QR Code Reader/Decoder',    desc: 'Decode any QR code from an image or screenshot.',         cat: 'qr',        color: '#34D399', tags: [] },
  { id: 'vcard-generator',       name: 'vCard Generator',            desc: 'Create QR codes containing contact information.',         cat: 'qr',        color: '#34D399', tags: [] },
  { id: 'wifi-qr-generator',     name: 'WiFi QR Code Generator',     desc: 'Generate QR codes that connect people to your WiFi.',     cat: 'qr',        color: '#34D399', tags: [] },

  // ── Utils ──
  { id: 'password-generator',    name: 'Password Generator',         desc: 'Generate strong, random passwords with custom rules.',   cat: 'utils',     color: '#94A3B8', tags: ['popular'] },
  { id: 'age-calculator',        name: 'Age Calculator',             desc: 'Calculate exact age in years, months, days & seconds.',  cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'bmi-calculator',        name: 'BMI Calculator',             desc: 'Calculate Body Mass Index with category breakdown.',     cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'unit-converter',        name: 'Unit Converter',             desc: 'Convert length, weight, temperature, speed & more.',    cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'random-number',         name: 'Random Number Generator',    desc: 'Generate random numbers within a custom range.',         cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'uuid-generator',        name: 'UUID Generator',              desc: 'Generate unique UUIDs v4 for developers.',               cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'lorem-ipsum',           name: 'Lorem Ipsum Generator',      desc: 'Generate placeholder text for design & development.',    cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'interest-calculator',   name: 'Interest Calculator',        desc: 'Calculate simple and compound interest instantly.',      cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'tip-calculator',        name: 'Tip Calculator',              desc: 'Calculate tips and split bills fairly.',                 cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'countdown-timer',       name: 'Countdown Timer',             desc: 'Set a countdown timer for any event.',                  cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'stopwatch',             name: 'Stopwatch',                   desc: 'Track time with precision down to milliseconds.',        cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'todo-list',             name: 'Todo List',                   desc: 'Keep track of tasks with a simple digital notepad.',      cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'notepad',               name: 'Notepad',                     desc: 'A simple browser-based notepad for quick notes.',         cat: 'utils',     color: '#94A3B8', tags: [] },
  { id: 'world-clock',           name: 'World Clock',                 desc: 'Check the current time in cities around the world.',     cat: 'utils',     color: '#94A3B8', tags: [] },
];

export const CATEGORIES = [
  { id: 'seo',       name: 'SEO Tools',         desc: 'Optimize your site for search engines',      count: 8,  icon: '📊' },
  { id: 'content',   name: 'Content Tools',     desc: 'Write, rewrite and evaluate content',        count: 8,  icon: '✍️' },
  { id: 'pdf',       name: 'PDF Tools',          desc: 'Merge, split, compress and convert PDFs',   count: 8,  icon: '📄' },
  { id: 'image',     name: 'Image Tools',       desc: 'Compress, resize and convert images',        count: 8,  icon: '🖼️' },
  { id: 'ai',        name: 'AI Tools',           desc: 'Generate content with artificial intelligence', count: 6, icon: '🤖' },
  { id: 'developer', name: 'Developer Tools',    desc: 'Code utilities for developers',              count: 8,  icon: '💻' },
  { id: 'qr',        name: 'QR Code Tools',      desc: 'Create and decode QR codes',                 count: 4,  icon: '📱' },
  { id: 'utils',     name: 'Utility Tools',      desc: 'Calculators, generators and everyday tools', count: 14, icon: '🛠️' },
];

export function getToolById(id: string) {
  return TOOLS.find(t => t.id === id) ?? null;
}

export function getToolsByCat(cat: string) {
  return TOOLS.filter(t => t.cat === cat);
}

export const CATEGORY_META: Record<string, { title: string; desc: string; color: string }> = {
  seo:       { title: 'Free SEO Tools — Keyword Research, Sitemap Generator & More',    desc: 'Rank higher on Google. Free SEO tools for keyword research, meta tags, sitemaps, and site audits.', color: '#FFB800' },
  content:   { title: 'Free Content Tools — Writer, Rewriter, Readability Checker',   desc: 'Create better content faster. Free tools for word counting, rewriting, readability, and content ideas.', color: '#00E5A0' },
  pdf:       { title: 'Free PDF Tools — Merge, Split, Compress & Convert',             desc: 'Work with PDFs for free. Merge, split, compress, convert, rotate, and extract text from PDF files.', color: '#FF6B35' },
  image:     { title: 'Free Image Tools — Compress, Resize & Convert',                 desc: 'Optimize images instantly. Free tools for compressing, resizing, and converting image formats.', color: '#A78BFA' },
  ai:        { title: 'Free AI Tools — Content Writer, Email Writer & More',           desc: 'Generate content with AI. Free AI-powered tools for writing blog posts, emails, bios, and slogans.', color: '#F472B6' },
  developer: { title: 'Free Developer Tools — JSON, HTML, Regex & More',              desc: 'Developer utilities free forever. Format JSON, test regex, encode URLs, decode JWTs and more.', color: '#38BDF8' },
  qr:        { title: 'Free QR Code Tools — Generator & Reader',                      desc: 'Create and scan QR codes for free. Generate QR codes for URLs, WiFi, contacts and vCards.', color: '#34D399' },
  utils:     { title: 'Free Utility Tools — Calculators, Generators & More',           desc: 'Everyday tools, completely free. Password generators, age calculators, timers, notepads and more.', color: '#94A3B8' },
};