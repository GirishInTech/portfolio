import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import { ArrowTopRight } from "@/components/icons";
import GhostWord from "@/components/ghost-word";
import ProjectShowcaseList, {
  type ProjectShowcaseListItem,
} from "@/components/projects/project-showcase-list";

const generateImageData = (proj: ProjectShowcaseListItem[]) => {
  return proj.map((p) => p.image);
};

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const images = useMemo(() => {
    return generateImageData(props.projects);
  }, [props.projects]);

  const handleAnimate = (index: number) => {
    if (index === currentImage) return;
    setCurrentImage(index);
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-14 sm:py-24 md:px-20 lg:py-32">
      <GhostWord word="DREAM" />
      <div className="relative mx-auto max-w-7xl">
        <div className="relative right-0 top-0 hidden lg:block">
          <AnimatePresence>
            {currentImage !== null && (
              <motion.div
                key={props.projects[currentImage].title}
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: "55%",
                  y: "50%",
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                }}
                className="absolute right-0 top-0 -z-50"
              >
                <Image
                  src={images[currentImage].LIGHT}
                  width={800}
                  height={450}
                  sizes="(max-width: 1280px) 40vw, 480px"
                  className="h-auto w-1/2 rounded-lg border border-zinc-300 shadow-lg dark:hidden dark:border-accent/50"
                  alt={`project ${currentImage}`}
                />
                {images[currentImage].DARK !== undefined && (
                  <Image
                    src={images[currentImage].DARK!}
                    width={800}
                    height={450}
                    sizes="(max-width: 1280px) 40vw, 480px"
                    className="hidden h-auto w-1/2 rounded-lg border border-zinc-300 shadow-lg dark:inline-block dark:border-accent/20 dark:shadow-lg dark:shadow-emerald-400/5"
                    alt={`project ${currentImage}`}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <h2 className="bg-gradient-to-r from-accent via-violet-500 to-cyan-400 bg-clip-text font-display text-3xl font-bold text-transparent sm:text-4xl">
          Featured Projects
        </h2>
        <div className="hidden flex-col gap-6 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:flex">
          {props.projects.map((proj, index) => (
            <ProjectShowcaseList
              activeProject={currentImage}
              toggleList={handleAnimate}
              data={proj}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 py-10 sm:gap-6 sm:py-14 md:gap-8 lg:hidden">
          {props.projects.map((proj) => (
            <Link
              key={proj.title}
              href={proj.href}
              className="dream-card flex flex-col gap-3 rounded-[1.75rem] p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-2xl font-semibold text-accent transition-colors duration-300 sm:text-4xl">
                  {proj.index + 1}.
                </span>
                <span
                  key={proj.title}
                  className="min-w-0 flex-1 break-words text-2xl font-semibold text-accent transition-colors duration-300 sm:text-4xl"
                >
                  {proj.title}
                </span>
              </div>
              {/* Project image */}
              {proj.image?.LIGHT && (
                <Image
                  src={proj.image.LIGHT}
                  alt={proj.title + " image"}
                  width={1280}
                  height={720}
                  sizes="(max-width: 640px) 100vw, 768px"
                  className="my-2 h-auto w-full rounded-2xl border border-accent/20 object-cover shadow-md"
                />
              )}
              <p className="flex max-w-xl flex-wrap gap-2 text-sm font-medium text-muted-foreground sm:text-base">
                {proj.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-teal-600/10 px-2.5 py-0.5"
                  >
                    #{tag}
                  </span>
                ))}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="group relative flex max-w-max items-center gap-4 text-base font-semibold sm:text-lg md:text-xl"
        >
          <div className="relative max-w-max">
            <span className="text-accent">See more projects</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
          </div>
          <div className="h-8 w-8">
            <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
          </div>
        </Link>
      </div>
    </section>
  );
}
