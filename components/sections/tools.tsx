"use client";

import { toolsConfig } from "@/config/tools.config";
import { useEffect, useRef } from "react";

const statusStyles = {
  live: "bg-green-500/10 text-green-500 border-green-500/30",
  wip: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  planned: "bg-muted/10 text-muted-foreground border-border",
};

export function Tools() {
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
      id="tools"
      className="border-y border-border bg-secondary px-6 py-32 md:px-12"
    >
      <p className="reveal mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {toolsConfig.label}
      </p>
      <h2 className="reveal mb-16 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Things I've <em className="font-serif italic font-normal text-primary">made</em>
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {toolsConfig.items.map((tool, i) => (
          <div
            key={tool.id}
            className="reveal group relative overflow-hidden border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <span className="mb-4 block text-3xl">{tool.icon}</span>
            <h4 className="mb-2 text-base font-bold">{tool.name}</h4>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>

            <span
              className={`w-fit rounded-sm border px-2 py-1 font-mono text-xs uppercase ${
                statusStyles[tool.status]
              }`}
            >
              {tool.status === "wip" ? "In Progress" : tool.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
