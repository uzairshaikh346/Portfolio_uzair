import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Zaura Store",
    href: "https://www.zaura.store/",
    tags: ["Nextjs", "Tailwindcss", "Mongo DB", "Vercel"],
    image: {
      LIGHT: "/images/projects/zauraStore.png",
      DARK: "/images/projects/zauraStore.png",
    },
  },
  {
    index: 1,
    title: "Todo App",
    href: "https://todo-full-stack-topaz.vercel.app/",
    tags: ["Nextjs", "Tailwindcss", "Headless CMS", "Stripe"],
    image: {
      LIGHT: "/images/projects/todoAPp.png",
      DARK: "/images/projects/todoAPp.png",
    },
  },
  {
    index: 2,
    title: "Luxe",
    href: "https://luxe-pink.vercel.app/",
    tags: ["Nextjs", "Tailwindcss", "Headless CMS", "Stripe", "React Toolkit"],
    image: {
      LIGHT: "/images/projects/luxe.png",
      DARK: "/images/projects/luxe.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Todo",
    favicon: "/images/projects/logos/jacket.ico",
    imageUrl: ["/images/projects/todoAPp.png", "/images/projects/todoAPp.png"],
    description:
      "A full-stack Todo application with authentication, password recovery, and complete CRUD operations, built using a modern stack with Neon PostgreSQL for reliable data management.",
    sourceCodeHref: "https://github.com/uzairshaikh346/todo_full_stack",
    liveWebsiteHref: "https://todo-full-stack-topaz.vercel.app/",
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
    name: "Humanoid Robotics and physical ai book with RAG chatbot",
    favicon: "/images/projects/logos/luxe.ico",
    imageUrl: [
      "/images/projects/humanoidBook.png",
      "/images/projects/humanoidBook.png",
    ],
    description:
      "A humanoid robotics documentation platform built with a modern web stack, featuring an AI-powered RAG chatbot for intelligent, real-time knowledge retrieval.",
    sourceCodeHref: "https://github.com/uzairshaikh346/humanoid-robotics",
    liveWebsiteHref: "https://uzairshaikh346.github.io/humanoid-robotics/",
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
  {
    name: "Weather Checking App",
    favicon: "/images/projects/logos/weather.ico",
    imageUrl: [
      "/images/projects/weatherApp.png",
      "/images/projects/weatherApp.png",
    ],
    description:
      "A weather application that provides real-time weather information. Built using Next.js and integrates with weather APIs to display accurate forecasts.",
    sourceCodeHref: "https://github.com/uzairshaikh346/weather-app-next.js",
    liveWebsiteHref: "https://weather-app-next-js-t7c8.vercel.app/",
  },
  {
    name: "Gemini Chat Bot",
    favicon: "/images/projects/logos/gemini.ico",
    imageUrl: [
      "/images/projects/gemini.png",
      "/images/projects/gemini.png",
      "/images/projects/gemini.png",
    ],
    description:
      "An AI chatbot powered by Google's Gemini AI. Built using Next.js, Tailwind CSS, and Google AI SDK. Deployed on Vercel for seamless interaction.",
    sourceCodeHref: "https://github.com/uzairshaikh346/uzair-s-gemini",
    liveWebsiteHref: "https://uzair-s-gemini.vercel.app/",
  },
  {
    name: "Blog Web",
    favicon: "/images/projects/logos/covid.ico",
    imageUrl: ["/images/projects/blogWeb.png", "/images/projects/blogWeb.png"],
    description:
      "A dynamic blog platform built with modern web technologies. Features content management system and responsive design for optimal reading experience.",
    sourceCodeHref: "https://github.com/uzairshaikh346/dynamic-blog",
    liveWebsiteHref: "https://dynamic-blog-orcin.vercel.app/",
  },
  {
    name: "Bandage Ecommerce Store",
    favicon: "/images/projects/logos/bandage.ico",
    imageUrl: [
      "/images/projects/bandageEcommerce.png",
      "/images/projects/bandageEcommerce.png",
    ],
    description:
      "A full-featured e-commerce platform for medical supplies. Built with modern web technologies and features a responsive design with intuitive navigation.",
    sourceCodeHref:
      "https://github.com/uzairshaikh346/Market_builder_hackthone",
    liveWebsiteHref: "https://market-builder-hackthone-f41u.vercel.app/",
  },
];
