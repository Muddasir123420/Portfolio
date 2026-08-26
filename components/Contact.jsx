'use client';
import { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'name') {
      // Allow only letters and spaces (no numbers or special symbols)
      const cleaned = value.replace(/[^a-zA-Z\s]/g, '');
      setForm((prev) => ({ ...prev, name: cleaned }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill all required fields.');
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent — thanks!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch {
      setStatus('Network error.');
    }
  }

  const socials = [
    { href: 'https://www.linkedin.com/in/muhammad-muddasir-khan-661178429/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { href: 'https://github.com/Muddasir123420', icon: <FaGithub />, label: 'GitHub' },
    { href: 'mailto:muhammadmuddasirkhan7@gmail.com?subject=Portfolio%20Inquiry', icon: <FaEnvelope />, label: 'Email' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#0B1120] text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto bg-[#0d162d]/90 border border-[#1e2f59] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white tracking-wide">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:muhammadmuddasirkhan7@gmail.com?subject=Portfolio%20Inquiry"
                  className="flex items-center gap-4 text-slate-200 group hover:text-[#38bdf8] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1d2d54] text-[#38bdf8] flex items-center justify-center shrink-0 text-lg shadow-inner group-hover:scale-105 transition-transform">
                    <FaEnvelope />
                  </div>
                  <span className="text-sm sm:text-base font-medium">
                    muhammadmuddasirkhan7@gmail.com
                  </span>
                </a>

                {/* Phone / WhatsApp */}
                <div className="flex items-center gap-4 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#1d2d54] text-[#25D366] flex items-center justify-center shrink-0 text-lg shadow-inner">
                    <FaWhatsapp />
                  </div>
                  <a
                    href="https://wa.me/923125275062"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#25D366] transition-colors text-sm sm:text-base font-medium"
                  >
                    +92 3125275062
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#1d2d54] text-[#38bdf8] flex items-center justify-center shrink-0 text-lg shadow-inner">
                    <FaMapMarkerAlt />
                  </div>
                  <span className="text-sm sm:text-base font-medium">
                    I-14, Islamabad
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-11 h-11 rounded-full bg-[#182647]/70 border border-[#253966] text-white hover:text-[#0b1120] hover:bg-[#38bdf8] hover:border-[#38bdf8] flex items-center justify-center text-lg transition-all duration-300 shadow-md"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - 3 Fields Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-2xl bg-[#0c1630]/90 border border-[#1b2b52] text-white placeholder-slate-400 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-5 py-4 rounded-2xl bg-[#0c1630]/90 border border-[#1b2b52] text-white placeholder-slate-400 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full px-5 py-4 rounded-2xl bg-[#0c1630]/90 border border-[#1b2b52] text-white placeholder-slate-400 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl bg-[#38bdf8] text-[#0f172a] font-bold flex items-center gap-2.5 hover:bg-[#7dd3fc] hover:shadow-[0_0_25px_#38bdf880] transition-all duration-300 text-sm sm:text-base cursor-pointer"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>

              {status && (
                <p className="text-sm text-[#38bdf8] font-medium pt-2">{status}</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
