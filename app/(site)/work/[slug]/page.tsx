import React from 'react';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PROJECTS, getProjectBySlug } from '@/lib/projects';
import { CaseStudyLayout } from '@/components/work/CaseStudyLayout';
import { mdxComponents } from '@/components/work/case-study/MdxComponents';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.name} Case Study — STUDIO.DEV`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  const mdxPath = path.join(process.cwd(), 'content', 'projects', `${project.slug}.mdx`);
  
  let mdxSource = '';
  if (fs.existsSync(mdxPath)) {
    mdxSource = fs.readFileSync(mdxPath, 'utf-8');
  } else {
    mdxSource = `## [[PLACEHOLDER: Case study content file for ${project.name} is pending]]`;
  }

  return (
    <CaseStudyLayout project={project}>
      <MDXRemote source={mdxSource} components={mdxComponents} />
    </CaseStudyLayout>
  );
}
