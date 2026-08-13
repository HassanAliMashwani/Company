export type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  stack: string[];
  avatar: string;
  github?: string;
  linkedin?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'umer-liaqat',
    name: 'Umer Liaqat',
    role: 'Lead Systems Architect',
    specialty: 'A Software Engineer who has developed countless innovative solutions.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    avatar: '[[PLACEHOLDER: Team lead portrait photo]]',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'hassan-ali',
    name: 'Hassan Ali',
    role: 'AI / Machine Learning Engineer',
    specialty: 'Specializes in high-dimensional NLP vector embeddings and real-time computer vision.',
    stack: ['Python', 'FastAPI', 'PyTorch', 'OpenCV'],
    avatar: '[[PLACEHOLDER: AI engineer portrait photo]]',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'hadi-raza',
    name: 'Hadi Raza',
    role: 'UI/UX & Product Designer',
    specialty: 'Crafts high-impact design token architectures and fluid interactive component systems.',
    stack: ['Figma', 'Design Systems', 'Framer Motion', 'CSS'],
    avatar: '[[PLACEHOLDER: Designer portrait photo]]',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'tayyab-atiq',
    name: 'Tayyab Atiq',
    role: 'Backend & Cloud Engineer',
    specialty: 'Engineers fault-tolerant microservices, Stripe billing engines, and database infrastructure.',
    stack: ['Node.js', 'Supabase', 'Docker', 'Stripe'],
    avatar: '[[PLACEHOLDER: Backend engineer portrait photo]]',
    github: 'https://github.com',
  },
  {
    id: 'taifoor-farid',
    name: 'Taifoor Farid',
    role: 'Frontend & Interactive Engineer',
    specialty: 'Focuses on 60FPS GSAP scroll choreography, Lenis smooth scroll, and WebGL accents.',
    stack: ['React', 'GSAP', 'Lenis', 'Tailwind CSS'],
    avatar: '[[PLACEHOLDER: Frontend engineer portrait photo]]',
    github: 'https://github.com',
  },
  {
    id: 'muhammad-shahzaib',
    name: 'Muhammad Shahzaib',
    role: 'Client Partner & Product Strategist',
    specialty: 'Bridges technical engineering execution with client business goals and project delivery.',
    stack: ['Product Management', 'Scrum', 'Client Outreach'],
    avatar: '[[PLACEHOLDER: Client partner portrait photo]]',
    linkedin: 'https://linkedin.com',
  },
];
