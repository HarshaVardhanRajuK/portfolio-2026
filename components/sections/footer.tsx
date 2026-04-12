import { contentConfig } from "@/config/content.config";
import Link from "next/link";

export function Footer() {
  const { footer } = contentConfig;

  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-8 md:flex-row md:px-12">
      <p className="font-mono text-xs text-muted-foreground">{footer.copyright}</p>

      <div className="flex gap-8">
        {footer.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
