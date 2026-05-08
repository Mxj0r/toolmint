import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the ToolMint team. We welcome feedback, tool suggestions, and partnership inquiries.',
};

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              We&apos;d love to hear from you. Reach out with feedback, suggestions, or questions.
            </p>
          </div>

          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            marginBottom: 'var(--space-6)',
          }}>
            <ContactForm />
          </div>

          {/* Direct contact info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-8)',
          }}>
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'General Inquiries',
                value: 'hello@toolmint.io',
                href: 'mailto:hello@toolmint.io',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                label: 'Privacy Issues',
                value: 'privacy@toolmint.io',
                href: 'mailto:privacy@toolmint.io',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                ),
                label: 'Legal / Terms',
                value: 'legal@toolmint.io',
                href: 'mailto:legal@toolmint.io',
              },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                {item.icon}
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)' }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* FAQ Section */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
          }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {[
                {
                  q: 'How do I request a new tool?',
                  a: 'Use the contact form above and select "Tool Request" as the subject. We review every request and add popular tools to our roadmap.',
                },
                {
                  q: 'Do you offer API access or bulk processing?',
                  a: 'Currently, ToolMint is a browser-based tool platform without API access. We may consider API offerings in the future based on demand.',
                },
                {
                  q: 'Can I report a bug in a specific tool?',
                  a: 'Yes! Select "Bug Report" in the form and include the tool name, your browser, and steps to reproduce the issue. We aim to fix bugs within 48 hours.',
                },
                {
                  q: 'Do you accept guest posts or affiliate partnerships?',
                  a: 'We are open to select partnerships. Please reach out with details using the "Partnership / Business Inquiry" subject.',
                },
              ].map(item => (
                <div key={item.q} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-6)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--space-2)', fontSize: '0.95rem' }}>{item.q}</div>
                  <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.9rem' }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
