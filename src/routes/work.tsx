import { createFileRoute } from "@tanstack/react-router";

import { WorkPage } from "@/components/portfolio-content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Omoroyede AI Creative Studio" },
      {
        name: "description",
        content:
          "Explore a cinematic AI-assisted product campaign concept and creative direction by Omoroyede.",
      },
      { property: "og:title", content: "Selected Work — Omoroyede AI Creative Studio" },
      {
        property: "og:description",
        content: "A look at the visual direction behind AI-assisted product storytelling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});
