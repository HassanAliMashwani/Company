'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const PROJECT_TYPES = ['Website', 'SaaS', 'Mobile App', 'AI / ML Integration', 'Other'];
const BUDGET_RANGES = [
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
  'Undisclosed / Flexible',
  'Custom Price',
];

export function ContactForm({ className = '' }: { className?: string }) {
  const [selectedType, setSelectedType] = useState<string>('SaaS');
  const [budget, setBudget] = useState<string>('$10,000 – $25,000');
  const [customBudget, setCustomBudget] = useState<string>('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [gmailComposeUrl, setGmailComposeUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const actualBudget = budget === 'Custom Price' ? (customBudget || 'Custom Scope / Negotiable') : budget;
    const subject = `Project Inquiry [${selectedType}]: ${formData.name}`;
    const body = `Hello Hadi,\n\nI would like to start a conversation regarding a new project with your studio.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCLIENT & PROJECT OVERVIEW\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n• Name: ${formData.name}\n• Contact Email: ${formData.email}\n• Project Type: ${selectedType}\n• Estimated Budget: ${actualBudget}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\nPROJECT DESCRIPTION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${formData.message || 'No additional notes provided.'}\n\nBest regards,\n${formData.name}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ksyedhadirazaa@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setGmailComposeUrl(gmailUrl);

    // Open Gmail compose directly in a new tab
    window.open(gmailUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#242426] ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Copy */}
        <div className="lg:col-span-5">
          <span className="text-xs font-mono font-extrabold tracking-widest text-[#F46C38] uppercase">
            Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFFFF] mt-2 mb-6">
            Have something worth building?
          </h2>
          <p className="text-[#998F8F] text-base leading-relaxed mb-8">
            Tell us about your project goals, timelines, and technical requirements. We read every message and respond within 24 hours.
          </p>

          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#242426]">
            <span className="text-xs font-mono text-[#998F8F] uppercase block mb-2 font-bold">
              Direct Client Outreach Email
            </span>
            <a
              href="mailto:ksyedhadirazaa@gmail.com"
              className="inline-flex items-center gap-3 text-base sm:text-lg font-bold text-[#F46C38] hover:text-[#C5FF41] transition-colors font-mono break-all"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span>ksyedhadirazaa@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right Column: Form Container */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1A1A1A] border border-[#242426] shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center"
              >
                <CheckCircle2 className="w-16 h-16 text-[#C5FF41] mb-4" />
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Ready to Send!</h3>
                <p className="text-[#998F8F] text-sm max-w-md mb-6">
                  Thank you, {formData.name}. We've prepared your email in Gmail. If your browser didn't open it automatically, click below:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {gmailComposeUrl && (
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full bg-[#F46C38] hover:bg-[#C5FF41] text-[#000000] text-xs font-mono uppercase font-bold transition-all shadow-lg"
                    >
                      Open Gmail Window
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setCustomBudget('');
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#242426] text-[#FFFFFF] hover:text-[#F46C38] text-xs font-mono uppercase font-bold transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#FFFFFF] uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#151312] border border-[#242426] text-[#FFFFFF] placeholder-[#998F8F]/60 focus:outline-none focus:border-[#F46C38] text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#FFFFFF] uppercase mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#151312] border border-[#242426] text-[#FFFFFF] placeholder-[#998F8F]/60 focus:outline-none focus:border-[#F46C38] text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type selector */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#FFFFFF] uppercase mb-2">
                    What are you looking to build?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                          selectedType === type
                            ? 'bg-[#F46C38] text-[#000000]'
                            : 'bg-[#151312] text-[#998F8F] hover:text-[#FFFFFF] border border-[#242426]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget selector */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#FFFFFF] uppercase mb-2">
                    Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#151312] border border-[#242426] text-[#FFFFFF] focus:outline-none focus:border-[#F46C38] text-sm font-mono transition-colors"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>

                  {/* Custom Price Input */}
                  {budget === 'Custom Price' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      className="mt-3"
                    >
                      <label className="block text-[11px] font-mono font-bold text-[#F46C38] uppercase mb-1.5">
                        Specify Custom Price / Budget *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm font-bold text-[#F46C38]">
                          $
                        </span>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 15,000 USD or Custom Scope"
                          value={customBudget}
                          onChange={(e) => setCustomBudget(e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl bg-[#151312] border border-[#F46C38]/60 text-[#FFFFFF] placeholder-[#998F8F]/60 focus:outline-none focus:border-[#F46C38] text-sm font-mono transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Message text area */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#FFFFFF] uppercase mb-2">
                    Tell us about the project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide a brief overview of your product goals, timeline, and key requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#151312] border border-[#242426] text-[#FFFFFF] placeholder-[#998F8F]/60 focus:outline-none focus:border-[#F46C38] text-sm transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#F46C38] hover:bg-[#C5FF41] text-[#000000] font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#F46C38]/20"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
