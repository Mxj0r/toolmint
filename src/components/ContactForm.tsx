'use client';

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = data.get('name');
        const email = data.get('email');
        const subject = data.get('subject');
        const message = data.get('message');
        alert(`Thanks ${name}! We'll get back to you at ${email} within 1-2 business days.`);
        form.reset();
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" id="name" name="name" className="form-input" placeholder="Jane Smith" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" id="email" name="email" className="form-input" placeholder="jane@example.com" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <select id="subject" name="subject" className="form-input form-select">
          <option value="feedback">General Feedback</option>
          <option value="tool-request">Tool Request</option>
          <option value="bug-report">Bug Report</option>
          <option value="partnership">Partnership / Business Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Tell us what's on your mind…"
          required
          defaultValue=""
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          We typically respond within 1–2 business days.
        </p>
        <button type="submit" className="btn-primary" style={{ flexShrink: 0 }}>
          Send Message
        </button>
      </div>
    </form>
  );
}
