'use client';

import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

// ── Copy constants (edit here, not in JSX) ─────────────────────────

const FLOW_STEPS = [
  { number: '01', text: 'Your web team ships a great site.' },
  { number: '02', text: "Your social team posts whatever's trending." },
  { number: '03', text: 'Nobody agrees on what the brand actually is.' },
  { number: '04', text: "You're paying three teams to quietly undo each other's work." },
];

// ── Precise SVG Path Coordinates (viewBox 0 0 1000 780) ────────────
// Stage height: 780px.
// Box 01 (Left):   left 0%,  top 0px,   w 42% -> Exit at (420, 50)
// Box 02 (Right):  left 58%, top 210px, w 42% -> Lands at (730, 205), Exit at (580, 260)
// Box 03 (Left):   left 0%,  top 420px, w 42% -> Lands at (250, 415), Exit at (420, 470)
// Box 04 (Right):  left 58%, top 630px, w 42% -> Lands at (730, 625)

const SVG_PATHS = {
  // Arrow 1: Box 01 right (420, 50) -> curves down to Box 02 top (730, 205)
  a: 'M 420 50 C 560 50, 730 90, 730 200',
  // Arrow 2: Box 02 left (580, 260) -> curves down to Box 03 top (250, 415)
  b: 'M 580 260 C 440 260, 250 300, 250 410',
  // Arrow 3: Box 03 right (420, 470) -> curves down to Box 04 top (730, 625)
  c: 'M 420 470 C 560 470, 730 510, 730 620',
};

