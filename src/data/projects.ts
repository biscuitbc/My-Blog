export interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  article?: string;
  featured?: boolean;
}

export const projects: ProjectItem[] = [];
