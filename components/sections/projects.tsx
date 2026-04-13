"use client";

import { projectsConfig } from "@/config/projects.config";
import { useEffect, useRef } from "react";
import Link from "next/link";

export function Projects() {
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
      id="projects"
      className="border-t border-border bg-secondary px-6 py-32 md:px-12"
    >
      <p className="reveal mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {projectsConfig.label}
      </p>
      <h2 className="reveal mb-16 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Things I&apos;ve <em className="font-serif italic font-normal text-primary">built</em>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projectsConfig.items.map((project) => (
          <div
            key={project.id}
            className={`reveal group relative overflow-hidden border border-border bg-card p-10 transition-all hover:-translate-y-1 hover:border-primary/35 ${
              project.featured ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {project.number}
              </p>
              <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-primary">
                {project.name}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-primary transition-all hover:gap-3"
              >
                View Project →
              </Link>
            </div>

            {project.featured && project.highlights && (
              <div className="relative mt-8 flex flex-col justify-center gap-4 md:mt-0">
                {project.highlights.map((highlight, j) => (
                  <div
                    key={j}
                    className="border-l-2 border-primary bg-primary/5 p-4"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <strong className="font-medium text-foreground">
                        {highlight.title}
                      </strong>{" "}
                      — {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
