import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";
import MobileMenu from "@/components/utility/mobile-menu";
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        <Link
          href="/"
          className="drop-shadow-teralight flex items-center justify-center"
          aria-label="Return to home page"
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <AnimatedLogo />
          </div>
        </Link>
        <nav className="hidden items-center gap-2 rounded-2xl border border-accent/20 bg-background/80 px-3 py-2 shadow-lg backdrop-blur-xl dark:bg-zinc-900/80 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {props.routes.map((_link, index) => {
              return (
                <li
                  key={index}
                  className="my-3 transition-transform duration-100 hover:scale-[1.1]"
                >
                  <Link
                    href={_link.href}
                    className={classNames(
                      pathName === _link.href
                        ? "font-bold text-accent-foreground"
                        : "text-foreground hover:text-accent",
                      "group relative mx-2 rounded-xl px-4 py-2 transition-all duration-300",
                    )}
                  >
                    {_link.href === pathName && (
                      <motion.span
                        layoutId="tab-pill"
                        animate={{
                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          },
                        }}
                        className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-accent to-purple-600 group-hover:from-accent/90 group-hover:to-purple-600/90"
                      ></motion.span>
                    )}
                    {_link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeSwitch />
        </nav>
        <AnimatePresence>
          <MenuLogo open={isModalOpen} toggle={toggleModal} />
        </AnimatePresence>
      </div>

      <MobileMenu
        routes={props.routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}
