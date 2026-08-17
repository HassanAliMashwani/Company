import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090b] border-t border-zinc-800/80 py-12 md:py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-zinc-900">
          <div>
            <Link href="/" className="group inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
              <div className="w-7 h-7 relative flex items-center justify-center">
                <Image
                  src="/94e6de8e-7e88-49dc-8aa0-b62d06ce6c48.png"
                  alt="AXIORA Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold tracking-tight">AXIORA</span>
            </Link>
            <p className="mt-1 text-sm text-[#998F8F]">
              Digital products · Design · Engineering · Proximity Systems
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-300">
            <Link href="/work" className="hover:text-[#F46C38] transition-colors">
              Work
            </Link>
            <Link href="/craft" className="hover:text-[#F46C38] transition-colors">
              Craft
            </Link>
            <Link href="/marketing" className="hover:text-[#F46C38] transition-colors">
              Marketing
            </Link>
            <Link href="/team" className="hover:text-[#F46C38] transition-colors">
              Team
            </Link>
            <Link href="/contact" className="hover:text-[#F46C38] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} AXIORA — All rights reserved.</p>
          <p>Built with Next.js 14, GSAP & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
