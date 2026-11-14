import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/components/portfolio-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Omoroyede Creative Technology" },
      { name: "description", content: "Explore Omoroyede’s AI video production, automation, website design, and creative digital services." },
      { property: "og:title", content: "AI Video, Automation & Website Services — Omoroyede" },
      { property: "og:description", content: "Creative production and practical digital solutions shaped around your business goals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});