import { Project, Experience, Skill, Education, NavItem } from "../types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "An eCommerce app allows users to browse, search, and purchase products online with secure payment options. It provides features like product listings, user authentication, cart management, and order tracking.",
    tags: ["React", "JavaScript", "Html","Tailwindcss" ],
    image:
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://instamart-react-redux.vercel.app/",
    github: "https://github.com/Dineshkuna/instamart-react-redux",
  },
  {
    id: "2",
    title: "Travel App",
    description:
      "I developed a responsive travel booking application using React.js, implementing features like destination search, filters, booking flow, and user authentication. I integrated third-party APIs for travel packages, weather updates, and maps, while creating reusable UI components for a dynamic and consistent user experience. The app was optimized for performance and ensured cross-platform compatibility.",
    tags: ["React",  "Tailwind CSS", "Javascript", "NodeJs", "Express", "Mongodb"],
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "adventureclient.vercel.app",
    github: "https://github.com/Dineshkuna/adventureclient",
  },
  // {
  //   id: "3",
  //   title: "Financial Dashboard",
  //   description:
  //     "An interactive dashboard for tracking personal finances with data visualization and budgeting tools.",
  //   tags: ["React",  "Express"],
  //   image:
  //     "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   link: "https://example.com/finance",
  //   github: "https://github.com/example/finance",
  // },
  // {
  //   id: "4",
  //   title: "Social Media Analytics",
  //   description:
  //     "A tool for analyzing social media engagement and providing actionable insights.",
  //   tags: [ "React",  "API Integration"],
  //   image:
  //     "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   link: "https://example.com/analytics",
  //   github: "https://github.com/example/analytics",
  // },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Developer",
    company: "Accenture",
    duration: "Jan 2022 - Mar 2023",
    description: [
      "Contributed to the development of the Takealot eCommerce application using React.js and Redux.",
      "Created reusable components and services based on component-driven architecture.",
      "Designed and implemented an Inline Edit Component for form inputs to enhance user experience.",
      "Consumed REST APIs efficiently for dynamic data rendering and state management.",
      "Performed comprehensive API testing using Postman to ensure reliable backend integration.",
      "Developed scalable, interactive user interfaces and maintained front-end performance.",
      "Collaborated in an Agile team environment to deliver high-quality features on schedule.",
    ],
    
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Tek Systems.",
    duration: "June 2023 - Present",
    description: [
      "Lead Front-End React Developer for the Digital Credit Portal (DCP), a banking application for HSBC (US Bank).",
      "Built high-performance, responsive, and accessible applications using React.js by developing new features and enhancing existing ones.",
      "Resolved complex styling issues to improve user experience and maintain visual consistency.",
      "Developed UI screens based on precise client requirements, ensuring pixel-perfect implementation.",
      "Wrote clean, well-documented, and maintainable code following modern software engineering best practices.",
    ],
    
  },
  
];

export const skills: Skill[] = [
  { name: "JavaScript", icon: "code", level: 90 },
  { name: "React", icon: "code-square", level: 85 },
  { name: "Node.js", icon: "server", level: 50 },
  { name: "Bootstrap/Tailwind", icon: "palette", level: 80 },

  { name: "HTML/CSS", icon: "palette", level: 90 },

  { name: "MongoDB", icon: "database", level: 70 },
  { name: "Git", icon: "git-branch", level: 85 },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Civil Engineering",
    institution: "jawaharlal nehru technological university",
    year: "2015 - 2018",
    description:
      "Specialized in Civil Engineering with a focus on sustainable infrastructure, structural analysis, and innovative construction technologies.",
  },
  {
    degree: "Diploma in Civil Engineering",
    institution: "Andhra University",
    year: "2012 - 2015",
    description:
      "Completed coursework in structural design, construction technology, and surveying. Final-year project focused on cost-effective and eco-friendly residential building solutions.",
  },
];

export const about = {
  name: "Dinesh Kuna",
  title: "Senior Software Developer",
  description: `I'm a passionate software developer with over 3+ years of experience in building modern web applications. My expertise lies in frontend development with React and JavaScript.I enjoy solving complex problems.`,
  location: "Hyderabad,India",
  email: "kunadinesh.work@gmail.com",
  phone: "+91 8019482404", // Fictional number as placeholder
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Dineshkuna", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dinesh-kuna/",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter",
    },
  ],
};
