import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for ToolMint — the free online tools platform. Read our terms before using the service.',
};

export default function TermsPage() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="header-logo">
              <img src="/logo-mark.svg" alt="ToolMint" width={36} height={36} />
              <span className="header-logo-text">Tool<span>Mint</span></span>
            </Link>
            <nav>
              <ul className="header-nav">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#tools">Tools</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </nav>
            <Link href="/" className="header-cta">All Tools</Link>
          </div>
        </div>
      </header>

      <main style={{ padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-4)',
            }}>
              Terms of Use
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Last updated: May 2025
            </p>
          </div>

          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
          }}>
            <p style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              Welcome to ToolMint. By accessing or using our website at <strong style={{ color: 'var(--color-text)' }}>https://toolmint.io</strong> (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Service.
            </p>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                By accessing or using ToolMint, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding agreement between you and ToolMint. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting on this page.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                2. Description of Service
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                ToolMint provides free online tools for SEO, PDF processing, image manipulation, AI content generation, QR codes, developer utilities, and general-purpose calculators. All tools are provided for informational and utility purposes. We reserve the right to modify, suspend, or discontinue any tool at any time without notice.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                3. Eligibility
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that you meet this requirement. If you are under 13, you may not use the Service. If you are between 13 and 18, you confirm that you have obtained parental or guardian consent to use the Service.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                4. Acceptable Use
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not:
              </p>
              <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <li>Use the Service to process, generate, or store illegal, harmful, or offensive content.</li>
                <li>Use automated scripts, bots, or scrapers to access the Service without prior written permission.</li>
                <li>Attempt to gain unauthorized access to any part of the Service or related systems.</li>
                <li>Use the Service in any manner that could damage, disable, overburden, or impair our servers or networks.</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
                <li>Remove any proprietary notices or labels from the Service.</li>
                <li>Use the Service to spam, harass, or threaten any person or entity.</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                5. Intellectual Property
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                The Service, including but not limited to its design, layout, text, graphics, logos, and software, is the property of ToolMint and is protected by copyright and other intellectual property laws. You retain ownership of any content you input into our tools. By using the Service, you grant us a non-exclusive, royalty-free license to use such content solely for the purpose of providing the Service to you.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                6. Disclaimer of Warranties
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--color-text)' }}>THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong> TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the Service will be uninterrupted, secure, or error-free. We do not warrant that the results obtained from the use of the Service will be accurate or reliable.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                7. Limitation of Liability
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                To the fullest extent permitted by law, ToolMint and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of (or inability to access or use) the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content. <strong style={{ color: 'var(--color-text)' }}>IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED USD $50.</strong>
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                8. Indemnification
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                You agree to defend, indemnify, and hold harmless ToolMint and its affiliates, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Service.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                9. Governing Law
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within the United States for the resolution of any disputes arising out of or relating to these Terms or the Service.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                10. Severability
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                11. Entire Agreement
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and ToolMint regarding your use of the Service and supersede all prior agreements and understandings, whether written or oral.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                12. Contact Information
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--color-text)', fontWeight: 500 }}>
                Email: <a href="mailto:legal@toolmint.io" style={{ color: 'var(--color-primary)' }}>legal@toolmint.io</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
