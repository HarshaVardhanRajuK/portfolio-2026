"use client";

import { blogConfig } from "@/config/blog.config";
import { useEffect, useRef } from "react";

export function Blog() {
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
      id="blog"
      className="border-t border-border bg-background px-6 py-32 md:px-12"
    >
      <p className="reveal mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {blogConfig.label}
      </p>
      <h2 className="reveal mb-16 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Words I've <em className="font-serif italic font-normal text-primary">written</em>
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {blogConfig.posts.map((post, i) => (
          <div
            key={post.id}
            className="reveal group cursor-pointer overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/30"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="relative flex h-40 items-center justify-center bg-secondary">
              <span className="text-5xl opacity-30">{post.icon}</span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
            </div>

            <div className="p-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-primary">
                {post.tag}
              </p>
              <h4 className="mb-2 text-base font-semibold leading-snug">
                {post.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between px-6 pb-6">
              <span className="font-mono text-xs text-muted-foreground">
                Coming soon
              </span>
              <span className="font-mono text-xs text-primary">
                {post.readTime}
              </span>
            </div>
          </div>
        ))}

        <div className="reveal col-span-full border border-dashed border-border p-8 text-center font-mono text-xs tracking-wide text-muted-foreground">
          {blogConfig.comingSoonMessage}
        </div>
      </div>
    </section>
  );
}
