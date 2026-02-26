import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <div className="relative mx-auto w-3/4 overflow-hidden rounded-3xl border-4 border-accent/30 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 p-2 shadow-2xl shadow-accent/20 dark:from-purple-950/30 dark:via-blue-950/20 dark:to-purple-950/30 sm:w-2/3">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={heroProfileImg}
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover mix-blend-multiply dark:mix-blend-normal"
                  alt="Girish Yandigeri profile"
                  priority
                  placeholder="blur"
                />
              </div>
            </div>
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="bg-gradient-to-r from-accent via-purple-600 to-blue-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Girish Yandigeri
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg md:text-lg">
              I&apos;m currently working as a RISQ Software Engineer at Societe
              Generale Global Solutions Center.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in Django, Python, Machine Learning, Cloud
              Computing (AWS), and building AI-powered full-stack applications.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
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
