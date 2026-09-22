export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  location: string;
  description: string;
  relevantSubjects?: string[];
  honors?: string;
  gpa?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl: string;
  description: string;
  category: 'Bio-Technology' | 'Genomics' | 'Software' | 'Award' | 'Research';
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  category: 'Bio-Technology' | 'Computational Biology' | 'Full-Stack' | 'Research';
  tags: string[];
  tools: string[];
  year: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export interface ContactInfo {
  phone: string;
  displayPhone: string;
  email: string;
  location: string;
  mapUrl?: string;
  availability: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  googleScholar?: string;
  researchGate?: string;
  twitter?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  degreeBadge: string;
  shortBio: string;
  fullBio: string;
  profilePictureUrl: string;
  contact: ContactInfo;
  socials: SocialLinks;
  education: EducationItem[];
  certificates: CertificateItem[];
  projects: ProjectItem[];
  skills: {
    category: string;
    items: string[];
  }[];
}
