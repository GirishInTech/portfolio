import { RefObject, useRef } from "react";
import Link from "next/link";

import { motion, useScroll } from "framer-motion";

export interface ExperienceListIconProps {
  iconRef: RefObject<HTMLElement>;
}

function ShowCaseLiIcon(props: ExperienceListIconProps) {
  const { scrollYProgress } = useScroll({
    target: props.iconRef,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 hidden stroke-zinc-900 sm:block">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="27"
          r="20"
          className="fill-none stroke-accent stroke-2"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="50"
          cy="27"
          r="20"
          className="fill-zinc-100 stroke-[6px] dark:fill-zinc-900 dark:stroke-accent"
        />
        <circle cx="50" cy="27" r="12" className="fill-accent stroke-2" />
      </svg>
    </figure>
  );
}

export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location: string;
  description: string;
}

export default function ExperienceShowcaseListItem(
  props: ExperienceShowcaseListItemProps,
) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto mb-8 flex w-full flex-col gap-1 sm:mb-14 sm:w-[88%] lg:w-[70%]"
    >
      <ShowCaseLiIcon iconRef={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.6,
        }}
        className="dream-card ml-7 rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:ml-0 sm:rounded-[1.75rem] sm:p-6 sm:hover:scale-[1.02]"
      >
        <h3 className="break-words text-base font-bold leading-snug text-foreground sm:text-xl md:text-2xl">
          {props.title}{" "}
          <Link
            href={props.organisation.href}
            className="cursor-pointer bg-gradient-to-r from-accent via-violet-500 to-cyan-400 bg-clip-text text-transparent transition-all hover:underline"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            @{props.organisation.name}
          </Link>
        </h3>
        <span className="mt-1 inline-block text-sm font-semibold text-accent xs:text-base">
          {props.date} | {props.location}
        </span>
        <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground xs:text-base">
          {props.description}
        </p>
      </motion.div>
    </li>
  );
}
