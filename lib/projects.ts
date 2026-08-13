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
  mobileImage: string;
  visualLabels: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'grabify',
    name: 'Grabify',
    tier: 'major',
    tags: ['Web', 'SaaS', 'Design'],
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
      '[[PLACEHOLDER: Grabify mobile responsive state]]',
    ],
    desktopImage: '[[PLACEHOLDER: Grabify desktop map UI screenshot]]',
    mobileImage: '[[PLACEHOLDER: Grabify mobile bottom-drawer view]]',
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
      '[[PLACEHOLDER: PDF parser preview interface]]',
    ],
    desktopImage: '[[PLACEHOLDER: AI Resume Analyzer desktop dashboard screenshot]]',
    mobileImage: '[[PLACEHOLDER: AI Resume Analyzer mobile score preview]]',
    visualLabels: ['Vector Cosine Match', 'PDF Parser Engine', 'Skill Gap Matrix'],
  },
  {
    slug: 'school-fee-saas',
    name: 'School Fee Submission SaaS',
    tier: 'major',
    tags: ['SaaS', 'Web'],
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
      '[[PLACEHOLDER: Automated reminder configuration page]]',
    ],
    desktopImage: '[[PLACEHOLDER: School Fee SaaS admin ledger screenshot]]',
    mobileImage: '[[PLACEHOLDER: School Fee SaaS mobile statement view]]',
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
    mobileImage: '[[PLACEHOLDER: Music Recommender mobile track preview]]',
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
    mobileImage: '[[PLACEHOLDER: Emotion Detection mobile mood player]]',
    visualLabels: ['OpenCV Haar Cascades', 'PyTorch FER2013 Model'],
  },
  {
    slug: 'student-semester-os',
    name: 'Student Semester OS',
    tier: 'compact',
    tags: ['Web', 'SaaS', 'Design'],
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
    mobileImage: '[[PLACEHOLDER: Student Semester OS mobile schedule view]]',
    visualLabels: ['GPA Forecast Engine', 'Zustand Optimistic UI', 'Deadlines Kanban'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
