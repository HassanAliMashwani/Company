'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Type,
  Palette,
  SlidersHorizontal,
  Sparkles,
  CheckCircle2,
  Loader2,
  Flame,
  Copy,
  Check,
  Zap,
} from 'lucide-react';

const COLOR_THEMES = [
  { name: 'Vibrant Coral', hex: '#F46C38', bg: 'bg-[#F46C38]', text: 'text-[#F46C38]' },
  { name: 'Electric Volt', hex: '#C5FF41', bg: 'bg-[#C5FF41]', text: 'text-[#C5FF41]' },
  { name: 'Electric Blue', hex: '#0000EE', bg: 'bg-[#0000EE]', text: 'text-[#0000EE]' },
  { name: 'Crisp White', hex: '#FFFFFF', bg: 'bg-[#FFFFFF]', text: 'text-[#FFFFFF]' },
];

const COMPONENT_STATES = [
  { id: 'idle', label: 'Idle State' },
  { id: 'loading', label: 'Loading State' },
  { id: 'success', label: 'Verified State' },
];

const EASING_MODES = [
  { id: 'spring', label: 'Spring Physics', scale: 1.05 },
  { id: 'smooth', label: 'Smooth Ease', scale: 1.02 },
  { id: 'glow', label: 'Pulse Glow', scale: 1.0 },
];

