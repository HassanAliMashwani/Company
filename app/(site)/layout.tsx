import React from 'react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { SmoothScrollProvider } from '@/components/shared/SmoothScrollProvider';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AXIORA — Software Engineering & Product Design Studio',
  description:
    'A small engineering studio building high-impact digital products, AI systems, and interactive web applications.',
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} dark`}>
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased">
        <SmoothScrollProvider>
          <div className="relative min-h-screen flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
