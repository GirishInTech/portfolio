import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Girish Yandigeri | RISQ Software Engineer at Societe Generale"
        description="Explore the professional portfolio of Girish Yandigeri, RISQ Software Engineer at Societe Generale Global Solutions Center. Discover innovative projects in Django, Machine Learning, Cloud Computing, and AI-powered applications."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title:
            "Girish Yandigeri - RISQ Software Engineer at Societe Generale",
          description:
            "Dive into the world of backend development with Girish Yandigeri, RISQ Software Engineer at Societe Generale. Discover projects in Django, Python, AWS, Machine Learning, and building scalable AI-powered systems.",
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
              "Backend Developer, Django Developer, Python Developer, Machine Learning, AWS, Cloud Computing, Cybersecurity, AI, Full Stack, MCA Student, RVCE, Bengaluru, Portfolio",
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
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
