export const themeConfig = {
  // Available themes
  themes: ["dark", "light", "midnight", "mono"] as const,
  defaultTheme: "dark" as const,

  // Font configuration
  fonts: {
    heading: "var(--font-heading)",
    body: "var(--font-body)",
    mono: "var(--font-mono)",
  },

  // Animation settings
  animations: {
    enableCustomCursor: false,
    enableScrollReveal: true,
    enableMarquee: true,
  },

  // Layout settings
  layout: {
    maxWidth: "1400px",
    padding: {
      mobile: "1.5rem",
      desktop: "3rem",
    },
  },
} as const;

export type Theme = (typeof themeConfig.themes)[number];
