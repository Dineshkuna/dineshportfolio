export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}