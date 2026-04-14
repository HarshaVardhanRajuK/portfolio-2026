export const blogConfig = {
  label: "004 / Blog",
  title: "Words I've written",
  posts: [
    {
      id: "code-first-to-outcome-first",
      tag: "Career · Product Thinking",
      title: "From Code-First to Outcome-First: How Owning a Product Changed the Way I Think",
      excerpt:
        "I didn't stop being an engineer. I just stopped letting the code be the point.",
      icon: "🧠",
      status: "published",
      readTime: "4 min read",
      slug: "/blog/code-first-to-outcome-first",
      date: "2025-04-10",
    },
    {
      id: "redis-distributed-lock",
      tag: "Backend · Architecture",
      title: "Building a Redis Distributed Lock for High-Concurrency Booking Systems",
      excerpt:
        "How I implemented a 10-minute timed checkout to prevent double-booking — the same pattern BookMyShow uses for seat holds.",
      icon: "⚡",
      status: "coming-soon",
      readTime: "— min read",
    },
    {
      id: "bullmq-production",
      tag: "Queues · Real-time",
      title: "BullMQ in Production: Syncing Hotel Inventory to 4 OTAs Without Losing a Booking",
      excerpt:
        "A deep dive into my job queue architecture for real-time ARI sync across Booking.com, Expedia, Go-MMT, and Agoda.",
      icon: "🔄",
      status: "coming-soon",
      readTime: "— min read",
    },
  ],
  comingSoonMessage: "More posts coming soon — building in public, one article at a time.",
} as const;
