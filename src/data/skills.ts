import {
  SiDjango,
  SiFastapi,
  SiReact,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
  SiGooglecloud,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
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
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
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
    sectionName: "Databases & DevOps",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },
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
        name: "Cloudinary",
        icon: SiGooglecloud,
      },
      {
        name: "Cybersecurity",
        icon: GitSvg, // Using Git icon as placeholder
      },
    ],
  },
];
