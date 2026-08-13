import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090b] border-t border-zinc-800/80 py-12 md:py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-zinc-900">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight text-white font-mono">
              STUDIO<span className="text-cyan-400">.DEV</span>
            </Link>
            <p className="mt-1 text-sm text-zinc-400">
              Digital products · Design · Engineering · Proximity Systems
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-300">
            <Link href="/work" className="hover:text-cyan-400 transition-colors">
              Work
            </Link>
            <Link href="/#craft" className="hover:text-cyan-400 transition-colors">
              Craft
            </Link>
            <Link href="/#team" className="hover:text-cyan-400 transition-colors">
              Team
            </Link>
            <Link href="/#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} STUDIO.DEV — All rights reserved.</p>
          <p>Built with Next.js 14, GSAP & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
