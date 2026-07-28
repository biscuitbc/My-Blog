export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  copyrightStartYear: string;
  currentYear: number;
  repository: string;
  rssEnabled: boolean;
  locale: string;
  brandColor: string;
  showEditorHints: boolean;
  effectsEnabled: boolean;
  ogImage: string;
}

export const siteConfig: SiteConfig = {
  title: "Pengju Jin",
  description: "Personal homepage of Pengju Jin, an undergraduate studying Computer Science & Technology and Mathematics (Statistics) at Zhejiang University.",
  author: "Pengju Jin",
  copyrightStartYear: "",
  currentYear: new Date().getFullYear(),
  repository: "",
  rssEnabled: true,
  locale: "en",
  brandColor: "#6d5dfc",
  showEditorHints: true,
  effectsEnabled: true,
  ogImage: "",
};
