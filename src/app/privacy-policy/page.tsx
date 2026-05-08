import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for ToolMint — learn how we handle your data when you use our free online tools.',
};

export default function PrivacyPolicyPage() {
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
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <Link href="/" className="header-cta">All Tools</Link>
          </div>
        </div>
      </header>

      <main style={{ padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Tools
              </Link>
            </div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-4)',
            }}>
              Privacy Policy
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
              At ToolMint (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our website at <strong style={{ color: 'var(--color-text)' }}>https://toolmint.io</strong> (the &ldquo;Service&rdquo;).
            </p>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                1. Information We Collect
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                <strong style={{ color: 'var(--color-text)' }}>No personal data collected.</strong> ToolMint is designed to work entirely in your browser. We do not require you to create an account, sign in, or provide any personal information to use our tools.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                <strong style={{ color: 'var(--color-text)' }}>Usage data.</strong> We may collect anonymous analytics data such as which tools are most used, browser type, and general geographic region (country level only). This data is aggregated and cannot be used to identify you personally.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--color-text)' }}>Local storage.</strong> Some tools may store temporary data in your browser&apos;s local storage to improve your experience (e.g., saving preferences). This data never leaves your device.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                2. How We Use Information
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                We use aggregated analytics to understand which tools are most popular and to improve the Service. We do not sell, trade, or otherwise transfer any personally identifiable information to third parties.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                3. Cookies
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                ToolMint does not use tracking cookies. We may use essential cookies necessary for the website to function properly (e.g., session cookies for security). You can disable cookies in your browser, which may affect some functionality.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                4. Third-Party Services
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                We may use third-party services for analytics (e.g., Google Analytics in an anonymized capacity) and to display fonts. These services may collect anonymous information according to their own privacy policies. We do not control and are not responsible for the privacy practices of third parties.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                5. Data Security
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                We implement reasonable security measures to protect the integrity of our website. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of any data transmitted to or from the Service.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                6. Children&apos;s Privacy
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us so we can promptly delete it.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                7. Links to Other Websites
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Our Service may contain links to external websites that are not operated by us. If you click a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                8. Changes to This Privacy Policy
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                9. Contact Us
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--color-text)', fontWeight: 500 }}>
                Email: <a href="mailto:privacy@toolmint.io" style={{ color: 'var(--color-primary)' }}>privacy@toolmint.io</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
