'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/projects';
import { ProjectCard } from '@/components/work/ProjectCard';

const FILTER_TAGS = ['ALL', 'WEB', 'AI/ML', 'SAAS', 'DESIGN'] as const;

export default function WorkArchivePage() {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return PROJECTS;
    return PROJECTS.filter((p) =>
      p.tags.some((tag) => tag.toUpperCase() === activeFilter)
    );
  }, [activeFilter]);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Archive Header */}
      <div className="mb-12">
        <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
          Studio Archive
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-2 mb-4">
          WORK
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Selected projects shipped by our engineering studio. Filter by domain or explore the complete case studies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-zinc-800/80 pb-6">
        {FILTER_TAGS.map((tag) => {
          const isActive = activeFilter === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'bg-[#121215] text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Project Grid / List */}
      <motion.div layout className="flex flex-col gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} index={index} isAlternating={true} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-zinc-500 font-mono text-sm">
          No projects found matching the filter "{activeFilter}".
        </div>
      )}
    </div>
  );
}
