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
    avatar: '/umer liaqat.png',
    github: 'https://github.com/urj2258',
    linkedin: 'https://www.linkedin.com/in/umer-liaqat/',
  },
  {
    id: 'hassan-ali',
    name: 'Hassan Ali',
    role: 'AI / Machine Learning Engineer',
    specialty: 'Specializes in high-dimensional NLP vector embeddings and real-time computer vision.',
    stack: ['Python', 'FastAPI', 'PyTorch', 'OpenCV'],
    avatar: '/Hassan Ali.png',
    github: 'https://github.com/HassanAliMashwani',
    linkedin: 'https://www.linkedin.com/in/hassan-ali-mashwani-940bb62b0/',
  },
  {
    id: 'hadi-raza',
    name: 'Hadi Raza',
    role: 'UI/UX & Product Designer',
    specialty: 'Crafts high-impact design token architectures and fluid interactive component systems.',
    stack: ['Figma', 'Design Systems', 'Framer Motion', 'CSS'],
    avatar: '/Hadi.png',
    github: 'https://github.com/4HadiRaza',
    linkedin: 'https://www.linkedin.com/in/hadi-raza-1103652a0/',
  },
  {
    id: 'tayyab-atiq',
    name: 'Tayyab Atiq',
    role: 'Backend & Cloud Engineer',
    specialty: 'Engineers fault-tolerant microservices, Stripe billing engines, and database infrastructure.',
    stack: ['Node.js', 'Supabase', 'Docker', 'Stripe'],
    avatar: '/Tayab atiq.png',
    github: 'https://github.com/Tayyab2344',
    linkedin: 'https://www.linkedin.com/in/rana-muhammad-tayyab-atiq-890689252/',
  },
  {
    id: 'taifoor-farid',
    name: 'Taifoor Farid',
    role: 'Frontend & Interactive Engineer',
    specialty: 'Focuses on 60FPS GSAP scroll choreography, Lenis smooth scroll, and WebGL accents.',
    stack: ['React', 'GSAP', 'Lenis', 'Tailwind CSS'],
    avatar: '/Taifoor Farid.png',
    github: 'https://github.com/TaifoorFarid',
    linkedin: 'https://www.linkedin.com/in/taifoor-farid-siddiqui-939b40260/',
  },
  {
    id: 'allayan-mughal',
    name: 'Allayan Mughal',
    role: 'Client Partner & Product Strategist',
    specialty: 'Bridges technical engineering execution with client business goals and project delivery.',
    stack: ['Product Management', 'Scrum', 'Client Outreach'],
    avatar: '/Allayan Mughal.png',
    github: 'https://github.com/allayanmughal',
    linkedin: 'https://www.linkedin.com/in/aalyan-mughal-2a4b09299/',
  },
  {
    id: 'muhammad-shahzaib',
    name: 'Muhammad Shahzaib',
    role: 'Full Stack & DevOps Engineer',
    specialty: 'Builds robust distributed pipelines, cloud infrastructure, and modern web applications.',
    stack: ['Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    avatar: '/Shahzaib.png',
    github: 'https://github.com/Shahzeb13',
    linkedin: 'https://www.linkedin.com/in/shahzaib-raza-26baa7343/',
  },
];
