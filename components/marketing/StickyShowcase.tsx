'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from '@/lib/gsap';
import type { ShowcaseItem } from '@/lib/marketing';

interface StickyShowcaseProps {
  items: ShowcaseItem[];
}

const contentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function StickyShowcase({ items }: StickyShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);


  const setCardRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      cardRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    // Direct per-frame check: which card's center is closest to viewport center?
    // Runs on GSAP ticker (synced with Lenis via SmoothScrollProvider),
    // reads live getBoundingClientRect — no cached trigger positions to desync.
    const viewportCenter = () => window.innerHeight / 2;

    const updateActiveCard = () => {
      let closest = 0;
      let closestDist = Infinity;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter());

        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });

      setActiveIndex((prev) => (prev !== closest ? closest : prev));
    };

    gsap.ticker.add(updateActiveCard);

    return () => {
      gsap.ticker.remove(updateActiveCard);
    };
  }, [items.length]);

  const active = items[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#242426]"
    >
      {/* Section header */}
      <div className="mb-14">
        <span className="text-xs font-mono font-extrabold tracking-widest text-[#F46C38] uppercase">
          Selected Projects
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFFFF] mt-2">
          WORK SHOWCASE
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left column — sticky info panel */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Category badge */}
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] bg-[#F46C38] px-3 py-1 rounded-full mb-5">
                  {active.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFFFF] mb-4 leading-tight">
                  {active.title}
                </h3>

                <p className="text-sm sm:text-base text-[#998F8F] leading-relaxed mb-6">
                  {active.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#151312] text-[#FFFFFF] border border-[#242426]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result stat */}
                <div className="pt-4 border-t border-[#242426]">
                  <span className="text-xs font-mono font-bold text-[#C5FF41] uppercase tracking-wider">
                    Result
                  </span>
                  <p className="text-sm font-semibold text-[#FFFFFF] mt-1">
                    {active.result}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right column — scrolling full-bleed media */}
        <div className="lg:col-span-7 flex flex-col gap-0">
          {items.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => setCardRef(el, i)}
              className="group relative overflow-hidden"
            >
              {/* Full-bleed media area */}
              <div className="relative w-full aspect-[16/10] bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F46C38]/5 via-transparent to-[#C5FF41]/5 pointer-events-none" />

                {/* Placeholder content (center) */}
                <span className="relative z-10 text-[9px] font-mono text-[#998F8F]/50 max-w-xs text-center px-6">
                  {item.image}
                </span>

                {/* Category tag — top-left overlay */}
                <span className="absolute top-4 left-4 z-20 text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] bg-[#F46C38] px-3 py-1 rounded-full">
                  {item.category}
                </span>

                {/* Caption overlay — bottom with gradient scrim */}
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-16 pb-5 px-5">
                  <h4 className="text-base font-bold text-[#FFFFFF] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-[#998F8F] mt-0.5">
                    {item.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
