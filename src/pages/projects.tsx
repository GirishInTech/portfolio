import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Girish Yandigeri - Backend Developer Portfolio"
        description="Explore a collection of projects by Girish Yandigeri, a Backend Developer and MCA student. From AI-powered Django applications to Machine Learning systems, discover innovative full-stack solutions."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Girish Yandigeri - Backend Developer",
          description:
            "Explore a showcase of projects crafted by Girish Yandigeri. Witness Django, Python, Machine Learning, and AI-powered applications solving real-world problems.",
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
              "Projects, Backend Developer, Django Projects, Python, Machine Learning, AI Applications, Cloud Computing, AWS, Full Stack Developer, MCA Student, RVCE Portfolio",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Projects
          </h1>
          <div className="my-3">
            <span className="text-base font-medium text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and exploring advanced
              concepts in cloud computing, cybersecurity, and AI to expand my
              backend development expertise.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
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
