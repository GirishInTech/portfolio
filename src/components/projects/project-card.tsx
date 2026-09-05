import Image from "next/image";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string | string[];
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
      className="dream-card group w-full min-w-0 overflow-hidden rounded-[1.75rem] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-4 text-foreground sm:p-6">
        <div className="flex items-center gap-3">
          <span className="relative h-6 w-6 shrink-0 rounded-lg bg-accent/10 p-1">
            <Image
              src={props.favicon}
              alt="logo"
              fill
              className="object-contain"
            />
          </span>
          <span className="min-w-0 flex-1 break-words text-lg font-bold leading-snug tracking-tight sm:text-base">
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
        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 sm:gap-6">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <GithubIcon className="h-4 w-4" /> Code
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90"
            >
              <FiExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
