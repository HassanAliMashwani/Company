'use client';

import React, { useState } from 'react';
import { Type } from 'lucide-react';

export function TypeDemo() {
  const [weight, setWeight] = useState<number>(700);
  const [size, setSize] = useState<number>(28);
  const [letterSpacing, setLetterSpacing] = useState<number>(-0.5);

  return (
    <div className="p-6 rounded-3xl bg-[#141126] border border-[#ff2a85]/30 flex flex-col justify-between min-h-[360px] shadow-xl">
      <div>
        <div className="flex items-center justify-between border-b border-purple-950/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4 text-[#00f0ff]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              01. Fluid Typography Engine
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#ff2a85] bg-[#ff2a85]/10 px-2.5 py-0.5 rounded-full border border-[#ff2a85]/30 font-bold">
            Interactive Control
          </span>
        </div>

        {/* Live Typography Preview Area */}
        <div className="p-6 rounded-2xl bg-[#0b0914] border border-purple-900/60 mb-6 transition-all min-h-[140px] flex flex-col justify-center shadow-inner">
          <h4
            style={{
              fontWeight: weight,
              fontSize: `${size}px`,
              letterSpacing: `${letterSpacing}px`,
            }}
            className="gradient-funky leading-tight transition-all duration-150"
          >
            Engineering Systems That Scale.
          </h4>
          <p
            style={{ fontWeight: Math.max(300, weight - 200) }}
            className="text-zinc-300 text-xs mt-2 transition-all duration-150"
          >
            Responsive type scales backed by modular CSS tokens and fluid font clamping.
          </p>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-purple-950/80 font-mono text-xs text-zinc-300">
        <div>
          <div className="flex items-center justify-between mb-1.5 font-bold">
            <span>Weight</span>
            <span className="text-[#ff2a85]">{weight}</span>
          </div>
          <input
            type="range"
            min={300}
            max={900}
            step={100}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full accent-[#ff2a85] bg-purple-950 h-1.5 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5 font-bold">
            <span>Size</span>
            <span className="text-[#00f0ff]">{size}px</span>
          </div>
          <input
            type="range"
            min={18}
            max={40}
            step={2}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full accent-[#00f0ff] bg-purple-950 h-1.5 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5 font-bold">
            <span>Tracking</span>
            <span className="text-[#ccff00]">{letterSpacing}px</span>
          </div>
          <input
            type="range"
            min={-2}
            max={4}
            step={0.5}
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            className="w-full accent-[#ccff00] bg-purple-950 h-1.5 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
