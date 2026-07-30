export interface NavigationItem {
  label: string;
  href: `#${string}`;
  section: "home" | "education" | "interests" | "research" | "projects" | "honors" | "skills" | "notes" | "about";
  enabled: boolean;
}

export const navigation: NavigationItem[] = [
  { label: "About", href: "#about", section: "about", enabled: true },
  { label: "Education", href: "#education", section: "education", enabled: true },
  { label: "Honors", href: "#honors", section: "honors", enabled: true },
  { label: "Notes", href: "#notes", section: "notes", enabled: true },
];
