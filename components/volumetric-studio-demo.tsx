"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { VolumetricStudio } from "@/components/ui/volumetric-studio";

export default function VolumetricStudioDemo() {
  return (
    <main className="w-full min-h-screen relative bg-black overflow-hidden font-sans border-b border-white/10 shadow-2xl">
      <VolumetricStudio className="min-h-screen flex flex-col justify-between">
        {/* DUAL DIMENSION HERO UI */}
        <div className="flex flex-col items-center justify-between w-full min-h-screen text-center px-4 sm:px-6 pt-36 sm:pt-44 pb-16 relative z-10 pointer-events-none max-w-6xl mx-auto">
          
          {/* Main Content Area (Title + Subtitle) */}
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl max-w-5xl mb-6 text-center"
            >
              Ideas into products<br className="hidden sm:inline" /> people love.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-white/70 font-mono tracking-widest uppercase max-w-2xl text-center"
            >
              Design · Engineering · AI · Interaction
            </motion.p>
          </div>

          {/* Bottom CTAs Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto mt-8 mb-4 w-full sm:w-auto"
          >
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-4 font-bold transition-transform hover:scale-105 active:scale-95 bg-white text-black rounded-full shadow-[0_0_25px_rgba(255,255,255,0.25)] cursor-pointer inline-flex items-center justify-center text-sm"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 font-bold transition-transform hover:scale-105 active:scale-95 bg-black/40 text-white border border-white/20 rounded-full hover:bg-white/10 backdrop-blur-md cursor-pointer inline-flex items-center justify-center text-sm"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </VolumetricStudio>
    </main>
  );
}
