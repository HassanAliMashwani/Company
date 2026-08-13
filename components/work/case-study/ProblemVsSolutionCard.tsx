'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export function ProblemVsSolutionCard() {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Problem Card (Legacy ATS) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative p-6 sm:p-7 rounded-2xl bg-[#181414] border border-red-900/40 shadow-xl overflow-hidden group hover:border-red-500/50 transition-colors"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800/60 flex items-center justify-center text-red-400">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider font-semibold block">
              01 — Traditional Legacy ATS
            </span>
            <h3 className="text-lg font-bold text-white">Automated Rejection Black Hole</h3>
          </div>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          Job seekers are rejected silently by rigid regex-based parsers with zero explanation, misleading scores, and false negative keyword drops.
        </p>

        <ul className="space-y-3 font-mono text-xs text-zinc-300">
          <li className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>Vague single score percentages without context</span>
          </li>
          <li className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>Breaks on multi-column PDF formatting & tables</span>
          </li>
          <li className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>No actionable breakdown of missing role skills</span>
          </li>
        </ul>
      </motion.div>

      {/* Solution Card (NLP Vector Engine) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative p-6 sm:p-7 rounded-2xl bg-[#151a14] border border-[#C5FF41]/30 shadow-xl overflow-hidden group hover:border-[#C5FF41]/60 transition-colors"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5FF41]/10 rounded-full blur-3xl group-hover:bg-[#C5FF41]/20 transition-all pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#C5FF41]/10 border border-[#C5FF41]/30 flex items-center justify-center text-[#C5FF41]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#C5FF41] uppercase tracking-wider font-semibold block">
              02 — Our NLP Analysis Engine
            </span>
            <h3 className="text-lg font-bold text-white">Vector Match & Deep Skill Matrix</h3>
          </div>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          Transformer embeddings compare candidate skills directly against job posting vectors with real-time formatting audits and skill gap metrics.
        </p>

        <ul className="space-y-3 font-mono text-xs text-zinc-200">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C5FF41] shrink-0 mt-0.5" />
            <span>Cosine similarity matching across 768-dim embeddings</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C5FF41] shrink-0 mt-0.5" />
            <span>Multi-column PDF layout structural AST reconstruction</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C5FF41] shrink-0 mt-0.5" />
            <span>Actionable skill gap matrix & impact verb scoring</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
