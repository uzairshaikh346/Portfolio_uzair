import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Muhammad Uzair | AI Engineer & Full Stack Developer"
        description="Learn more about Muhammad Uzair, an AI Engineer and Full Stack Developer specializing in AI Agents, RAG Systems, and LLM integration. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
