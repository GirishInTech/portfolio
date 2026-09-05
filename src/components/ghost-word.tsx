import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export interface GhostWordProps {
  word: string;
  className?: string;
}

/**
 * Oversized outline typography drifting behind a section,
 * parallaxing against scroll. Pure decoration (aria-hidden).
 * Render inside a `relative` section; it sits at -z-10.
 */
export default function GhostWord({ word, className = "" }: GhostWordProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 3]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden ${className}`}
    >
      <motion.span
        style={reduceMotion ? undefined : { y, rotate }}
        className="ghost-word select-none whitespace-nowrap font-black"
      >
        {word}
      </motion.span>
    </div>
  );
}
