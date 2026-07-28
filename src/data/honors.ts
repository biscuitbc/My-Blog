export interface HonorItem {
  title: string;
  organization?: string;
  date?: string;
  category?: string;
  description?: string;
  link?: string;
  featured?: boolean;
}

export const honors: HonorItem[] = [
  {
    title: "S.T. Yau College Mathematics Contest",
    description: "Honorable Mention in Probability and Statistics",
    featured: true,
  },
  {
    title: "ICPC & CCPC Regional Contest",
    description: "Gold Medal",
    featured: true,
  },
];
