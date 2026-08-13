'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';

export function MotionDemo() {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between min-h-[360px]">
      <div>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              04. Micro-Interaction Sandbox
            </span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
            Hover & Tap Trigger
          </span>
        </div>

        {/* Hover Reveal Pattern Box */}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative p-6 rounded-xl bg-zinc-950 border border-zinc-900 cursor-pointer overflow-hidden group min-h-[160px] flex flex-col justify-between mb-4"
        >
          <div className="flex items-center justify-between relative z-10">
            <span className="text-xs font-mono text-cyan-400 uppercase font-semibold flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Hover Card to Reveal Code Details
            </span>
            <span className="text-[10px] font-mono text-zinc-500">
              Pattern: Spring Motion
            </span>
          </div>

          {/* Animated Revealed Content */}
          <div className="relative z-10">
            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
              Framer Motion Spring Physics
            </h4>
            <motion.p
              animate={{ opacity: hovered ? 1 : 0.4, y: hovered ? 0 : 4 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-zinc-400 font-mono"
            >
              {hovered
                ? 'stiffness: 300, damping: 30, scale: 1.02'
                : 'Hover mouse cursor over this card...'}
            </motion.p>
          </div>

          {/* Background Glow Reveal */}
          <motion.div
            animate={{ opacity: hovered ? 0.25 : 0 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 pointer-events-none"
          />
        </motion.div>
      </div>

      <div className="text-center font-mono text-[10px] text-zinc-500 pt-3 border-t border-zinc-800/80">
        60FPS GPU-accelerated transforms (transform & opacity only)
      </div>
    </div>
  );
}
