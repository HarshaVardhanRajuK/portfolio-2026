"use client";

import { contentConfig } from "@/config/content.config";
import { useEffect, useRef } from "react";

export function Experience() {
  const { experience } = contentConfig;
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
      id="work"
      className="bg-background px-6 py-32 md:px-12"
    >
      <p className="reveal mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {experience.label}
      </p>
      <h2 className="reveal mb-16 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Where I've <em className="font-serif italic font-normal text-primary">worked</em>
      </h2>

      {experience.items.map((item, i) => (
        <div
          key={i}
          className="reveal grid gap-12 border-t border-border py-12 md:grid-cols-[200px_1fr] md:gap-12"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              {item.period}
            </span>
            <span className="font-mono text-xs text-muted-foreground/60">
              {item.location}
            </span>
            <span className="mt-2 w-fit rounded-sm border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
              {item.type}
            </span>
          </div>

          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {item.company}
            </p>
            <h3 className="mb-5 text-3xl font-bold">{item.role}</h3>
            <ul className="flex flex-col gap-3">
              {item.highlights.map((highlight, j) => (
                <li
                  key={j}
                  className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-1 before:text-xs before:text-primary before:content-['▸']"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
