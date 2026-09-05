import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center gap-12 overflow-hidden px-4 py-8 sm:gap-20 sm:px-14 md:px-20">
      <div className="dream-ring -left-20 top-10 hidden h-64 w-64 lg:block" />
      <div className="dream-ring -right-24 bottom-24 hidden h-80 w-80 lg:block" />
      <section className="dream-card relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Let&apos;s make something useful
            </p>
            <h2 className="mt-3 font-display text-3xl font-black leading-tight text-foreground sm:text-5xl">
              Have a good problem?
              <span className="block text-muted-foreground">
                I&apos;d love to hear it.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:text-right">
            No forms, no awkward sales pitch. Pick a door and say hello.
          </p>
        </div>

        <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
          <a
            href={`mailto:${siteMetadata.email}`}
            className="group rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 transition-colors hover:border-violet-500/50 hover:bg-violet-500/10"
          >
            <MailIcon className="h-6 w-6 text-violet-600 dark:text-violet-300" />
            <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Email
            </span>
            <span className="mt-1 block break-all text-sm font-semibold text-foreground">
              {siteMetadata.email}
            </span>
          </a>
          <a
            href={`tel:${siteMetadata.phone.replace(/\s+/g, "")}`}
            className="group rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/10"
          >
            <span className="bg-cyan-500/15 flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-cyan-700 dark:text-cyan-300">
              #
            </span>
            <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Phone
            </span>
            <span className="mt-1 block text-sm font-semibold text-foreground">
              {siteMetadata.phone}
            </span>
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4 transition-colors hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10"
          >
            <LinkedinIcon className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-300" />
            <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
              LinkedIn
            </span>
            <span className="mt-1 block text-sm font-semibold text-foreground">
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </span>
          </a>
        </div>
      </section>
      <div className="flex w-full flex-col items-center justify-between gap-6 text-center sm:gap-8 md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2026 Girish Yandigeri</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Twitter"
          >
            <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
