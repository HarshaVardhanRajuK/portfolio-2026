import { contentConfig } from "@/config/content.config";

export function Marquee() {
  const { techStack } = contentConfig;

  return (
    <div className="overflow-hidden whitespace-nowrap bg-primary py-4">
      <div className="inline-flex animate-marquee">
        {[...techStack, ...techStack].map((tech, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="px-8 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground">
              {tech}
            </span>
            <span className="mr-8 text-primary-foreground/35">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
