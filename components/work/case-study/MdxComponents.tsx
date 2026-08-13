import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Quote, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProblemVsSolutionCard } from './ProblemVsSolutionCard';
import { AtsScoreWidget } from './AtsScoreWidget';
import { SkillGapMatrixWidget } from './SkillGapMatrixWidget';
import { FormattingAuditorWidget } from './FormattingAuditorWidget';
import { ArchitectureDiagramWidget } from './ArchitectureDiagramWidget';
import { ResultMetricsGrid } from './ResultMetricsGrid';

export const mdxComponents = {
  // Custom Headings
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <div className="mt-16 mb-6 pt-8 border-t border-zinc-800/80">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-[#C5FF41]" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5FF41]">
          CASE STUDY SECTION
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" {...props}>
        {children}
      </h2>
    </div>
  ),

  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold text-white mt-8 mb-4 tracking-tight flex items-center gap-2" {...props}>
      <Sparkles className="w-4 h-4 text-[#F46C38]" />
      <span>{children}</span>
    </h3>
  ),

  // Paragraphs
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base text-zinc-300 leading-relaxed my-4 font-normal" {...props}>
      {children}
    </p>
  ),

  // Unordered Lists
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 space-y-3 font-mono text-sm text-zinc-300" {...props}>
      {children}
    </ul>
  ),

  // Ordered Lists
  ol: ({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 space-y-3 font-mono text-sm text-zinc-300 list-decimal list-inside" {...props}>
      {children}
    </ol>
  ),

  // List Items
  li: ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-zinc-200" {...props}>
      <CheckCircle2 className="w-4 h-4 text-[#C5FF41] shrink-0 mt-0.5" />
      <div>{children}</div>
    </li>
  ),

  // Blockquotes (Quote Callout Card)
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 text-zinc-800 pointer-events-none">
        <Quote className="w-16 h-16 opacity-30 text-[#C5FF41]" />
      </div>
      <div className="relative z-10 text-base sm:text-lg text-zinc-200 italic font-serif leading-relaxed">
        {children}
      </div>
    </div>
  ),

  // Inline Code & Pre Blocks
  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#C5FF41]" {...props}>
      {children}
    </code>
  ),

  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="my-6 rounded-xl bg-[#0d0c0e] border border-zinc-800 overflow-hidden shadow-2xl">
      <div className="h-8 bg-zinc-900 px-4 flex items-center justify-between border-b border-zinc-800 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#F46C38]" />
          <span>Code Spec</span>
        </div>
        <span className="text-[10px] text-zinc-500">UTF-8</span>
      </div>
      <pre className="p-4 text-xs font-mono text-zinc-200 overflow-x-auto" {...props}>
        {children}
      </pre>
    </div>
  ),

  // Custom Interactive Case Study Components
  ProblemVsSolutionCard,
  AtsScoreWidget,
  SkillGapMatrixWidget,
  FormattingAuditorWidget,
  ArchitectureDiagramWidget,
  ResultMetricsGrid,
};
