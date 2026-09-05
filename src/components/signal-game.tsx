import Link from "next/link";
import { useEffect, useState } from "react";
import { Gamepad2 } from "lucide-react";

import { siteMetadata } from "@/data/siteMetaData.mjs";

type TargetPosition = {
  left: number;
  top: number;
};

type Difficulty = "easy" | "medium" | "hard";
type GameStage = "choose" | "playing" | "result";

const DIFFICULTIES: Record<
  Difficulty,
  { label: string; time: number; targetCount: number; targetSize: string }
> = {
  easy: { label: "Easy", time: 30, targetCount: 5, targetSize: "h-16 w-16" },
  medium: {
    label: "Medium",
    time: 20,
    targetCount: 7,
    targetSize: "h-14 w-14",
  },
  hard: {
    label: "Difficult",
    time: 12,
    targetCount: 9,
    targetSize: "h-11 w-11",
  },
};

function randomTarget(): TargetPosition {
  return {
    left: 10 + Math.random() * 78,
    top: 18 + Math.random() * 65,
  };
}

export default function SignalGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<GameStage>("choose");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DIFFICULTIES.medium.time);
  const [target, setTarget] = useState<TargetPosition>({ left: 50, top: 50 });

  useEffect(() => {
    if (!isOpen || stage !== "playing") return;

    const timer = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          setStage("result");
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isOpen, stage]);

  const startGame = (level: Difficulty) => {
    const settings = DIFFICULTIES[level];
    setDifficulty(level);
    setScore(0);
    setTimeLeft(settings.time);
    setTarget(randomTarget());
    setStage("playing");
  };

  const catchTarget = () => {
    const nextScore = score + 1;
    setScore(nextScore);
    if (nextScore >= DIFFICULTIES[difficulty].targetCount) setStage("result");
    setTarget(randomTarget());
  };

  const closeGame = () => {
    setIsOpen(false);
    setStage("choose");
  };

  return (
    <>
      <section className="relative px-4 py-4 sm:px-14 md:px-20">
        <div className="mx-auto flex max-w-7xl justify-end">
          <div className="flex items-center gap-3 text-right">
            <p className="text-xs text-muted-foreground">
              Need a tiny break?{" "}
              <span className="font-semibold">Play a game</span>
            </p>
            <span className="hidden h-px w-8 bg-border sm:block" />
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open the mini game"
              className="min-h-11 group flex items-center gap-2 rounded-full border border-violet-500/40 bg-white/80 px-4 text-sm font-bold text-violet-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-500/70 hover:shadow-md dark:border-violet-300/50 dark:bg-slate-900/90 dark:text-violet-200"
            >
              <Gamepad2
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
              />
              <span>Mini game</span>
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signal-game-title"
        >
          <div className="border-white/15 relative w-full max-w-2xl overflow-hidden rounded-[2rem] border bg-[#101427] p-4 text-slate-100 shadow-2xl shadow-indigo-950/40 sm:p-6">
            <button
              type="button"
              onClick={closeGame}
              aria-label="Close game"
              className="border-white/15 absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border text-xl text-slate-300 transition-colors hover:border-white/40 hover:text-white"
            >
              ×
            </button>

            <div className="px-2 pb-4 pr-12 sm:px-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Catch the signal
              </p>
              <h2
                id="signal-game-title"
                className="mt-2 font-display text-3xl font-black sm:text-4xl"
              >
                {stage === "choose"
                  ? "How brave are your reflexes?"
                  : stage === "playing"
                  ? "Catch the sparks."
                  : "Round complete."}
              </h2>
              {stage === "playing" && (
                <div className="mt-3 flex gap-5 text-sm text-slate-400">
                  <span>
                    Score:{" "}
                    <strong className="text-violet-300">
                      {score}/{DIFFICULTIES[difficulty].targetCount}
                    </strong>
                  </span>
                  <span>
                    Time: <strong className="text-cyan-300">{timeLeft}s</strong>
                  </span>
                </div>
              )}
            </div>

            <div className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950 sm:min-h-[390px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.25),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(34,211,238,0.18),transparent_32%)]" />
              {stage === "choose" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                    Choose a level. The spark will move. Your dignity is
                    optional.
                  </p>
                  <div className="mt-6 grid w-full max-w-md grid-cols-3 gap-2">
                    {(Object.keys(DIFFICULTIES) as Difficulty[]).map(
                      (level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => startGame(level)}
                          className="border-white/15 min-h-[48px] rounded-xl border px-2 text-sm font-bold text-slate-200 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10"
                        >
                          {DIFFICULTIES[level].label}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              )}
              {stage === "playing" ? (
                <button
                  type="button"
                  onClick={catchTarget}
                  aria-label="Catch spark"
                  className={`absolute -translate-x-1/2 -translate-y-1/2 touch-manipulation rounded-full bg-gradient-to-br from-violet-300 to-cyan-300 shadow-[0_0_35px_rgba(103,232,249,0.8)] transition-transform hover:scale-125 active:scale-90 ${DIFFICULTIES[difficulty].targetSize}`}
                  style={{ left: `${target.left}%`, top: `${target.top}%` }}
                >
                  <span className="absolute inset-2 rounded-full border border-white/70" />
                </button>
              ) : stage === "result" ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <p className="text-5xl" aria-hidden="true">
                    {score >= DIFFICULTIES[difficulty].targetCount ? "✦" : "◌"}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold">
                    {score >= DIFFICULTIES[difficulty].targetCount
                      ? "Signal caught."
                      : "The bug wins this round."}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
                    {score >= DIFFICULTIES[difficulty].targetCount
                      ? "Excellent timing. The rest of my profile has fewer moving targets, but better stories."
                      : "No shame in it. Good engineers retry with better logs and fewer dramatic sound effects."}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setStage("choose")}
                      className="min-h-[44px] rounded-full bg-violet-400 px-5 text-sm font-bold text-slate-950 transition-opacity hover:opacity-90"
                    >
                      Play again
                    </button>
                    <Link
                      href="/projects"
                      onClick={closeGame}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-cyan-300/40 px-5 text-sm font-bold text-cyan-200 transition-colors hover:bg-cyan-300/10"
                    >
                      Browse the profile
                    </Link>
                  </div>
                  <a
                    href={`mailto:${siteMetadata.email}`}
                    className="mt-4 text-xs font-semibold text-slate-400 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    If it felt like a good fit, say hello
                  </a>
                </div>
              ) : null}
            </div>

            <button
              type="button"
              onClick={closeGame}
              className="mt-4 min-h-[44px] w-full text-sm font-semibold text-slate-400 transition-colors hover:text-white"
            >
              Exit game
            </button>
          </div>
        </div>
      )}
    </>
  );
}
