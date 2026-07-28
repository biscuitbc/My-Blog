export interface ResearchItem {
  title: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  highlights?: string[];
  tags?: string[];
  links?: {
    paper?: string;
    code?: string;
    slides?: string;
    project?: string;
  };
}

export const research: ResearchItem[] = [];
