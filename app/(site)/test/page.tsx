import React from 'react';
import dynamic from 'next/dynamic';

const VolumetricStudioDemo = dynamic(
  () => import('@/components/volumetric-studio-demo'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <div className="text-xs font-mono text-zinc-500 animate-pulse">
          Initializing Volumetric Lighting Stage...
        </div>
      </div>
    ),
  }
);

export const metadata = {
  title: 'Volumetric Studio | Test Stage',
  description: 'Interactive volumetric lighting hero section test page',
};

export default function TestPage() {
  return <VolumetricStudioDemo />;
}
