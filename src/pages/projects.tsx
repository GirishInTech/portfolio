import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import GhostWord from "@/components/ghost-word";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Girish Yandigeri - Software Engineer Portfolio"
        description="Explore projects by Girish Yandigeri, Software Engineer and MCA graduate from RVCE. From AI-powered Django apps to full-stack React/FastAPI systems and ML projects, discover real-world solutions."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Girish Yandigeri - Software Engineer",
          description:
            "Explore a showcase of projects crafted by Girish Yandigeri. Witness Python, Django, FastAPI, React, PostgreSQL, Machine Learning, and AI-powered applications solving real-world problems.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Girish Yandigeri - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects, Software Engineer, Backend Developer, Django Projects, Python, FastAPI, React, PostgreSQL, Machine Learning, AI Applications, Cloud Computing, AWS, Docker, Full Stack Developer, MCA Graduate, RVCE Portfolio",
          },
        ]}
      />
      <section className="relative mx-auto mb-24 mt-6 w-full gap-20 overflow-hidden px-4 sm:mb-32 sm:mt-12 sm:px-14 md:px-20 lg:mb-40">
        <GhostWord word="ATLAS" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="bg-gradient-to-r from-accent via-violet-500 to-cyan-400 bg-clip-text font-display text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <div className="my-3">
            <span className="text-sm font-medium text-muted-foreground sm:text-base">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-5xl text-center text-foreground sm:mt-16 md:mt-28">
            <p className="text-lg font-bold sm:text-xl md:text-2xl">
              I am currently building new projects and exploring advanced
              concepts in cloud computing, cybersecurity, and AI to expand my
              backend development expertise.
            </p>
            <p className="mt-8 text-base sm:mt-10 md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
