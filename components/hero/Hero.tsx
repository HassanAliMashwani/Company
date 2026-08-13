'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion-variants';

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-full bg-[#F46C38]/10 border border-[#F46C38]/30 animate-pulse-subtle" />
  ),
});

const HERO_PROJECT_THUMBNAILS = [
  {
    name: 'Grabify',
    tag: 'Location SaaS',
    slug: 'grabify',
    placeholder: '[[PLACEHOLDER: Grabify map UI screenshot]]',
  },
  {
    name: 'AI Resume Analyzer',
    tag: 'AI / NLP',
    slug: 'resume-analyzer',
    placeholder: '[[PLACEHOLDER: Resume scoring screen preview]]',
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden">
      {/* 2-Column Grid for Text & 3D Element */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto pt-6">
        {/* Left Column: Headline & Action Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 relative z-10"
        >
         

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.08] mb-6">
            WE TURN IDEAS INTO{' '}
            <span className="accent-gradient-text">PRODUCTS PEOPLE ACTUALLY WANT TO USE.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#998F8F] font-mono tracking-tight mb-8">
            Design · Engineering · AI · Interaction
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#F46C38] hover:bg-[#C5FF41] text-[#000000] font-extrabold text-sm transition-all duration-300 shadow-xl shadow-[#F46C38]/30 hover:scale-105"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#1A1A1A] hover:bg-[#242426] text-[#FFFFFF] border border-[#242426] hover:border-[#F46C38] text-sm font-bold transition-all duration-200 shadow-lg"
            >
              <span>Start a Project</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Centered 3D Canvas */}
        <div className="lg:col-span-5 relative w-full aspect-square max-w-[420px] lg:max-w-none mx-auto flex items-center justify-center z-0">
          <Hero3D />
        </div>
      </div>

      {/* Project Thumbnails & Stat Strip */}
      <div className="relative z-10 mt-12 pt-8 border-t border-[#242426] flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        {/* Real Project Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
          {HERO_PROJECT_THUMBNAILS.map((thumb) => (
            <motion.div
              key={thumb.slug}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/work/${thumb.slug}`}
                className="group block p-4 rounded-2xl bg-[#1A1A1A] border border-[#242426] hover:border-[#F46C38]/60 transition-colors w-full sm:w-64 shadow-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#FFFFFF] group-hover:text-[#F46C38] transition-colors">
                    {thumb.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#C5FF41] bg-[#C5FF41]/10 px-2 py-0.5 rounded-md border border-[#C5FF41]/30">
                    {thumb.tag}
                  </span>
                </div>
                <div className="h-20 rounded-xl bg-[#151312] border border-[#242426] flex items-center justify-center p-2 text-center">
                  <span className="text-[10px] font-mono text-[#998F8F]">
                    {thumb.placeholder}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Real Stat Strip */}
        <div className="flex flex-wrap items-center gap-8 font-mono text-xs text-[#998F8F]">
          <div>
            <span className="block text-3xl font-extrabold text-[#F46C38] font-sans">06</span>
            <span>Shipped Projects</span>
          </div>
          <div className="h-8 w-px bg-[#242426] hidden sm:block" />
          <div>
            <span className="block text-3xl font-extrabold text-[#C5FF41] font-sans">05-6</span>
            <span>Senior Engineers</span>
          </div>
          <div className="h-8 w-px bg-[#242426] hidden sm:block" />
          <div>
            <span className="block text-3xl font-extrabold text-[#FFFFFF] font-sans">2024—26</span>
            <span>Active Years</span>
          </div>
        </div>
      </div>
    </section>
  );
}
