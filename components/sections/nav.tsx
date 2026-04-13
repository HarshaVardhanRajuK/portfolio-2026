"use client";

import { siteConfig } from "@/config/site.config";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/70 px-6 py-6 backdrop-blur-md md:px-12">
      <Link
        href="#hero"
        className="font-mono text-sm tracking-wide text-primary"
      >
        harsha/
      </Link>

      <ul className="hidden gap-10 md:flex">
        {["About", "Work", "Projects", "Blog", "Tools"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={`mailto:${siteConfig.links.email}`}
        className="border border-primary px-5 py-2 font-mono text-xs tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Get in touch →
      </Link>
    </nav>
  );
}
