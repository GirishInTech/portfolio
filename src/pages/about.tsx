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
        title="About Girish Yandigeri | RISQ Software Engineer at Societe Generale"
        description="Learn more about Girish Yandigeri, RISQ Software Engineer at Societe Generale Global Solutions Center and MCA student at RVCE. Discover the journey, skills, and passion for building scalable backend systems, cloud computing, and cybersecurity."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title:
            "Learn About Girish Yandigeri - RISQ Software Engineer at Societe Generale",
          description:
            "Dive into the story of Girish Yandigeri, RISQ Software Engineer at Societe Generale and MCA student at RVCE. Uncover the experiences, skills, and passion for Django, Python, AWS, and building innovative solutions.",
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
              "Backend Developer portfolio, Django Developer, Python Developer, AWS, Cloud Computing, Cybersecurity, Machine Learning, MCA Student, RVCE, Karnataka, Full Stack Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
