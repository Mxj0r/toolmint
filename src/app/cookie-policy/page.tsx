import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for ToolMint — learn how we use cookies, why we use them, and your choices regarding cookies on our free online tools platform.',
};

export default function CookiePolicyPage() {
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
              Cookie Policy
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
            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                1. What Are Cookies?
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall browsing experience. Cookies are widely used across the internet and are a standard part of most websites.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                2. Why Does ToolMint Use Cookies?
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                ToolMint uses cookies for the following purposes:
              </p>
              <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <li><strong style={{ color: 'var(--color-text)' }}>Essential Cookies:</strong> Required for the website to function properly. They enable core features like page navigation, secure areas access, and tool usage. Without these cookies, certain services cannot be provided.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously. This allows us to improve the structure, content, and performance of our site.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Advertising Cookies:</strong> Used to deliver relevant advertisements to visitors based on their interests. These cookies may track your browsing behavior across different websites to build a profile of your preferences.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Functionality Cookies:</strong> Remember your preferences and settings (such as language or region) to provide a more personalized experience.</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                3. Types of Cookies We Use
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                Below is a breakdown of the specific cookies used on ToolMint:
              </p>
              <div style={{ overflowX: 'auto', marginBottom: 'var(--space-4)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text)', fontWeight: 600 }}>Cookie Name</th>
                      <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text)', fontWeight: 600 }}>Type</th>
                      <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text)', fontWeight: 600 }}>Purpose</th>
                      <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text)', fontWeight: 600 }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>cookie_consent</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Essential</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Stores your cookie consent preference</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>1 year</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>_ga</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Analytics</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Google Analytics — distinguishes unique users</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>2 years</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>_gid</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Analytics</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Google Analytics — distinguishes unique users</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>24 hours</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>_gat_*</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Analytics</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Google Analytics — throttles request rate</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>1 minute</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>IDE / NID</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Advertising</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>Google Ads — personalized advertising</td>
                      <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.85rem' }}>
                <em>Note: Third-party cookies (Google Analytics, Google Ads) are governed by the respective third-party privacy policies. We encourage you to review those policies.</em>
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                4. How Long Do Cookies Last?
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Cookies can be either <strong style={{ color: 'var(--color-text)' }}>session cookies</strong> (deleted when you close your browser) or <strong style={{ color: 'var(--color-text)' }}>persistent cookies</strong> (remain on your device for a set period or until manually deleted). The duration for each cookie type is listed in the table above. You can manage or delete cookies at any time through your browser settings.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                5. Your Choices and Rights
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                You have full control over your cookie preferences. You can:
              </p>
              <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <li><strong style={{ color: 'var(--color-text)' }}>Accept All:</strong> Allow all cookies, including advertising and analytics cookies.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Decline:</strong> Opt out of all optional cookies. Only essential cookies necessary for the service will be used.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Manage via Browser:</strong> Most browsers allow you to block or delete cookies through their settings. Note that blocking essential cookies may affect website functionality.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Opt Out of Google Analytics:</strong> You can install the <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: 'var(--color-primary)' }} target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a> to disable analytics data collection.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>Opt Out of Google Ads:</strong> Visit <a href="https://www.google.com/settings/ads" style={{ color: 'var(--color-primary)' }} target="_blank" rel="noopener noreferrer">Google Ads Settings</a> to manage personalized advertising preferences.</li>
              </ul>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                6. Third-Party Cookies
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Some cookies are placed by third-party services that appear on our pages, such as Google Analytics and Google Ads. These third parties may use cookies, web beacons, and similar technologies to collect information about your use of ToolMint and other websites. This data is used to provide analytics and deliver personalized advertising. We do not control the data collection practices of these third parties. You can learn more about how Google uses your data by visiting <a href="https://policies.google.com/technologies/partner-sites" style={{ color: 'var(--color-primary)' }} target="_blank" rel="noopener noreferrer">How Google uses data from sites that use our services</a>.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                7. Updates to This Policy
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, or legal requirements. When we make updates, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to periodically review this policy to stay informed about our use of cookies.
              </p>
            </section>

            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                8. Contact Us
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                If you have any questions, comments, or concerns about this Cookie Policy or our use of cookies, please contact us at:
              </p>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--color-text)', fontWeight: 500 }}>
                Email: <a href="mailto:legal@toolmint.io" style={{ color: 'var(--color-primary)' }}>legal@toolmint.io</a>
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                9. Related Policies
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                For more information about how we handle your data, please review our other policies:
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link
                  href="/privacy-policy"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 16px',
                    background: 'var(--color-surface-high)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 16px',
                    background: 'var(--color-surface-high)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  Terms of Use
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}