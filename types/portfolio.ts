export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  period: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  featured: boolean;
  migration?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  summary: string;
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  additionalInfo: string[];
}
