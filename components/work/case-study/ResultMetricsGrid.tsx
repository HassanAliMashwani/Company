'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, TrendingUp, Users, Zap, ShieldCheck } from 'lucide-react';

export function ResultMetricsGrid() {
  const metrics = [
    {
      label: 'BETA CANDIDATE RESUMES',
      value: '1,200+',
      description: 'Successfully parsed during initial beta rollout with 0 layout crashes.',
      color: 'text-[#C5FF41]',
      border: 'border-[#C5FF41]/30',
      bg: 'bg-[#C5FF41]/5',
      icon: Users,
    },
    {
      label: 'CLIENT UI FRAME RATE',
      value: '60 FPS',
      description: 'Instant feedback maintained while running transformer embeddings async.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/5',
      icon: Zap,
    },
    {
      label: 'KEYWORD ACCURACY',
      value: '94.2%',
      description: 'Entity recognition precision across technical skills and impact verbs.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/5',
      icon: ShieldCheck,
    },
    {
      label: 'VECTOR COSINE MATCH',
      value: '< 150ms',
      description: '768-dim embedding distance computation powered by pgvector.',
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/5',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="my-10 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-[#131215] border ${m.border} shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform`}
            >
              <div className={`w-10 h-10 rounded-xl ${m.bg} border ${m.border} flex items-center justify-center ${m.color} mb-4`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-semibold tracking-wider block">
                {m.label}
              </span>
              <p className={`text-3xl font-extrabold font-mono tracking-tight ${m.color} my-1`}>
                {m.value}
              </p>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Production Result Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-zinc-900 to-zinc-900 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              PRODUCTION LAUNCH VERIFIED
            </span>
            <p className="text-sm font-semibold text-white mt-0.5">
              Shipped as a production SaaS MVP — Over 1,200+ candidate resumes processed during initial rollout with 98%+ user satisfaction on keyword precision.
            </p>
          </div>
        </div>

        <div className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-mono border border-emerald-500/40 font-bold flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Active Production</span>
        </div>
      </motion.div>
    </div>
  );
}
