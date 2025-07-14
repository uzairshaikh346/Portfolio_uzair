import { SiNextdotjs } from "react-icons/si";
import {
  FramerMotionIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import SanitySvg from "@/public/icons/sanity.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import GithubSvg from "@/public/icons/github.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import VscodeSvg from "@/public/icons/vscode.svg";
import CursorSvg from "@/public/icons/cursor.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "Javascript", icon: JavascriptSvg },
      { name: "Typescript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      { name: "React.js", icon: ReactjsSvg },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux Toolkit", icon: ReduxSvg },
      { name: "Tailwind CSS", icon: TailwindcssSvg },
      { name: "Framer Motion", icon: FramerMotionIcon },
      { name: "Vite", icon: ViteSvg },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Node.js", icon: NodejsSvg },
      { name: "Sanity CMS", icon: SanitySvg },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [{ name: "MongoDB", icon: MongoDBSvg }],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "GitHub", icon: GithubSvg },
      { name: "Postman", icon: PostmanSvg },
      { name: "VS Code", icon: VscodeSvg },
      { name: "Cursor", icon: CursorSvg },
    ],
  },
];
