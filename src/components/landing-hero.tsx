import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

const codeLines = [
  { indent: 0, text: "{", color: "text-zinc-100" },
  {
    indent: 1,
    key: "name",
    value: '"Girish Yandigeri"',
    keyColor: "text-purple-400",
    valueColor: "text-green-400",
  },
  {
    indent: 1,
    key: "role",
    value: '"RISQ Software Engineer"',
    keyColor: "text-purple-400",
    valueColor: "text-green-400",
  },
  {
    indent: 1,
    key: "company",
    value: '"Societe Generale"',
    keyColor: "text-purple-400",
    valueColor: "text-yellow-400",
  },
  {
    indent: 1,
    key: "stack",
    value: '["Django", "Python", "ML"]',
    keyColor: "text-purple-400",
    valueColor: "text-blue-400",
  },
  {
    indent: 1,
    key: "cloud",
    value: '["AWS", "GCP"]',
    keyColor: "text-purple-400",
    valueColor: "text-blue-400",
  },
  {
    indent: 1,
    key: "focus",
    value: '"Scalable Systems"',
    keyColor: "text-purple-400",
    valueColor: "text-green-400",
  },
  {
    indent: 1,
    key: "open_to",
    value: '"New Opportunities"',
    keyColor: "text-purple-400",
    valueColor: "text-accent",
  },
  { indent: 0, text: "}", color: "text-zinc-100" },
];

export default function LandingHero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= codeLines.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20">
      <div className="w-full">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT: Text content */}
          <AnimatePresence>
            <div className="order-2 lg:order-1">
              <FadeUp key="eyebrow" duration={0.5}>
                <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  Available for work
                </span>
              </FadeUp>

              <FadeUp key="name" duration={0.6} delay={0.1}>
                <h1 className="mt-5 text-5xl font-black leading-none tracking-tight sm:text-6xl xl:text-7xl">
                  <span className="text-outline-accent block">Girish</span>
                  <span className="block bg-gradient-to-r from-accent via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Yandigeri
                  </span>
                </h1>
              </FadeUp>

              <FadeUp key="role" duration={0.6} delay={0.2}>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-base font-semibold text-muted-foreground sm:text-lg">
                    RISQ Software Engineer at{" "}
                    <span className="text-accent">Societe Generale</span>
                  </span>
                </div>
              </FadeUp>

              <FadeUp key="desc" duration={0.6} delay={0.3}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                  Specializing in building strong and scalable systems. Skilled
                  in{" "}
                  <span className="font-semibold text-foreground">Django</span>,{" "}
                  <span className="font-semibold text-foreground">Python</span>,{" "}
                  <span className="font-semibold text-foreground">
                    Machine Learning
                  </span>
                  , and experienced with{" "}
                  <span className="font-semibold text-foreground">AWS</span>,{" "}
                  <span className="font-semibold text-foreground">GCP</span>,{" "}
                  <span className="font-semibold text-foreground">AI APIs</span>{" "}
                  and Cloud Computing.
                </p>
              </FadeUp>

              <FadeUp key="tags" duration={0.6} delay={0.4}>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Python", "Django", "AWS", "GCP", "ML", "Cloud"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </FadeUp>
            </div>

            {/* RIGHT: JSON code card */}
            <div className="order-1 lg:order-2">
              <FadeUp key="code-card" duration={0.7} delay={0.2}>
                <div className="relative rounded-2xl border border-accent/20 bg-zinc-950 shadow-2xl shadow-accent/10 dark:border-accent/30">
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-xs text-zinc-500">
                      profile.json
                    </span>
                  </div>
                  {/* Code lines */}
                  <div className="p-5 font-mono text-sm sm:text-base">
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
              </FadeUp>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
