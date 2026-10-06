export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedinUrl: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skillCategories: SkillCategory[];
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at: string;
  homepage?: string | null;
  clone_url?: string;
  open_issues_count?: number;
  default_branch?: string;
}
