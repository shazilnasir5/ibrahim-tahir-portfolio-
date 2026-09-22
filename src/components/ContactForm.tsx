import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please write a message with at least 10 characters.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden" id="contact-form-container">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        Send a Direct Message
      </h3>
      <p className="text-xs sm:text-sm text-slate-300/80 mb-6 font-normal">
        Feel free to reach out for research proposals, academic inquiries, or full-stack opportunities.
      </p>

      {/* Success Banner */}
      {status === 'success' && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Message Sent Successfully!</span>
            <span>Thank you for reaching out. Ibrahim Tahir Sindhu will get back to you shortly.</span>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {status === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3 animate-in fade-in duration-300">
          <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Validation Alert</span>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" id="portfolio-contact-form">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
              Your Name <span className="text-emerald-400">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="e.g. Dr. Alexander Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl glass-input text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
              Email Address <span className="text-emerald-400">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="name@institution.edu"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl glass-input text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="e.g. Research Collaboration / Genomics Project"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl glass-input text-sm"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Message <span className="text-emerald-400">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl glass-input text-sm resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          id="submit-contact-form-btn"
          className="w-full glass-button-primary py-3.5 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-white" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
