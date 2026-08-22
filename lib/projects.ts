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
    slug: 'grabify',
    name: 'Grabify',
    tier: 'major',
    tags: ['Web', 'SaaS', 'Design', 'Marketing'],
    stack: ['Next.js 14', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    year: '2025',
    role: 'Full Stack Development & UI/UX',
    summary: 'A location-based social experience for real-time proximity discovery and instant interaction.',
    outcome: 'Runner-up — VISIO Spark Hackathon 2025',
    client: 'Hackathon Project',
    industry: 'Social / Location Services',
    teamSize: '3 Developers',
    featuredScreens: [
      '[[PLACEHOLDER: Grabify primary dashboard screenshot]]',
      '[[PLACEHOLDER: Grabify live interactive map view]]',
    ],
    desktopImage: '[[PLACEHOLDER: Grabify desktop map UI screenshot]]',
    visualLabels: ['Proximity Radar', 'GeoHash Spatial Queries', 'Real-time Listeners'],
  },
  {
    slug: 'resume-analyzer',
    name: 'AI Resume Analyzer & Career Matchmaker',
    tier: 'major',
    tags: ['AI/ML', 'Web', 'SaaS'],
    stack: ['Next.js 14', 'FastAPI', 'Python', 'NLP', 'PostgreSQL'],
    year: '2025',
    role: 'AI Engineering & Full Stack',
    summary: 'Intelligent resume parser and career trajectory predictor powered by custom NLP embeddings.',
    outcome: 'Shipped production MVP — 1,200+ resumes parsed during initial rollout',
    client: 'Internal Product / Production SaaS',
    industry: 'HR Tech / EdTech',
    teamSize: '4 Developers',
    featuredScreens: [
      '[[PLACEHOLDER: AI Resume Analyzer scoring dashboard]]',
      '[[PLACEHOLDER: Career skill gap visualization screen]]',
    ],
    desktopImage: '[[PLACEHOLDER: AI Resume Analyzer desktop dashboard screenshot]]',
    visualLabels: ['Vector Cosine Match', 'PDF Parser Engine', 'Skill Gap Matrix'],
  },
  {
    slug: 'school-fee-saas',
    name: 'School Fee Submission SaaS',
    tier: 'major',
    tags: ['SaaS', 'Web', 'Marketing'],
    stack: ['Next.js 14', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    year: '2024',
    role: 'Full Stack Architecture & Payment Gateway',
    summary: 'Multi-tenant automated fee collection platform for private educational institutions.',
    outcome: 'Processed over $450K+ in total automated recurring tuition billing',
    client: 'Regional School System',
    industry: 'FinTech / EdTech',
    teamSize: '3 Developers',
    featuredScreens: [
      '[[PLACEHOLDER: School Fee SaaS billing overview]]',
      '[[PLACEHOLDER: Student invoice payment portal]]',
    ],
    desktopImage: '[[PLACEHOLDER: School Fee SaaS admin ledger screenshot]]',
    visualLabels: ['Automated Billing', 'Stripe Billing Vault', 'Multi-tenant Isolation'],
  },
  {
    slug: 'music-recommender',
    name: 'Music Recommendation System',
    tier: 'compact',
    tags: ['AI/ML', 'Web'],
    stack: ['Python', 'Spotify API', 'Scikit-learn', 'React', 'FastAPI'],
    year: '2024',
    role: 'Machine Learning & Frontend',
    summary: 'Content-filtering music discovery engine using audio features and Spotify API track analysis.',
    outcome: 'Shipped R&D prototype with sub-50ms vector distance lookups',
    client: 'Studio R&D',
    industry: 'Media & Entertainment',
    teamSize: '2 Developers',
    featuredScreens: [
      '[[PLACEHOLDER: Music Recommender playlist generator interface]]',
    ],
    desktopImage: '[[PLACEHOLDER: Music Recommender desktop audio matrix screenshot]]',
    visualLabels: ['Spotify Audio Features', 'K-NN Nearest Neighbors'],
  },
  {
    slug: 'emotion-detection',
    name: 'Emotion Detection + Music Recommendation',
    tier: 'compact',
    tags: ['AI/ML', 'Web'],
    stack: ['OpenCV', 'PyTorch', 'FastAPI', 'React', 'Tailwind CSS'],
    year: '2025',
    role: 'Computer Vision & API Integration',
    summary: 'Real-time facial expression classifier that dynamically curated personalized Spotify playlists.',
    outcome: 'Achieved 91.4% emotion classification accuracy on benchmark dataset',
    client: 'Studio Prototype',
    industry: 'AI / Interactive Media',
    teamSize: '2 Developers',
    featuredScreens: [
      '[[PLACEHOLDER: Emotion Detection webcam overlay interface]]',
    ],
    desktopImage: '[[PLACEHOLDER: Emotion Detection desktop vision overlay screenshot]]',
    visualLabels: ['OpenCV Haar Cascades', 'PyTorch FER2013 Model'],
  },
  {
    slug: 'student-semester-os',
    name: 'Student Semester OS',
    tier: 'compact',
    tags: ['Web', 'SaaS', 'Design', 'Marketing'],
    stack: ['Next.js 14', 'Supabase', 'Zustand', 'Tailwind CSS'],
    year: '2024',
    role: 'Product Design & Frontend',
    summary: 'All-in-one academic planner, course schedule manager, and GPA forecasting workspace.',
    outcome: 'Adopted by 800+ active university student users',
    client: 'Open Source Studio Tool',
    industry: 'Productivity',
    teamSize: '2 Developers',
    featuredScreens: [
      '[[PLACEHOLDER: Student Semester OS kanban schedule board]]',
    ],
    desktopImage: '[[PLACEHOLDER: Student Semester OS desktop kanban screenshot]]',
    visualLabels: ['GPA Forecast Engine', 'Zustand Optimistic UI', 'Deadlines Kanban'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
