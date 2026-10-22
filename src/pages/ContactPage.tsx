import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { contactInfo } from '../data/content';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!form.first_name.trim()) {
      errs.first_name = 'First name is required.';
    }

    if (!form.last_name.trim()) {
      errs.last_name = 'Last name is required.';
    }

    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.';
    }

    if (!form.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!form.message.trim()) {
      errs.message = 'Message is required.';
    }

    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validate()) return;

    setStatus('loading');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

      // Debugging: check whether environment variables are available.
      console.log('EmailJS config status:', {
        serviceId: Boolean(serviceId),
        templateId: Boolean(templateId),
        publicKey: Boolean(publicKey),
      });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Check your .env file and restart Vite.',
        );
      }

      const fullName = `${form.first_name} ${form.last_name}`.trim();

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: fullName,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          name: fullName,
          email: form.email,
          time: new Date().toLocaleString(),
        },
        { publicKey },
      );

      console.log('EmailJS success:', response.status);

      setStatus('success');
      setForm(initialForm);
      setFieldErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);

      setStatus('error');

      if (error instanceof Error) {
        setErrorMsg(
          error.message.includes('configuration is missing')
            ? 'Email configuration is missing. Please check your .env file and restart the development server.'
            : 'Unable to send your message. Please check your EmailJS settings and try again.',
        );
      } else {
        setErrorMsg(
          'Unable to send your message. Please try again or email me directly.',
        );
      }
    }
  };

  const update = (field: keyof FormState, value: string) => {
    setForm(f => ({ ...f, [field]: value }));

    if (fieldErrors[field]) {
      setFieldErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  return (
    <main className="contact-page">
      <section className="section contact" id="contact">
        <div className="container">
          <Reveal className="contact-head">
            <span className="section-label">Contact</span>
            <h1 className="contact-title">Let's work together.</h1>
            <p className="contact-intro">
              I'm available for full-stack web development, brand identity
              design, and creative collaborations.
            </p>
          </Reveal>

          <div className="contact-grid">
            <Reveal className="contact-info">
              <a
                href={`mailto:${contactInfo.email}`}
                className="contact-info-row"
              >
                <span className="contact-info-icon">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">
                    {contactInfo.email}
                  </span>
                </span>
              </a>

              <a href={`tel:${contactInfo.phone}`} className="contact-info-row">
                <span className="contact-info-icon">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">
                    {contactInfo.phone}
                  </span>
                </span>
              </a>

              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-row"
              >
                <span className="contact-info-icon">
                  <MessageCircle size={18} />
                </span>
                <span>
                  <span className="contact-info-label">WhatsApp</span>
                  <span className="contact-info-value">Chat on WhatsApp</span>
                </span>
              </a>

              <div className="contact-info-row">
                <span className="contact-info-icon">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">
                    {contactInfo.location}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal className="contact-form-wrap" delay={120}>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      id="first_name"
                      type="text"
                      value={form.first_name}
                      onChange={e => update('first_name', e.target.value)}
                      autoComplete="given-name"
                    />
                    {fieldErrors.first_name && (
                      <span className="form-error">
                        {fieldErrors.first_name}
                      </span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      id="last_name"
                      type="text"
                      value={form.last_name}
                      onChange={e => update('last_name', e.target.value)}
                      autoComplete="family-name"
                    />
                    {fieldErrors.last_name && (
                      <span className="form-error">
                        {fieldErrors.last_name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    autoComplete="email"
                  />
                  {fieldErrors.email && (
                    <span className="form-error">{fieldErrors.email}</span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={e => update('subject', e.target.value)}
                  />
                  {fieldErrors.subject && (
                    <span className="form-error">{fieldErrors.subject}</span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                  />
                  {fieldErrors.message && (
                    <span className="form-error">{fieldErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-large contact-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="form-feedback form-feedback-success">
                    <CheckCircle2 size={16} />
                    Thanks — your message has been sent. I'll get back to you
                    soon.
                  </p>
                )}

                {status === 'error' && (
                  <p className="form-feedback form-feedback-error">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>

        <style>{`
          .contact-page { padding-top: 72px; }
          .contact-head {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            margin-bottom: var(--space-5);
            max-width: 640px;
          }
          .contact-title {
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: 600;
            font-family: var(--font-display);
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin: 0;
          }
          .contact-intro { color: var(--text-secondary); }
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: var(--space-5);
          }
          .contact-info {
            display: flex;
            flex-direction: column;
            gap: var(--space-2);
          }
          .contact-info-row {
            display: flex;
            align-items: center;
            gap: var(--space-2);
            padding: var(--space-2);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            background: var(--card-bg);
            transition: border-color 0.3s var(--ease);
          }
          a.contact-info-row:hover { border-color: var(--accent); }
          .contact-info-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px; height: 40px;
            border-radius: 10px;
            background: var(--accent-soft);
            color: var(--accent);
            flex-shrink: 0;
          }
          .contact-info-label {
            display: block;
            font-size: 0.75rem;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          .contact-info-value {
            display: block;
            color: var(--text);
            font-size: 0.98rem;
            margin-top: 0.15rem;
          }
          .contact-form-wrap {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: var(--space-3);
          }
          .contact-form {
            display: flex;
            flex-direction: column;
            gap: var(--space-2);
          }
          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2);
          }
          .form-field {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
          }
          .form-field label {
            font-size: 0.85rem;
            color: var(--text-secondary);
          }
          .form-field input,
          .form-field textarea {
            background: #0a0d12;
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            padding: 0.8rem 1rem;
            color: var(--text);
            font-family: inherit;
            font-size: 0.95rem;
            transition: border-color 0.3s var(--ease);
            resize: vertical;
          }
          .form-field input:focus,
          .form-field textarea:focus {
            outline: none;
            border-color: var(--accent);
          }
          .form-error {
            color: #ff6b6b;
            font-size: 0.8rem;
          }
          .contact-submit {
            margin-top: var(--space-1);
            width: 100%;
          }
          .contact-submit:disabled {
            opacity: 0.7;
            cursor: progress;
          }
          .spin { animation: spin 0.8s linear infinite; }
          @keyframes spin { to { transform: rotate(360deg); } }
          .form-feedback {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            padding: 0.7rem 1rem;
            border-radius: var(--radius-sm);
          }
          .form-feedback-success {
            background: var(--accent-soft);
            color: var(--accent);
          }
          .form-feedback-error {
            background: rgba(255,107,107,0.12);
            color: #ff8a8a;
          }
          .form-note {
            color: var(--text-secondary);
            font-size: 0.85rem;
          }

          @media (max-width: 880px) {
            .contact-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 480px) {
            .form-row { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>
    </main>
  );
}
