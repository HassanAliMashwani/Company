'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, AlertTriangle, Play, Eye, Layers, Scan } from 'lucide-react';

export function FormattingAuditorWidget() {
  const [isScanning, setIsScanning] = useState(false);
  const [highlightErrors, setHighlightErrors] = useState(true);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2400);
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#131215] border border-zinc-800 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800/80">
        <div>
          <span className="text-xs font-mono font-semibold text-[#C5FF41] uppercase tracking-wider block mb-1">
            FORMATTING AUDITOR & PDF PARSER
          </span>
          <h3 className="text-xl font-bold text-white">Multi-Column Document AST Structural Extraction</h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHighlightErrors(!highlightErrors)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border flex items-center gap-1.5 ${
              highlightErrors
                ? 'bg-zinc-800 text-white border-amber-400'
                : 'bg-zinc-900/60 text-zinc-400 border-zinc-800'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{highlightErrors ? 'Warnings Highlighted' : 'Normal View'}</span>
          </button>

          <button
            onClick={startScan}
            disabled={isScanning}
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#C5FF41] text-black hover:bg-[#B5EE30] transition-colors flex items-center gap-1.5 disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'Scanning PDF...' : 'Run Parser Scan'}</span>
          </button>
        </div>
      </div>

      {/* Simulator Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Simulated PDF Resume Document preview */}
        <div className="lg:col-span-6 p-6 rounded-xl bg-zinc-950 border border-zinc-800 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
          {/* Animated Scanning Laser Line */}
          {isScanning && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 300, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-0.5 bg-[#C5FF41] shadow-[0_0_15px_#C5FF41] z-20 pointer-events-none"
            />
          )}

          {/* Document Content Overlay Mock */}
          <div className="space-y-4 font-mono text-xs">
            {/* Header Block */}
            <div className={`p-3 rounded-lg border transition-colors ${
              highlightErrors ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-zinc-800'
            }`}>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
                <span>[AST: HeaderBlock]</span>
                <span className="text-emerald-400">PASSED</span>
              </div>
              <p className="font-bold text-white">ALEX R. CHEN — SENIOR FULL STACK ENGINEER</p>
              <p className="text-[10px] text-zinc-400">alex@chen.dev • github.com/alexchen • Seattle, WA</p>
            </div>

            {/* Experience Block 1 */}
            <div className={`p-3 rounded-lg border transition-colors ${
              highlightErrors ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-zinc-800'
            }`}>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
                <span>[AST: ExperienceBlock]</span>
                <span className="text-emerald-400 font-bold">14 ENTITIES EXTRACTED</span>
              </div>
              <p className="font-semibold text-zinc-200">Staff Systems Architect @ CloudScale Inc.</p>
              <p className="text-[10px] text-zinc-400">2022 – Present (2 yrs 8 mos)</p>
            </div>

            {/* Multi-column Table Block (Problematic for legacy ATS) */}
            <div className={`p-3 rounded-lg border transition-colors ${
              highlightErrors ? 'border-amber-500/60 bg-amber-500/10' : 'border-zinc-800'
            }`}>
              <div className="flex items-center justify-between text-[10px] text-amber-400 mb-1">
                <span>[AST: MultiColumnTableBlock]</span>
                <span className="font-bold">LAYOUT REPAIRED</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-300">
                <div>Col 1: Python, FastAPI, SpaCy</div>
                <div>Col 2: PostgreSQL, pgvector, Docker</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span className="flex items-center gap-1">
              <Scan className="w-3 h-3 text-[#C5FF41]" />
              PDF Layout AST Deconstruction
            </span>
            <span>2-Column Grid Detected</span>
          </div>
        </div>

        {/* Right Column: Parser Execution Logs & Warnings */}
        <div className="lg:col-span-6 space-y-3 font-mono text-xs">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <h4 className="text-xs uppercase font-bold text-zinc-300 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C5FF41]" />
              <span>Parser Execution Stream</span>
            </h4>

            <div className="space-y-2.5 text-[11px]">
              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>PDF Stream Decoded: 4,812 raw tokens extracted</span>
              </div>

              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Multi-column layout flattened to linear semantic reading flow</span>
              </div>

              <div className="flex items-start gap-2 text-amber-300">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Table layout warning: Standardized 2-column skills matrix to key-value pairs</span>
              </div>

              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Font Embedding Check: Standard TrueType fonts verified (100% compliant)</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
              PARSER PERFORMANCE
            </span>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-zinc-400 block">Parsing Latency:</span>
                <span className="text-white font-bold">142ms</span>
              </div>
              <div>
                <span className="text-zinc-400 block">Text Recovery:</span>
                <span className="text-[#C5FF41] font-bold">99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
