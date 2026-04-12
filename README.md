# Portfolio Website

A modern, config-driven portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Multi-theme Support**: Dark, Light, Midnight, and Monochrome themes
- **Fully Configurable**: All content, colors, fonts, and settings in config files
- **Type-Safe**: Built with TypeScript for better DX
- **Responsive**: Mobile-first design that works on all devices
- **Performant**: Optimized with Next.js App Router
- **Accessible**: Semantic HTML and ARIA labels

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts & theme provider
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── blog.tsx
│   │   ├── tools.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-switcher.tsx # Theme toggle UI
├── config/                # Configuration files
│   ├── site.config.ts     # Site metadata & links
│   ├── content.config.ts  # All text content
│   ├── theme.config.ts    # Theme settings
│   ├── projects.config.ts # Project data
│   ├── blog.config.ts     # Blog posts
│   └── tools.config.ts    # Tools/utilities
├── styles/
│   └── themes/            # Theme CSS files
│       ├── dark.css
│       ├── light.css
│       ├── midnight.css
│       └── mono.css
└── lib/
    └── utils.ts           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ⚙️ Configuration

### Changing Content

All content is in `config/` files. Edit these to update your portfolio:

- **`site.config.ts`**: Name, title, description, social links
- **`content.config.ts`**: Hero, about, experience, contact text
- **`projects.config.ts`**: Your projects/systems
- **`blog.config.ts`**: Blog posts
- **`tools.config.ts`**: Tools you've built

### Changing Themes

1. **Edit existing themes**: Modify files in `styles/themes/`
2. **Add new theme**: 
   - Create `styles/themes/yourtheme.css`
   - Import in `app/layout.tsx`
   - Add to `config/theme.config.ts`

### Changing Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-heading",
});
```

### Changing Colors

Colors use CSS variables defined in theme files. Edit `styles/themes/*.css`:

```css
[data-theme="dark"] {
  --primary: 84 100% 67%;  /* HSL values */
  --background: 222 14% 2%;
  /* ... */
}
```

## 🎨 Themes

Switch themes using the floating theme switcher (bottom-right corner):

- **Dark**: Original design with lime green accent
- **Light**: Clean light theme for professional contexts
- **Midnight**: Deep blue dark theme
- **Mono**: Grayscale monochrome theme

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (heading/body), JetBrains Mono (code)
- **Theme**: next-themes
- **Deployment**: Vercel (recommended)

## 📝 Adding Blog Posts

Currently using placeholder posts. To add real blog posts:

1. Install MDX support: `npm install @next/mdx`
2. Create `content/blog/` directory
3. Add `.mdx` files
4. Update `blog.config.ts` with real post data

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize!
