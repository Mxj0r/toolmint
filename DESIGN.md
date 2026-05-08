---
name: toolmint
description: ToolMint — 100+ free online tools for SEO, PDF, images, AI, QR codes, and more. No signup, no limits. Built on Next.js + Supabase Edge Functions.
brand:
  primary: "#00E5A0"
  primaryDim: "#00B87F"
  accent: "#FF6B35"
  bg: "#0C0F14"
  surface: "#141820"
  surfaceElevated: "#1C2130"
  border: "#242C3C"
  text: "#F0F4F8"
  textMuted: "#8896AA"
  textInverse: "#0C0F14"
typography:
  heading: "Outfit, weight 600–800"
  body: "DM Sans, weight 400–500"
  mono: "JetBrains Mono, weight 400"
spacing:
  unit: 4
  scale: "4 8 12 16 20 24 32 48 64 80 96"
motion:
  duration: "150–300ms"
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  stagger: "40ms"
components:
  card: "{ bg: #141820, border: #242C3C, radius: 12px, shadow: none }"
  button: "{ bg: #00E5A0, color: #0C0F14, radius: 8px, weight: 600 }"
  input: "{ border: #242C3C, focusRing: #00E5A0, radius: 8px }"
---

# ToolMint — Design Specification

## 1. Overview

ToolMint is a free all-in-one online tools platform — 100+ tools across 8 categories (SEO, PDF, Image, AI, Developer, QR, Utilities, Content). Brand positioning: **Premium but approachable** — the mint leaf represents precision, clarity, and value. Not corporate-cold, not startup-slop. Confident, clean, and functional.

**One memorable thing**: The mint leaf logo mark — simple enough to favicon at 16px, distinctive enough to billboard at 512px.

## 2. Design Language

### Colors
```
Background:    #0C0F14  (near-black, blue-tinted dark)
Surface:       #141820  (card backgrounds)
Surface High:  #1C2130  (modals, dropdowns)
Border:        #242C3C  (subtle dividers)
Primary:       #00E5A0  (mint green — CTAs, logo, highlights)
Primary Dim:   #00B87F  (hover/active states on mint)
Accent:        #FF6B35  (orange — secondary CTAs, warnings)
Text:          #F0F4F8  (primary text)
Text Muted:    #8896AA  (secondary text, labels)
Text Inverse:   #0C0F14  (text on mint buttons)
Success:       #22C55E
Error:         #EF4444
Warning:       #F59E0B
```

### Typography
- **Headings**: Outfit (Google Fonts) — weight 600–800. Bold but geometric, not aggressive.
- **Body**: DM Sans — weight 400–500. Clean and readable without being generic.
- **Code/Mono**: JetBrains Mono — weight 400. Developer tool aesthetic.
- **Scale**: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64px
- **Line height**: body 1.6, headings 1.15

### Spatial System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96px
- Container max-width: 1200px
- Card padding: 24px
- Section gaps: 64px

### Motion Philosophy
- **Micro-interactions**: 150ms ease-out (hover states, toggles)
- **Reveals**: 300ms ease-out (cards entering viewport)
- **Stagger**: 40ms between sibling elements
- Use `transform` and `opacity` only — NEVER `top`, `left`, `width`, `height`
- Respect `prefers-reduced-motion`

### Visual Assets
- **Icons**: Phosphor Icons (via CDN) — consistent, clean, 1.5px stroke
- **Logo**: Custom SVG mint leaf mark — #00E5A0 on transparent
- **Decorative**: Subtle dot-grid pattern on hero, geometric accent shapes
- **No emoji** in UI elements

## 3. Layout & Structure

### Site Structure
```
/ (homepage)           — Hero + stats + category grid + tool grid + footer
/tools/[slug]          — Dynamic tool page (60+ individual pages)
/sitemap.xml          — Auto-generated XML sitemap
/robots.txt           — SEO robots file
```

### Homepage Sections
1. **Header** — Logo left, nav center (Tools, Categories, Pricing), CTA right
2. **Hero** — Left: bold headline + subtext + search bar; Right: floating tool cards animation
3. **Stats Bar** — "100+ Tools · 50K+ Users · 100% Free · No Signup"
4. **Category Grid** — 8 category cards with icon, name, tool count
5. **Tool Grid** — All tools in filterable/sortable grid
6. **SEO Text Block** — Informational content for search engines
7. **Footer** — Links, social, copyright

### Responsive Strategy
- Desktop-first container at 1200px max
- Stack to single column at 768px
- Cards go 2-col then 1-col on mobile
- Touch targets: min 44×44px

## 4. Component States

### Cards
- Default: `#141820` bg, `#242C3C` border, 12px radius
- Hover: `#1C2130` bg, `#00E5A0` border (1px), translateY(-2px)
- Active: scale(0.98)

### Buttons
- Primary: `#00E5A0` bg, `#0C0F14` text, 8px radius, 600 weight
- Primary hover: `#00B87F` bg
- Secondary: transparent, `#00E5A0` border, `#00E5A0` text
- Danger: `#EF4444` bg

### Inputs
- Border: `#242C3C`, 8px radius
- Focus: ring `#00E5A0` 2px offset
- Error: ring `#EF4444`

## 5. Hard Rules
1. Logo mark must ALWAYS be #00E5A0 — never change the mint color
2. Primary action color (#00E5A0) must appear in every interactive element's default state
3. Cards never have drop shadows at rest — only on hover (border + translate)
4. No generic Inter/Roboto/Poppins fonts — Outfit + DM Sans only
5. No purple/blue gradient backgrounds — dark surfaces only