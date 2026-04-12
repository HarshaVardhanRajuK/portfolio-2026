export const blogConfig = {
  label: "004 / Blog",
  title: "Words I've written",
  posts: [
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
    {
      id: "career-transition",
      tag: "Career · Self-taught",
      title: "From Civil Engineering to Full Stack Engineer: My Unconventional Path",
      excerpt:
        "How I pivoted from a civil engineering degree to building production systems used by 50+ hotel properties.",
      icon: "🛠️",
      status: "coming-soon",
      readTime: "— min read",
    },
  ],
  comingSoonMessage: "More posts coming soon — building in public, one article at a time.",
} as const;
