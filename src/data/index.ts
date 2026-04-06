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
    tags: ["React", "Nextjs","JavaScript", "Html","Tailwindcss" ,],
    image:
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://mern-ecommerce-qyry.onrender.com/",
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
    link: "https://adventureclient.vercel.app/",
    github: "https://github.com/Dineshkuna/adventureclient",
  },
  {
  id: "3",
  title: "Weather App",
  description:
    "A responsive weather application built with HTML, CSS, and JavaScript that delivers real-time weather updates for any searched city. The app fetches live data from the OpenWeatherMap API, displaying key metrics like temperature, humidity, wind speed, and weather conditions. Designed with a clean, intuitive UI and optimized for seamless performance across all devices.",
  tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "REST API"],
  image:
    "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "https://dineshkuna.github.io/weatherApp_AIT/",
  github: "https://github.com/Dineshkuna/weatherApp_AIT",
},
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
    role: "Next.js & React.js Developer",
    company: "Weblabs solutions pvt.ltd",
    duration: "May 2025 – Feb 2026",
    description: [
      "Developed responsive, high-performance web applications using HTML, CSS, JavaScript, and React.js for event and pharmaceutical business domains.",
      "Implemented modern UI/UX practices, ensuring visually consistent and user-friendly interfaces aligned with client requirements.",
      "Integrated dynamic forms, applied SEO best practices including semantic HTML and optimized meta structure, and improved page performance through lazy loading and asset optimization.",
      "Built and maintained an Admin Dashboard, handling UI enhancements, bug fixes, and iterative frontend updates based on client feedback.",
      "Deployed and maintained production-ready applications, ensuring clean DOM structure, accessibility standards, and long-term code maintainability.",
    ],
    
  },

  {
    id: "2",
    role: "Software Developer",
    company: "MasterKube software solutions pvt.ltd",
    duration: "Oct 2023 – March 2025",
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
    id: "3",
    role: "Full Stack Developer",
    company: "Tek Systems.",
    duration: "May 2023 – Sep 2023",
    description: [
      "Lead Front-End React Developer for the Digital Credit Portal (DCP), a banking application for HSBC (US Bank).",
      "Built high-performance, responsive, and accessible applications using React.js by developing new features and enhancing existing ones.",
      "Resolved complex styling issues to improve user experience and maintain visual consistency.",
      "Developed UI screens based on precise client requirements, ensuring pixel-perfect implementation.",
      "Wrote clean, well-documented, and maintainable code following modern software engineering best practices.",
    ],
    
  },
  

  // {
  //   id: "3",
  //   role: "Billing Engineer",
  //   company: "Chabbars Associates.",
  //   duration: "Nov 2019 - Dec 2021",
  //   description: [
  //     "Prepared and verified detailed billing reports and documentation for construction and infrastructure projects, ensuring accuracy and compliance with project specifications.",
  //     "Collaborated with project managers and site engineers to track work progress, material usage, and generate timely client invoices.",
  //     "Maintained organized records and supported audits by ensuring accurate cost estimations, quantity take-offs, and billing schedules",
      
  //   ],
    
  // },
  
];

export const skills: Skill[] = [
  { name: "React.js", icon: "code-square", level: 85 },
  { name: "Next.js", icon: "next", level: 85 },
  { name: "JavaScript", icon: "code", level: 90 },
  { name: "Bootstrap/Tailwind", icon: "palette", level: 80 },
  { name: "HTML/CSS", icon: "palette", level: 90 },
  { name: "Node.js", icon: "server", level: 90 },
  { name: "Express", icon: "express", level: 85 },
  { name: "MongoDB", icon: "database", level: 80 },
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
  title: "Frontend Engineer | Mern Developer (React.js | Next.js)",
  description: `I build scalable, high-performance web applications 
used by real businesses in pharma, eCommerce, and enterprise domains.
`,
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
