import Image from "next/image";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.6,
      }}
      className="group w-full overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-background to-accent/5 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20 dark:from-zinc-900 dark:to-accent/10"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-4 text-foreground sm:p-6">
        <div className="flex items-center gap-3">
          <span className="relative h-6 w-6 rounded-lg bg-accent/10 p-1">
            <Image
              src={props.favicon}
              alt="logo"
              fill
              className="object-contain"
            />
          </span>
          <span className="text-base font-bold tracking-tight">
            {props.name}
          </span>
        </div>
        <div className="mt-4">
          {Array.isArray(props.description) ? (
            <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {props.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {props.description}
            </p>
          )}
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <GithubIcon className="h-4 w-4" /> Code
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90"
            >
              <FiExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
