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
    <figure className="absolute left-0 stroke-zinc-900">
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
    <li ref={ref} className="mx-auto mb-14 flex w-[60%] flex-col gap-1">
      <ShowCaseLiIcon iconRef={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.6,
        }}
        className="rounded-xl border-2 border-accent/20 bg-gradient-to-br from-background to-accent/5 p-4 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-accent/40 hover:shadow-xl dark:from-zinc-900 dark:to-accent/10"
      >
        <h3 className="text-base font-bold text-foreground sm:text-xl md:text-2xl">
          {props.title}{" "}
          <Link
            href={props.organisation.href}
            className="cursor-pointer bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent transition-all hover:underline"
            target="_blank"
            rel="nofollow"
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
