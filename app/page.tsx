import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/hero/Hero';
import { ProjectCard } from '@/components/work/ProjectCard';
import { CapabilityMatrix } from '@/components/capabilities/CapabilityMatrix';
import { TeamGrid } from '@/components/team/TeamGrid';
import { ContactForm } from '@/components/contact/ContactForm';
import { PROJECTS } from '@/lib/projects';

const CraftSection = dynamic(
  () => import('@/components/craft/CraftSection').then((mod) => mod.CraftSection),
  {
    loading: () => (
      <div className="py-24 px-4 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="h-64 rounded-2xl bg-zinc-900/50 animate-pulse border border-zinc-800 flex items-center justify-center font-mono text-xs text-zinc-500">
          Loading Interactive Craft Demos...
        </div>
      </div>
    ),
  }
);

export default function HomePage() {
  // Only show the top 3 featured projects on the homepage
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Work Preview Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-[#F46C38] uppercase">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              SELECTED WORK
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#F46C38] hover:text-[#C5FF41] font-semibold transition-colors"
          >
            <span>Explore All Projects ({PROJECTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-10">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} isAlternating={true} />
          ))}
        </div>

        {/* View All Projects Button Below the 3 Projects */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#151312] hover:bg-[#F46C38] text-[#FFFFFF] hover:text-[#000000] font-mono text-sm font-bold tracking-wider uppercase border border-[#242426] hover:border-[#F46C38] transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-[#F46C38]/20 group"
          >
            <span>View All Projects ({PROJECTS.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 3. The Craft Section (Live Demos) */}
      <CraftSection />

      {/* 4. Capabilities Matrix */}
      <CapabilityMatrix />

      {/* 6. Team Section */}
      <TeamGrid />

      {/* 7. Contact Section */}
      <ContactForm />
    </div>
  );
}
