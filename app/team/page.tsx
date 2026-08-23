'use client';

import React from 'react';
import { TeamGrid } from '@/components/team/TeamGrid';

export default function TeamPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen">
      <TeamGrid className="border-t-0 py-8" />
    </div>
  );
}
