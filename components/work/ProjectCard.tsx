'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { Project } from '@/lib/projects';
import { cardHover } from '@/lib/motion-variants';
import { ProjectVisualStage } from './ProjectVisualStage';

type ProjectCardProps = {
  project: Project;
  index: number;
  isAlternating?: boolean;
};

export function ProjectCard({ project, index, isAlternating = true }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  // Odd = image left, Even = image right (1-indexed based on index)
  const isEven = index % 2 === 1;

  return (
    <motion.article
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-[#1A1A1A] border border-[#242426] rounded-3xl overflow-hidden hover:border-[#F46C38]/50 transition-colors duration-300 shadow-2xl"
    >
      <div
        className={`flex flex-col ${
          isAlternating ? (isEven ? 'lg:flex-row-reverse' : 'lg:flex-row') : 'flex-col'
        } items-center`}
      >
        {/* Visual Showcase Panel */}
        <div className="w-full lg:w-7/12 relative p-3.5 sm:p-5 flex items-center justify-center min-w-0">
          <ProjectVisualStage project={project} isHovered={isHovered} />
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-5/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-w-0">
          <div className="min-w-0 mb-6">
            {/* Header metadata info */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 min-w-0">
              <span className="font-mono text-xs text-[#F46C38] tracking-widest uppercase font-extrabold">
                0{index + 1} — {project.year}
              </span>
              <div className="flex flex-wrap gap-1.5 min-w-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#151312] text-[#998F8F] border border-[#242426]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFFFF] group-hover:text-[#F46C38] transition-colors mb-3 break-words">
              {project.name}
            </h3>

            {/* Summary */}
            <p className="text-sm text-[#998F8F] leading-relaxed break-words">
              {project.summary}
            </p>
          </div>

          <div className="min-w-0">
            {/* Outcome Pill (Safely wrapped within container) */}
            {project.outcome && (
              <div className="mb-6 flex items-start gap-2.5 px-3.5 py-2 rounded-xl bg-[#F46C38] text-[#000000] text-xs font-extrabold max-w-full shadow-md">
                <Award className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="leading-snug break-words">{project.outcome}</span>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6 min-w-0">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#151312] text-zinc-300 border border-[#242426]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2 min-w-0">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#F46C38] hover:text-[#C5FF41] transition-colors group/link"
              >
                <span>Explore Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
