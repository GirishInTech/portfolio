import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import SignalGame from "@/components/signal-game";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Girish Yandigeri | Software Engineer at Societe Generale"
        description="Explore the professional portfolio of Girish Yandigeri, Software Engineer at Societe Generale Global Solution Centre and MCA graduate from RVCE. Discover projects in Python, FastAPI, React, Django, PostgreSQL, Docker, and AI-powered applications."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Girish Yandigeri - Software Engineer at Societe Generale",
          description:
            "Dive into the world of backend and full-stack development with Girish Yandigeri, Software Engineer at Societe Generale and MCA graduate from RVCE. Discover projects in Python, FastAPI, React, Django, PostgreSQL, Docker, AWS, and scalable AI-powered systems.",
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
              "Software Engineer, Backend Developer, Python Developer, FastAPI, React, Django Developer, PostgreSQL, Docker, Kubernetes, Machine Learning, AWS, Cloud Computing, MCA Graduate, RVCE, Bengaluru, Portfolio",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SignalGame />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
