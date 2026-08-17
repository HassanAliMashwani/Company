'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion-variants';
import { Magnetic } from '@/components/shared/Magnetic';

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-full bg-[#F46C38]/10 border border-[#F46C38]/30 animate-pulse-subtle" />
  ),
});

interface HeroProps {
  headline?: React.ReactNode;
  tagline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({
  headline,
  tagline = 'Design · Engineering · AI · Interaction',
  primaryCta = { label: 'View Our Work', href: '/work' },
  secondaryCta = { label: 'Start a Project', href: '/contact' },
}: HeroProps) {
  const defaultHeadline = (
    <>
      WE TURN IDEAS INTO{' '}
      <span className="accent-gradient-text">PRODUCTS PEOPLE ACTUALLY WANT TO USE.</span>
    </>
  );

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
            {headline ?? defaultHeadline}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#998F8F] font-mono tracking-tight mb-8">
            {tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Magnetic padding={30}>
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#F46C38] hover:bg-[#C5FF41] text-[#000000] font-extrabold text-sm transition-all duration-300 shadow-xl shadow-[#F46C38]/30 hover:scale-105"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Magnetic padding={30}>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#1A1A1A] hover:bg-[#242426] text-[#FFFFFF] border border-[#242426] hover:border-[#F46C38] text-sm font-bold transition-all duration-200 shadow-lg"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Column: Centered 3D Canvas */}
        <div className="lg:col-span-5 relative w-full aspect-square max-w-[420px] lg:max-w-none mx-auto flex items-center justify-center z-0">
          <Hero3D />
        </div>
      </div>


    </section>
  );
}
