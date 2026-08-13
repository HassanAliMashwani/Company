'use client';

import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';

type Swatch = {
  name: string;
  hex: string;
  role: string;
};

const SWATCHES: Swatch[] = [
  { name: 'Funky Magenta Pink', hex: '#ff2a85', role: 'Primary Accent' },
  { name: 'Electric Cyan Glow', hex: '#00f0ff', role: 'Secondary Glow' },
  { name: 'Volt Lime Highlight', hex: '#ccff00', role: 'Feature Badge' },
  { name: 'Neon Purple System', hex: '#8b5cf6', role: 'Gradient Bridge' },
  { name: 'Deep Violet Canvas', hex: '#0b0914', role: 'Background Canvas' },
];

export function ColorDemo() {
  const [selectedSwatch, setSelectedSwatch] = useState<Swatch>(SWATCHES[0]);

  return (
    <div className="p-6 rounded-3xl bg-[#141126] border border-[#00f0ff]/30 flex flex-col justify-between min-h-[360px] shadow-xl">
      <div>
        <div className="flex items-center justify-between border-b border-purple-950/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#ff2a85]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              02. Figma Vibrant Color System
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-2.5 py-0.5 rounded-full border border-[#00f0ff]/30 font-bold">
            Click Swatch to Re-Skin
          </span>
        </div>

        {/* Live Re-skinnable Sample UI Card */}
        <div
          style={{
            borderColor: selectedSwatch.hex,
            boxShadow: `0 0 35px ${selectedSwatch.hex}35`,
          }}
          className="p-6 rounded-2xl bg-[#0b0914] border transition-all duration-300 mb-6 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-3">
            <span
              style={{ color: selectedSwatch.hex }}
              className="text-xs font-mono font-bold uppercase"
            >
              Active Token: {selectedSwatch.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-300 font-bold">
              {selectedSwatch.hex}
            </span>
          </div>

          <h4 className="text-xl font-extrabold text-white mb-2">
            Systemic Funky Color Thinking
          </h4>

          <div className="flex items-center gap-3 mt-4">
            <button
              style={{ backgroundColor: selectedSwatch.hex }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-black transition-all shadow-lg hover:scale-105"
            >
              Action Button
            </button>
            <span className="text-xs font-mono text-zinc-300">
              Role: {selectedSwatch.role}
            </span>
          </div>
        </div>
      </div>

      {/* Swatch Palette Row */}
      <div className="flex items-center justify-between gap-2 pt-4 border-t border-purple-950/80">
        {SWATCHES.map((swatch) => {
          const isSelected = selectedSwatch.hex === swatch.hex;
          return (
            <button
              key={swatch.hex}
              onClick={() => setSelectedSwatch(swatch)}
              className="group relative flex-1 flex flex-col items-center focus:outline-none"
            >
              <div
                style={{ backgroundColor: swatch.hex }}
                className={`w-full h-10 rounded-xl transition-transform duration-200 group-hover:scale-105 flex items-center justify-center border border-white/20 ${
                  isSelected ? 'ring-2 ring-white scale-105 shadow-lg' : ''
                }`}
              >
                {isSelected && <Check className="w-4 h-4 text-black drop-shadow font-extrabold" />}
              </div>
              <span className="text-[9px] font-mono text-zinc-400 mt-1 truncate max-w-full group-hover:text-white font-bold">
                {swatch.hex}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
