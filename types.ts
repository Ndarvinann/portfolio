
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  externalUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Cybersecurity' | 'Programming' | 'Tools' | 'Project Management';
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
}
