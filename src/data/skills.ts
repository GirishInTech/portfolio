import {
  SiDjango,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
  SiGooglecloud,
  SiPostgresql,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import PythonSvg from "@/public/icons/python.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import AwsSvg from "@/public/icons/aws.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "SQL",
        icon: SiPostgresql,
      },
    ],
  },
  {
    sectionName: "Frameworks & Libraries",
    skills: [
      {
        name: "Django",
        icon: SiDjango,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
      },
      {
        name: "Pandas",
        icon: SiPandas,
      },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
      },
    ],
  },
  {
    sectionName: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Jupyter",
        icon: SiJupyter,
      },
      {
        name: "JMeter",
        icon: SiGooglecloud,
      },
      {
        name: "NeoLoad",
        icon: SiGooglecloud,
      },
      {
        name: "Cloudinary",
        icon: SiGooglecloud,
      },
      {
        name: "Gmail SMTP",
        icon: SiGooglecloud,
      },
    ],
  },
  {
    sectionName: "Cloud & AI",
    skills: [
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Google Vertex AI",
        icon: SiGooglecloud,
      },
      {
        name: "Cybersecurity",
        icon: GitSvg, // Using Git icon as placeholder
      },
    ],
  },
];
