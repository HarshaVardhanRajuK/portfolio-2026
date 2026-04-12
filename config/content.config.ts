export const contentConfig = {
  hero: {
    eyebrow: "Full Stack Engineer · Bhubaneswar, India",
    name: {
      first: "Harsha",
      middle: "Vardhan",
      last: "Raju",
    },
    tagline: "Building scalable systems & hotel tech at Bookingjini",
    stats: [
      { value: "50+", label: "Properties Served" },
      { value: "3", label: "Live Systems" },
      { value: "1.5y", label: "Production Exp." },
    ],
    terminal: {
      title: "harsha@dev ~ stack.sh",
      commands: [
        { prompt: "whoami", output: "harsha_vardhan_raju" },
        {
          prompt: "cat stack.json",
          output: {
            frontend: ["React", "Next.js", "Tailwind"],
            backend: ["Node.js", "Express", "BullMQ"],
            database: ["PostgreSQL", "MongoDB", "Redis"],
            cloud: ["AWS S3", "AWS SES", "Docker"],
          },
        },
      ],
    },
  },

  about: {
    label: "001 / About",
    text: "I build full-stack systems that handle real complexity — distributed locks, job queues, multi-tenant architecture — and ship them to production where real users depend on them daily.",
    description:
      "Currently a core engineer at Bookingjini, owning end-to-end development of Hotelkite — an all-in-one hotel management platform.\n\nSelf-taught engineer who transitioned from Civil Engineering. I learn by building things that actually work at scale.",
    skills: {
      active: [
        "TypeScript",
        "Node.js",
        "React",
        "Next.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "BullMQ",
      ],
      secondary: [
        "Socket.io",
        "AWS S3/SES",
        "Docker",
        "Prisma",
        "Drizzle",
        "Tailwind CSS",
        "OpenTelemetry",
      ],
    },
  },

  experience: {
    label: "002 / Experience",
    title: "Where I've worked",
    items: [
      {
        company: "Bookingjini",
        role: "Full Stack Engineer",
        period: "Sep 2024 – Present",
        location: "Bhubaneswar, Odisha",
        type: "On-site · Full-time",
        highlights: [
          "Core engineer on Hotelkite, an all-in-one hotel management platform serving 50+ properties, owning end-to-end development across PMS, Channel Manager, Booking Engine, and operations modules.",
          "Sole developer on two production systems — Banquet Management System (Haryana Tourism Board) and Spa & Salon Management System — from schema design to deployment.",
          "Participated in client-facing requirement sessions alongside the tech lead, translating business needs into technical solutions and iterating on feedback.",
          "Engineered and scaled backend systems with Node.js, PostgreSQL/MongoDB, and Redis, while building responsive frontend applications using React and Next.js.",
        ],
      },
    ],
  },

  contact: {
    label: "006 / Contact",
    title: "Let's build something great",
    links: [
      { label: "rajharsha666@gmail.com", href: "mailto:rajharsha666@gmail.com", primary: true },
      { label: "LinkedIn", href: "https://linkedin.com", primary: false },
      { label: "GitHub", href: "https://github.com", primary: false },
      { label: "+91 82475 18629", href: "tel:+918247518629", primary: false },
    ],
  },

  footer: {
    copyright: "© 2025 Harsha Vardhan Raju. Built with ☕ and TypeScript.",
    links: [
      { label: "Top ↑", href: "#hero" },
      { label: "Email", href: "mailto:rajharsha666@gmail.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },

  techStack: [
    "Node.js",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "MongoDB",
    "TypeScript",
    "Socket.io",
    "AWS",
    "Docker",
    "Prisma",
  ],
} as const;
