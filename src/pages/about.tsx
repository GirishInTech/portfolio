import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Girish Yandigeri | Software Engineer at Societe Generale"
        description="Learn more about Girish Yandigeri, Software Engineer at Societe Generale Global Solution Centre and MCA graduate from RVCE (CGPA 8.91). Discover the journey, skills, and passion for backend engineering, Python, FastAPI, React, cloud and DevOps."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title:
            "Learn About Girish Yandigeri - Software Engineer at Societe Generale",
          description:
            "Dive into the story of Girish Yandigeri, Software Engineer at Societe Generale and MCA graduate from RVCE. Uncover the experiences, skills, and passion for Python, Django, FastAPI, React, AWS, and building innovative solutions.",
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
              "Software Engineer portfolio, Backend Developer, Python Developer, FastAPI, React, Django Developer, PostgreSQL, Docker, Kubernetes, AWS, Cloud Computing, Machine Learning, MCA Graduate, RVCE, Karnataka, Full Stack Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
