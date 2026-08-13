'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '@/lib/projects';

type Capability = {
  id: string;
  title: string;
  tagFilter: string;
  description: string;
};

const CAPABILITIES: Capability[] = [
  {
    id: '01',
    title: 'Product Design',
    tagFilter: 'Design',
    description: 'End-to-end user research, wireframing, feature scoping, and interactive prototyping.',
  },
  {
    id: '02',
    title: 'UI / UX',
    tagFilter: 'Design',
    description: 'High-contrast visual design, design token architectures, and accessibility standards.',
  },
  {
    id: '03',
    title: 'Frontend Engineering',
    tagFilter: 'Web',
    description: 'Next.js 14 App Router, TypeScript, custom state machines, and responsive layouts.',
  },
  {
    id: '04',
    title: 'Backend Engineering',
    tagFilter: 'SaaS',
    description: 'PostgreSQL, Prisma ORM, serverless APIs, Stripe payment gateways, and authentication.',
  },
  {
    id: '05',
    title: 'AI / ML Integration',
    tagFilter: 'AI/ML',
    description: 'Computer vision, NLP embeddings, vector search, PyTorch pipelines, and OpenAI API integrations.',
  },
  {
    id: '06',
    title: 'Design Systems',
    tagFilter: 'Design',
    description: 'Scalable component primitives, CSS custom token schemas, and multi-brand themes.',
  },
  {
    id: '07',
    title: 'Motion & Interaction',
    tagFilter: 'Web',
    description: '60FPS GSAP scroll choreography, Lenis smooth scrolling, and Framer Motion UI states.',
  },
];

export function CapabilityMatrix() {
  const [activeCapId, setActiveCapId] = useState<string>('01');

  const activeCap = CAPABILITIES.find((c) => c.id === activeCapId) || CAPABILITIES[0];

  const linkedProjects = PROJECTS.filter((p) =>
    p.tags.some((tag) => tag.toLowerCase() === activeCap.tagFilter.toLowerCase())
  ).slice(0, 3);

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#242426]">
      <div className="mb-12">
        <span className="text-xs font-mono font-extrabold tracking-widest text-[#F46C38] uppercase">
          Proven Engineering Competencies
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFFFF] mt-2 mb-4">
          CAPABILITIES
        </h2>
        <p className="text-[#998F8F] text-base max-w-xl">
          Hover or tap any capability below to view the real shipped projects proving our technical and design depth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Capability List */}
        <div className="lg:col-span-6 flex flex-col gap-2">
          {CAPABILITIES.map((cap) => {
            const isActive = activeCapId === cap.id;
            return (
              <button
                key={cap.id}
                onMouseEnter={() => setActiveCapId(cap.id)}
                onClick={() => setActiveCapId(cap.id)}
                className={`group w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                  isActive
                    ? 'bg-[#1A1A1A] border-[#F46C38] shadow-lg shadow-[#F46C38]/10'
                    : 'bg-transparent border-[#242426] hover:bg-[#1A1A1A]/50 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-[#F46C38]">
                    {cap.id}
                  </span>
                  <span className={`text-lg font-bold tracking-tight ${isActive ? 'text-[#FFFFFF]' : 'text-[#998F8F] group-hover:text-zinc-200'}`}>
                    {cap.title}
                  </span>
                </div>
                <ArrowUpRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#C5FF41] translate-x-0.5 -translate-y-0.5' : 'text-zinc-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Linked Project Proof Cards */}
        <div className="lg:col-span-6 p-8 rounded-2xl bg-[#1A1A1A] border border-[#242426] shadow-2xl min-h-[440px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#242426] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[#F46C38] uppercase font-bold block">
                  Capability Details
                </span>
                <h3 className="text-2xl font-bold text-[#FFFFFF] mt-1">
                  {activeCap.title}
                </h3>
              </div>
              <span className="font-mono text-xs text-[#000000] font-bold bg-[#C5FF41] px-3 py-1 rounded-full">
                {activeCap.tagFilter}
              </span>
            </div>

            <p className="text-[#998F8F] text-sm leading-relaxed mb-8">
              {activeCap.description}
            </p>

            <span className="text-xs font-mono text-[#FFFFFF] uppercase block mb-3 font-bold">
              Linked Shipped Proof ({linkedProjects.length} Projects):
            </span>

            <div className="space-y-3">
              {linkedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-[#151312] hover:bg-[#242426] border border-[#242426] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C5FF41]" />
                    <div>
                      <span className="text-xs font-bold text-[#FFFFFF] group-hover:text-[#F46C38] transition-colors">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#998F8F] block">
                        {p.role}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#998F8F] group-hover:text-[#C5FF41] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
