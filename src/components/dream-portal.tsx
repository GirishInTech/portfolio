import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const PORTAL_LINKS = [
  { title: "Home", href: "/", hint: "wake up" },
  { title: "About", href: "/about", hint: "the dreamer" },
  { title: "Projects", href: "/projects", hint: "the dreams" },
];

/**
 * A hidden portal: a small moon tucked in the corner opens a
 * fullscreen swirling gateway with free-floating navigation.
 * The regular navbar stays put — this is the enchanted shortcut.
 */
export default function DreamPortal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const travel = (href: string) => {
    setOpen(false);
    // Let the portal collapse before navigating.
    setTimeout(() => router.push(href), 250);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open dream portal"
        title="Something shimmers here…"
        className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1.25rem,env(safe-area-inset-left))] z-40 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
      >
        <span className="dream-portal-pulse absolute inset-0 animate-ping rounded-full bg-accent/20 [animation-duration:2.5s]" />
        <span className="relative h-8 w-8 rounded-full bg-gradient-to-br from-accent/30 via-violet-500/60 to-cyan-500/50 shadow-lg shadow-accent/30">
          <span className="absolute left-1.5 top-2 h-1.5 w-1.5 rounded-full bg-background/50" />
          <span className="absolute left-4 top-4 h-1 w-1 rounded-full bg-background/40" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Dream portal navigation"
            className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          >
            {/* Swirling gateway */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="portal-swirl h-[130vmin] w-[130vmin] rounded-full" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="portal-swirl-rev h-[90vmin] w-[90vmin] rounded-full" />
            </div>

            <motion.nav
              aria-label="Portal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex flex-col items-center gap-2 px-6 text-center sm:gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-zinc-400">
                Where to, dreamer?
              </p>
              {PORTAL_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                  onClick={() => travel(link.href)}
                  className="group flex min-h-[56px] flex-col items-center px-6 py-2"
                >
                  <span className="font-display text-5xl font-black tracking-tight text-slate-200 transition-all duration-300 group-hover:skew-x-[-6deg] group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:tracking-widest group-hover:text-transparent sm:text-7xl">
                    {link.title}
                  </span>
                  <span className="mt-1 text-xs uppercase tracking-[0.3em] text-zinc-500 transition-colors group-hover:text-accent">
                    {link.hint}
                  </span>
                </motion.button>
              ))}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex min-h-[44px] items-center rounded-full border border-white/20 px-6 text-sm font-medium text-zinc-300 transition-colors hover:border-accent hover:text-white"
              >
                Close the portal
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
