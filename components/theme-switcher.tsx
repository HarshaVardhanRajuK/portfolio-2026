"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { themeConfig } from "@/config/theme.config";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2 rounded-md border border-border bg-card p-2 shadow-lg">
      {themeConfig.themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`rounded px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
            theme === t
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
