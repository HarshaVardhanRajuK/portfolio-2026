"use client";

import { contentConfig } from "@/config/content.config";
import { useEffect, useRef } from "react";
import Link from "next/link";

export function Contact() {
  const { contact } = contentConfig;
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
      id="contact"
      className="bg-background px-6 py-32 md:px-12"
    >
      <p className="reveal mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {contact.label}
      </p>

      <div className="max-w-3xl">
        <h2 className="reveal mb-10 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Let's build
          <br />
          something <em className="font-serif italic font-normal text-primary">great</em>
        </h2>

        <div className="reveal flex flex-wrap gap-4">
          {contact.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex items-center gap-2 border px-6 py-3 font-mono text-xs tracking-wide transition-colors ${
                link.primary
                  ? "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary"
                  : "border-border text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
