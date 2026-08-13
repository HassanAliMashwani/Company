'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Database, Layout, ArrowRight, Zap, CheckCircle2, Shield, Activity } from 'lucide-react';

export function ArchitectureDiagramWidget() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'benchmarks'>('architecture');

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#131215] border border-zinc-800 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800/80">
        <div>
          <span className="text-xs font-mono font-semibold text-[#C5FF41] uppercase tracking-wider block mb-1">
            04 — SYSTEM ARCHITECTURE
          </span>
          <h3 className="text-xl font-bold text-white">Decoupled Next.js + FastAPI Vector Engine</h3>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
              activeTab === 'architecture'
                ? 'bg-zinc-800 text-white border-[#C5FF41]'
                : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            System Topology
          </button>
          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
              activeTab === 'benchmarks'
                ? 'bg-zinc-800 text-white border-[#C5FF41]'
                : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            Performance Metrics
          </button>
        </div>
      </div>

      {activeTab === 'architecture' ? (
        /* Architecture Topology Visual */
        <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-6 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative z-10">
            {/* Step 1: Next.js Client */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-xl bg-zinc-900 border border-cyan-500/40 shadow-lg relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                <Layout className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold block">CLIENT LAYER</span>
              <h4 className="text-sm font-bold text-white mb-1">Next.js 14</h4>
              <p className="text-[11px] font-mono text-zinc-400">Client-side 60FPS UI & Framer Motion</p>
            </motion.div>

            {/* Step 2: Async Bridge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-xl bg-zinc-900 border border-amber-500/40 shadow-lg relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                <Server className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold block">REST / WS BRIDGE</span>
              <h4 className="text-sm font-bold text-white mb-1">Python FastAPI</h4>
              <p className="text-[11px] font-mono text-zinc-400">Async PDF parsing & Queue orchestration</p>
            </motion.div>

            {/* Step 3: AI NLP Engine */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-xl bg-zinc-900 border border-[#C5FF41]/40 shadow-lg relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C5FF41]/10 border border-[#C5FF41]/30 flex items-center justify-center text-[#C5FF41] mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-[#C5FF41] uppercase font-semibold block">NLP CORE</span>
              <h4 className="text-sm font-bold text-white mb-1">Sentence-Transformers</h4>
              <p className="text-[11px] font-mono text-zinc-400">SpaCy NER & 768-dim embeddings</p>
            </motion.div>

            {/* Step 4: pgvector Storage */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-xl bg-zinc-900 border border-purple-500/40 shadow-lg relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-purple-400 uppercase font-semibold block">VECTOR STORE</span>
              <h4 className="text-sm font-bold text-white mb-1">PostgreSQL</h4>
              <p className="text-[11px] font-mono text-zinc-400">pgvector HNSW index & Cosine query</p>
            </motion.div>
          </div>

          <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-3">
            <Zap className="w-4 h-4 text-[#C5FF41] shrink-0" />
            <span>
              <strong>Asynchronous Worker Pipeline:</strong> Heavy transformer model embeddings run on dedicated CPU worker pools without blocking client frame rates.
            </span>
          </div>
        </div>
      ) : (
        /* Benchmarks Grid */
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
            <Activity className="w-5 h-5 text-[#C5FF41] mb-2" />
            <span className="text-[10px] font-mono uppercase text-zinc-400 block">UI RENDERING FRAME RATE</span>
            <p className="text-2xl font-extrabold font-mono text-white mt-1">60 FPS</p>
            <p className="text-xs font-mono text-zinc-400 mt-1">Zero UI thread blocking during NLP inference</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
            <Zap className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="text-[10px] font-mono uppercase text-zinc-400 block">VECTOR SIMILARITY COSINE LATENCY</span>
            <p className="text-2xl font-extrabold font-mono text-white mt-1">&lt; 140 ms</p>
            <p className="text-xs font-mono text-zinc-400 mt-1">Accelerated by pgvector HNSW indexing</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
            <Shield className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="text-[10px] font-mono uppercase text-zinc-400 block">BETA RESUME EVALUATIONS</span>
            <p className="text-2xl font-extrabold font-mono text-white mt-1">1,200+</p>
            <p className="text-xs font-mono text-zinc-400 mt-1">Zero parser crashes on multi-column layouts</p>
          </div>
        </div>
      )}
    </div>
  );
}
