export interface EducationItem {
  institution: string;
  logo?: string;
  degree?: string;
  field?: string;
  programs?: {
    degree: string;
    school?: string;
  }[];
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
  courses?: string[];
  links?: { label: string; url: string }[];
}

export const education: EducationItem[] = [
  {
    institution: "Zhejiang University",
    logo: "/images/zju.svg",
    startDate: "Sep 2024",
    endDate: "Present",
    programs: [
      {
        degree: "B.Eng. in Computer Science & Technology",
        school: "School of Computer Science and Technology",
      },
      {
        degree: "B.Sc. in Statistics",
        school: "School of Mathematics Science",
      },
    ],
  },
];
