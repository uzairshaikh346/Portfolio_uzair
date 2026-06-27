import {
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiNetlify,
  SiMysql,
  SiOpenai,
  SiChatbot,
} from "react-icons/si";
import {
  TbBrain,
  TbMessageChatbot,
  TbBrandOpenai,
  TbPrompt,
  TbBrandVercel,
} from "react-icons/tb";
import { TiFlowParallel } from "react-icons/ti";
import { BiSolidVector } from "react-icons/bi";
import { FramerMotionIcon, ShadcnIcon } from "@/components/icons";
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
import fastapi from "@/public/icons/fastapi-icon.svg";

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
      { name: "Shadcn UI", icon: ShadcnIcon },
    ],
  },
  {
    sectionName: "AI & Agentic",
    skills: [
      { name: "OpenAI Agent SDK", icon: TbBrandOpenai },
      { name: "RAG (Retrieval-Augmented Generation)", icon: TbBrain },
      { name: "Multi-Agent Systems", icon: TbMessageChatbot },
      { name: "LLM Integration", icon: SiOpenai },
      { name: "AI Chatbot Integration", icon: SiChatbot },
      { name: "Prompt Engineering", icon: TbPrompt },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Node.js", icon: NodejsSvg },
      { name: "FastAPI", icon: fastapi },
      { name: "CMS", icon: SanitySvg },
    ],
  },
  {
    sectionName: "Automation",
    skills: [{ name: "n8n Workflow Automation", icon: TiFlowParallel }],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      { name: "MongoDB", icon: MongoDBSvg },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Neon SQL", icon: SiPostgresql },
      { name: "pgvector", icon: BiSolidVector },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "GitHub", icon: GithubSvg },
      { name: "Postman", icon: PostmanSvg },
      { name: "VS Code", icon: VscodeSvg },
      { name: "Cursor", icon: CursorSvg },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: TbBrandVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
];
