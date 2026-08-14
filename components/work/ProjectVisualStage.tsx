'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Sparkles, Award } from 'lucide-react';
import { Project } from '@/lib/projects';
import { gsap } from '@/lib/gsap';

type ProjectVisualStageProps = {
  project: Project;
  isHovered?: boolean;
};

export function ProjectVisualStage({ project, isHovered = false }: ProjectVisualStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopFrameRef = useRef<HTMLDivElement>(null);
  const mobileFrameRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) return;

    const element = containerRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
        .fromTo(
          desktopFrameRef.current,
          { scale: 0.97, opacity: 0.9 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          mobileFrameRef.current,
          { x: 16, opacity: 0.8 },
          { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#151312] p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#242426]"
    >
      {/* Layer 2: Ambient Glow Layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${
          project.tier === 'major'
            ? 'from-[#F46C38]/15 via-transparent to-[#C5FF41]/10'
            : 'from-[#C5FF41]/10 via-transparent to-[#0000EE]/10'
        } transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`}
      />

      {/* Layer 5: Top Badge Strip */}
      <div className="relative z-20 flex items-center justify-between gap-4 mb-4">
        <span
          className={`text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border shadow-sm ${
            project.tier === 'major'
              ? 'bg-[#C5FF41] text-[#000000] border-[#C5FF41]'
              : 'bg-[#F46C38] text-[#000000] border-[#F46C38]'
          }`}
        >
          {project.tier} case study
        </span>

        {project.outcome && (
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#C5FF41] bg-[#1A1A1A] border border-[#242426] px-2.5 py-0.5 rounded-md">
            <Award className="w-3 h-3 text-[#F46C38]" />
            <span className="truncate max-w-[200px]">{project.outcome}</span>
          </span>
        )}
      </div>

      {/* Layer 3: Device Stack Layer */}
      <div className="relative z-10 w-full my-auto flex items-center justify-center py-4">
        {/* Desktop Mockup Frame (Back) */}
        <div
          ref={desktopFrameRef}
          className="relative w-full max-w-[480px] aspect-[16/10] bg-[#1A1A1A] rounded-xl border border-[#242426] shadow-2xl overflow-hidden flex flex-col transition-transform duration-300"
        >
          {/* Desktop Window Topbar */}
          <div className="h-6 bg-[#151312] border-b border-[#242426] px-3 flex items-center justify-between text-[10px] font-mono text-[#998F8F]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF2600]/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1 opacity-70">
              <Monitor className="w-3 h-3 text-[#F46C38]" />
              <span className="truncate max-w-[140px]">{project.slug}.axiora.dev</span>
            </div>
          </div>

          {/* Desktop Screenshot Canvas */}
          <div className="flex-1 bg-[#0b0914] p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F46C38]/5 via-transparent to-transparent pointer-events-none" />
            <span className="text-[10px] font-mono font-bold text-[#FFFFFF] bg-[#1A1A1A] border border-[#242426] px-3 py-1 rounded-md mb-1 shadow">
              {project.name} Desktop View
            </span>
            <span className="text-[9px] font-mono text-[#998F8F] max-w-xs">
              {project.desktopImage}
            </span>
          </div>
        </div>

        {/* Mobile Mockup Frame (Front, Offset Right) */}
        <motion.div
          ref={mobileFrameRef}
          animate={{ x: isHovered && !reducedMotion ? -4 : 0, y: isHovered && !reducedMotion ? -4 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute -right-2 sm:right-2 -bottom-2 w-[110px] sm:w-[135px] aspect-[9/18] bg-[#1A1A1A] rounded-2xl border-2 border-[#242426] shadow-2xl overflow-hidden flex flex-col z-20"
        >
          {/* Mobile Notch */}
          <div className="h-4 bg-[#151312] border-b border-[#242426] flex items-center justify-center">
            <div className="w-8 h-1 rounded-full bg-[#242426]" />
          </div>

          {/* Mobile Screenshot Canvas */}
          <div className="flex-1 bg-[#0b0914] p-2 flex flex-col items-center justify-center text-center relative">
            <Smartphone className="w-4 h-4 text-[#C5FF41] mb-1" />
            <span className="text-[8px] font-mono text-[#998F8F] leading-tight">
              {project.mobileImage}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Layer 4: Micro Info Chips Layer */}
      <div className="relative z-20 flex flex-wrap items-center gap-1.5 pt-2">
        {project.visualLabels.map((label) => (
          <span
            key={label}
            className="text-[9px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#1A1A1A]/90 text-[#FFFFFF] border border-[#242426] shadow-sm flex items-center gap-1"
          >
            <Sparkles className="w-2.5 h-2.5 text-[#F46C38]" />
            <span>{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
