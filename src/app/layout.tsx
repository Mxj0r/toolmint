import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "ToolMint — 100+ Free Online Tools for SEO, PDF, Images & More",
    template: "%s | ToolMint",
  },
  description:
    "Free online tools for everyone. 100+ tools for SEO, PDF editing, image processing, AI writing, QR codes, and developer utilities. No signup, no limits.",
  keywords: [
    "free online tools",
    "SEO tools",
    "PDF tools",
    "image tools",
    "AI writer",
    "QR code generator",
    "developer tools",
    "online calculator",
  ],
  authors: [{ name: "ToolMint" }],
  creator: "ToolMint",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolmint.io",
    siteName: "ToolMint",
    title: "ToolMint — 100+ Free Online Tools",
    description:
      "Free online tools for everyone. 100+ tools for SEO, PDF editing, image processing, AI writing, QR codes, and developer utilities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolMint — 100+ Free Online Tools",
    description:
      "Free online tools for everyone. 100+ tools for SEO, PDF, images, AI, QR codes, and developer utilities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/logo-mark.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <Script
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT ?? 'ca-pub-XXXXXXXXXX'}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}