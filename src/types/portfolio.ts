export type ProjectCategory = 
  | "all"
  | "ai_realtime"
  | "fintech_crypto"
  | "sports_enterprise"
  | "ecommerce_food";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  architectureDetails: string[];
  techStack: string[];
  metrics: string[];
  featured?: boolean;
  role: string;
  company?: string;
  demoUrl?: string;
  githubUrl?: string;
  badge?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    tag?: string;
    experience?: string;
  }[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  execute: () => string | string[];
}
