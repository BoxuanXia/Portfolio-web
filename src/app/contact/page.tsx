'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    status: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setSubmitState({
        status: 'success',
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitState({ status: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: error instanceof Error ? error.message : 'An error occurred while sending your message.',
      });
    }
  };

  return (
    <main className="min-h-screen bg-[var(--stone)] pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-sm tracking-[0.24em] text-gray-500 uppercase">
              <span>Contact</span>
              <span className="h-px w-10 bg-[var(--accent-burgundy)]" />
              <span className="text-xs">Let's build something</span>
            </div>
            <h1
              className="text-5xl tracking-tight text-gray-900"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Have a project or opportunity in mind? I'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 soft-card p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(122,28,50,0.2)] focus:border-[var(--accent-burgundy)] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(122,28,50,0.2)] focus:border-[var(--accent-burgundy)] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(122,28,50,0.2)] focus:border-[var(--accent-burgundy)] transition-colors"
              placeholder="What is this about?"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(122,28,50,0.2)] focus:border-[var(--accent-burgundy)] transition-colors resize-none"
              placeholder="Tell me more about your inquiry..."
            ></textarea>
          </div>

          {/* Status Messages */}
          {submitState.status === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              {submitState.message}
            </div>
          )}
          {submitState.status === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              {submitState.message}
            </div>
          )}

          <button
            type="submit"
            disabled={submitState.status === 'loading'}
            className="w-full py-4 rounded-xl bg-[var(--accent-burgundy)] text-white font-semibold tracking-tight transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitState.status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      </div>
    </main>
  );
}
