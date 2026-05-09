export interface SeoDescription {
  intro: string;
  body: string;
  example?: string;
}

export const SEO_DESCRIPTIONS: Record<string, SeoDescription> = {
  // ── SEO ──────────────────────────────────────────────────────────────────────
    'keyword-research': {
    intro: 'Keyword Research Tool — find high-volume, low-competition keywords to rank higher on Google without expensive subscriptions.',
    body: `Finding the right keywords is the foundation of every successful SEO strategy. This free keyword research tool helps you discover search terms your audience is already using — so you can create content that actually ranks.

Rather than guessing what people search for, this tool surfaces real keyword opportunities based on search patterns. You can identify keywords with strong search volume but lower competition, giving your pages the best chance of ranking on the first page of Google.

Whether you're writing a blog post, optimizing a product page, or planning a content calendar, keyword research shapes every decision. Target the wrong words and even great content goes unnoticed. Target the right ones and your traffic grows on autopilot.

Use this tool to brainstorm seed keywords, explore related search terms, and build a keyword map that covers every stage of your audience's search journey — from informational queries to transactional intent.`,
    example: `Try a seed keyword like "email marketing" and discover related terms like "cold email templates", "email subject line tips", "email open rate optimization", and "newsletter best practices" — each representing a content opportunity you can pursue.`,
  },

    'meta-tag-generator': {
    intro: 'Meta Tag Generator — create perfectly formatted title tags and meta descriptions that boost click-through rates from Google search results.',
    body: `Your title tag and meta description are the first things people see when your page appears in Google search results. A compelling meta description can be the difference between a click and a skip — even if you rank in the same position as competitors.

This free meta tag generator takes the guesswork out of crafting tags that search engines and human readers both love. It ensures your title stays within the ideal 50–60 character range so it doesn't get truncated in search results, and generates meta descriptions that hit the 150–160 character sweet spot.

Beyond the basics, the tool helps you incorporate power words, calls to action, and emotional triggers that make searchers more likely to click your result over others. It also prevents common mistakes like using double quotes (which can cause Google to ignore your description) or leaving meta tags empty.

Stop letting search engines auto-generate your descriptions from page content — take control and write ones that actually drive clicks.`,
  },

    'robots-txt-generator': {
    intro: 'Robots.txt Generator — create a properly configured robots.txt file to control which pages search engines crawl and index on your site.',
    body: `Every website needs a robots.txt file. It's a small text file sitting in your root directory that tells search engine bots which pages they should access and which they should ignore. Get it wrong and you might accidentally block Google from crawling your most important pages.

This free robots.txt generator walks you through the process without requiring you to learn the technical syntax. You decide which directories, files, or URL patterns should be blocked — and the tool writes the correct file format automatically.

Common use cases include blocking search engines from crawling admin folders, duplicate content pages, staging environments, or internal search result pages that would waste your crawl budget. A well-configured robots.txt file ensures search engines spend their crawl budget on the pages that actually matter for SEO.

After generating your file, simply upload it to the root of your website (e.g., yoursite.com/robots.txt) and test it with Google Search Console to confirm it's working as expected.`,
  },

    'broken-link-checker': {
    intro: 'Broken Link Checker — find dead links on any URL before they damage your SEO and frustrate your visitors.',
    body: `Broken links are one of the most overlooked SEO issues on websites. When a link on your page points to a URL that no longer exists, search engines interpret it as a sign of a neglected site — which can hurt your rankings over time. For visitors, clicking a dead link shatters trust and increases bounce rates.

This free broken link checker crawls any URL you provide and reports every link that returns a 404 (not found), 410 (gone), or server error. It checks both internal links (pointing to pages on your own site) and external links (pointing to other websites), so you get a complete picture of link health.

Why do links break? Pages get deleted, domains expire, URLs change without redirects, and external sites go offline. Any of these can create a broken link on your site without you realizing it — until a search engine bot discovers it during a crawl.

Run this tool regularly as part of your site maintenance routine. Fixing broken links is one of the fastest SEO wins available because it takes minutes to resolve but signals to Google that your site is well-maintained.`,
    example: `Enter your homepage URL and within seconds you'll have a full report: "https://yoursite.com/old-blog-post — 404 Not Found", "https://yoursite.com/product-discontinued — 410 Gone", etc.`,
  },

    'keyword-density': {
    intro: 'Keyword Density Checker — audit how often your target keyword appears on a page and avoid the traps of over-optimization or thin content.',
    body: `Keyword density — how often a word or phrase appears relative to the total word count — is one of the oldest SEO concepts in the book. Get it too low and search engines don't know what your page is about. Get it too high and you risk triggering spam filters for keyword stuffing.

This free keyword density checker analyzes any URL or pasted text and tells you exactly how frequently each word appears. It highlights your primary keyword's density as a percentage and benchmarks it against recommended ranges (typically 1–3% for the main term).

The tool also surfaces secondary keywords and natural language patterns — helping you identify related terms that semantically reinforce your topic without forcing them in awkwardly. Search engines have become far more sophisticated; they understand meaning and context, not just raw word counts.

Use this to strike the right balance: enough keyword presence to signal relevance, but natural enough that readers never notice you're optimizing.`,
  },

    'sitemap-generator': {
    intro: 'XML Sitemap Generator — create a Google-compliant XML sitemap that helps search engines discover and index every important page on your site.',
    body: `An XML sitemap is a structured roadmap of your website that you submit to Google Search Console. It lists all your important pages along with metadata like when each page was last updated and how frequently it changes. Without one, search engines may miss pages deep in your site structure.

This free XML sitemap generator creates a properly formatted sitemap in seconds. It automatically discovers all accessible pages on your domain, assigns reasonable change frequencies (daily for blogs, weekly for static pages, monthly for legal pages), and sets priority scores based on page importance.

The generated sitemap follows Google's XML sitemap protocol exactly, so it's compatible with Google Search Console, Bing Webmaster Tools, and any other search engine that supports the standard. You'll receive a downloadable XML file ready to upload to your root directory.

After creating your sitemap, submit it to Google Search Console under the "Sitemaps" section. This doesn't guarantee instant indexing, but it gives Google a clear signal about which pages matter most on your site.`,
  },

    'heading-analyzer': {
    intro: 'Heading Analyzer — audit your H1 through H6 heading structure to ensure your content is scannable, accessible, and optimized for both readers and search engines.',
    body: `Headings are the skeleton of your content. They break up long blocks of text, help readers scan your page to find what they need, and give search engines a hierarchical map of your topic. A page with missing or misused headings confuses both humans and bots.

This free heading analyzer checks your page's heading structure from H1 down to H6. It reports whether you have exactly one H1 (best practice), whether subheadings follow a logical descending order, and whether any heading levels are skipped — for example jumping from H1 directly to H3.

Beyond structure, the tool evaluates heading content: are your H2s descriptive and keyword-informed? Do your headings accurately represent the sections beneath them? Are you using headings for visual styling rather than semantic structure (a common mistake)?

A well-structured heading hierarchy doesn't just help SEO — it dramatically improves accessibility for screen reader users, who rely on headings to navigate long pages efficiently.`,
  },

    'url-slug-generator': {
    intro: 'URL Slug Generator — convert any text into clean, SEO-friendly URL slugs that are easy to read and understand.',
    body: `A URL slug is the part of a URL that identifies a specific page. Something like "yoursite.com/how-to-write-a-blog-post" is far more meaningful to humans and search engines than "yoursite.com/post?id=4829". Clean URL slugs are a basic but often overlooked SEO best practice.

This free URL slug generator takes any title or phrase and converts it into a properly formatted slug. It removes special characters, replaces spaces with hyphens, strips out accent marks and symbols, and ensures the result is lowercase and URL-safe.

The tool also enforces typical length guidelines (aim for under 50–60 characters where possible) and removes common filler words like "the", "a", and "an" to keep slugs concise. Short, descriptive slugs that include your target keyword perform better in search results.

Always use hyphens to separate words — never underscores. Google explicitly recommends hyphens as the word separator in URLs, and they render more cleanly in search result snippets.`,
  },

  // ── Content ─────────────────────────────────────────────────────────────────
    'word-counter': {
    intro: 'Word Counter — count words, characters, sentences, and paragraphs instantly as you type. Track reading time and get an accurate word count for any writing project.',
    body: `Whether you're writing a tweet, a blog post, a college essay, or a novel manuscript, knowing your exact word count matters. This free word counter updates in real time as you type or paste text — no buttons to click, no features to navigate.

Beyond basic counts, this tool breaks down your text into sentences and paragraphs so you can assess readability at a glance. Long, dense paragraphs discourage readers; a good blogger typically keeps paragraphs to 2–4 sentences. The tool also estimates reading time based on average reading speeds.

For SEO purposes, search engines and platforms often have minimum or recommended word counts. A meta description should be under 160 characters. A blog post targeting competitive keywords typically needs 1,500+ words. A tweet caps at 280 characters. This tool helps you hit those targets precisely.

Student, professional writer, or content marketer — this is the counting tool that stays open in your browser tab because it never stops being useful.`,
    example: `Paste in a paragraph and instantly see: 128 words, 684 characters (with spaces), 6 sentences, 3 paragraphs, and an estimated reading time of 38 seconds at an average reading pace.`,
  },

    'article-rewriter': {
    intro: 'Article Rewriter — rewrite any paragraph with fresh, unique phrasing while preserving the original meaning. Useful for content repurposing and avoiding accidental duplication.',
    body: `Content rewriting serves legitimate purposes: repurposing old blog posts for new formats, rephrasing source material in your own voice, or refreshing dated content without starting from scratch. This free article rewriter helps you accomplish all of that by suggesting alternative ways to express the same ideas.

Rather than just swapping individual words (which produces awkward, robotic text), this tool helps you understand the structure of your content and how to communicate the same concepts using different sentence patterns, vocabulary, and flow. The goal is unique, human-readable text that passes plagiarism checkers.

Rewriting is especially valuable for SEO when you have multiple product pages, service descriptions, or category pages that share similar underlying information. Each page can be rewritten to sound distinct while accurately representing what you offer — avoiding the "thin duplicate content" problem.

Always review and edit the output before publishing. Automated rewriting is a starting point, not a finished product. Your personal voice, industry expertise, and nuanced understanding of your audience can't be replicated by any tool.`,
  },

    'paragraph-generator': {
    intro: `Paragraph Generator — generate well-structured, coherent paragraphs on any topic. Instantly produce starting points when you're stuck or need to overcome writer's block.`,
    body: `Writer's block happens to everyone. Sometimes you know exactly what you want to say but can't find the right words to start. Other times you're planning a piece and need a paragraph to flesh out an outline. This free paragraph generator gives you a running start.

Feed it a topic, a keyword, or a brief description of what the paragraph should cover, and it produces a contextually relevant, coherent paragraph you can use as-is or refine to match your voice. It's particularly useful for generating opening paragraphs, transitional sentences, or concluding summaries.

The tool is designed to help writers, not replace them. Think of it as a sophisticated brainstorming partner that never runs out of ideas. Use the output as a first draft to react against, edit heavily, or pull key phrases from — whatever gets you past the blank page.

Content marketers, students, bloggers, and anyone who regularly produces written material will find this one of the most practical free tools in their browser.`,
  },

    'content-ideas': {
    intro: 'Content Idea Generator — never run out of blog post topics again. Generate hundreds of relevant content ideas for any niche or industry in seconds.',
    body: `One of the hardest parts of content marketing isn't writing — it's deciding what to write about. This free content idea generator eliminates the blank page problem by producing dozens of specific, actionable blog post topics based on your seed keyword or industry.

Enter a broad topic like "email marketing", "home renovation", or "digital photography", and the tool generates a range of content angles: how-to posts, listicles, beginner guides, advanced tutorials, comparison articles, industry news takes, and opinion pieces. Each represents a different content format that appeals to a different segment of your audience.

A diverse content mix serves different stages of the reader journey. Some posts attract new visitors searching for information. Others engage existing readers. And some drive conversions by addressing buying objections. This tool helps you plan a balanced editorial calendar that serves all of these goals.

Keep a running list of generated ideas and filter them by estimated search volume, competition level, or content format to prioritize what to write next.`,
  },

    'hashtag-generator': {
    intro: 'Hashtag Generator — generate trending and niche hashtags for any social media post. Boost your reach on Instagram, X (Twitter), LinkedIn, TikTok, and Facebook.',
    body: `Hashtags are how social media algorithms categorize and distribute your content to interested audiences. Using the right ones means your posts reach people beyond your existing followers — potentially going viral. Using the wrong ones means your content gets buried or flagged as spam.

This free hashtag generator analyzes your post topic, keywords, or caption and produces relevant hashtags across three tiers: highly popular (broad reach, high competition), moderately popular (good reach, moderate competition), and niche-specific (targeted reach, low competition). A balanced mix of all three tiers performs best.

Different platforms have different hashtag norms. Instagram supports up to 30 per post; X (Twitter) works best with 1–3 highly relevant tags; LinkedIn prefers 3–5 professional-focused hashtags. This tool adapts its output to the platform you specify.

Research matters here: the same hashtag can have wildly different meanings on different platforms. Always review generated hashtags before using them to ensure they align with your content and community.`,
  },

    'seo-evaluator': {
    intro: 'SEO Content Evaluator — score your content on 10 key on-page SEO factors and get specific, actionable recommendations to improve your Google rankings.',
    body: `Great writing alone doesn't rank on Google. Your content needs to be structured, keyword-optimized, technically sound, and user-experience focused — all at the same time. This free SEO content evaluator audits your page against the 10 most important on-page ranking factors.

The tool checks: title tag optimization and length, meta description quality, keyword usage in the first 100 words, heading hierarchy, content length relative to ranking competitors, internal and external link usage, image alt text coverage, URL structure, and mobile-friendliness signals.

Each factor gets a score and a plain-English explanation of what it means and how to fix it. Instead of vague advice like "improve your content," you get specific recommendations: "Your meta description is 95 characters — aim for 150–160 to fully utilize the search result snippet space."

Run this before publishing any new page or blog post — and again after making updates. Tracking your score over time is one of the most concrete ways to measure your SEO improvement.`,
  },

    'readability-checker': {
    intro: `Readability Checker — test your content's readability score and ensure it matches your target audience's comprehension level. Written for everyone from beginners to experts.`,
    body: `The clearest content converts better, earns more backlinks, and ranks higher in search results. But what does "readable" actually mean for your specific audience? A readability checker scores your text based on formulas that predict how easy or difficult it is to read — giving you an objective benchmark, not just a feeling.

This free readability checker uses multiple industry-standard formulas (Flesch-Kincaid, Gunning Fog, SMOG, and more) to give you a comprehensive picture of your content's complexity. It tells you the grade level required to understand your text — and suggests whether that matches your audience.

In general, web content aimed at a broad audience should target a 7th–8th grade reading level. Technical B2B content might be 10th–12th grade. Academic writing may be college-level. The tool shows you exactly where your content falls on that spectrum.

Beyond the score, it highlights specific sentences that are too long, paragraphs that are too dense, and words that are unnecessarily complex — giving you a revision roadmap, not just a number.`,
  },

    'plagiarism-checker': {
    intro: 'Plagiarism Checker — scan any text for duplicate content across the web and ensure your work is original before publishing.',
    body: `Publishing duplicate content — whether accidental or intentional — can seriously damage your SEO. Google penalizes sites that copy content from other sources, and duplicate content fragments your search visibility across multiple URLs instead of consolidating it in one place.

This free plagiarism checker scans your text against billions of pages indexed by search engines to identify matching or highly similar content. It surfaces exact matches as well as paraphrased duplicates, so you can catch both direct copying and more sophisticated forms of content theft.

If you're a student, blogger, journalist, or content marketer, running your work through a plagiarism checker before publishing protects your reputation and ensures you're building on original ideas rather than passing off others' work as your own.

If the tool flags content you believe is fair use (such as short quotations with attribution), you can manually review each flagged passage and make a judgment call. The goal is to ensure that when you publish content under your name, it genuinely is yours.`,
  },

  // ── PDF ─────────────────────────────────────────────────────────────────────
    'pdf-merge': {
    intro: 'PDF Merger — combine multiple PDF files into a single document in seconds. Drag, drop, merge, and download — no signup, no software to install.',
    body: `Ever need to send a client one file instead of ten? PDF merger solves the age-old problem of scattered PDF documents. Instead of asking recipients to open multiple files, you combine them into a single, professionally organized PDF in seconds.

This free PDF merger works entirely in your browser — no uploads to a server, no software to download, no account required. Simply drag and drop your PDF files in the order you want them merged, and download the combined file instantly. Processing happens locally on your device.

The tool maintains the original formatting, images, fonts, and quality of every page from each source PDF. There's no recompression degradation, no lost hyperlinks, and no corrupted files. What goes in is exactly what comes out — just combined.

Common use cases include combining scanned document pages into one file, merging multiple invoice pages, assembling a portfolio of work samples, or creating a single handout from several source documents for a meeting.`,
    example: `Upload "cover-letter.pdf", "resume.pdf", and "portfolio.pdf" — get back "job-application-combined.pdf" with all pages in order, ready to email in one attachment.`,
  },

    'pdf-split': {
    intro: 'PDF Splitter — extract specific pages or split a PDF into separate files. Divide large documents into smaller, more manageable files in seconds.',
    body: `Sometimes you need just one page from a 200-page PDF. Other times you want to break a document into separate chapter files. This free PDF splitter handles both scenarios — extract individual pages or define page ranges to split a PDF into multiple smaller files.

The tool works entirely in your browser with no server uploads. Select the pages you want to extract (by clicking, entering page numbers, or specifying ranges like "1-5, 8, 12-15"), and download those pages as a new PDF in seconds. The rest of the document stays untouched.

Common uses include pulling a single receipt or invoice from a scanned book, extracting a specific contract page for a legal matter, splitting a multi-chapter report into individual files for easier distribution, or isolating high-resolution images embedded in a PDF for use elsewhere.

Splitting PDFs is one of the most practical document management skills. Whether you're an accountant pulling one invoice from a scanned ledger or a student extracting a chapter from a research PDF, this tool makes it effortless.`,
  },

    'pdf-compress': {
    intro: 'PDF Compressor — reduce PDF file size without losing quality. Compress scanned documents, reports, and presentations to email-friendly sizes in seconds.',
    body: `Large PDF files are a constant frustration. A scanned document or high-resolution presentation can easily be 20MB or more — too big to email, too slow to upload, and a poor user experience on mobile. This free PDF compressor solves the problem without requiring expensive software.

The tool uses intelligent compression algorithms that reduce file size while preserving the maximum possible quality. For text-based PDFs (like reports or ebooks), compression can typically reduce file size by 50–80% with no visible quality loss. For image-heavy PDFs, quality is preserved where it matters most while aggressively compressing unnecessary image data.

You can choose your compression level: high compression for the smallest possible file, medium for a balance of size and quality, or low compression to preserve near-original quality with only modest size reduction. The tool shows you the before and after file sizes so you know exactly what you're getting.

Stop emailing "sorry the file is too large" apologies. Compress your PDF before sending and get it under 5MB every time.`,
  },

    'pdf-to-jpg': {
    intro: 'PDF to JPG Converter — convert PDF pages to high-quality JPG images instantly in your browser. Extract visual content from any PDF without Adobe Acrobat.',
    body: `Need to use a page from a PDF as an image? Whether you're creating a presentation slide, extracting a chart for a report, or capturing a signed document page as proof, converting a PDF to JPG is a common need that shouldn't require expensive software.

This free PDF to JPG converter extracts every page from your PDF and converts them to clean, high-resolution JPG images. Each page becomes a separate image file, named sequentially, ready to use in any application that accepts images.

The conversion preserves visual quality as closely as possible — text renders sharply, images are converted at high fidelity, and the overall layout is maintained. The tool processes everything locally in your browser, so there's no upload to an external server and no privacy concerns.

Use cases include extracting a specific page from a legal document, converting a PDF presentation slide to an image for social media, capturing a signed contract page as evidence, or pulling figures from an academic paper to include in your own presentation.`,
  },

    'jpg-to-pdf': {
    intro: 'JPG to PDF Converter — turn JPG images into a single PDF document. Create photo albums, document compilations, or image collections in seconds.',
    body: `Ever needed to send a collection of photos as a single document? Or compile several scanned images into one easy-to-share PDF? This free JPG to PDF converter handles it instantly — no software, no signup, no watermarks.

Upload your JPG images in any order, rearrange them by drag-and-drop if needed, and the tool combines them into a single PDF file. Each image becomes one page in the document. The resulting PDF maintains the original dimensions and quality of each image.

This is one of the most versatile free tools on the web. Students combine scanned assignment pages. Photographers create client proof PDFs. Real estate agents compile property image galleries. HR departments assemble submitted document packages. The use cases are genuinely endless.

The tool works on all devices — desktop, tablet, and mobile. Whether you're on a computer in the office or a phone in the field, you can convert images to PDF in under a minute.`,
  },

    'pdf-to-text': {
    intro: 'PDF to Text Extractor — extract all text content from a PDF file and copy it as plain text. Pull data from reports, contracts, and research papers instantly.',
    body: `PDFs are great for preserving layout, but they make text hard to reuse. Copying and pasting from a PDF often results in broken formatting, scrambled paragraphs, or missing characters. This free PDF to text extractor solves the problem by converting your PDF's text content into clean, copyable plain text.

The tool analyzes each page of your PDF and extracts all readable text, preserving the reading order and paragraph structure as closely as possible. The output is a plain text file that you can paste into any document, editor, or application.

Use cases include extracting article text for summarization, pulling data tables from reports, capturing contract clauses for analysis, extracting bibliography entries from research papers, or converting PDF documents for reading on devices that handle text better than PDFs.

The tool works best on text-based PDFs. Scanned image PDFs (where pages are images rather than text) require OCR (optical character recognition) which this tool doesn't perform — for scanned documents, use a dedicated OCR tool instead.`,
  },

    'pdf-password': {
    intro: 'PDF Password Protector — add password protection to any PDF file. Secure sensitive documents with AES-256 encryption in seconds.',
    body: `Before sharing a sensitive PDF — a financial statement, legal contract, medical record, or confidential report — add password protection. This free PDF password protector encrypts your file so only people with the password can open it.

The tool uses industry-standard AES-256 encryption, the same level of security used by banks and governments. Once protected, the PDF cannot be opened, printed, or modified without entering the correct password. This gives you control over who accesses your sensitive documents.

Simply upload your PDF, set a strong password (the tool will indicate password strength), and download the encrypted version. The original file is never uploaded to any server — all processing happens locally in your browser, which means your sensitive documents never leave your device.

Share the password separately from the file — through a different channel, a phone call, or a secure messaging platform. That's how professionals keep sensitive documents genuinely secure.`,
  },

    'pdf-rotate': {
    intro: 'PDF Page Rotator — rotate individual pages or all pages in a PDF. Fix upside-down scans and misaligned documents in seconds.',
    body: `Received a PDF where pages are sideways or upside down? Scanned documents often come in wrong orientation, especially from mobile phone scanners. This free PDF rotator lets you fix rotated pages in seconds without re-scanning.

Select individual pages to rotate by 90, 180, or 270 degrees, or apply a rotation to all pages at once. You can also auto-detect and fix pages that are oriented differently from the majority — useful when a scanner feeds pages in at random angles.

The tool processes entirely in your browser. No server upload, no file size limits beyond your browser's memory, and no watermarks on the output. What you download is your fixed PDF, ready to share.

It's a small, common problem — but it happens often enough that having a free, instant fix is genuinely valuable. Fix your PDF and move on.`,
  },

  // ── Image ────────────────────────────────────────────────────────────────────
    'image-compressor': {
    intro: 'Image Compressor — reduce image file size by up to 80% without visible quality loss. Optimize PNG, JPG, and WebP images for websites, emails, and social media.',
    body: `Large images are the number one cause of slow websites. Every kilobyte of image weight affects load time, which directly impacts your Google ranking, bounce rate, and conversion rate. Optimizing your images is the single most impactful website speed improvement you can make.

This free image compressor reduces file size by intelligently compressing the image data while preserving visual quality. It works on JPG, PNG, and WebP formats — the three image types used on virtually every website. Compression happens locally in your browser, so your images never leave your device.

For web use, an image that was 2MB can often be reduced to 200–400KB with imperceptible quality difference. For email attachments, you can get images small enough to avoid every major email provider's attachment size limits. For social media, optimized images upload faster and display at higher quality.

The tool shows you the before and after file size so you know exactly how much you've saved. You can adjust compression quality to find the right balance between file size and visual fidelity for your specific use case.`,
  },

    'image-resizer': {
    intro: 'Image Resizer — resize images to exact pixel dimensions instantly. Scale down for web or scale up with intelligent upscaling that preserves quality.',
    body: `Images uploaded to websites, blogs, and social platforms need specific dimensions to display correctly. A hero banner needs specific width. A profile picture needs a precise square. A thumbnail needs small dimensions. This free image resizer handles all of it instantly.

Simply enter the target dimensions you need — either a specific width, height, or both — and the tool resizes your image to match. You can maintain the original aspect ratio or force specific dimensions (which may crop the image). The choice is yours.

For downscaling, the tool uses high-quality resampling algorithms that preserve detail and sharpness, so images don't appear blurry or pixelated at their new size. For upscaling, intelligent algorithms estimate missing pixel information to enlarge images with less quality loss than basic bicubic interpolation.

Common use cases include creating social media graphics at exact platform dimensions, generating website thumbnails, preparing images for email newsletters, and producing multiple size variants from a single source image.`,
  },

    'jpg-png-converter': {
    intro: 'JPG ↔ PNG Converter — convert between JPG and PNG formats instantly. Change image formats without quality loss where possible.',
    body: `JPG and PNG are the two most common image formats on the web, and each has specific strengths. JPG uses lossy compression to produce smaller file sizes — ideal for photographs. PNG uses lossless compression to preserve every pixel — ideal for graphics, screenshots, and images with transparency.

This free image format converter lets you switch between JPG and PNG in seconds. Converting PNG to JPG is useful when you need to dramatically reduce file size for web use. Converting JPG to PNG is useful when you need transparency (JPG doesn't support transparent backgrounds) or when you need lossless quality for printing.

The tool processes entirely in your browser. Your images never leave your device, which means no upload wait times and no privacy concerns — even for sensitive business images.

When converting PNG to JPG, the tool handles the transparency by flattening it against a white background (since JPG doesn't support transparency). When converting JPG to PNG, the result is a pixel-perfect lossless copy of the original image.`,
  },

    'image-cropper': {
    intro: 'Image Cropper — crop images to perfect proportions for any platform. Choose from preset social media dimensions or set your own crop area.',
    body: `Every social media platform has its own ideal image dimensions. Instagram posts are square (1:1) or vertical (4:5). Twitter headers are wide (3:1). Facebook event covers are nearly cinematic (2.1:1). YouTube thumbnails are 16:9. Cropping images to the right proportions makes them display cleanly without awkward cropping or letterboxing.

This free image cropper provides preset crop ratios for all major social platforms, so you never have to look up dimensions again. Just select your target platform, adjust the crop area over your image, and download the perfectly proportioned result.

Beyond social media, the tool is invaluable for standardizing product photos, creating matching header images for blogs and websites, cutting out unwanted background elements from photos, and preparing images for print layouts that require specific aspect ratios.

The interface shows a live preview of your crop, so you can frame the perfect shot before downloading. Adjust the crop area by dragging, and zoom in or out for precise control over the final result.`,
  },

    'color-picker': {
    intro: 'Color Picker — pick any color from your screen and get its HEX, RGB, HSL, and CSS values instantly. The fastest way to grab exact color codes for design work.',
    body: `Every designer, developer, and content creator needs to grab color codes from time to time. Whether you're matching a brand color, capturing a color from a screenshot, or building a color palette, this free color picker does it in one click.

Click anywhere on your screen to sample the color. Instantly get the HEX code (for web and design tools), RGB values (for CSS and graphics software), HSL values (for advanced CSS styling), and the CSS rgba() format (for transparent overlays). All values are copy-to-clipboard with one click.

The tool also shows a live color swatch so you can verify you're grabbing the right color, and displays the closest named CSS color as a bonus reference. Build and save color palettes, compare colors side by side, and copy formats in the exact syntax your project needs.

No more guessing at approximate color codes. Sample the exact color you see and get the precise values you need.`,
  },

  'image-to-base64': {
    intro: 'Image to Base64 Converter — encode any image as a Base64 string for embedding directly in HTML, CSS, or JSON without external image files.',
    body: `Base64 encoding converts an image file into a text string that can be embedded directly in your HTML. This eliminates the need for a separate image file request — the image data is already present in the page itself. For small images like icons, logos, and flags, this can meaningfully improve page load speed.

This free image to Base64 converter handles JPG, PNG, GIF, SVG, and WebP formats. Simply upload or drag-and-drop your image, and the tool generates the Base64 string in multiple formats: raw Base64, data URI with MIME type, and CSS background-image compatible format.

Common use cases include embedding small icons in HTML emails (where external image loading is blocked by many email clients), embedding images directly in CSS stylesheets for critical path optimization, reducing the number of HTTP requests for small decorative images, and including image data in JSON API responses.

For large images, Base64 encoding actually increases file size by ~33%, so this technique is best reserved for small images under 4–5KB. The tool shows you the encoded size so you can make an informed decision about whether Base64 embedding makes sense for your specific image.`,
  },

    'gif-resizer': {
    intro: 'GIF Resizer — resize animated GIFs without losing their animation. Change dimensions while preserving every frame of your GIF.',
    body: `Animated GIFs are a popular web format for short loops — reaction images, micro-animations, product demos, and social media content. But they often come in the wrong dimensions for where you need to use them. Resizing GIFs used to require complex video editing software; this tool does it instantly.

This free GIF resizer maintains the animation integrity of your GIF throughout the resizing process. Every frame is proportionally scaled, timing is preserved, and the loop plays back exactly as intended — just at your chosen dimensions.

You can resize by percentage (half size, double size) or specify exact pixel dimensions. The tool maintains the original aspect ratio unless you explicitly choose to change it, preventing the stretched and distorted look that basic image tools produce when forced to resize GIFs.

Upload your GIF, choose your target dimensions, and download the resized result. It's that simple — no watermarks, no quality loss beyond what dimensional scaling requires, and no frame dropping.`,
  },

    'image-blur': {
    intro: 'Background Blur Tool — blur or pixelate the background of any photo. Create depth-of-field effects like a professional camera, instantly in your browser.',
    body: `Professional photographers use shallow depth of field — keeping their subject sharp while blurring the background — to draw attention to the focal point of an image. This technique makes portraits and product shots look polished and premium. Now you can achieve the same effect with any photo, entirely in your browser.

This free background blur tool uses intelligent edge detection to separate your subject from the background. You control the blur intensity from a subtle background softening to a heavy bokeh blur. There's also a pixelate option for a more stylized, privacy-focused effect.

Use cases include creating professional-looking headshots without a DSLR camera, anonymizing faces and license plates in newsworthy images, producing product photography with a blurred studio-style background, and adding a modern aesthetic to social media portrait photos.

The tool processes entirely on your device — no uploads, no server processing, no privacy concerns. Edit your image and download the result in seconds.`,
  },

  // ── AI ───────────────────────────────────────────────────────────────────────
    'ai-writer': {
    intro: `AI Content Writer — generate blog posts, product descriptions, and marketing copy in seconds using artificial intelligence. Overcome writer\'s block forever.`,
    body: `Content is the backbone of digital marketing, but producing high-quality copy consistently is time-consuming and mentally exhausting. This free AI content writer accelerates your workflow by generating well-structured, contextually relevant text on any topic you specify.

Enter a brief description of what you need — a blog post introduction, a product description, a landing page headline, a YouTube video description — and the AI generates multiple variations for you to choose from or combine.

The tool is designed to be a drafting partner, not an end-to-end content solution. Use the output as a starting point: edit for your brand voice, add your unique expertise and perspective, and fact-check any claims before publishing. AI-generated content that goes through human refinement consistently outperforms content from either source alone.

Content marketers, freelance writers, small business owners, and bloggers will find this the fastest way to go from content brief to first draft. Generate 5 variations, pick the best elements from each, and have a polished draft in minutes instead of hours.`,
  },

    'ai-email-writer': {
    intro: 'AI Email Writer — write professional cold emails, follow-ups, and sales sequences in seconds. Turn cold outreach into conversations with perfectly crafted messages.',
    body: `Cold email is one of the highest-leverage activities in B2B sales and partnership development — but writing emails that actually get opened, read, and replied to is hard. Most people write one version, send it to everyone, and wonder why the response rate is near zero.

This free AI email writer takes the pain out of cold outreach. Enter the recipient's name, company, industry, and what you're offering, and the tool generates personalized cold emails with compelling subject lines, engaging opening lines, clear value propositions, and effective calls to action.

It also drafts follow-up sequences — because the best cold email results come from persistent, well-sequenced outreach, not a single message that disappears into an overcrowded inbox.

Use the generated emails as a foundation: personalize the opening line with something specific to the prospect, verify all facts before sending, and add your authentic voice. The more specific and human your email feels, the better your response rates will be.`,
  },

    'ai-job-description': {
    intro: 'Job Description Generator — create compelling, detailed job postings that attract the right candidates. Write a JD in seconds instead of struggling with blank page syndrome.',
    body: `A well-written job description does more than list duties — it sells the role and your company to the ideal candidate. Most job postings are poorly written, overly corporate, and full of demanding requirements that discourage great candidates from applying. This free job description generator fixes that.

Enter the job title, key responsibilities, required qualifications, and your company culture, and the tool produces a structured, engaging job posting that speaks directly to the candidates you want to attract. It includes compelling sections on company culture and growth opportunities that most job postings omit entirely.

Good job descriptions reduce time-to-hire by attracting better-qualified applicants, decrease candidate dropout rates during the application process, and set clear expectations that reduce early-stage turnover. They're one of the highest-ROI pieces of writing most businesses produce.

Review the output for accuracy before posting, add your company's specific benefits and perks, and adjust the tone to match your brand voice. A job posting that represents your company authentically attracts people who'll thrive there.`,
  },

    'ai-bio-writer': {
    intro: 'Bio Writer — write a compelling personal or business bio for your LinkedIn, website, speaker profile, or author byline. Impress in 150 words or fewer.',
    body: `Your bio is often the first thing people read when they encounter you professionally. Whether it's on LinkedIn, your personal website, a conference speaker page, or an author byline, a great bio establishes credibility and makes a memorable impression in seconds.

This free bio writer takes the awkwardness out of writing about yourself. Answer a few questions about who you are, what you do, your key achievements, and your personality, and the tool generates multiple bio variations at different lengths — from a 50-word micro bio for Twitter to a 250-word professional bio for LinkedIn.

The tool helps you strike the balance between confidence and humility that effective bios require. It includes relevant power words, specific achievement metrics where you provide them, and a clear value proposition — all without sounding boastful or generic.

Write it once, use it everywhere. A great bio can be repurposed across every professional platform you use.`,
  },

    'ai-slogan-generator': {
    intro: 'Slogan Generator — create catchy brand slogans and taglines in seconds. Find the perfect phrase to communicate your brand essence in just a few words.',
    body: `A great slogan captures your brand's essence in a handful of words that's memorable, distinctive, and emotionally resonant. "Just Do It." "I'm Lovin' It." "Think Different." The best slogans are so effective that they become synonymous with the brands behind them.

This free slogan generator uses AI to produce dozens of brand slogan ideas based on your brand name, industry, core value proposition, and target audience. It generates options across different styles — witty, inspirational, descriptive, emotional — so you can find the tone that fits your brand.

Slogans are deceptively hard to write. They need to be short (5–10 words max), easy to remember, distinct from competitors, and true to what the brand actually delivers. This tool gives you a wealth of starting points that you can refine, combine, and polish into something genuinely great.

Test any generated slogan against your brand values. Does it accurately represent what you do? Does it resonate with your target audience? Does it sound like something your competitors could say? The best slogans answer yes to all three.`,
  },

    'ai-meta-description': {
    intro: 'Meta Description Generator — generate SEO-optimized meta descriptions that increase your Google click-through rate. Write compelling search snippets without the guesswork.',
    body: `Your meta description is your ad copy in organic search results. When someone searches a query that your page ranks for, your title and meta description are what they use to decide whether to click your result or a competitor's. A great meta description can meaningfully increase your organic click-through rate — without improving your ranking at all.

This free meta description generator creates multiple meta description options that stay within the 150–160 character limit (prevents truncation), incorporate your target keyword naturally, include a call to action, and are compelling enough to outperform competing search results in the same position.

The tool generates options at different lengths and tones — concise and factual, benefit-focused, question-based, and urgency-driven — so you can pick the style that best fits your content and audience.

Always edit the output before pasting it into your SEO tool. The most effective meta descriptions are specific, honest about the page content, and written with your actual reader in mind — not just stuffed with keywords.`,
  },

  // ── Developer ────────────────────────────────────────────────────────────────
    'json-formatter': {
    intro: 'JSON Formatter — format, validate, and minify JSON data instantly. Debug APIs and configuration files with a clean, syntax-highlighted view.',
    body: `Working with JSON APIs and configuration files is a daily task for most developers — and unformatted JSON is nearly impossible to read. Finding a missing comma in a 200-line blob of minified JSON is a special kind of frustration. This free JSON formatter eliminates that pain.

Paste any JSON into the tool and it instantly formats it with proper indentation, syntax highlighting, and line numbers. If your JSON has errors, the tool pinpoints the exact line and character position of the problem — along with a plain-English explanation of what went wrong.

Beyond formatting, the tool minifies JSON (removes all whitespace for API payloads), sorts keys alphabetically (useful for consistent diffing), and provides a tree view for navigating deeply nested structures. You can also paste URL-encoded JSON and the tool decodes it automatically.

Whether you're debugging a frontend API integration, inspecting a webhook payload, or validating a config file, this is the JSON tool you'll keep open in a browser tab permanently.`,
    example: `Paste: {"user":{"id":1,"name":"Alice","email":"alice@example.com"},"status":"active"} → Instantly formats to readable indented JSON with syntax colors, or minifies to a single compressed line.`,
  },

    'html-editor': {
    intro: 'HTML Editor — write and preview HTML, CSS & JavaScript in real time. A full-featured browser-based code editor with instant live preview.',
    body: `Whether you're prototyping a web page, testing a snippet, teaching HTML, or building an email template, you shouldn't need to spin up a full IDE or deal with live server setup. This free browser-based HTML editor gives you a split-pane code editor on the left and a live preview on the right — updating as you type.

The editor includes syntax highlighting for HTML, CSS, and JavaScript, line numbers, auto-indentation, and bracket matching. The live preview renders your code in an isolated iframe, so CSS from the ToolMint site doesn't interfere with your preview.

It's an invaluable tool for learning web development, rapidly testing design ideas, debugging HTML email rendering (email clients are notoriously inconsistent), and creating standalone HTML prototypes that clients can review before committing to a full implementation.

The editor handles full HTML documents as well as HTML snippets. For snippets, toggle the "wrap in HTML shell" option to see them rendered with a basic document structure applied.`,
  },

  'base64-encoder': {
    intro: 'Base64 Encoder/Decoder — encode or decode Base64 strings instantly. Convert binary data to text and back again with a single click.',
    body: `Base64 encoding represents binary data — like images, files, or raw bytes — as ASCII text characters. It's used everywhere in software: API authentication headers, data URIs in web pages, email attachments (MIME), JSON data payloads, and configuration files. This free tool handles both encoding and decoding in both directions.

Paste a string and encode it to Base64. Paste a Base64 string and decode it back to plain text. The tool auto-detects whether your input is already Base64 and offers the appropriate conversion. It also handles URL-safe Base64 variants used in JWT tokens and web API authentication.

For developers working with APIs, Base64 is the standard way to transmit binary files as JSON fields. For web developers, data URIs encoded in Base64 let you embed small images directly in HTML or CSS files, reducing HTTP requests. For security professionals, Base64 is often the first step in obfuscated payload encoding.

This tool processes entirely client-side. Your strings never leave your browser — useful when working with sensitive data like API keys or authentication tokens.`,
  },

    'url-encoder': {
    intro: 'URL Encoder/Decoder — encode special characters for safe URL transmission or decode URL-encoded strings. Essential for working with query parameters and path segments.',
    body: `URLs can only contain a limited set of ASCII characters. Special characters — spaces, ampersands, question marks, accented letters, emoji — must be percent-encoded before they can appear in a URL. Getting this wrong is how you end up with broken links, failed API calls, and garbled search queries.

This free URL encoder/decoder handles the conversion in both directions. Encode any string to make it URL-safe (e.g., "Hello World!" becomes "Hello%20World%21"), or paste a URL-encoded string and decode it back to readable text. The tool handles individual query parameters as well as full URLs.

Common use cases include building dynamic URLs with search queries, processing form submissions, debugging API requests that fail due to encoding issues, and decoding URLs found in server logs to understand what users were searching for.

The tool also handles Unicode characters — which encode to multiple percent-encoded bytes — and distinguishes between encodeForURL (full URL) and encodeForHTML (within an HTML attribute), which have different rules for some characters.`,
  },

    'regex-tester': {
    intro: 'Regex Tester — test and debug regular expressions in real time with syntax highlighting and match highlighting. Write reliable patterns without the trial-and-error frustration.',
    body: `Regular expressions are one of the most powerful and most frustrating tools in a developer's arsenal. A regex that looks correct often doesn't match what you expect — or matches things you didn't intend. Testing regex interactively is the only reliable way to write patterns that work.

This free regex tester lets you write a pattern and a test string side-by-side, highlighting every match in real time as you type. It supports JavaScript-compatible regex syntax, which means it works identically to what your browser's JavaScript engine will produce at runtime.

The tool explains what your pattern is doing: it breaks down complex expressions into understandable chunks, identifies what each capturing group will capture, and flags syntax errors in your pattern before they cause runtime errors.

Common use cases include validating user input (email addresses, phone numbers, postal codes), extracting data from text using capture groups, finding and replacing patterns in code or documents, and building parsing logic for log files or data feeds.`,
    example: `Pattern: \\b[A-Z][a-z]+ [A-Z][a-z]+\\b — Test string: "Alice Johnson and Bob Smith met Carol" → Matches: "Alice Johnson", "Bob Smith", "Carol". Each name highlighted separately.`,
  },

    'cron-parser': {
    intro: 'Cron Expression Generator — create and understand cron job schedules. Visualize what your cron expression means and check if your schedule is correct.',
    body: `Cron is the standard Unix/Linux job scheduler, used everywhere from web servers to CI/CD pipelines to cloud functions. Cron expressions are compact but cryptic — "0 9 * * MON-FRI" is readable once you know the syntax, but impossible to parse at a glance for most people.

This free cron expression generator works in both directions. Describe the schedule you want in plain English ("every weekday at 9am", "every 15 minutes", "first day of every month at midnight"), and the tool generates the correct cron expression. Or paste an expression and it explains what schedule it represents in plain English.

The tool also generates the next N execution times for any cron expression, so you can verify that your schedule runs when you expect it to. This is invaluable for catching mistakes before they cause missed or duplicate job executions.

Common use cases include scheduling server maintenance scripts, setting up CI/CD pipeline triggers, configuring database backup jobs, and automating social media posting through scheduling tools.`,
    example: `Expression: 0 */6 * * * → "At minute 0 past every 6th hour" — Next runs: 12:00 AM, 6:00 AM, 12:00 PM, 6:00 PM today (and every day).`,
  },

    'jwt-decoder': {
    intro: 'JWT Decoder — decode and inspect JSON Web Tokens without a library. Instantly read the header, payload, and signature of any JWT.',
    body: `JSON Web Tokens (JWTs) are everywhere in modern authentication — APIs, OAuth flows, session management, single sign-on. They're typically a base64-encoded string of three parts: header, payload, and signature. This free decoder lets you inspect any JWT without writing code or using a library.

Paste a JWT and the tool immediately decodes all three sections. The header (which describes the signing algorithm), the payload (your data claims like user ID, email, roles, and expiration), and the signature (cryptographically verifying the token hasn't been tampered with) are all displayed in clean, readable JSON.

The tool also checks the token's expiration — if the "exp" claim exists, you'll see whether the token is currently valid or has expired, and how long ago or in the future that deadline was. This is essential for debugging authentication failures.

Note: this tool decodes JWTs for inspection and debugging purposes. It cannot verify signatures without the secret or public key — that requires cryptographic verification that only your server can perform. Always validate JWTs server-side before trusting their claims.`,
    example: `Paste: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Instantly see: Algorithm: HS256, Subject: 1234567890, Name: John Doe, Issued: 2018-01-01.`,
  },

    'hash-generator': {
    intro: 'Hash Generator (MD5/SHA) — generate cryptographic hashes from any string. Compute MD5, SHA-1, SHA-256, SHA-512, and more in your browser.',
    body: `Cryptographic hashes are one-way functions that convert any input — a password, a file, a message — into a fixed-length "fingerprint" string. The same input always produces the same hash. But from the hash alone, it's computationally infeasible to recover the original input. This makes hashes essential for password storage, file integrity verification, and digital signatures.

This free hash generator computes MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes of any string you enter. Simply type or paste your input, select the algorithm you need, and copy the resulting hash. All processing happens locally in your browser — your input is never sent to any server.

MD5 and SHA-1 are considered weak for cryptographic purposes (collision attacks exist) but are still widely used for non-security purposes like generating file checksums. SHA-256 and SHA-512 are the modern standard for security-sensitive applications.

Common use cases include generating checksums for downloaded files (compare the hash to the one posted on the download page to verify integrity), hashing passwords before storing them in a database, and generating message digests for digital signature processes.`,
  },

  // ── QR ───────────────────────────────────────────────────────────────────────
    'qr-generator': {
    intro: 'QR Code Generator — create QR codes for URLs, text, WiFi, vCards, emails, SMS, and more. Download as PNG or SVG, no signup required.',
    body: `QR codes bridge the gap between physical and digital. A poster, business card, product label, or restaurant menu can carry a QR code that instantly opens a URL, joins a WiFi network, adds a contact, or sends a pre-filled message — all with a single smartphone scan.

This free QR code generator creates scannable codes for any type of content. Choose your data type (URL, plain text, email address, phone number, SMS, WiFi credentials, vCard contact, or calendar event), fill in the details, and the tool generates a high-quality QR code instantly.

The tool lets you customize the QR code's size, error correction level (higher levels allow the code to remain scannable even when partially damaged or overlaid with a logo), and download format. SVG format is best for print; PNG is best for digital use.

An important QR code best practice: always test your code with multiple phones before distributing it widely. A code that doesn't scan costs more in user frustration than not having one at all.`,
  },

    'qr-reader': {
    intro: 'QR Code Reader/Decoder — decode any QR code from an image or screenshot. Upload a QR image and instantly read its content.',
    body: `Found a QR code somewhere and want to know what it contains without scanning it with your phone? This free QR code reader accepts any image containing a QR code — uploaded from your device, dragged and dropped, or pasted from a screenshot — and instantly decodes it.

The tool reads all standard QR code formats: URLs, plain text, WiFi credentials (showing the network name, password, and encryption type), vCard contacts (extracting name, phone, email, and address), email addresses, phone numbers, SMS messages, and calendar events.

Once decoded, the tool offers quick-action buttons: if the QR contains a URL, you can open it directly; if it contains WiFi credentials, you can copy them; if it's a vCard, you can download the contact file. This saves you from manually transcribing information from the decoded content.

Useful for verifying QR codes you plan to distribute, reading QR codes from screenshots in documents, extracting URLs from QR codes in presentations, and checking what a QR code actually points to before scanning it with your phone.`,
  },

    'vcard-generator': {
    intro: 'vCard Generator — create QR codes containing your contact information. Scan to add someone to contacts instantly — no typing required.',
    body: `Exchanging business cards is inefficient. The card gets lost, the handwriting is illegible, or the details are entered incorrectly. A QR code vCard solves this by letting people scan once and add a complete contact to their phone — with name, company, title, phone, email, website, and address.

This free vCard QR code generator creates a scannable code containing your full contact details in the standard vCard format. Fill in the fields you want to include (all are optional), and the tool generates a QR code that, when scanned, populates the contact directly into the scanner's phone with zero typing.

The generated QR code is compatible with all smartphones — iPhone, Android, and any device with a camera and QR scanning app. You can test it with your own phone before printing or sharing it.

Common use cases include digital business cards, conference badges, resume QR codes, contact pages on personal websites, and event registration materials. The QR code can be embedded in an email signature, printed on a flyer, or displayed on a monitor at a physical location.`,
  },

    'wifi-qr-generator': {
    intro: 'WiFi QR Code Generator — create a QR code that connects guests to your WiFi. Visitors scan once and connect — no password typos, no asking staff.',
    body: `Sharing WiFi passwords verbally is awkward and error-prone. Customers at a café, guests at an event, or clients in a meeting room shouldn't need to type a complex password by hand. This free WiFi QR code generator creates a scannable code that connects any device to your network instantly.

Enter your WiFi network name (SSID), password, and security type (WPA/WPA2, WEP, or open network), and the tool generates a QR code that, when scanned by any smartphone, initiates the connection automatically. No typing. No typos. No frustration.

The generated QR code is especially useful for hospitality businesses — restaurants, hotels, Airbnb hosts, coworking spaces — where staff are constantly asked to share WiFi credentials. Print the QR code, frame it, and put it on the wall. One scan and guests are online.

You can also download the QR code as PNG or SVG for use in digital welcome packets, printed collateral, or email communications. The QR code remains scannable even if your password changes (until you regenerate it with the new password).`,
  },

  // ── Utils ────────────────────────────────────────────────────────────────────
    'password-generator': {
    intro: 'Password Generator — create strong, random passwords with complete control over length and character types. Never use a weak password again.',
    body: `Weak passwords are the entry point for most account compromises. "Password123", your pet's name, or your birthday are trivially guessable by automated tools that attackers use to crack accounts at scale. This free password generator creates genuinely random, unguessable passwords that withstand every cracking method.

Configure exactly what you need: password length (from 4 to 64 characters), character types (uppercase, lowercase, numbers, symbols), and exclusions (avoid ambiguous characters like 0/O or l/1). The tool generates multiple passwords simultaneously so you can pick the one you prefer.

For most accounts, a 16-character password with all character types provides more than sufficient security against brute-force attacks. For sensitive accounts like password managers or encryption keys, use 24+ characters. The longer and more random your password, the more computationally expensive it is to crack.

Never reuse passwords across accounts. Each account should have its own unique password. This tool makes it fast enough that password reuse isn't necessary — and a password manager is the safest place to store them all.`,
    example: `Settings: 20 chars, uppercase + lowercase + numbers + symbols, exclude ambiguous. Output: "kpL9#vR2nQ4$mBd8@Fj3!" — copy it, paste it into your password manager, and never reuse it anywhere.`,
  },

    'age-calculator': {
    intro: 'Age Calculator — calculate exact age in years, months, days, and seconds from any birthdate. Also shows your next birthday countdown.',
    body: `How old are you exactly? Not just "30" — but down to the day, hour, and second? This free age calculator takes any birthdate and returns the precise time elapsed: total years, months, days, and even the exact number of weeks, hours, minutes, and seconds since birth.

The tool also calculates future milestones: your next birthday (with days remaining), the exact date you'll turn 18 (useful for age verification contexts), 21, 30, 40, 50, and any custom age threshold. Enter your birthdate once and see every relevant age milestone at a glance.

This calculator is genuinely fun for personal use, but it also has practical professional applications: age-gating content, verifying minimum age requirements for regulated services, calculating senior discounts, determining eligibility windows for competitive sports, and genealogical research.

The calculation accounts for leap years automatically, so the results are accurate to the day regardless of the birthdate entered.`,
  },

    'bmi-calculator': {
    intro: 'BMI Calculator — calculate your Body Mass Index and get an instant health category assessment. Includes the formula breakdown and limitations explanation.',
    body: `Body Mass Index (BMI) is a widely used screening tool that categorizes weight relative to height into underweight, normal, overweight, and obese ranges. While it doesn't measure body fat directly, it correlates reasonably well with more direct measures at the population level and is a useful starting point for health assessment.

This free BMI calculator requires only your height and weight — enter either metric or imperial units (the tool converts automatically) — and instantly returns your BMI value, your category, and a plain-English interpretation of what that number means.

The tool also explains the BMI formula so you understand how it's calculated (weight in kg divided by height in meters squared), shows the exact category ranges, and includes a prominent note about BMI's known limitations: it doesn't distinguish between muscle and fat mass, doesn't account for fat distribution, and applies differently across ethnic groups and ages.

BMI should be treated as one screening tool among many, not a definitive health diagnosis. For a complete picture, consider waist circumference, family history, blood pressure, and other health markers alongside BMI.`,
    example: `Height: 175cm, Weight: 70kg → BMI: 22.9 kg/m² — Category: Normal weight. Ideal BMI range for most adults is 18.5–24.9.`,
  },

    'unit-converter': {
    intro: 'Unit Converter — convert between units of length, weight, temperature, speed, area, volume, and more. 20+ categories, instant results as you type.',
    body: `Whether you're following a recipe in metric, calculating shipping weights in imperial, converting Celsius to Fahrenheit for a weather report, or figuring out how many square feet are in a property listing, unit conversions are a constant in daily life. This free unit converter handles all of them instantly.

The tool covers 20+ conversion categories: length (mm, cm, m, km, inches, feet, yards, miles), weight (mg, g, kg, oz, lb, tons), temperature (Celsius, Fahrenheit, Kelvin), speed (mph, km/h, m/s, knots), area (sq ft, sq m, acres, hectares), volume (ml, L, fl oz, cups, gallons), and more.

Start typing in any field and the tool converts in real time — no need to press enter, no need to select the output unit from a dropdown. Just type and the answer appears. All values update simultaneously as you adjust any field.

It's especially useful for international travel, cooking with recipes from different countries, understanding product specifications listed in unfamiliar units, and any engineering or construction work that spans measurement systems.`,
  },

    'random-number': {
    intro: 'Random Number Generator — generate random numbers within any custom range. Perfect for lotteries, games, statistical sampling, and decision making.',
    body: `Need an unbiased random number? Whether you're selecting a lottery winner, running a random draw for a competition, generating a random sample for statistics, or settling a disagreement ("random number says so"), this free generator produces genuinely unpredictable results.

Set your own range: roll a single die (1–6), pick lottery numbers (1–49), generate a random percentage (0–100), or any custom upper and lower bound. You can generate a single number or multiple unique numbers at once — useful for selecting multiple winners from a pool.

The tool uses the browser's built-in cryptographic random number generator when available, which produces genuinely unpredictable results unsuitable for security-sensitive applications (for those, use a dedicated cryptographic random generator). For games, competitions, and statistical sampling, this tool is more than sufficient.

You can also generate multiple numbers in bulk (e.g., 100 random numbers between 1 and 1000) for applications like Monte Carlo simulations, random sampling for quality control, or shuffling a list for fair random ordering.`,
  },

    'uuid-generator': {
    intro: 'UUID Generator — generate unique UUIDs (v4) for database primary keys, distributed systems, and API resources. Copy and use instantly.',
    body: `A UUID (Universally Unique Identifier) is a 128-bit number formatted as a 36-character string that can be generated independently on any system without coordination — making it ideal for distributed databases, microservices, and any scenario where multiple systems need to create identifiers that won't collide.

This free UUID generator produces version 4 UUIDs — the most common type, generated using cryptographically random numbers. The format is "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx" where each x is a random hex digit and y is one of 8, 9, a, or b (the variant bits).

Common use cases include: primary keys in databases where you don't want to rely on auto-incrementing integers; correlation IDs for distributed request tracing across microservices; unique resource identifiers in REST APIs; session IDs in web applications; and unique filenames for file storage systems.

One UUID every second for the next billion years would have a roughly 50% chance of collision — so for practical purposes, UUIDs can be considered globally unique. Generate one, copy it, and use it with confidence.`,
    example: `Output: 6e2bc4f4-5e8a-4b3d-a1c9-7f8e2d1c0b3a — A standard v4 UUID. Guaranteed unique across all systems, all time, all geography.`,
  },

    'lorem-ipsum': {
    intro: 'Lorem Ipsum Generator — generate placeholder text in seconds. Create realistic-looking dummy content for design mockups and prototypes.',
    body: `When designing a website, app, or print layout, you need text that looks real without the distraction of actual content. Lorem Ipsum — Latin-derived filler text that looks like words but isn't readable English — has been the designer's standard for this purpose since the 1500s.

This free lorem ipsum generator creates customizable placeholder text: control the number of paragraphs, sentences, or words; toggle between classic Lorem Ipsum (Latin) and more readable English placeholder text; and choose between different block formats (paragraphs, bullet lists, or mixed).

For UI mockups and prototypes, readable English placeholder text is often preferable because it communicates the actual layout intent more clearly than Latin gibberish. For client presentations where actual content isn't ready, classic Lorem Ipsum creates a professional "this will be filled in later" appearance.

The tool also generates realistic-looking names, addresses, dates, and numbers as alternatives to lorem ipsum for data-heavy designs like tables, dashboards, and spreadsheets. Generate exactly what your design needs to look complete.`,
  },

    'interest-calculator': {
    intro: 'Interest Calculator — calculate simple and compound interest instantly. Compare different rates and time periods to find the best financial decision.',
    body: `Interest calculations underpin virtually every financial decision: savings accounts, loans, investments, mortgages, and credit cards. Understanding the difference between simple and compound interest — and seeing the numbers in front of you — prevents costly mistakes and reveals hidden costs or gains.

This free interest calculator handles both simple interest (principal × rate × time) and compound interest with customizable compounding frequency (daily, monthly, quarterly, annually). Enter your principal, interest rate, time period, and compounding frequency, and see the total interest earned or charged.

The tool also shows a year-by-year breakdown of how compound interest grows over time — this is the "snowball effect" that makes savings accounts grow and debts snowball if left unpaid. Seeing this visualization makes the real impact of interest rates viscerally clear.

Use this for: comparing savings account rates, understanding loan total cost, projecting investment growth, calculating credit card interest on unpaid balances, and planning major purchases that involve financing.`,
    example: `$10,000 at 5% compound annually for 10 years → Total: $16,288.95 — Interest earned: $6,288.95. The same at simple interest would be $5,000 total interest.`,
  },

    'tip-calculator': {
    intro: 'Tip Calculator — calculate tips and split bills fairly among any number of people. Never awkwardly split a check again.',
    body: `Splitting bills is one of the most socially awkward everyday calculations. Different people ordered different amounts, someone wants to tip on their portion only, someone forgot their wallet last time and you covered them — it gets complicated. This free tip calculator handles all the complexity so you don't have to.

Enter the bill total, choose your tip percentage (15%, 18%, 20%, 25%, or any custom amount), specify the number of people, and the tool instantly calculates the tip amount, total amount with tip, and each person's share — including accounting for uneven splits (if people ordered different amounts and the group agrees to split by individual orders).

The tool also handles round-up scenarios: round the tip to the nearest dollar, round the total to the nearest $10, or round each person's share for convenience. This is especially useful for cash payments where you don't want to deal with coins.

For couples, roommates, or travel groups with recurring shared expenses, the tip calculator takes the math out of "you owe me for dinner + tip" so conversations stay friendly.`,
  },

    'countdown-timer': {
    intro: 'Countdown Timer — set a countdown timer for any event. Track remaining time for cooking, workouts, presentations, or deadlines with second-level precision.',
    body: `Countdown timers are indispensable for time-boxing: cooking when a recipe says "bake for 35 minutes," interval training when a workout specifies "60 seconds on, 30 seconds rest," presentations when you need to know how much time remains, and any deadline where visual time remaining motivates action.

This free countdown timer lets you set any duration — hours, minutes, and seconds — and displays a large, readable countdown that ticks down in real time. When it reaches zero, an alarm sounds (with the option to mute) and the display flashes to get your attention.

The timer includes preset durations for common use cases (5 minutes for a phone call, 25 minutes for Pomodoro technique, 45 minutes for a class period) and lets you save custom presets for repeating timers. You can also set multiple timers simultaneously — useful for managing multiple concurrent cooking processes.

Set it, leave the tab open, and focus on what you're doing. The timer handles the time-tracking so you don't have to watch the clock.`,
  },

    'stopwatch': {
    intro: 'Stopwatch — track elapsed time with precision down to milliseconds. Lap times, split times, and large digit display for at-a-glance reading.',
    body: `The humble stopwatch is one of the most useful everyday tools: time a presentation without guessing, measure how long tasks actually take vs. how long you think they take, track running or cycling splits, or settle debates about who crossed the finish line first.

This free stopwatch displays elapsed time in large, readable digits: hours, minutes, seconds, and hundredths of a second. The lap function lets you record split times mid-count — press lap to save the current time without stopping the overall count. Every lap is saved and displayed in a lap history list below the main display.

The lap list shows the lap number, lap time (time since the last lap), and total elapsed time — exactly what a race official or coach needs to analyze performance. Clear the stopwatch to reset all laps and start fresh.

Unlike phone stopwatch apps, this runs in a browser tab that you can keep open on a monitor or projector — useful for fitness classes, races, cooking competitions, and any event where a large, visible countdown display matters.`,
  },

    'todo-list': {
    intro: 'Todo List — keep track of tasks with a simple, fast digital notepad. Add, complete, and organize your to-dos with zero friction.',
    body: `The best to-do list is the one you'll actually use. Most task managers are over-engineered with nested projects, sub-tasks, tags, priorities, and color-coded labels — before you finish setting up your task list, you've already forgotten what you needed to do. This free todo list keeps it simple.

Add a task, hit enter, and it's in the list. Click the checkbox when you're done and it moves to a completed section. Drag to reorder tasks by priority. The list persists in your browser's local storage, so closing the tab doesn't lose anything. Open the tab tomorrow and your list is exactly where you left it.

For simple, short-term task management, this is faster and less distracting than any full project management tool. There's no setup, no accounts, no onboarding — open the page and your list is there.

For longer projects with multiple phases, use multiple lists in separate browser tabs. Group related tasks without the overhead of a project management tool.`,
  },

    'notepad': {
    intro: 'Notepad — a simple browser-based notepad for quick notes, drafts, and temporary text storage. Always accessible, never forgets what you wrote.',
    body: `Sometimes you need to jot something down fast — a URL someone shared in a call, a temporary password, a note to yourself before a meeting, a draft paragraph before it goes into a proper document. Opening a text editor feels heavy. This free notepad is always there, instantly accessible in your browser.

The tool is a single, distraction-free text area that auto-saves as you type. Your content is stored in your browser's local storage, meaning it persists between sessions even if you close the tab. There's no server, no account, no sync — just your browser on your device.

Use it as a clipboard for multi-step copy-paste operations, a scratch pad for temporary calculations, a place to paste and hold URLs while you finish something else, or a quick draft area for ideas that don't yet have a home. At the end of the session, copy everything out and paste it where it belongs.

Because the notepad lives in local storage, clearing your browser data will erase it. For anything important, make sure you copy it somewhere permanent before clearing your browser.`,
  },

    'world-clock': {
    intro: 'World Clock — check the current time in cities around the world. Instant time zone conversion for international calls, travel planning, and remote work.',
    body: `Working with teams, clients, or family across time zones is a daily challenge. What time is it in New York when it's 3pm in London? Is that call at a reasonable hour for your colleague in Tokyo, or are you asking them to take a meeting at 2am? This free world clock answers these questions instantly.

Add any city from the database — covering every major metropolitan area and time zone in the world — and see its current local time, the time difference from your local time, and whether it's currently daytime or nighttime. The display updates in real time, so you always see the current time, not a static snapshot.

The tool also shows the time difference for each city relative to UTC, and whether daylight saving time is currently in effect — which is a common source of confusion when scheduling across international time zones (Arizona, for example, doesn't observe daylight saving time).

Use this to schedule international calls, plan video calls across distributed teams, prepare for travel, or simply understand what time it is for family and friends living abroad.`,
  },
};
