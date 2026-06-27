import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "PropEase — AI Property Management",
    href: "https://www.linkedin.com/posts/muhammad-uzair-2526732a6_ai-nextjs-fastapi-activity-7455725180183666690-7Zvr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnH9J4ByxzCTRMLnwtFSBkiUhVtlLJZKjw",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Groq", "Docker"],
    image: {
      LIGHT: "/images/projects/propease.png",
      DARK: "/images/projects/propease.png",
    },
  },
  {
    index: 1,
    title: "AI Cold Email Agent",
    href: "https://cold-email-agent-frontend-nu.vercel.app/",
    tags: ["Next.js", "FastAPI", "Multi-Agent", "Groq", "Tavily", "Resend"],
    image: {
      LIGHT: "/images/projects/cold-email-agent.png",
      DARK: "/images/projects/cold-email-agent.png",
    },
  },
  {
    index: 2,
    title: "ATS Resume Checker",
    href: "https://ats-agent-ten.vercel.app/",
    tags: ["Next.js", "FastAPI", "OpenAI SDK", "Python", "Vercel"],
    image: {
      LIGHT: "/images/projects/ats-resume-checker.png",
      DARK: "/images/projects/ats-resume-checker.png",
    },
  },
];
export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Humanoid Robotics RAG Chatbot",
    favicon: "/images/projects/logos/jacket.ico",
    imageUrl: [
      "/images/projects/humanoidBook.png",
      "/images/projects/humanoidBook.png",
    ],
    description:
      "Built an AI-powered documentation chatbot using RAG architecture — Qdrant vector search, OpenAI Agents SDK, and Docusaurus. Delivers fast, context-aware responses grounded strictly in provided knowledge base.",
    sourceCodeHref: "https://github.com/uzairshaikh346/humanoid-robotics",
    liveWebsiteHref:
      "https://www.linkedin.com/posts/muhammad-uzair-2526732a6_ai-machinelearning-rag-activity-7404248142545895424-Yy8V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnH9J4ByxzCTRMLnwtFSBkiUhVtlLJZKjw",
  },
  {
    name: "AI Agentic Todo App",
    favicon: "/images/projects/logos/jacket.ico",
    imageUrl: ["/images/projects/todoAPp.png", "/images/projects/todoAPp.png"],
    description:
      "Full-stack Todo app powered by an AI Agent using OpenAI Agents SDK and MCP (Model Context Protocol). Users manage tasks via natural language — agent reasons and calls MCP tools. Stateless FastAPI backend with conversation state persisted in Neon PostgreSQL.",
    sourceCodeHref: "https://github.com/uzairshaikh346/ai-agent-todo-app",
    liveWebsiteHref:
      "https://www.linkedin.com/posts/muhammad-uzair-2526732a6_hackathon-task3-agenticai-activity-7423086331154812928-vJNw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnH9J4ByxzCTRMLnwtFSBkiUhVtlLJZKjw",
  },
  {
    name: "PropEase — AI Property Management",
    favicon: "/images/projects/propease.png",
    imageUrl: [
      "/images/projects/propease.png",
      "/images/projects/propease.png",
    ],
    description:
      "AI-powered property management support platform built at Hackathon 5. Features a 24/7 Llama 3.1 (Groq) AI agent, human-in-the-loop escalation, auto SLA system, and conversation memory. Built with Next.js, FastAPI, PostgreSQL (pgvector), Kafka, and Docker.",
    sourceCodeHref:
      "https://github.com/uzairshaikh346/comprehensive-AI-powered-support-ecosystem",
    liveWebsiteHref:
      "https://www.linkedin.com/posts/muhammad-uzair-2526732a6_ai-nextjs-fastapi-activity-7455725180183666690-7Zvr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnH9J4ByxzCTRMLnwtFSBkiUhVtlLJZKjw",
  },
  {
    name: "ATS Resume Checker",
    favicon: "/images/projects/logos/jacket.ico",
    imageUrl: [
      "/images/projects/ats-resume-checker.png",
      "/images/projects/ats-resume-checker.png",
    ],
    description:
      "Upload your resume, get an ATS score instantly. Analyzes resume against any job description — shows missing keywords, section-by-section breakdown, and actionable improvement suggestions. Built with Next.js, FastAPI, and OpenAI SDK. Free, no signup required.",
    sourceCodeHref:
      "https://www.linkedin.com/posts/muhammad-uzair-2526732a6_nextjs-fastapi-python-activity-7466463851308310528-qqUG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnH9J4ByxzCTRMLnwtFSBkiUhVtlLJZKjw",
    liveWebsiteHref: "https://ats-agent-ten.vercel.app/",
  },
  {
    name: "AI Cold Email Agent",
    favicon: "/images/projects/logos/jacket.ico",
    imageUrl: [
      "/images/projects/cold-email-agent.png",
      "/images/projects/cold-email-agent.png",
    ],
    description:
      "4-agent AI pipeline that researches any LinkedIn profile, writes a hyper-personalized cold email, and sends it via Resend API — all in under 30 seconds. Agents handle scraping, research (Tavily), email writing, and 3-email follow-up sequences. Built with FastAPI, Next.js, and Groq (LLaMA 3.1).",
    sourceCodeHref:
      "https://www.linkedin.com/posts/muhammad-uzair-2526732a6_aiagents-multiagentsystems-llm-activity-7469461381038362625-TgKM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnH9J4ByxzCTRMLnwtFSBkiUhVtlLJZKjw",
    liveWebsiteHref: "https://cold-email-agent-frontend-nu.vercel.app/",
  },
  {
    name: "Luxe",
    favicon: "/images/projects/logos/luxe.ico",
    imageUrl: ["/images/projects/luxe.png", "/images/projects/luxe.png"],
    description:
      "A luxury e-commerce platform built with Next.js, Tailwind CSS, and Redux Toolkit. Features headless CMS integration and Stripe payment processing.",
    sourceCodeHref: "https://github.com/uzairshaikh346/Luxe",
    liveWebsiteHref: "https://luxe-pink.vercel.app/",
  },
  {
    name: "Zaura",
    favicon: "/images/projects/logos/luxe.ico",
    imageUrl: [
      "/images/projects/zauraStore.png",
      "/images/projects/zauraStore.png",
    ],
    description:
      "A luxury e-commerce platform built with Next.js, Tailwind CSS, and Redux Toolkit. Features headless CMS integration and Stripe payment processing.",
    sourceCodeHref: "https://github.com/uzairshaikh346/zaura",
    liveWebsiteHref: "https://www.zaura.store/",
  },
  {
    name: "Sumera Traders",
    favicon: "/images/projects/logos/luxe.ico",
    imageUrl: [
      "/images/projects/sumeraTraders.png",
      "/images/projects/sumeraTraders.png",
    ],
    description:
      "A luxury e-commerce platform built with Next.js, Tailwind CSS, and Context API.",
    sourceCodeHref: "https://github.com/uzairshaikh346/Sumera-traders",
    liveWebsiteHref: "https://www.sumeratrader.com/",
  },
];
