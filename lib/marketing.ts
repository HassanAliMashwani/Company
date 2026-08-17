// ── Existing Managed Clients ────────────────────────────────────────

export type ManagedClient = {
  id: string;
  number: string;
  name: string;
};

export const MANAGED_CLIENTS: ManagedClient[] = [
  { id: 'apex-motors', number: '01', name: 'Apex Motor Gallery' },
  { id: 'skyline-residences', number: '02', name: 'Skyline Real Estate & Residences' },
  { id: 'velocity-auto', number: '03', name: 'Velocity Auto Collection' },
  { id: 'haven-living', number: '04', name: 'Haven Luxury Living' },
  { id: 'monarch-showrooms', number: '05', name: 'Monarch Showrooms' },
  { id: 'sterling-realty', number: '06', name: 'Sterling Realty Group' },
  { id: 'prestige-vault', number: '07', name: 'Prestige Auto Vault' },
  { id: 'horizon-estates', number: '08', name: 'Horizon Estates' },
];

// ── Marketing Page: Showcase Items (Sticky Scroll Section) ─────────

export type ShowcaseItem = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  result: string;
  image: string;
};

export const MARKETING_SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    category: 'Web & Product',
    title: 'Nordvale — Booking Platform Rebuild',
    description:
      'A full rebuild of a ski resort\'s booking system — real-time availability, dynamic pricing, and a checkout flow that doesn\'t make people rage-quit halfway through.',
    tags: ['Next.js', 'Stripe', 'Real-time Data'],
    result: 'Cut checkout drop-off by 34% in the first month',
    image: '[[PLACEHOLDER: Nordvale booking platform screenshot]]',
  },
  {
    category: 'Content & Reels',
    title: 'Fig & Salt — Menu Launch Series',
    description:
      'An 8-part vertical video series for a restaurant\'s seasonal menu drop — kitchen process, plating shots, and a chef interview cut down to 15 seconds each.',
    tags: ['Short-form Video', 'Direction', 'Editing'],
    result: 'Most-viewed content in the brand\'s history — 1.1M combined views',
    image: '[[PLACEHOLDER: Fig & Salt reel thumbnail]]',
  },
  {
    category: 'Social Strategy',
    title: 'Amber Tide — Community Rebuild',
    description:
      'A ground-up social strategy for a swimwear brand recovering from a stalled account — content calendar, tone reset, and a community management overhaul.',
    tags: ['Content Calendar', 'Community Mgmt', 'Brand Voice'],
    result: 'Grew engagement rate from 0.8% to 4.1% in one quarter',
    image: '[[PLACEHOLDER: Amber Tide social grid]]',
  },
];

// ── Marketing Page: Client Logo Marquee ────────────────────────────

export const MARKETING_CLIENTS: string[] = [
  'Nordvale',
  'Palette & Co',
  'Hearth Supply',
  'Loop Digital',
  'Amber Tide',
  'Stonewell',
  'Fig & Salt',
  'Circuit Nine',
  'Wanderline',
  'Basecamp Studio',
];
