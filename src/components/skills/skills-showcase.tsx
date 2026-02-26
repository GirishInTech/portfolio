import { motion } from "framer-motion";

import { type SkillPillProps } from "@/components/skills/skills-pill";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

const categoryAccents: Record<string, string> = {
  LANGUAGES: "from-violet-500 to-purple-600",
  "FRAMEWORKS & LIBRARIES": "from-blue-500 to-indigo-600",
  "TOOLS & TECHNOLOGIES": "from-emerald-500 to-teal-600",
  "CLOUD & AI": "from-orange-500 to-amber-600",
};

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 flex items-end gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
              What I work with
            </p>
            <h2 className="text-3xl font-black leading-none text-foreground sm:text-5xl">
              Skills &amp;{" "}
              <span className="skills-outline-text">Technologies</span>
            </h2>
          </div>
          <div className="mb-2 hidden h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent sm:block" />
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((section, sIdx) => {
            const gradient =
              categoryAccents[section.sectionName] ??
              "from-accent to-purple-600";
            return (
              <motion.div
                key={section.sectionName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                className="border-accent/15 group relative overflow-hidden rounded-2xl border bg-muted/40 backdrop-blur-sm transition-shadow hover:shadow-xl hover:shadow-accent/10"
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

                <div className="p-5">
                  {/* Category label */}
                  <p className="mb-5 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
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
                        className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-accent/10"
                      >
                        <skill.icon className="h-5 w-5 shrink-0 text-accent" />
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
