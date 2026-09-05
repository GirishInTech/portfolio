import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="relative mx-auto mt-0 flex max-w-7xl flex-col items-center gap-8 overflow-hidden px-4 pt-12 text-center sm:px-14 md:mt-20 md:px-20 lg:flex-row lg:gap-6 lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:w-3/4 lg:max-w-none">
              <div className="dream-card overflow-hidden rounded-[2rem] p-2">
                <div className="overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={heroProfileImg}
                    width={600}
                    height={600}
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 600px"
                    className="h-auto w-full object-cover mix-blend-multiply dark:mix-blend-normal"
                    alt="Girish Yandigeri profile"
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="mt-8 w-full sm:mt-10 lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="bg-gradient-to-r from-accent via-violet-500 to-cyan-400 bg-clip-text font-display text-4xl font-extrabold text-transparent sm:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Girish Yandigeri
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg md:text-lg">
              I&apos;m a Software Engineer at Societe Generale Global Solution
              Centre, and an MCA graduate from RVCE (2026, CGPA 8.91).
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in Python, Django, FastAPI, React,
              PostgreSQL, Docker, Machine Learning, Cloud Computing (AWS), and
              building AI-powered full-stack applications.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Bengaluru, Karnataka
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
