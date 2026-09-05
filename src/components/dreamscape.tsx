import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Lucid-dream backdrop.
 * - Ambient orbs + a morphing atmosphere drift on their own.
 * - Abstract objects float along slow looping paths.
 * - The whole scene leans toward the cursor (fine pointers only)
 *   and deepens as you scroll. Transform-only, rAF-lerped.
 */
export default function DreamscapeBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let scrollTarget = window.scrollY;
    let scrollSmooth = window.scrollY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      schedule();
    };
    const onScroll = () => {
      scrollTarget = window.scrollY;
      schedule();
    };
    const loop = () => {
      raf = 0;
      if (document.hidden) return;

      cx += (tx - cx) * 0.045;
      cy += (ty - cy) * 0.045;
      scrollSmooth += (scrollTarget - scrollSmooth) * 0.08;
      root.style.setProperty("--px", cx.toFixed(3));
      root.style.setProperty("--py", cy.toFixed(3));
      root.style.setProperty("--sy", scrollSmooth.toFixed(1));

      if (
        Math.abs(tx - cx) > 0.001 ||
        Math.abs(ty - cy) > 0.001 ||
        Math.abs(scrollTarget - scrollSmooth) > 0.5
      ) {
        schedule();
      }
    };
    function schedule() {
      if (!document.hidden && raf === 0) {
        raf = requestAnimationFrame(loop);
      }
    }
    const onVisibilityChange = () => {
      if (document.hidden) {
        if (raf !== 0) cancelAnimationFrame(raf);
        raf = 0;
      } else {
        schedule();
      }
    };

    if (finePointer) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    schedule();
    return () => {
      if (raf !== 0) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div ref={rootRef} className="dreamscape" aria-hidden="true">
      {/* Deep morphing atmosphere (scroll-reactive hue + drift) */}
      <div
        className="dream-layer"
        style={{ "--dx": "8px", "--dy": "6px" } as CSSProperties}
      >
        <div className="dream-morph" />
      </div>

      {/* Ambient colour fields */}
      <div
        className="dream-layer"
        style={{ "--dx": "18px", "--dy": "14px" } as CSSProperties}
      >
        <div className="dream-orb dream-orb-a" />
      </div>
      <div
        className="dream-layer"
        style={{ "--dx": "-24px", "--dy": "-18px" } as CSSProperties}
      >
        <div className="dream-orb dream-orb-b" />
      </div>
      <div
        className="dream-layer"
        style={{ "--dx": "14px", "--dy": "-20px" } as CSSProperties}
      >
        <div className="dream-orb dream-orb-c" />
      </div>

      {/* Floating abstract objects */}
      <div
        className="dream-layer"
        style={{ "--dx": "34px", "--dy": "26px" } as CSSProperties}
      >
        <div className="floater floater-a left-[12vw] top-[18vh] hidden sm:block">
          <div className="floater-ring h-36 w-36 lg:h-44 lg:w-44" />
        </div>
        <div className="floater floater-b right-[10vw] top-[60vh]">
          <div className="floater-disc h-24 w-24 sm:h-32 sm:w-32" />
        </div>
      </div>
      <div
        className="dream-layer"
        style={{ "--dx": "-42px", "--dy": "30px" } as CSSProperties}
      >
        <div className="floater floater-c left-[8vw] top-[66vh] hidden md:block">
          <div className="floater-shard h-28 w-28 rotate-12 rounded-[2rem]" />
        </div>
        <div className="floater floater-b right-[16vw] top-[14vh] hidden sm:block">
          <div className="floater-ring h-16 w-16 opacity-70" />
        </div>
      </div>
      <div
        className="dream-layer"
        style={{ "--dx": "26px", "--dy": "-32px" } as CSSProperties}
      >
        <div className="floater floater-a left-[46vw] top-[8vh]">
          <div className="floater-disc h-12 w-12 opacity-70 sm:h-16 sm:w-16" />
        </div>
      </div>

      {/* Faint orbit rings + moon glow, desktop only */}
      <div
        className="dream-layer"
        style={{ "--dx": "20px", "--dy": "16px" } as CSSProperties}
      >
        <div className="dream-ring right-[6vw] top-[64vh] hidden h-56 w-56 md:block" />
        <div className="dream-moon right-[10vw] top-[10vh] hidden h-16 w-16 sm:block" />
      </div>
    </div>
  );
}