export function WhyItsBroken() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageWrapperRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const arrowHeadRefs = useRef<(SVGPolygonElement | null)[]>([]);
  const arrowGroupRefs = useRef<(SVGGElement | null)[]>([]);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!ScrollTrigger || !sectionRef.current) return;
    const section = sectionRef.current;

    // ── Initial State: Hide everything completely ──────────────────
    boxRefs.current.forEach((box) => {
      if (box) gsap.set(box, { autoAlpha: 0, y: 24, scale: 0.96 });
    });
    arrowGroupRefs.current.forEach((group) => {
      if (group) gsap.set(group, { autoAlpha: 0 });
    });
    arrowHeadRefs.current.forEach((head) => {
      if (head) gsap.set(head, { autoAlpha: 0, scale: 0.2, transformOrigin: '50% 50%' });
    });
    pathRefs.current.forEach((path) => {
      if (path) {
        try {
          const len = typeof path.getTotalLength === 'function' ? path.getTotalLength() : 450;
          gsap.set(path, { strokeDasharray: len || 450, strokeDashoffset: len || 450 });
        } catch {
          gsap.set(path, { strokeDasharray: 450, strokeDashoffset: 450 });
        }
      }
    });
    if (stageWrapperRef.current) {
      gsap.set(stageWrapperRef.current, { y: 0 });
    }

    const rafId = requestAnimationFrame(() => {
      if (!section) return;
      if (ScrollTrigger && typeof ScrollTrigger.refresh === 'function') {
        ScrollTrigger.refresh();
      }

      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: isDesktop ? 'top top' : 'top 70%',
            end: isDesktop ? '+=1500' : 'bottom 30%',
            pin: isDesktop,
            pinSpacing: true,
            scrub: 0.6,
          },
        });

        // ═════════════════════════════════════════════════════════════
        // PURE 1-BY-1 SEQUENCE WITH VIEWPORT PAN:
        // [Box 1] -> [Arrow 1] -> [Box 2] -> [Arrow 2] -> [Box 3]
        //           ──> [CAMERA SHIFTS UP + Arrow 3] ──> [Box 4]
        // ═════════════════════════════════════════════════════════════

        // STEP 1: Box 01 appears (0.00 -> 0.10)
        if (boxRefs.current[0]) {
          tl.to(boxRefs.current[0], { autoAlpha: 1, y: 0, scale: 1, duration: 0.10 }, 0.0);
        }

        // STEP 2: Arrow 1 draws from Box 01 to Box 02 (0.14 -> 0.28)
        if (arrowGroupRefs.current[0]) {
          tl.to(arrowGroupRefs.current[0], { autoAlpha: 1, duration: 0.02 }, 0.14);
        }
        if (pathRefs.current[0]) {
          tl.to(pathRefs.current[0], { strokeDashoffset: 0, duration: 0.14, ease: 'none' }, 0.14);
        }
        if (arrowHeadRefs.current[0]) {
          tl.to(arrowHeadRefs.current[0], { autoAlpha: 1, scale: 1, duration: 0.03 }, 0.27);
        }

        // STEP 3: Box 02 appears (0.30 -> 0.40)
        if (boxRefs.current[1]) {
          tl.to(boxRefs.current[1], { autoAlpha: 1, y: 0, scale: 1, duration: 0.10 }, 0.30);
        }

        // STEP 4: Arrow 2 draws from Box 02 to Box 03 (0.44 -> 0.58)
        if (arrowGroupRefs.current[1]) {
          tl.to(arrowGroupRefs.current[1], { autoAlpha: 1, duration: 0.02 }, 0.44);
        }
        if (pathRefs.current[1]) {
          tl.to(pathRefs.current[1], { strokeDashoffset: 0, duration: 0.14, ease: 'none' }, 0.44);
        }
        if (arrowHeadRefs.current[1]) {
          tl.to(arrowHeadRefs.current[1], { autoAlpha: 1, scale: 1, duration: 0.03 }, 0.57);
        }

        // STEP 5: Box 03 appears (0.60 -> 0.70)
        if (boxRefs.current[2]) {
          tl.to(boxRefs.current[2], { autoAlpha: 1, y: 0, scale: 1, duration: 0.10 }, 0.60);
        }

        // STEP 6: Camera shifts up + Arrow 3 draws (0.72 -> 0.88)
        if (isDesktop && stageWrapperRef.current) {
          tl.to(stageWrapperRef.current, { y: -260, duration: 0.18, ease: 'power1.inOut' }, 0.72);
        }
        if (boxRefs.current[0]) {
          tl.to(boxRefs.current[0], { opacity: 0.2, duration: 0.14 }, 0.72);
        }
        if (arrowGroupRefs.current[2]) {
          tl.to(arrowGroupRefs.current[2], { autoAlpha: 1, duration: 0.02 }, 0.74);
        }
        if (pathRefs.current[2]) {
          tl.to(pathRefs.current[2], { strokeDashoffset: 0, duration: 0.14, ease: 'none' }, 0.74);
        }
        if (arrowHeadRefs.current[2]) {
          tl.to(arrowHeadRefs.current[2], { autoAlpha: 1, scale: 1, duration: 0.03 }, 0.87);
        }

        // STEP 7: Box 04 appears in center view (0.90 -> 1.00)
        if (boxRefs.current[3]) {
          tl.to(boxRefs.current[3], { autoAlpha: 1, y: 0, scale: 1, duration: 0.10 }, 0.90);
        }
      }, section);

      (section as any).__gsapCtx = ctx;
    });

    return () => {
      cancelAnimationFrame(rafId);
      const ctx = (section as any)?.__gsapCtx;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#242426] relative z-20 overflow-hidden"
    >
      {/* ── Section header ────────────────────────────────────────── */}
      <div className="mb-4 shrink-0">
        <span className="text-xs font-mono font-extrabold tracking-widest text-[#F46C38] uppercase">
          The Problem
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] mt-1">
          WHY IT&apos;S BROKEN
        </h2>
      </div>

      {/* ── Flow diagram stage wrapped in camera pan container ────── */}
      <div ref={stageWrapperRef} className="relative w-full">
        <div className="relative flex flex-col gap-6 lg:gap-0 lg:h-[780px] w-full">
          {/* Desktop SVG: perfectly aligned curves and landing arrowheads */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 780"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Glow Filter */}
              <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ── Connector 1: Box 01 -> Box 02 ─────────────────────── */}
            <g ref={(el) => { arrowGroupRefs.current[0] = el; }}>
              <path
                ref={(el) => { pathRefs.current[0] = el; }}
                d={SVG_PATHS.a}
                stroke="#F46C38"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#glow-orange)"
              />
              {/* Arrowhead landing into Box 02 top */}
              <polygon
                ref={(el) => { arrowHeadRefs.current[0] = el; }}
                points="722,192 738,192 730,206"
                fill="#F46C38"
              />
            </g>

            {/* ── Connector 2: Box 02 -> Box 03 ─────────────────────── */}
            <g ref={(el) => { arrowGroupRefs.current[1] = el; }}>
              <path
                ref={(el) => { pathRefs.current[1] = el; }}
                d={SVG_PATHS.b}
                stroke="#F46C38"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#glow-orange)"
              />
              {/* Arrowhead landing into Box 03 top */}
              <polygon
                ref={(el) => { arrowHeadRefs.current[1] = el; }}
                points="242,402 258,402 250,416"
                fill="#F46C38"
              />
            </g>

            {/* ── Connector 3: Box 03 -> Box 04 ─────────────────────── */}
            <g ref={(el) => { arrowGroupRefs.current[2] = el; }}>
              <path
                ref={(el) => { pathRefs.current[2] = el; }}
                d={SVG_PATHS.c}
                stroke="#F46C38"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#glow-orange)"
              />
              {/* Arrowhead landing into Box 04 top */}
              <polygon
                ref={(el) => { arrowHeadRefs.current[2] = el; }}
                points="722,612 738,612 730,626"
                fill="#F46C38"
              />
            </g>
          </svg>

          {/* ── Box 01 (Left, Top: 0px) ──────────────────────────────── */}
          <div
            ref={(el) => { boxRefs.current[0] = el; }}
            className="lg:absolute lg:left-[0%] lg:top-[0px] lg:w-[42%] border border-[#242426] hover:border-[#F46C38]/40 rounded-xl p-6 bg-[#1A1A1A]/95 backdrop-blur-md transition-colors duration-300 shadow-xl"
          >
            <span className="text-[10px] font-mono text-[#F46C38] font-bold tracking-widest">
              {FLOW_STEPS[0].number}
            </span>
            <p className="text-base font-semibold text-[#FFFFFF] mt-2 leading-relaxed">
              {FLOW_STEPS[0].text}
            </p>
          </div>

          {/* Mobile connector */}
          <div className="flex justify-center py-2 lg:hidden">
            <div className="w-px h-8 bg-gradient-to-b from-[#F46C38] to-[#F46C38]/20" />
          </div>

          {/* ── Box 02 (Right, Top: 210px) ───────────────────────────── */}
          <div
            ref={(el) => { boxRefs.current[1] = el; }}
            className="lg:absolute lg:left-[58%] lg:top-[210px] lg:w-[42%] border border-[#242426] hover:border-[#F46C38]/40 rounded-xl p-6 bg-[#1A1A1A]/95 backdrop-blur-md transition-colors duration-300 shadow-xl"
          >
            <span className="text-[10px] font-mono text-[#F46C38] font-bold tracking-widest">
              {FLOW_STEPS[1].number}
            </span>
            <p className="text-base font-semibold text-[#FFFFFF] mt-2 leading-relaxed">
              {FLOW_STEPS[1].text}
            </p>
          </div>

          {/* Mobile connector */}
          <div className="flex justify-center py-2 lg:hidden">
            <div className="w-px h-8 bg-gradient-to-b from-[#F46C38] to-[#F46C38]/20" />
          </div>

          {/* ── Box 03 (Left, Top: 420px) ────────────────────────────── */}
          <div
            ref={(el) => { boxRefs.current[2] = el; }}
            className="lg:absolute lg:left-[0%] lg:top-[420px] lg:w-[42%] border border-[#F46C38]/40 hover:border-[#F46C38]/80 rounded-xl p-6 bg-[#1A1A1A]/95 backdrop-blur-md transition-colors duration-300 shadow-2xl shadow-[#F46C38]/10"
          >
            <span className="text-[10px] font-mono text-[#F46C38] font-bold tracking-widest">
              {FLOW_STEPS[2].number}
            </span>
            <p className="text-lg font-bold text-[#FFFFFF] mt-2 leading-relaxed">
              {FLOW_STEPS[2].text}
            </p>
          </div>

          {/* Mobile connector */}
          <div className="flex justify-center py-2 lg:hidden">
            <div className="w-px h-8 bg-gradient-to-b from-[#F46C38] to-[#F46C38]/20" />
          </div>

          {/* ── Box 04 (Right, Top: 630px) ───────────────────────────── */}
          <div
            ref={(el) => { boxRefs.current[3] = el; }}
            className="lg:absolute lg:left-[58%] lg:top-[630px] lg:w-[42%] border border-[#F46C38]/50 hover:border-[#F46C38] rounded-xl p-6 bg-[#1A1A1A]/95 backdrop-blur-md transition-colors duration-300 shadow-2xl shadow-[#F46C38]/15"
          >
            <span className="text-[10px] font-mono text-[#F46C38] font-bold tracking-widest">
              {FLOW_STEPS[3].number}
            </span>
            <p className="text-lg font-bold text-[#FFFFFF] mt-2 leading-relaxed">
              {FLOW_STEPS[3].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
