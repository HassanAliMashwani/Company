'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, AlertTriangle, Cpu, RefreshCw, BarChart2, Check, Zap } from 'lucide-react';

type CandidatePreset = {
  id: string;
  name: string;
  role: string;
  score: number;
  vectorMatch: number;
  keywords: number;
  formatting: number;
  impactVerbs: number;
  status: 'Critical Gap' | 'Strong Candidate' | 'Optimal Match';
  badgeColor: string;
  summary: string;
};

const PRESETS: CandidatePreset[] = [
  {
    id: 'unoptimized',
    name: 'Unoptimized Draft',
    role: 'Senior Full Stack Engineer',
    score: 42,
    vectorMatch: 45,
    keywords: 38,
    formatting: 50,
    impactVerbs: 35,
    status: 'Critical Gap',
    badgeColor: 'bg-red-500/20 text-red-400 border-red-500/40',
    summary: 'Missing 8 essential keywords (FastAPI, pgvector, SpaCy). Multi-column tables broke legacy parser.',
  },
  {
    id: 'optimized',
    name: 'Optimized Resume',
    role: 'Senior Full Stack Engineer',
    score: 88,
    vectorMatch: 90,
    keywords: 85,
    formatting: 100,
    impactVerbs: 82,
    status: 'Strong Candidate',
    badgeColor: 'bg-[#C5FF41]/20 text-[#C5FF41] border-[#C5FF41]/40',
    summary: 'High cosine vector match. Added missing technical keywords and normalized PDF table structure.',
  },
  {
    id: 'lead',
    name: 'Senior Lead Profile',
    role: 'AI / ML Solutions Lead',
    score: 96,
    vectorMatch: 97,
    keywords: 95,
    formatting: 100,
    impactVerbs: 94,
    status: 'Optimal Match',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    summary: 'Exceptional vector alignment. Strong impact metrics with quantifiable engineering outcomes.',
  },
];

export function AtsScoreWidget() {
  const [activePreset, setActivePreset] = useState<CandidatePreset>(PRESETS[1]);
  const [isScanning, setIsScanning] = useState(false);

  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (activePreset.score / 100) * circumference;

  const handleSelectPreset = (preset: CandidatePreset) => {
    setIsScanning(true);
    setActivePreset(preset);
    setTimeout(() => setIsScanning(false), 400);
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#131215] border border-zinc-800 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5FF41]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F46C38]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-semibold text-[#C5FF41] uppercase tracking-wider">
              INTERACTIVE DEMO
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-800 text-zinc-300">
              Live NLP Score Gauge
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">ATS Radial Match Score Card</h3>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 border ${
                activePreset.id === p.id
                  ? 'bg-zinc-800 text-white border-[#C5FF41] shadow-lg shadow-[#C5FF41]/10'
                  : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              }`}
            >
              {activePreset.id === p.id && <Sparkles className="w-3 h-3 text-[#C5FF41]" />}
              <span>{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Main Visual Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Radial Score Ring Visual */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 relative">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C5FF41" />
                  <stop offset="100%" stopColor="#F46C38" />
                </linearGradient>
              </defs>
              {/* Background Ring */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-zinc-800"
                strokeWidth="12"
                fill="transparent"
              />
              {/* Animated Foreground Ring */}
              <motion.circle
                cx="80"
                cy="80"
                r={radius}
                stroke="url(#scoreGradient)"
                strokeWidth="12"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Inner Score Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.span
                key={activePreset.score}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-extrabold font-mono tracking-tight text-white"
              >
                {activePreset.score}%
              </motion.span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                OVERALL MATCH
              </span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className={`inline-block px-3 py-1 text-xs font-mono font-semibold rounded-full border ${activePreset.badgeColor}`}>
              {activePreset.status}
            </span>
            <p className="text-xs font-mono text-zinc-400 mt-2 max-w-xs leading-relaxed">
              Target Role: <strong className="text-zinc-200">{activePreset.role}</strong>
            </p>
          </div>
        </div>

        {/* Detailed Breakdown Bars */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-xs text-zinc-300 font-mono mb-4 leading-relaxed">
              {activePreset.summary}
            </p>

            {/* Metric Bars */}
            <div className="space-y-3 font-mono">
              {[
                { label: 'Vector Cosine Similarity', value: activePreset.vectorMatch, icon: Cpu },
                { label: 'Technical Skill Keyword Coverage', value: activePreset.keywords, icon: BarChart2 },
                { label: 'Formatting Compliance & Parsing', value: activePreset.formatting, icon: CheckCircle2 },
                { label: 'Impact Verb Density', value: activePreset.impactVerbs, icon: Zap },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <metric.icon className="w-3.5 h-3.5 text-[#C5FF41]" />
                      {metric.label}
                    </span>
                    <span className="text-white font-bold">{metric.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        metric.value >= 80
                          ? 'bg-[#C5FF41]'
                          : metric.value >= 60
                          ? 'bg-amber-400'
                          : 'bg-red-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 px-1">
            <span className="flex items-center gap-1">
              <RefreshCw className={`w-3 h-3 text-[#C5FF41] ${isScanning ? 'animate-spin' : ''}`} />
              Real-time SpaCy NLP recalculation
            </span>
            <span>768-dim Vector Embeddings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
