import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import ExperienceShowcaseListItem, {
  type ExperienceShowcaseListItemProps,
} from "@/components/experience/experience-showcase-list-item";
import GhostWord from "@/components/ghost-word";

export interface ExperienceShowcaseListProps {
  title: string;
  details: ExperienceShowcaseListItemProps[];
}

export default function ExperienceShowcaseList(
  props: ExperienceShowcaseListProps,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="relative mx-auto my-20 max-w-7xl overflow-hidden px-4 sm:my-32 sm:px-14 md:my-48 md:px-20">
      <GhostWord word={props.title.toUpperCase()} />
      <h2 className="relative mb-12 bg-gradient-to-r from-accent via-violet-500 to-cyan-400 bg-clip-text text-center font-display text-4xl font-extrabold text-transparent sm:mb-16 sm:text-6xl md:text-7xl">
        {props.title}
      </h2>
      <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[9px] top-2 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-accent via-violet-500 to-cyan-500 sm:left-9 sm:top-5 sm:w-[5px]"
        ></motion.div>
        <ul className="w-full items-center">
          {props.details.map((_details, index) => (
            <ExperienceShowcaseListItem key={index} {..._details} />
          ))}
        </ul>
      </div>
    </div>
  );
}
