import { Project, Experience, Skill, Education, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A fully functional e-commerce platform with product management, cart functionality, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/example/ecommerce',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/taskmanager',
    github: 'https://github.com/example/taskmanager',
  },
  {
    id: '3',
    title: 'Financial Dashboard',
    description: 'An interactive dashboard for tracking personal finances with data visualization and budgeting tools.',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/finance',
    github: 'https://github.com/example/finance',
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'A tool for analyzing social media engagement and providing actionable insights.',
    tags: ['Python', 'React', 'Data Analysis', 'API Integration'],
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/analytics',
    github: 'https://github.com/example/analytics',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Software Developer',
    company: 'TechNova Solutions',
    duration: 'Jan 2021 - Present',
    description: [
      'Lead a team of 5 developers in building and maintaining enterprise-level applications',
      'Implemented CI/CD pipelines that reduced deployment time by 40%',
      'Designed and developed RESTful APIs serving over 10,000 requests per day',
      'Optimized database queries that improved application performance by 35%'
    ],
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Digital Pathways Inc.',
    duration: 'Mar 2018 - Dec 2020',
    description: [
      'Developed and maintained multiple web applications using React and Node.js',
      'Collaborated with product managers to design and implement new features',
      'Reduced application load time by 50% through code optimization and caching strategies',
      'Participated in code reviews and mentored junior developers'
    ],
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'WebSphere Technologies',
    duration: 'Jun 2016 - Feb 2018',
    description: [
      'Built responsive user interfaces using HTML, CSS, and JavaScript',
      'Worked with the design team to implement pixel-perfect layouts',
      'Integrated third-party APIs and services into web applications',
      'Improved the accessibility of web applications to meet WCAG standards'
    ],
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript', icon: 'code', level: 90 },
  { name: 'React', icon: 'code-square', level: 85 },
  { name: 'Node.js', icon: 'server', level: 80 },
  { name: 'TypeScript', icon: 'file-type', level: 75 },
  { name: 'HTML/CSS', icon: 'palette', level: 90 },
  { name: 'SQL', icon: 'database', level: 75 },
  { name: 'MongoDB', icon: 'database', level: 70 },
  { name: 'Git', icon: 'git-branch', level: 85 },
  { name: 'Docker', icon: 'container', level: 65 },
  { name: 'AWS', icon: 'cloud', level: 60 },
];

export const education: Education[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Technology',
    year: '2015 - 2016',
    description: 'Specialized in Software Engineering with a focus on scalable applications and advanced algorithms.',
  },
  {
    degree: 'Bachelor of Technology in Computer Engineering',
    institution: 'National Institute of Technology',
    year: '2011 - 2015',
    description: 'Graduated with honors. Completed a capstone project on real-time data processing systems.',
  },
];

export const about = {
  name: 'Dinesh Kuna',
  title: 'Senior Software Developer',
  description: `I'm a passionate software developer with over 3+ years of experience in building modern web applications. My expertise lies in frontend development with React and JavaScript.I enjoy solving complex problems.`,
  location: 'Hyderabad,India',
  email: 'kunadinesh.work@gmail.com',
  phone: '+91 8019482404', // Fictional number as placeholder
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/Dineshkuna', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dinesh-kuna/', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
  ],
};