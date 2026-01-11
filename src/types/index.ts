export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  links: ProjectLink[];
  technologies: string[];
  date: string;
  category: 'game' | 'web' | 'other';
}

export interface ProjectLink {
  type: 'github' | 'itchio' | 'video' | 'live' | 'steam' | 'linkedin' | 'website' | 'googleplay';
  url: string;
}

export interface Achievement {
  id: string;
  eventName: string;
  role: string;
  description: string;
  date: string;
  logo?: string;
  links?: AchievementLink[];
}

export interface AchievementLink {
  type: 'website' | 'certificate' | 'project' | 'video';
  url: string;
  label?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
