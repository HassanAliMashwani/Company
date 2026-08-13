'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle2, AlertCircle, XCircle, Filter, Zap, BookOpen } from 'lucide-react';

type SkillStatus = 'matched' | 'partial' | 'missing' | 'impact';

type SkillItem = {
  name: string;
  category: 'Backend' | 'AI / ML' | 'Database' | 'Frontend' | 'Impact Verb';
  status: SkillStatus;
  vectorWeight: number;
  suggestion?: string;
};

const SKILLS_DATA: SkillItem[] = [
  { name: 'Python', category: 'Backend', status: 'matched', vectorWeight: 0.98 },
  { name: 'FastAPI', category: 'Backend', status: 'matched', vectorWeight: 0.96 },
  { name: 'Sentence-Transformers', category: 'AI / ML', status: 'matched', vectorWeight: 0.94 },
  { name: 'SpaCy NLP', category: 'AI / ML', status: 'matched', vectorWeight: 0.92 },
  { name: 'PostgreSQL', category: 'Database', status: 'matched', vectorWeight: 0.91 },
  { name: 'Next.js 14', category: 'Frontend', status: 'matched', vectorWeight: 0.89 },
  { name: 'Tailwind CSS', category: 'Frontend', status: 'matched', vectorWeight: 0.85 },
  { name: 'Lucide Icons', category: 'Frontend', status: 'matched', vectorWeight: 0.80 },
  { name: 'REST APIs', category: 'Backend', status: 'matched', vectorWeight: 0.88 },
  { name: 'Asynchronous Embedding', category: 'AI / ML', status: 'matched', vectorWeight: 0.93 },
  { name: 'Cosine Similarity', category: 'AI / ML', status: 'matched', vectorWeight: 0.95 },
  { name: 'PDF Parser Engine', category: 'Backend', status: 'matched', vectorWeight: 0.90 },

  { name: 'pgvector', category: 'Database', status: 'partial', vectorWeight: 0.72, suggestion: 'Mention vector indexing (HNSW) in experience bullet points' },
  { name: 'Docker / Containerization', category: 'Backend', status: 'partial', vectorWeight: 0.65, suggestion: 'Add Docker deployment for FastAPI container' },
  { name: 'PyTorch / Transformers', category: 'AI / ML', status: 'partial', vectorWeight: 0.68, suggestion: 'Specify model parameters or HuggingFace checkpoint used' },

  { name: 'Kubernetes Cluster', category: 'Backend', status: 'missing', vectorWeight: 0.35, suggestion: 'Required for Senior DevOps scale posting' },
  { name: 'Redis Cache Layer', category: 'Database', status: 'missing', vectorWeight: 0.40, suggestion: 'Recommended for async job result caching' },
  { name: 'CI/CD Pipeline Workflow', category: 'Backend', status: 'missing', vectorWeight: 0.38, suggestion: 'Add GitHub Actions automation experience' },

  { name: 'Architected', category: 'Impact Verb', status: 'impact', vectorWeight: 0.96 },
  { name: 'Decoupled', category: 'Impact Verb', status: 'impact', vectorWeight: 0.92 },
  { name: 'Engineered', category: 'Impact Verb', status: 'impact', vectorWeight: 0.94 },
  { name: 'Optimized', category: 'Impact Verb', status: 'impact', vectorWeight: 0.90 },
  { name: 'Parsed', category: 'Impact Verb', status: 'impact', vectorWeight: 0.88 },
];

export function SkillGapMatrixWidget() {
  const [filter, setFilter] = useState<'all' | SkillStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesFilter = filter === 'all' || skill.status === filter;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: SkillStatus) => {
    switch (status) {
      case 'matched':
        return { label: 'Matched', icon: CheckCircle2, className: 'bg-[#C5FF41]/10 text-[#C5FF41] border-[#C5FF41]/30' };
      case 'partial':
        return { label: 'Partial', icon: AlertCircle, className: 'bg-amber-500/10 text-amber-400 border-amber-500/30' };
      case 'missing':
        return { label: 'Missing', icon: XCircle, className: 'bg-red-500/10 text-red-400 border-red-500/30' };
      case 'impact':
        return { label: 'Impact Verb', icon: Zap, className: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' };
    }
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#131215] border border-zinc-800 shadow-2xl">
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800/80">
        <div>
          <span className="text-xs font-mono font-semibold text-[#C5FF41] uppercase tracking-wider block mb-1">
            SKILL GAP MATRIX
          </span>
          <h3 className="text-xl font-bold text-white">Entity Recognition & Keyword Alignment</h3>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skill entity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-1.5 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5FF41]"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {[
          { id: 'all', label: `All (${SKILLS_DATA.length})` },
          { id: 'matched', label: `Matched (${SKILLS_DATA.filter((s) => s.status === 'matched').length})` },
          { id: 'partial', label: `Partial (${SKILLS_DATA.filter((s) => s.status === 'partial').length})` },
          { id: 'missing', label: `Missing (${SKILLS_DATA.filter((s) => s.status === 'missing').length})` },
          { id: 'impact', label: `Impact Verbs (${SKILLS_DATA.filter((s) => s.status === 'impact').length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
              filter === tab.id
                ? 'bg-zinc-800 text-white border-[#C5FF41]'
                : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const badge = getStatusBadge(skill.status);
            const Icon = badge.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold font-mono text-white flex items-center gap-1.5">
                      <Icon className={`w-3.5 h-3.5 ${badge.className.split(' ')[1]}`} />
                      {skill.name}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${badge.className}`}>
                      {badge.label}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
                    <span>Category: {skill.category}</span>
                    <span className="text-zinc-300 font-semibold">Weight: {skill.vectorWeight}</span>
                  </div>
                </div>

                {skill.suggestion && (
                  <div className="mt-2 pt-2 border-t border-zinc-800 text-[10px] font-mono text-amber-300 flex items-start gap-1">
                    <BookOpen className="w-3 h-3 shrink-0 mt-0.5" />
                    <span>{skill.suggestion}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
