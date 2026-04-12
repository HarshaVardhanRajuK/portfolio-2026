export const projectsConfig = {
  label: "003 / Projects",
  title: "Things I've built",
  items: [
    {
      id: "hotelkite",
      featured: true,
      number: "Featured · 01",
      name: "Hotelkite",
      description:
        "All-in-one hotel management platform serving 50+ properties with real-time OTA sync, dynamic pricing, and a multi-tenant architecture built for scale.",
      stack: [
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "BullMQ",
        "Socket.io",
        "React",
        "Next.js 16",
        "Tailwind",
      ],
      highlights: [
        {
          title: "Channel Manager",
          description:
            "Real-time ARI sync to Booking.com, Expedia, Go-MMT, Agoda via BullMQ job queues. Zero booking loss under high OTA concurrency.",
        },
        {
          title: "PMS + Booking Engine",
          description:
            "Reservations, front office (check-in/out), housekeeping, and dynamic pricing logic with room availability flow.",
        },
        {
          title: "AI Features",
          description:
            "Multi-currency architecture with AI-driven pricing and reputation suggestion features integrated into hotel dashboard.",
        },
      ],
      link: "#",
    },
    {
      id: "banquet",
      featured: false,
      number: "02 · Government",
      name: "Banquet Management System",
      description:
        "Full-scale banquet booking system for Haryana Tourism Board. Redis-based distributed lock prevents double-booking under concurrency — BookMyShow's seat-hold pattern applied to venue management.",
      stack: ["Node.js", "MongoDB", "Redis", "BullMQ", "AWS S3"],
      link: "https://banquet.haryanatourism.gov.in",
    },
    {
      id: "spa-salon",
      featured: false,
      number: "03 · SaaS",
      name: "Spa & Salon Management System",
      description:
        "Full salon operations platform — appointment scheduling, staff management, billing, automated PDF invoicing via Puppeteer, QR-based workflows, and email notifications via SendGrid.",
      stack: ["Node.js", "MongoDB", "React", "SendGrid", "Puppeteer"],
      link: "#",
    },
  ],
} as const;
