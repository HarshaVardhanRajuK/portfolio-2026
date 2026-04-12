export const toolsConfig = {
  label: "005 / Tools",
  title: "Things I've made",
  items: [
    {
      id: "redis-lock-visualizer",
      icon: "🔒",
      name: "Redis Lock Visualizer",
      description:
        "Interactive tool to visualize how distributed locks work under concurrent requests. Great for understanding the BookMyShow seat-hold pattern.",
      status: "wip" as const,
    },
    {
      id: "bullmq-inspector",
      icon: "📊",
      name: "BullMQ Job Queue Inspector",
      description:
        "A lightweight UI wrapper around BullMQ to monitor, retry, and debug job queues without Bull Board's overhead.",
      status: "planned" as const,
    },
    {
      id: "hotel-pricing-calculator",
      icon: "🏨",
      name: "Hotel Pricing Calculator",
      description:
        "Tool to simulate dynamic hotel room pricing logic based on occupancy rates, seasonal demand, and competitor pricing signals.",
      status: "planned" as const,
    },
    {
      id: "prisma-visualizer",
      icon: "📐",
      name: "Prisma Schema Visualizer",
      description:
        "Paste your Prisma schema and get an interactive ER diagram. Built for engineers who live in the terminal.",
      status: "planned" as const,
    },
    {
      id: "api-latency-heatmap",
      icon: "⏱️",
      name: "API Latency Heatmap",
      description:
        "Drop in your OpenTelemetry traces and see a visual heatmap of slow endpoints, p99 latencies, and bottlenecks.",
      status: "planned" as const,
    },
    {
      id: "sendgrid-previewer",
      icon: "✉️",
      name: "SendGrid Template Previewer",
      description:
        "Live preview your HTML email templates with dynamic variable substitution — no sending required. Works with any transactional email provider.",
      status: "wip" as const,
    },
  ],
} as const;

export type ToolStatus = "live" | "wip" | "planned";
