import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import {
  contactEmail,
  contactTopics,
  heroVideo,
  mailto,
  reelVideo,
  tools,
  workItems,
} from "@/lib/portfolio-data";
import { routeTree } from "@/routeTree.gen";

describe("mailto helper", () => {
  it("builds a plain link and an encoded subject link", () => {
    expect(mailto()).toBe(`mailto:${contactEmail}`);
    expect(mailto("Let’s build")).toBe(`mailto:${contactEmail}?subject=Let%E2%80%99s%20build`);
  });

  it("gives every contact topic a usable subject", () => {
    for (const topic of contactTopics) {
      expect(topic.label.length).toBeGreaterThan(0);
      expect(mailto(topic.subject)).toContain("subject=");
    }
  });
});

describe("site media and content", () => {
  it("points videos at files served from /media with a poster", () => {
    for (const video of [heroVideo, reelVideo]) {
      expect(video.mp4).toMatch(/^\/media\/.+\.mp4$/);
      expect(video.poster).toMatch(/^\/media\/.+\.jpg$/);
    }
  });

  it("has a marquee list and work items without duplicates", () => {
    expect(new Set(tools).size).toBe(tools.length);
    expect(new Set(workItems.map((item) => item.id)).size).toBe(workItems.length);
  });
});

describe("every page route", () => {
  it.each(["/", "/services", "/about", "/work", "/contact"])("matches a page for %s", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
