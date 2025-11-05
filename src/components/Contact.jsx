import React, { useMemo, useState } from 'react';
import { Mail, Send } from 'lucide-react';

const encode = (str) => encodeURIComponent(str).replace(/%20/g, '+');

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const mailtoHref = useMemo(() => {
    const to = 'vickey.dev@example.com';
    const subject = encode(`Portfolio contact from ${name || 'Someone'}`);
    const body = encode(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    // Trigger mail client
    window.location.href = mailtoHref;
    setStatus('Opening your email client…');
  };

  return (
    <section id="contact" className="w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Get in touch</h2>
          <p className="mt-2 text-slate-400">
            Have a project in mind or just want to say hello? I’d love to hear from you.
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-slate-500"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-slate-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm text-slate-300">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              placeholder="How can I help?"
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-slate-500"
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <a
              href="mailto:vickey.dev@example.com"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <Mail className="h-4 w-4" /> vickey.dev@example.com
            </a>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
          </div>

          {status && (
            <p className="mt-4 text-sm text-sky-300">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
