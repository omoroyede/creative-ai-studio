import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/portfolio-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omoroyede — AI Video, Automation & Digital Design" },
      {
        name: "description",
        content:
          "Transform ideas into memorable video, smarter business workflows, and polished digital experiences with Omoroyede.",
      },
      { property: "og:title", content: "Omoroyede — AI Video, Automation & Digital Design" },
      {
        property: "og:description",
        content:
          "Memorable AI-powered video, smarter workflows, and polished digital experiences for ambitious businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
