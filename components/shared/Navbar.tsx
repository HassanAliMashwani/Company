'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Work', href: '/work' },
  { name: 'Craft', href: '/#craft' },
  { name: 'Team', href: '/#team' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-2xl shadow-black/60' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3 focus:outline-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F46C38] to-[#C5FF41] p-[1.5px] transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-[#F46C38]/20">
              <div className="w-full h-full bg-[#151312] rounded-[10px] flex items-center justify-center">
                <span className="text-sm font-extrabold tracking-wider text-[#C5FF41] font-mono">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-[#FFFFFF] group-hover:text-[#F46C38] transition-colors">
                STUDIO<span className="text-[#C5FF41] font-mono">.DEV</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1A1A1A]/90 backdrop-blur-xl px-4 py-1.5 rounded-full border border-[#242426] shadow-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-[#998F8F] hover:text-[#FFFFFF] hover:bg-[#242426] rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full bg-[#F46C38] hover:bg-[#C5FF41] text-[#000000] transition-all duration-300 shadow-lg shadow-[#F46C38]/25 hover:scale-105"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#1A1A1A] border border-[#242426] text-[#FFFFFF] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#C5FF41]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden bg-[#151312]/98 backdrop-blur-2xl border-b border-[#242426] px-6 py-8 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-[#FFFFFF] hover:text-[#C5FF41] transition-colors py-2 border-b border-[#242426]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-wider py-3.5 rounded-xl bg-[#F46C38] text-[#000000] shadow-lg"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
