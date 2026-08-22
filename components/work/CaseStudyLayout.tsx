'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, CheckCircle2, ExternalLink, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { ProjectVisualStage } from '@/components/work/ProjectVisualStage';
import { Project } from '@/lib/projects';

type CaseStudyLayoutProps = {
  project: Project;
  children: React.ReactNode;
};

export function CaseStudyLayout({ project, children }: CaseStudyLayoutProps) {
  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back to Work link */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-[#F46C38] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work Archive</span>
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold px-4 py-2 rounded-full bg-[#F46C38] hover:bg-[#C5FF41] text-[#000000] transition-colors shadow-md"
          >
            <span>Visit Live Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Header Block */}
      <header className="mb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-orange-950/80 border border-orange-800/60 text-[#F46C38]">
              {project.tier.toUpperCase()} CASE STUDY
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-[#151312] text-[#998F8F] border border-[#242426]"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#F46C38] hover:text-[#C5FF41]"
            >
              <span>{project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          {project.name}
        </h1>

        <p className="text-xl text-zinc-300 leading-relaxed mb-12">
          {project.summary}
        </p>

        {/* Hero Visual Stage */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
          <ProjectVisualStage project={project} isHovered={true} />
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 p-6 rounded-xl bg-[#121215] border border-zinc-800/80 text-xs font-mono">
          <div>
            <span className="text-zinc-500 block uppercase mb-1">CLIENT</span>
            <span className="text-zinc-200 font-semibold">{project.client}</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase mb-1">INDUSTRY</span>
            <span className="text-zinc-200 font-semibold">{project.industry}</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase mb-1">YEAR</span>
            <span className="text-zinc-200 font-semibold">{project.year}</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase mb-1">ROLE</span>
            <span className="text-zinc-200 font-semibold">{project.role}</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase mb-1">TEAM</span>
            <span className="text-zinc-200 font-semibold">{project.teamSize}</span>
          </div>
        </div>
      </header>

      {/* Case Study Content Body (rendered from MDX) */}
      <div className="prose prose-invert prose-cyan max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:text-white prose-h2:border-t prose-h2:border-zinc-800 prose-h2:pt-10 prose-h2:mt-12 prose-p:text-zinc-300 prose-p:leading-relaxed prose-li:text-zinc-300 prose-blockquote:border-l-cyan-400 prose-blockquote:bg-zinc-900/60 prose-blockquote:p-4 prose-blockquote:rounded-r-lg">
        {children}
      </div>

      {/* Visual Process Sequence Component (Step 02 visual enhancement) */}
      <div className="mt-16 p-8 rounded-2xl bg-[#121215] border border-zinc-800/80">
        <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-6 flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span>Engineering Execution Pipeline</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            '01. Research',
            '02. User Flow',
            '03. Wireframes',
            '04. Visual System',
            '05. Prototype',
            '06. Build',
          ].map((step, idx) => (
            <div
              key={step}
              className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-center font-mono text-xs text-zinc-300"
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Verifiable Outcome Card (Step 05 visual enhancement) */}
      {project.outcome && (
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-zinc-900 border border-emerald-800/60 flex items-center gap-4">
          <Award className="w-8 h-8 text-emerald-400 flex-shrink-0" />
          <div>
            <span className="text-xs font-mono uppercase text-emerald-400 font-semibold block">
              VERIFIABLE OUTCOME
            </span>
            <p className="text-white text-base font-semibold mt-0.5">
              {project.outcome}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
