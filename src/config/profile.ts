export interface Profile {
  /** 中文或主要显示姓名 */
  name: string;
  /** 英文名 */
  nameEn: string;
  /** 用户名（页面会自动补全 @） */
  username: string;
  /** 站内头像路径；文件不存在时自动使用渐变占位 */
  avatar: string;
  /** 首页主标题 */
  headline: string;
  /** 简短个人介绍 */
  bio: string;
  /** 个性签名 */
  signature: string;
  /** 所在城市或地区 */
  location: string;
  /** 学校或单位 */
  university: string;
  /** 学校或单位官网 */
  universityUrl: string;
  /** 学院 */
  college: string;
  /** 专业或方向 */
  major: string;
  /** 联系邮箱 */
  email: string;
  /** 个人网站 */
  website: string;
  /** 简历地址 */
  cv: string;
  /** GitHub 地址 */
  github: string;
  /** LinkedIn 地址 */
  linkedin: string;
  /** Bilibili 地址 */
  bilibili: string;
  /** X / Twitter 地址 */
  twitter: string;
  /** 当前关注的课题或工作 */
  currentFocus: string;
  /** 个人介绍中需要高亮的兴趣方向 */
  interestHighlight: string;
  /** 合作、求职或联系状态 */
  availability: string;
}

export const profile: Profile = {
  name: "Pengju Jin",
  nameEn: "",
  username: "biscuitbc",
  avatar: "/images/avatar.jpg",
  headline: "",
  bio: "I'm a second-year undergraduate at Zhejiang University, double majoring in Computer Science & Technology and Mathematics (Statistics).",
  signature: "Life is a submartingale.",
  location: "Hangzhou, Zhejiang, China",
  university: "Zhejiang University",
  universityUrl: "https://www.zju.edu.cn/english/",
  college: "",
  major: "Computer Science & Technology and Mathematics (Statistics)",
  email: "matrixcascadeqwq@gmail.com",
  website: "",
  cv: "",
  github: "https://github.com/biscuitbc",
  linkedin: "",
  bilibili: "",
  twitter: "",
  currentFocus: "",
  interestHighlight: "Probability Theory and Stochastic Analysis",
  availability: "",
};

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "mail" | "file-text" | "linkedin" | "video" | "twitter" | "globe";
  enabled: boolean;
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: profile.github, icon: "github", enabled: true },
  { name: "Email", url: profile.email ? `mailto:${profile.email}` : "", icon: "mail", enabled: false },
  { name: "CV", url: profile.cv, icon: "file-text", enabled: false },
  { name: "LinkedIn", url: profile.linkedin, icon: "linkedin", enabled: false },
  { name: "Bilibili", url: profile.bilibili, icon: "video", enabled: false },
  { name: "Twitter", url: profile.twitter, icon: "twitter", enabled: false },
  { name: "Website", url: profile.website, icon: "globe", enabled: false },
];
