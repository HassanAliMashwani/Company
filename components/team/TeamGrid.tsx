'use client';

import React from 'react';
import { Github, Linkedin, Flame, Globe } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/team';

export function TeamGrid() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#242426]">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <span className="text-xs font-mono font-extrabold tracking-widest text-[#F46C38] uppercase">
          Studio Roster
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFFFF] mt-2 mb-4">
          THE PEOPLE
        </h2>
        <p className="text-[#998F8F] text-base">
          A small team. Different disciplines. One standard of engineering and design excellence.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member, idx) => {
          const isOrangeAccent = idx % 2 === 0;
          const bgGradient = isOrangeAccent
            ? 'from-[#F46C38] to-[#d44c18]'
            : 'from-[#C5FF41] to-[#a2db1d]';

          // Interchanged stroke & badge colors for high contrast:
          // Orange portrait box gets Volt Lime Green dashed arc (#72a800)!
          // Green portrait box gets Vibrant Coral Orange dashed arc (#FF4500)!
          const strokeColor = isOrangeAccent ? '#72a800' : '#FF4500';
          const badgeBg = isOrangeAccent ? 'bg-[#C5FF41]' : 'bg-[#F46C38]';
          const badgeTextColor = isOrangeAccent ? 'text-[#000000]' : 'text-[#FFFFFF]';
          const accentIconColor = isOrangeAccent ? 'text-[#88be09]' : 'text-[#F46C38]';

          return (
            <div
              key={member.id}
              className="group relative bg-[#FFFFFF] text-[#000000] rounded-[32px] p-6 shadow-2xl border border-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F46C38]/20 flex flex-col justify-between overflow-hidden"
            >
              {/* 1. Top Arc (Interchanged colors: Green arc on Orange box, Orange arc on Green box) */}
              <svg className="absolute top-0 left-0 w-48 h-40 pointer-events-none z-20 overflow-visible drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <path
                  d="M 180,0 C 120,65 40,65 0,32"
                  stroke={strokeColor}
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  fill="none"
                />
              </svg>

              <div>
                {/* Clean Solid/Gradient Colored Portrait Box */}
                <div
                  className={`relative w-full aspect-[4/4.2] rounded-[24px] bg-gradient-to-b ${bgGradient} overflow-hidden shadow-inner mb-6`}
                />

                {/* Name */}
                <h3 className="text-2xl font-extrabold text-[#000000] tracking-tight text-center mb-4">
                  {member.name}
                </h3>

                {/* 2. Flame Badge Arc (Interchanged colors for high-contrast pop) */}
                <div className="relative my-4 flex justify-center items-center">
                  <svg className="absolute left-0 -top-8 w-[55%] h-24 pointer-events-none z-10 overflow-visible drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                    <path
                      d="M -24,72 C 15,72 75,72 135,20"
                      stroke={strokeColor}
                      strokeWidth="4"
                      strokeDasharray="6 6"
                      fill="none"
                    />
                  </svg>
                  <div
                    className={`relative z-20 w-9 h-9 rounded-full ${badgeBg} ${badgeTextColor} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}
                  >
                    <Flame className="w-5 h-5 fill-current" />
                  </div>
                </div>

                {/* Specialty / Bio Statement */}
                <p className="text-sm font-semibold text-zinc-600 text-center leading-relaxed max-w-[260px] mx-auto mb-4">
                  {member.specialty}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
                  {member.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Social Icons Row */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-center gap-5">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`${accentIconColor} hover:scale-110 transition-transform p-1`}
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`${accentIconColor} hover:scale-110 transition-transform p-1`}
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                <a
                  href="#contact"
                  className={`${accentIconColor} hover:scale-110 transition-transform p-1`}
                  aria-label={`${member.name} Contact`}
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
