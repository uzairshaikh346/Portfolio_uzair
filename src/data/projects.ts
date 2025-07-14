import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Jacket Store",
    href: "https://new-ecom-jacket.vercel.app/",
    tags: ["Nextjs", "Tailwindcss", "Headless CMS", "Stripe"],
    image: {
      LIGHT: "/images/projects/jacketStore.png",
      DARK: "/images/projects/jecketStore.png",
    },
  },
  {
    index: 1,
    title: "Gemini Chat Bot",
    href: "https://uzair-s-gemini.vercel.app/",
    tags: ["Nextjs", "Tailwindcss", "Google ai SDK", "Vercel"],
    image: {
      LIGHT: "/images/projects/gemini.png",
      DARK: "/images/projects/gemini.png",
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
    name: "Jacket Store",
    favicon: "/images/projects/logos/jacket.ico",
    imageUrl: [
      "/images/projects/jecketStore.png",
      "/images/projects/jecketStore.png",
    ],
    description:
      "An e-commerce store focused on jackets and outerwear. Built with Next.js, Tailwind CSS, and integrated with a headless CMS and Stripe for payments.",
    sourceCodeHref: "https://github.com/uzairshaikh346/New_Ecom_jacket",
    liveWebsiteHref: "https://new-ecom-jacket.vercel.app/",
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
    name: "Luxe",
    favicon: "/images/projects/logos/luxe.ico",
    imageUrl: ["/images/projects/luxe.png", "/images/projects/luxe.png"],
    description:
      "A luxury e-commerce platform built with Next.js, Tailwind CSS, and Redux Toolkit. Features headless CMS integration and Stripe payment processing.",
    sourceCodeHref: "https://github.com/uzairshaikh346/Luxe",
    liveWebsiteHref: "https://luxe-pink.vercel.app/",
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
  {
    name: "Orionsols WebSite",
    favicon: "/images/projects/logos/orion.ico",
    imageUrl: [
      "/images/projects/orionsols.png",
      "/images/projects/orionsols.png",
    ],
    description:
      "Corporate website for Orionsols, showcasing company services, portfolio, and contact information. Built with modern web technologies for optimal performance.",
    sourceCodeHref: "https://github.com/uzairshaikh346",
    liveWebsiteHref: "https://orionsols.com",
  },
];
