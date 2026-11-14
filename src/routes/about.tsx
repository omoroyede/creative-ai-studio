import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/portfolio-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Omoroyede — Creative Technology Specialist" },
      { name: "description", content: "Meet Omoroyede, a creative technology specialist combining AI, automation, and digital craft to solve business challenges." },
      { property: "og:title", content: "About Omoroyede — Creative Technology Specialist" },
      { property: "og:description", content: "Creative production and practical problem-solving for businesses, brands, and entrepreneurs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});