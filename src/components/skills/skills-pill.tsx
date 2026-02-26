import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <div className="group flex w-max items-center gap-3 overflow-hidden rounded-xl border-2 border-accent/30 bg-gradient-to-r from-[#fdf6e3] to-accent/10 px-5 py-3 text-sm shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-xl hover:shadow-accent/20 dark:from-[#2d2a22] dark:to-accent/20 sm:text-base md:px-6 md:py-3 md:text-lg">
      <Icon
        className="h-6 w-6 text-accent transition-transform group-hover:scale-110 sm:h-8 sm:w-8"
        style={{
          color: "hsl(var(--accent))",
          fill: "hsl(var(--accent))",
          filter: "brightness(1.4) drop-shadow(0 0 2px hsl(var(--accent)))",
        }}
      />
      <span
        className="font-semibold text-foreground"
        style={{ textShadow: "0 1px 2px #fff, 0 0 2px hsl(var(--accent))" }}
      >
        {name}
      </span>
    </div>
  );
}
