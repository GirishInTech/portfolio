import Link from "next/link";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

import GhostWord from "@/components/ghost-word";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const EVIDENCE = [
  {
    index: "01",
    title: "Rank 21 out of 20,000+",
    story:
      "Small-town BCA college in Bagalkot. No big-brand coaching, no CS pedigree — just two years of stubborn preparation for the Karnataka PGCET MCA entrance.",
    punchline:
      "Result: All-Karnataka Rank 21 and a seat at RVCE. Curiosity got me in the room; grind kept me there.",
  },
  {
    index: "02",
    title: "The intern who asked too many questions",
    story:
      "At Société Générale I didn't just take tickets — I kept asking how the banking itself worked: where the data comes from, who reads it, why it matters. Business analysts started explaining things to the intern.",
    punchline:
      "Seven months later, the internship turned into a full-time offer. Questions compound.",
  },
  {
    index: "03",
    title: "Built for a parlour owner, not a judge",
    story:
      "For the Epsilon hackathon we could have built another chatbot demo. Instead we talked to actual beauty-parlour owners and learned their real problem: 5 stars on Google, 0 followers on Instagram. So ParlorPal writes captions in English and Kannada.",
    punchline:
      "Top-10 finalist. Because curiosity about users beats curiosity about tech.",
  },
  {
    index: "04",
    title: "Broke websites, then learned to defend them",
    story:
      "My first internship was breaking websites with JMeter and NeoLoad for a living. That made me wonder how real attackers do it — so I built a real-time DDoS detection system with ML and an AI security chatbot.",
    punchline:
      "One curiosity led straight into the next. That's the whole pattern of my career.",
  },
  {
    index: "05",
    title: "Doesn't collect certificates — deploys them",
    story:
      "The AWS certification could have been a LinkedIn badge. Instead every service in it went straight into Placify: EC2 hosting, RDS database, S3 media, Cognito auth. A live app, not a PDF.",
    punchline:
      "I learn it on Monday, ship it by Friday. The repo is the receipt.",
  },
  {
    index: "06",
    title: "Anchored fests, played basketball",
    story:
      "Not a metaphor — BCA fest anchor and basketball player. Comfortable with a mic, comfortable in a team huddle, comfortable when the plan falls apart mid-game.",
    punchline: "Standups, demos, incident calls: same skills, different court.",
  },
];

const TRAITS = [
  {
    title: "Asks early",
    text: "I'd rather ask the “dumb” question on day one than cause the dumb outage on day one hundred.",
  },
  {
    title: "Outlasts",
    text: "Edison tested 10,000 filaments. I'll test 10,000 edge cases. The bug gives up before I do.",
  },
  {
    title: "Ships live",
    text: "Demos you can click, apps you can log into, maps with real hotspots. Work you can verify, not adjectives.",
  },
];

export default function HireMe() {
  return (
    <>
      <NextSeo
        title="Why Hire Girish Yandigeri? | Software Engineer"
        description="Not Einstein's brain — Edison's stubbornness. Real stories of curiosity, hard work and shipping: PGCET Rank 21, intern-to-full-time at Societe Generale, hackathon finalist, and live deployed projects."
        canonical={`${siteMetadata.siteUrl}/hire-me`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/hire-me`,
          title: "Why Hire Girish Yandigeri?",
          description:
            "Perseverance, curiosity, and a habit of asking questions — backed by real stories from the journey so far.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Why hire Girish Yandigeri",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <section className="relative mx-auto mb-24 mt-6 w-full overflow-hidden px-4 sm:mb-32 sm:mt-12 sm:px-14 md:px-20 lg:mb-40">
        <GhostWord word="PROOF" />
        <div className="relative mx-auto max-w-7xl">
          {/* Hook */}
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            An honest pitch
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl">
            Why hire me?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Not because I have Einstein&apos;s brain. Plenty of candidates are
            smarter than me — some of them probably applied before I did.
          </p>

          {/* The punchline */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="dream-card mt-8 max-w-3xl rounded-[1.75rem] p-6 sm:p-10"
          >
            <blockquote className="font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              “Hire me for Edison&apos;s stubbornness — the guy who tested
              10,000 filaments and just wouldn&apos;t stop.”
            </blockquote>
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I&apos;m the one who asks the third follow-up question, reads the
              error log twice, and ships on Friday what I learned on Monday.
              Hard work and curiosity aren&apos;t my soft skills — they&apos;re
              the whole strategy. Here&apos;s the evidence:
            </figcaption>
          </motion.figure>

          {/* Evidence */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 sm:gap-6 lg:grid-cols-2">
            {EVIDENCE.map((item, i) => (
              <motion.article
                key={item.index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="dream-card flex flex-col gap-3 rounded-[1.75rem] p-6 sm:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="bg-gradient-to-r from-accent via-violet-500 to-cyan-400 bg-clip-text font-display text-4xl font-black text-transparent sm:text-5xl">
                    {item.index}
                  </span>
                  <h2 className="min-w-0 flex-1 text-lg font-bold leading-snug text-foreground sm:text-xl">
                    {item.title}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.story}
                </p>
                <p className="border-l-2 border-accent/50 pl-4 text-sm font-semibold leading-relaxed text-foreground sm:text-base">
                  {item.punchline}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Traits */}
          <div className="mt-14 sm:mt-20">
            <h2 className="font-display text-2xl font-black text-foreground sm:text-4xl">
              What you actually get
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:gap-6 md:grid-cols-3">
              {TRAITS.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="dream-card rounded-[1.75rem] p-6 sm:p-8"
                >
                  <h3 className="text-lg font-bold text-teal-700 dark:text-teal-300">
                    {trait.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {trait.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing CTA */}
          <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-20">
            <p className="font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              Still not convinced? Click around — everything I claimed is one
              tab away.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/projects"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-accent px-8 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Inspect the evidence
              </Link>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-accent/30 px-8 text-base font-semibold text-accent transition-colors hover:bg-accent/10 sm:w-auto"
              >
                Ask me anything
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
