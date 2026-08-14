'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Sparkles } from 'lucide-react';
import { MANAGED_CLIENTS } from '@/lib/marketing';

export function MarketingSection({ className = '' }: { className?: string }) {
  return (
    <section
      id="marketing"
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#242426] ${className}`}
    >
      {/* 1. Header with Eyebrow, Title, Single Positioning Line, and Instagram CTA */}
      <div className="mb-14">
        <span className="text-xs font-mono font-extrabold tracking-widest text-[#F46C38] uppercase">
          Studio Marketing
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFFFF] mt-2 mb-4">
          MARKETING
        </h2>
        {/* Single Positioning Line (A single sentence on what this side of the studio does) */}
        <p className="text-lg sm:text-xl text-[#998F8F] max-w-3xl leading-relaxed">
          Marketing, brand presence, and social growth tailored for car showrooms and luxury real estate.
        </p>

        {/* 2. Instagram Account Link (Consistent with "Explore Full Case Study" CTA style) */}
        <div className="mt-6">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F46C38] hover:text-[#C5FF41] transition-colors group/link"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </div>
      </div>

      {/* 3. Main Grid: Client Roster List + Visual Showcase Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Managed Client Roster (Clean Numbered List Style) */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          {MANAGED_CLIENTS.map((client) => (
            <div
              key={client.id}
              className="group w-full p-5 rounded-2xl bg-[#1A1A1A] border border-[#242426] hover:border-[#F46C38]/50 transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs font-bold text-[#F46C38]">
                  {client.number}
                </span>
                <span className="text-lg font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#F46C38] transition-colors">
                  {client.name}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#C5FF41] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          ))}
        </div>

        {/* Visual Showcase Stage (Disciplined placeholder layout matching ProjectVisualStage) */}
        <div className="lg:col-span-6 p-8 rounded-2xl bg-[#1A1A1A] border border-[#242426] shadow-2xl min-h-[440px] flex flex-col justify-between relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F46C38]/10 via-transparent to-[#C5FF41]/10 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between border-b border-[#242426] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[#F46C38] uppercase font-bold block">
                  Studio Channel
                </span>
                <h3 className="text-2xl font-bold text-[#FFFFFF] mt-1">
                  Social & Visual Presence
                </h3>
              </div>
              <span className="font-mono text-xs text-[#000000] font-bold bg-[#C5FF41] px-3 py-1 rounded-full flex items-center gap-1.5">
                <Instagram className="w-3 h-3" />
                <span>Instagram</span>
              </span>
            </div>

            {/* Instagram Mock Canvas */}
            <div className="relative w-full aspect-[16/10] bg-[#151312] rounded-xl border border-[#242426] p-4 flex flex-col items-center justify-center text-center overflow-hidden mb-6">
              <span className="text-[10px] font-mono font-bold text-[#FFFFFF] bg-[#1A1A1A] border border-[#242426] px-3 py-1 rounded-md mb-2 shadow">
                Instagram Roster Feed
              </span>
              <span className="text-[9px] font-mono text-[#998F8F] max-w-sm">
                [[PLACEHOLDER: Studio Instagram feed showing automotive showrooms and luxury real estate campaigns]]
              </span>
            </div>

            {/* Managed Media Placement Placeholder */}
            <div className="p-3.5 rounded-xl bg-[#151312] border border-[#242426] flex items-center justify-between">
              <span className="text-xs font-mono text-[#FFFFFF]">
                [[PLACEHOLDER: Client media showcase grid]]
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#998F8F]" />
            </div>
          </div>

          {/* Micro Chips Layer */}
          <div className="relative z-10 flex flex-wrap items-center gap-1.5 pt-6 border-t border-[#242426]">
            <span className="text-[9px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#151312] text-[#FFFFFF] border border-[#242426] shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#F46C38]" />
              <span>[[PLACEHOLDER: Car Showrooms]]</span>
            </span>
            <span className="text-[9px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#151312] text-[#FFFFFF] border border-[#242426] shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#C5FF41]" />
              <span>[[PLACEHOLDER: Real Estate]]</span>
            </span>
            <span className="text-[9px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#151312] text-[#FFFFFF] border border-[#242426] shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#F46C38]" />
              <span>[[PLACEHOLDER: Growth Direction]]</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
