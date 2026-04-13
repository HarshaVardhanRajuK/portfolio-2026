"use client";

import { contentConfig } from "@/config/content.config";

export function Hero() {
  const { hero } = contentConfig;

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12"
      >
        {/* Grid Lines */}
        <div className="absolute left-0 top-[35%] h-px w-full bg-border" />
        <div className="absolute left-0 top-[65%] h-px w-full bg-border" />
        <div className="absolute left-[20%] top-0 h-full w-px bg-border" />
        <div className="absolute left-[55%] top-0 h-full w-px bg-border" />

        <div className="relative z-10">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary opacity-0 animate-fadeUp [animation-delay:0.2s] [animation-fill-mode:forwards]">
            {hero.eyebrow}
          </p>

          <h1 className="mb-8 opacity-0 animate-fadeUp [animation-delay:0.35s] [animation-fill-mode:forwards]">
            <span className="block text-6xl font-extrabold leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
              {hero.name.first}
            </span>
            <span className="block text-4xl font-extrabold leading-[0.9] tracking-tight text-muted-foreground md:text-6xl lg:text-7xl">
              <span className="font-mono">{hero.name.middle}</span> {hero.name.last}
            </span>
          </h1>

          <div className="flex items-center gap-4 opacity-0 animate-fadeUp [animation-delay:0.55s] [animation-fill-mode:forwards]">
            <div className="h-px w-10 bg-muted-foreground" />
            <p className="text-sm tracking-wide text-muted-foreground md:text-base">
              {hero.tagline}
            </p>
          </div>
        </div>

        {/* Terminal */}
        <div className="absolute right-6 top-1/2 hidden w-96 -translate-y-1/2 overflow-hidden rounded border border-border bg-card opacity-0 animate-fadeLeft [animation-delay:0.7s] [animation-fill-mode:forwards] lg:block">
          <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="ml-auto font-mono text-xs text-muted-foreground">
              {hero.terminal.title}
            </span>
          </div>
          <div className="p-5 font-mono text-xs leading-relaxed">
            <div>
              <span className="text-primary">❯ </span>
              <span className="text-foreground">whoami</span>
            </div>
            <div className="text-muted-foreground">harsha_vardhan_raju</div>
            <br />
            <div>
              <span className="text-primary">❯ </span>
              <span className="text-foreground">cat stack.json</span>
            </div>
            <div>
              <span className="text-muted-foreground">  frontend: </span>
              <span className="text-blue-400">
                {JSON.stringify(hero.terminal.commands[1].output.frontend)}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">  backend:  </span>
              <span className="text-blue-400">
                {JSON.stringify(hero.terminal.commands[1].output.backend)}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">  database: </span>
              <span className="text-blue-400">
                {JSON.stringify(hero.terminal.commands[1].output.database)}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">  cloud:    </span>
              <span className="text-blue-400">
                {JSON.stringify(hero.terminal.commands[1].output.cloud)}
              </span>
            </div>
            <br />
            <div>
              <span className="text-primary">❯ </span>
              <span className="inline-block h-3.5 w-1.5 animate-blink bg-primary align-middle" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 left-6 flex gap-12 opacity-0 animate-fadeUp [animation-delay:1s] [animation-fill-mode:forwards] md:left-12">
          {hero.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-3xl font-extrabold leading-none text-primary">
                {stat.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-6 flex flex-col items-center gap-2 opacity-0 animate-fadeUp [animation-delay:1.2s] [animation-fill-mode:forwards] md:right-12">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="h-16 w-px animate-scrollPulse bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>
    </>
  );
}
