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
          { scale: 0.98, opacity: 0.9 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          mobileFrameRef.current,
          { x: 12, opacity: 0.8 },
          { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const isRealImage =
    Boolean(project.desktopImage) &&
    (project.desktopImage.startsWith('/') || project.desktopImage.startsWith('http'));

  const isRealMobileImage =
    Boolean(project.mobileImage) &&
    Boolean(project.mobileImage?.startsWith('/') || project.mobileImage?.startsWith('http'));

  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\.git$/, '').replace(/\/$/, '')
    : `${project.slug}.axiora.dev`;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#151312] p-4 sm:p-5 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#242426] min-w-0"
    >
      {/* Ambient Glow Layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${
          project.tier === 'major'
            ? 'from-[#F46C38]/15 via-transparent to-[#C5FF41]/10'
            : 'from-[#C5FF41]/10 via-transparent to-[#0000EE]/10'
        } transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-40'}`}
      />

      {/* Top Badge Strip */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 mb-3 min-w-0">
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
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#C5FF41] bg-[#1A1A1A] border border-[#242426] px-2.5 py-0.5 rounded-md max-w-[240px]">
            <Award className="w-3 h-3 text-[#F46C38] flex-shrink-0" />
            <span className="truncate">{project.outcome}</span>
          </span>
        )}
      </div>

      {/* Main Showcase Stage (Desktop Webview with optional Mobile Device Showcase) */}
      <div className="relative z-10 w-full flex items-center justify-center my-1 min-w-0">
        {/* Desktop Webview Frame */}
        <div
          ref={desktopFrameRef}
          className="relative w-full bg-[#1A1A1A] rounded-xl border border-[#242426] shadow-2xl overflow-hidden flex flex-col transition-all duration-300 group-hover:border-[#F46C38]/40 min-w-0"
        >
          {/* Browser Window Topbar */}
          <div className="h-7 bg-[#121110] border-b border-[#242426] px-3.5 flex items-center justify-between text-[11px] font-mono text-[#998F8F] shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF2600]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#181716] border border-[#242426] text-[10px] opacity-85 text-zinc-300">
              <Monitor className="w-3 h-3 text-[#F46C38]" />
              <span className="truncate max-w-[180px] sm:max-w-[260px]">{displayUrl}</span>
            </div>
            <div className="w-6" />
          </div>

          {/* Browser Viewport Canvas (Displays Full Image Without Cropping) */}
          {isRealImage ? (
            <div className="relative w-full bg-[#0a0a0c] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.desktopImage}
                alt={`${project.name} Full Web View`}
                className="w-full h-auto block object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full aspect-[16/9] bg-[#0b0914] p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#F46C38]/5 via-transparent to-transparent pointer-events-none" />
              <span className="text-[10px] font-mono font-bold text-[#FFFFFF] bg-[#1A1A1A] border border-[#242426] px-3 py-1 rounded-md mb-1 shadow">
                {project.name} Desktop View
              </span>
              <span className="text-[9px] font-mono text-[#998F8F] max-w-xs">
                {project.desktopImage}
              </span>
            </div>
          )}
        </div>

        {/* Mobile Device Frame (Offset Front Right - Rendered when real mobile screenshot exists) */}
        {isRealMobileImage && project.mobileImage && (
          <motion.div
            ref={mobileFrameRef}
            animate={{
              x: isHovered && !reducedMotion ? -3 : 0,
              y: isHovered && !reducedMotion ? -3 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute -right-2 sm:-right-1 -bottom-2 w-[88px] sm:w-[110px] aspect-[9/18.5] bg-[#121110] rounded-2xl border-2 border-[#242426] shadow-2xl overflow-hidden flex flex-col z-20 pointer-events-none group-hover:border-[#F46C38]/60 transition-colors"
          >
            {/* Mobile Notch */}
            <div className="h-3.5 bg-[#121110] border-b border-[#242426]/60 flex items-center justify-center shrink-0 z-10">
              <div className="w-6 h-1 rounded-full bg-[#242426]" />
            </div>

            {/* Mobile Screen */}
            <div className="flex-1 relative w-full h-full bg-[#0a0a0c] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.mobileImage}
                alt={`${project.name} Mobile Preview`}
                className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Micro Info Chips Layer */}
      <div className="relative z-20 flex flex-wrap items-center gap-1.5 pt-3 min-w-0">
        {project.visualLabels.map((label) => (
          <span
            key={label}
            className="text-[9px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#1A1A1A]/90 text-[#FFFFFF] border border-[#242426] shadow-sm flex items-center gap-1"
          >
            <Sparkles className="w-2.5 h-2.5 text-[#F46C38] flex-shrink-0" />
            <span>{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
