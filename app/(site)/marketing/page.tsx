import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/hero/Hero';
import { WhyItsBroken } from '@/components/marketing/WhyItsBroken';
import { LogoMarquee } from '@/components/marketing/LogoMarquee';
import { StickyShowcase } from '@/components/marketing/StickyShowcase';
import { ContactForm } from '@/components/contact/ContactForm';
import { MARKETING_CLIENTS, MARKETING_SHOWCASE_ITEMS } from '@/lib/marketing';

export const metadata: Metadata = {
  title: 'Marketing — AXIORA',
  description:
    'Web & product, content & reels, social strategy, and brand — one team, three disciplines, zero handoffs.',
};

export default function MarketingPage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero — reused with marketing-specific copy */}
      <Hero
        headline={
          <>
            WE BUILD THINGS THAT DON&apos;T{' '}
            <span className="accent-gradient-text">
              SIT THERE LOOKING PRETTY.
            </span>
          </>
        }
        tagline="Web & Product · Content & Reels · Social Strategy · Brand"
        primaryCta={{ label: 'See Our Work', href: '/work' }}
        secondaryCta={{ label: 'Book a Call', href: '/contact' }}
      />

      {/* 2. Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug max-w-4xl">
          <span className="text-[#FFFFFF]">
            We don&apos;t hand off a website and disappear. We build it, film it, post it, and watch the numbers.
          </span>{' '}
          <span className="text-[#998F8F]">
            One team end to end. Based in one office, working with brands who&apos;d rather move fast than sit in six rounds of approvals.
          </span>
        </p>
      </section>

      {/* 3. Why It's Broken — Flow Diagram */}
      <WhyItsBroken />

      {/* 4. Client Logo Marquee */}
      <LogoMarquee logos={MARKETING_CLIENTS} />

      {/* 5. Sticky Work Showcase */}
      <StickyShowcase items={MARKETING_SHOWCASE_ITEMS} />

      {/* 6. Contact / CTA Section */}
      <ContactForm />
    </div>
  );
}


