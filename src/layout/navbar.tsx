import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";
import { classNames } from "@/utility/classNames";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar(props: NavbarProps) {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-accent/10 bg-background dark:bg-zinc-950/95 sm:bg-background/80 sm:backdrop-blur-xl sm:dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center justify-center"
          aria-label="Return to home page"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11">
            <AnimatedLogo />
          </div>
        </Link>
        <nav
          className="flex min-w-0 items-center gap-1.5 sm:gap-3"
          aria-label="Primary"
        >
          <ul className="border-accent/15 flex min-w-0 items-center gap-0.5 rounded-full border bg-background p-1 sm:gap-1 sm:bg-background/60 sm:backdrop-blur-md sm:dark:bg-zinc-900/60">
            {props.routes.map((link) => {
              const isActive = pathName === link.href;
              // Logo doubles as Home on very small screens.
              const hideOnTiny =
                link.href === "/" ? "hidden min-[400px]:block" : "";
              return (
                <li key={link.href} className={`min-w-0 ${hideOnTiny}`}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={classNames(
                      "flex min-h-[40px] items-center whitespace-nowrap rounded-full px-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm",
                      isActive
                        ? "bg-accent/15 font-semibold text-accent"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
