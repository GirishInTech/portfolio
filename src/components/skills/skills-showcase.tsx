import { motion } from "framer-motion";

import GhostWord from "@/components/ghost-word";
import { type SkillPillProps } from "@/components/skills/skills-pill";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

const categoryAccents: Record<string, string> = {
  LANGUAGES: "from-violet-500 to-indigo-600",
  "FRAMEWORKS & LIBRARIES": "from-cyan-500 to-sky-500",
  "DATABASES & DEVOPS": "from-emerald-500 to-teal-600",
  "TOOLS & TECHNOLOGIES": "from-sky-500 to-blue-600",
  "CLOUD & AI": "from-fuchsia-500 to-purple-600",
};

const categoryIconColors: Record<string, string> = {
  LANGUAGES: "text-violet-600 dark:text-violet-300",
  "FRAMEWORKS & LIBRARIES": "text-cyan-600 dark:text-cyan-300",
  "DATABASES & DEVOPS": "text-emerald-600 dark:text-emerald-300",
  "TOOLS & TECHNOLOGIES": "text-sky-600 dark:text-sky-300",
  "CLOUD & AI": "text-fuchsia-600 dark:text-fuchsia-300",
};

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-14 sm:py-24 md:px-20 lg:py-32">
      <GhostWord word="CRAFT" />
      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 flex items-end gap-4 sm:mb-14">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
              What I work with
            </p>
            <h2 className="font-display text-3xl font-black leading-tight text-foreground sm:text-5xl sm:leading-none">
              Skills &amp;{" "}
              <span className="skills-outline-text">Technologies</span>
            </h2>
          </div>
          <div className="mb-2 hidden h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent sm:block" />
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {skills.map((section, sIdx) => {
            const gradient =
              categoryAccents[section.sectionName] ??
              "from-accent via-violet-500 to-cyan-400";
            const iconColor =
              categoryIconColors[section.sectionName] ?? "text-accent";
            return (
              <motion.div
                key={section.sectionName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                className="dream-card group relative overflow-hidden rounded-[1.75rem] transition-shadow hover:shadow-xl hover:shadow-accent/10"
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

                <div className="p-4 sm:p-5">
                  {/* Category label */}
                  <p className="mb-5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    {section.sectionName}
                  </p>

                  {/* Skills list */}
                  <div className="space-y-2">
                    {section.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: sIdx * 0.1 + idx * 0.07,
                        }}
                        className="flex min-h-[44px] items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-accent/10"
                      >
                        <skill.icon
                          className={`h-5 w-5 shrink-0 ${iconColor}`}
                        />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Subtle corner glow */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-all group-hover:bg-accent/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
