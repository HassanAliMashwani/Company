'use client';

import React from 'react';

interface LogoMarqueeProps {
  logos: string[];
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  // Duplicate the array for seamless infinite loop
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 border-t border-[#242426] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <span className="text-xs font-mono font-extrabold tracking-widest text-[#998F8F] uppercase">
          Trusted by
        </span>
      </div>

      <div className="group relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#151312] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#151312] to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-16 w-max animate-marquee group-hover:[animation-play-state:paused]"
        >
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-lg sm:text-xl font-mono font-extrabold tracking-tight text-[#998F8F]/60 whitespace-nowrap select-none transition-colors duration-300 hover:text-[#FFFFFF]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
