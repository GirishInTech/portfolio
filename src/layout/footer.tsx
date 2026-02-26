import { useState } from "react";
import ContactButton from "@/components/contact-form/contact-button";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-3xl bg-gradient-to-br from-accent via-purple-600 to-blue-600 p-8 text-background shadow-2xl sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <div className="mb-6 flex w-full flex-col items-center gap-3 text-center">
          <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-lg bg-background/5 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 text-foreground">
                <MailIcon className="h-6 w-6" />
              </div>
              <a
                href={`mailto:${siteMetadata.email}`}
                target="_blank"
                className="truncate text-sm font-semibold text-foreground sm:text-base"
              >
                {siteMetadata.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <CopyEmailButton email={siteMetadata.email} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteMetadata.phone.replace(/\s+/g, "")}`}
              className="text-sm font-medium text-foreground hover:underline"
            >
              {siteMetadata.phone}
            </a>
            <a
              href={`tel:${siteMetadata.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground transition-opacity duration-150 hover:opacity-90 lg:hidden"
              aria-label="Call"
            >
              Call
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
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

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email"
      className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground shadow-sm transition-opacity duration-150 hover:opacity-95"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
