export const blogConfig = {
  label: "004 / Blog",
  title: "Words I've written",
  posts: [
    {
      id: "from-code-to-product-part-1",
      tag: "Career · Product Thinking",
      title: "When Your Code Meets Business Reality: My Journey from Developer to Product Thinker",
      excerpt:
        "I used to think my job was to write good code. Then someone asked me: 'How should we price this?' and I realized I had no idea what I was building.",
      icon: "🧠",
      status: "published",
      readTime: "5 min read",
      slug: "/blog/from-code-to-product-part-1",
      date: "2025-01-15",
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
