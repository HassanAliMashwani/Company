import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
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
  const featuredProjects = PROJECTS.filter((p) => p.tier === 'major');

  return (
    <div className="space-y-12">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Work Preview Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              SELECTED WORK
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-10">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} isAlternating={true} />
          ))}
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
