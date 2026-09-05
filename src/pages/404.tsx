import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center px-4">
      <div className="dream-card flex w-full max-w-md flex-col items-center gap-4 rounded-[2rem] p-8 text-center sm:gap-5 sm:p-12">
        <h1 className="bg-gradient-to-r from-accent via-violet-500 to-cyan-400 bg-clip-text font-display text-6xl font-black text-transparent sm:text-8xl">
          404
        </h1>
        <p className="text-base font-medium text-muted-foreground sm:text-lg">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex min-h-[44px] items-center rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
