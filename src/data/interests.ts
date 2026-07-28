export interface InterestItem {
  title: string;
  description?: string;
  icon?: "sparkles" | "cpu" | "code" | "database" | "shield" | "brain" | "book";
  tags?: string[];
}

export const interests: InterestItem[] = [];
