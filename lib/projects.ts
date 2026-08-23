export type ProjectTier = 'major' | 'compact';

export type Project = {
  slug: string;
  name: string;
  tier: ProjectTier;
  tags: string[];
  stack: string[];
  year: string;
  role: string;
  summary: string;
  outcome: string;
  client: string;
  industry: string;
  teamSize: string;
  featuredScreens: string[];
  desktopImage: string;
  mobileImage?: string;
  visualLabels: string[];
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: 'recyconnect',
    name: 'RecyConnect',
    tier: 'major',
    tags: ['AI/ML', 'Web', 'SaaS', 'CleanTech'],
    stack: [
      'Flutter',
      'Node.js',
      'Express.js',
      'Next.js',
      'PostgreSQL',
      'TensorFlow',
      'OpenCV',
      'Stripe',
      'Firebase FCM',
      'Mapbox',
    ],
    year: '2025',
    role: 'Full Stack AI & Platform Architecture',
    summary:
      'An AI-powered recycling marketplace that connects households, waste collectors, warehouses, and companies to buy, sell, classify, and manage recyclable materials through a unified digital platform.',
    outcome: 'AI waste classification with sub-second inference & unified multi-stakeholder recycling marketplace',
    client: 'RecyConnect EcoTech',
    industry: 'CleanTech / AI Logistics / Circular Economy',
    teamSize: '4 Developers',
    featuredScreens: ['/projects/recyconnect-desktop.jpg', '/projects/recyconnect-mobile.jpg'],
    desktopImage: '/projects/recyconnect-desktop.jpg',
    mobileImage: '/projects/recyconnect-mobile.jpg',
    visualLabels: ['TensorFlow Waste Vision', 'Real-time Mapbox Routing', 'Multi-tenant Marketplace', 'Stripe Escrow Payments'],
    liveUrl: 'https://recyconnect.ranatayyab.dev/',
  },
  {
    slug: 'premier-academy',
    name: 'Premier Academy',
    tier: 'major',
    tags: ['Web', 'SaaS', 'EdTech', 'Design'],
    stack: ['Next.js', 'NestJS', 'Flutter', 'PostgreSQL', 'Zoom API', 'Tailwind CSS'],
    year: '2025',
    role: 'Full Stack Architecture & LMS Engine',
    summary:
      'A modern Learning Management System (LMS) for Premier Academy that manages courses, students, online learning, and live classes with Zoom integration and recorded lessons.',
    outcome: 'End-to-end LMS platform powering live classes, automated attendance, and HD lecture delivery for 25K+ students',
    client: 'Premier Academy Tax & Accounting School',
    industry: 'EdTech / Professional Education',
    teamSize: '3 Developers',
    featuredScreens: ['/projects/premier-academy-desktop.jpg'],
    desktopImage: '/projects/premier-academy-desktop.jpg',
    visualLabels: ['Zoom Meeting Bridge', 'Automated Attendance', 'HD Video Streaming', 'Course Progress Analytics'],
    liveUrl: 'https://premier-lms-frontend.vercel.app/',
  },
  {
    slug: 'trackmate',
    name: 'TrackMate',
    tier: 'major',
    tags: ['Web', 'Mobile', 'SaaS', 'AI/ML'],
    stack: ['Next.js', 'Flutter', 'Spring Boot', 'PostgreSQL', 'ScyllaDB', 'Redis', 'Elasticsearch'],
    year: '2026',
    role: 'Full Stack & Distributed Systems Architecture',
    summary:
      'TrackMate is an intelligent activity and route tracking platform that helps athletes and commuters record journeys, analyze real-time performance, and connect with an active community.',
    outcome: 'High-throughput GPS telemetry processing with ScyllaDB time-series ingestion and sub-10ms route search',
    client: 'TrackMate Mobility Labs',
    industry: 'Fitness Tech / Geospatial Telemetry',
    teamSize: '4 Developers',
    featuredScreens: [
      '/projects/trackmate-desktop.png',
      '/projects/trackmaster-3.jfif',
      '/projects/trackmate-mobile-1.jpg',
      '/projects/trackmate-mobile-2.jpg',
    ],
    desktopImage: '/projects/trackmate-desktop.png',
    mobileImage: '/projects/trackmaster-3.jfif',
    visualLabels: ['ScyllaDB Time-Series', 'Satellite Live Tracking', 'Elasticsearch Route Search', 'Redis Leaderboards'],
    liveUrl: 'https://www.trackmate.page/',
  },
  {
    slug: 'primeview',
    name: 'PrimeView',
    tier: 'major',
    tags: ['Desktop', 'Automation', 'Electron', 'Real Estate'],
    stack: ['Electron', 'Node.js', 'JavaScript', 'HTML5/CSS3', 'SQLite', 'PDFKit'],
    year: '2025',
    role: 'Desktop App Architecture & Workflow Automation',
    summary:
      'Desktop automation system that replaced thousands of hand-filled forms and manual record-keeping with a streamlined digital workflow — built for a real estate client (Prime View Co-operative Housing Society Ltd.).',
    outcome: 'Eliminated 100% of manual paper forms with automated digital ledger, member records, and instant PDF invoice generation',
    client: 'Prime View Co-operative Housing Society Ltd.',
    industry: 'Real Estate / Housing Society Management',
    teamSize: '2 Developers',
    featuredScreens: ['/projects/primeview-desktop.jpg'],
    desktopImage: '/projects/primeview-desktop.jpg',
    visualLabels: ['Electron Desktop Engine', 'Automated Record Ledger', 'One-Click PDF Generation', 'Offline-First Architecture'],
    liveUrl: 'https://github.com/Shahzeb13/Prime.git',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
