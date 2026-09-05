import { ReactNode, useEffect, useState } from "react";

import { Montserrat, Fraunces } from "next/font/google";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import DreamscapeBackground from "@/components/dreamscape";
import ScrollThread from "@/components/scroll-thread";
import DreamPortal from "@/components/dream-portal";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return (
    <>
      <div
        className={classNames(
          "relative min-h-screen overflow-x-clip",
          montserrat.className,
          fraunces.variable,
        )}
      >
        <ScrollThread />
        <DreamscapeBackground />
        <div className="dream-grain" aria-hidden="true" />
        {finePointer && (
          <CursorTrailCanvas className="pointer-events-none fixed inset-0 z-[5]" />
        )}
        <Navbar routes={routes} />
        <main className="relative">{props.children}</main>
      </div>
      <DreamPortal />
      <Footer />
    </>
  );
}
