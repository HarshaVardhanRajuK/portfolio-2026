"use client";

import { contentConfig } from "@/config/content.config";
import { useEffect, useRef } from "react";

export function About() {
  const { about } = contentConfig;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="border-y border-border bg-secondary px-6 py-32 md:px-12"
    >
      <p className="reveal mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {about.label}
      </p>

      <div className="grid gap-24 md:grid-cols-2">
        <div>
          <p className="reveal text-2xl leading-relaxed text-foreground/85 md:text-3xl">
            I build <span className="italic text-primary">full-stack systems</span> that
            handle real complexity — distributed locks, job queues, multi-tenant
            architecture — and ship them to production where real users depend on them
            daily.
          </p>
        </div>

        <div className="reveal flex flex-col gap-8">
          <p className="whitespace-pre-line font-mono text-xs leading-relaxed text-muted-foreground">
            {about.description}
          </p>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-primary">
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {about.skills.active.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                >
                  {skill}
                </span>
              ))}
              {about.skills.secondary.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
