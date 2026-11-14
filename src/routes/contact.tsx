import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/portfolio-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Project — Contact Omoroyede" },
      { name: "description", content: "Tell Omoroyede about your AI video, automation, website, or digital creative project." },
      { property: "og:title", content: "Start a Project — Contact Omoroyede" },
      { property: "og:description", content: "Share your idea or business challenge and start a project conversation with Omoroyede." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});