import { useEffect, useRef, useState } from "react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import FadeUp from "@/animation/fade-up";
import GhostWord from "@/components/ghost-word";

const codeLines = [
  { indent: 0, text: "{", color: "text-slate-100" },
  {
    indent: 1,
    key: "name",
    value: '"Girish Yandigeri"',
    keyColor: "text-violet-300",
    valueColor: "text-emerald-300",
  },
  {
    indent: 1,
    key: "role",
    value: '"Software Engineer"',
    keyColor: "text-violet-300",
    valueColor: "text-emerald-300",
  },
  {
    indent: 1,
    key: "company",
    value: '"Societe Generale"',
    keyColor: "text-violet-300",
    valueColor: "text-cyan-300",
  },
  {
    indent: 1,
    key: "stack",
    value: '["Python", "FastAPI", "React"]',
    keyColor: "text-violet-300",
    valueColor: "text-cyan-300",
  },
  {
    indent: 1,
    key: "cloud",
    value: '["AWS", "Docker", "K8s"]',
    keyColor: "text-violet-300",
    valueColor: "text-teal-300",
  },
  {
    indent: 1,
    key: "focus",
    value: '"Scalable Systems"',
    keyColor: "text-violet-300",
    valueColor: "text-emerald-300",
  },
  {
    indent: 1,
    key: "open_to",
    value: '"New Opportunities"',
    keyColor: "text-violet-300",
    valueColor: "text-accent",
  },
  { indent: 0, text: "}", color: "text-slate-100" },
];

/** A word whose letters ripple on hover — hover the name to wake it up. */
function DreamWord({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`dream-name block ${className}`}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="dream-letter"
          style={{ animationDelay: `${i * 45}ms` }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function LandingHero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Cinematic drift: the hero bends away as you fall down the page.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const heroSkew = useTransform(scrollYProgress, [0, 1], [0, -3]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLines(codeLines.length);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= codeLines.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex max-h-[1000px] min-h-[calc(100svh-160px)] items-center overflow-hidden px-4 py-10 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20 md:py-0"
    >
      <GhostWord word="LUCID" />
      <div className="w-full max-w-full">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, skewY: heroSkew }}
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2"
        >
          {/* LEFT: Text content */}
          <AnimatePresence>
            <div className="order-2 lg:order-1">
              <FadeUp key="eyebrow" duration={0.5}>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Available for work
                </span>
              </FadeUp>

              <FadeUp key="name" duration={0.6} delay={0.1}>
                <h1
                  aria-label="Girish Yandigeri"
                  className="fluid-display mt-5 font-display font-black tracking-tight sm:text-6xl xl:text-7xl"
                >
                  <DreamWord text="Girish" className="text-outline-accent" />
                  <DreamWord
                    text="Yandigeri"
                    className="bg-gradient-to-r from-accent to-teal-600 bg-clip-text text-transparent"
                  />
                </h1>
              </FadeUp>

              <FadeUp key="role" duration={0.6} delay={0.2}>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <div className="h-px w-8 shrink-0 bg-accent" />
                  <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-semibold text-muted-foreground sm:text-lg">
                    Software Engineer at
                    <img
                      src="/images/societe-generale-logo.jpg"
                      alt="Societe Generale logo"
                      loading="lazy"
                      className="h-[1.7em] w-auto rounded-[4px] object-contain"
                    />
                    <span className="text-accent">Societe Generale</span>
                  </span>
                </div>
              </FadeUp>

              <FadeUp key="desc" duration={0.6} delay={0.3}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                  MCA graduate from RVCE building strong and scalable systems.
                  Skilled in{" "}
                  <span className="font-semibold text-foreground">Python</span>,{" "}
                  <span className="font-semibold text-foreground">FastAPI</span>
                  , <span className="font-semibold text-foreground">React</span>
                  ,
                  <span className="font-semibold text-foreground"> Django</span>
                  , and experienced with{" "}
                  <span className="font-semibold text-foreground">
                    PostgreSQL
                  </span>
                  ,{" "}
                  <span className="font-semibold text-foreground">Docker</span>,{" "}
                  <span className="font-semibold text-foreground">AWS</span> and
                  Cloud Computing.
                </p>
              </FadeUp>

              <FadeUp key="tags" duration={0.6} delay={0.4}>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Python", "FastAPI", "React", "AWS", "Docker", "ML"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-teal-600/25 bg-teal-600/5 px-3.5 py-1.5 text-xs font-medium text-teal-700 dark:text-teal-300"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </FadeUp>
            </div>

            {/* RIGHT: JSON code card */}
            <div className="order-1 min-w-0 lg:order-2">
              <FadeUp key="code-card" duration={0.7} delay={0.2}>
                <div className="relative mx-auto w-full max-w-md lg:ml-auto">
                  <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-slate-950 shadow-xl shadow-accent/10 dark:border-accent/30">
                    {/* Window chrome */}
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-green-500/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                      <span className="ml-3 text-xs text-zinc-500">
                        profile.json
                      </span>
                    </div>
                    {/* Code lines */}
                    <div className="overflow-x-auto p-4 font-mono text-[13px] sm:p-5 sm:text-base">
                      {codeLines.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={visibleLines > i ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.2 }}
                          className="flex leading-7"
                          style={{
                            paddingLeft: `${
                              ("indent" in line ? line.indent : 0) * 1.5
                            }rem`,
                          }}
                        >
                          {"text" in line ? (
                            <span className={line.color}>{line.text}</span>
                          ) : (
                            <>
                              <span className={line.keyColor}>
                                &quot;{line.key}&quot;
                              </span>
                              <span className="text-zinc-500">:&nbsp;</span>
                              <span className={line.valueColor}>
                                {line.value}
                              </span>
                              {i < codeLines.length - 2 && (
                                <span className="text-zinc-500">,</span>
                              )}
                            </>
                          )}
                        </motion.div>
                      ))}
                      {/* blinking cursor */}
                      {visibleLines < codeLines.length && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.6 }}
                          className="inline-block h-5 w-2 bg-accent align-middle"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