export function CraftSection({ className = '' }: { className?: string }) {
  // Typography state
  const [fontWeight, setFontWeight] = useState<number>(700);
  const [fontSize, setFontSize] = useState<number>(24);
  const [letterSpacing, setLetterSpacing] = useState<number>(-0.5);

  // Color theme state
  const [selectedTheme, setSelectedTheme] = useState(COLOR_THEMES[0]);

  // Component state
  const [activeState, setActiveState] = useState<'idle' | 'loading' | 'success'>('idle');

  // Motion state
  const [selectedEasing, setSelectedEasing] = useState(EASING_MODES[0]);

  // Copy code feedback
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyCode = () => {
    const codeSnippet = `/* Synthesized Craft Spec */
font-weight: ${fontWeight};
font-size: ${fontSize}px;
letter-spacing: ${letterSpacing}px;
accent-color: ${selectedTheme.hex};
motion-type: ${selectedEasing.label};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="craft" className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#242426] ${className}`}>
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono font-extrabold tracking-widest text-[#F46C38] uppercase">
          Interactive Craft Studio
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFFFF] mt-2 mb-4">
          THE CRAFT
        </h2>
        <p className="text-[#998F8F] text-lg max-w-2xl">
          We care about the details most people don't notice. Adjust the controls below to build a live synthesized UI element at the end.
        </p>
      </div>

      {/* 4 Interactive Control Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Panel 01: Typography Controls */}
        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#242426] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Type className="w-4 h-4 text-[#F46C38]" />
              <span className="text-xs font-mono font-bold text-[#FFFFFF] uppercase">
                01. Typography
              </span>
            </div>
            <div className="space-y-4 font-mono text-xs text-[#998F8F]">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Weight</span>
                  <span className="text-[#FFFFFF] font-bold">{fontWeight}</span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={900}
                  step={100}
                  value={fontWeight}
                  onChange={(e) => setFontWeight(Number(e.target.value))}
                  className="w-full accent-[#F46C38] bg-[#151312] h-1.5 rounded-lg cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Size</span>
                  <span className="text-[#FFFFFF] font-bold">{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min={18}
                  max={32}
                  step={2}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-[#F46C38] bg-[#151312] h-1.5 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Panel 02: Color Token Selector */}
        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#242426] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-4 h-4 text-[#C5FF41]" />
              <span className="text-xs font-mono font-bold text-[#FFFFFF] uppercase">
                02. Color Skin
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {COLOR_THEMES.map((theme) => {
                const isSelected = selectedTheme.hex === theme.hex;
                return (
                  <button
                    key={theme.name}
                    onClick={() => setSelectedTheme(theme)}
                    className={`p-2.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                      isSelected
                        ? 'border-[#F46C38] bg-[#151312] text-[#FFFFFF]'
                        : 'border-[#242426] bg-[#151312]/50 text-[#998F8F] hover:text-[#FFFFFF]'
                    }`}
                  >
                    <span
                      style={{ backgroundColor: theme.hex }}
                      className="w-3.5 h-3.5 rounded-full border border-white/20 flex-shrink-0"
                    />
                    <span className="truncate">{theme.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Panel 03: Component State Selector */}
        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#242426] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="w-4 h-4 text-[#F46C38]" />
              <span className="text-xs font-mono font-bold text-[#FFFFFF] uppercase">
                03. State Machine
              </span>
            </div>
            <div className="space-y-2">
              {COMPONENT_STATES.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setActiveState(st.id as any)}
                  className={`w-full py-2 px-3 rounded-xl border text-xs font-mono font-bold text-left transition-all ${
                    activeState === st.id
                      ? 'border-[#C5FF41] bg-[#C5FF41] text-[#000000]'
                      : 'border-[#242426] bg-[#151312] text-[#998F8F] hover:text-[#FFFFFF]'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 04: Motion Easing Curve */}
        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#242426] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#C5FF41]" />
              <span className="text-xs font-mono font-bold text-[#FFFFFF] uppercase">
                04. Motion Physics
              </span>
            </div>
            <div className="space-y-2">
              {EASING_MODES.map((ease) => (
                <button
                  key={ease.id}
                  onClick={() => setSelectedEasing(ease)}
                  className={`w-full py-2 px-3 rounded-xl border text-xs font-mono font-bold text-left transition-all ${
                    selectedEasing.id === ease.id
                      ? 'border-[#F46C38] bg-[#F46C38] text-[#000000]'
                      : 'border-[#242426] bg-[#151312] text-[#998F8F] hover:text-[#FFFFFF]'
                  }`}
                >
                  {ease.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FINAL SYNTHESIZED REAL ELEMENT OUTPUT */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#1A1A1A] border border-[#242426] relative overflow-hidden shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#242426] pb-6 mb-8">
          <div>
            <span className="text-xs font-mono font-extrabold uppercase text-[#C5FF41] tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 fill-current" /> Live Synthesized Component Output
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF] mt-1">
              Real-Time Synthesized Element
            </h3>
          </div>
          <button
            onClick={handleCopyCode}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#151312] border border-[#242426] text-xs font-mono font-bold text-[#FFFFFF] hover:border-[#F46C38] transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-[#C5FF41]" /> : <Copy className="w-4 h-4 text-[#F46C38]" />}
            <span>{copied ? 'Specs Copied!' : 'Copy Tailwind Specs'}</span>
          </button>
        </div>

        {/* The Synthesized Element Display Box */}
        <div className="p-8 rounded-2xl bg-[#151312] border border-[#242426] flex flex-col md:flex-row items-center justify-between gap-8 min-h-[180px]">
          {/* Dynamic Typography & Theme Rendering */}
          <div className="max-w-xl">
            <h4
              style={{
                fontWeight: fontWeight,
                fontSize: `${fontSize}px`,
                letterSpacing: `${letterSpacing}px`,
                color: selectedTheme.hex,
              }}
              className="leading-tight transition-all duration-200"
            >
              Precision Engineering & Design System
            </h4>
            <p className="text-xs text-[#998F8F] font-mono mt-2">
              Configured with {selectedTheme.name} theme token, {fontWeight} font weight, and {selectedEasing.label}.
            </p>
          </div>

          {/* Dynamic Interactive Button Element */}
          <motion.div
            whileHover={{ scale: selectedEasing.scale }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex-shrink-0"
          >
            <button
              style={{ backgroundColor: selectedTheme.hex }}
              className="px-8 py-4 rounded-xl text-sm font-extrabold text-[#000000] shadow-xl flex items-center gap-3 transition-all"
            >
              {activeState === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
              {activeState === 'success' && <CheckCircle2 className="w-4 h-4" />}
              {activeState === 'idle' && <Flame className="w-4 h-4 fill-current" />}
              <span>
                {activeState === 'idle' && 'Synthesized Action'}
                {activeState === 'loading' && 'Processing System...'}
                {activeState === 'success' && 'Verified Successfully'}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
