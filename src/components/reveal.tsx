import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type RevealState = "static" | "pending" | "in";

/**
 * Fades + lifts content in as it scrolls into view.
 *
 * Content is fully visible on the server and before hydration, so nothing is hidden if
 * JavaScript fails. After mount, only elements that start below the fold are hidden and then
 * revealed, so above-the-fold content never flashes. Reduced-motion users see everything as-is.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<RevealState>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    const rect = el.getBoundingClientRect();
    const startsInView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (startsInView) return;

    setState("pending");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("in");
            if (once) observer.disconnect();
          } else if (!once) {
            setState("pending");
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
      className={cn(
        "reveal",
        state === "pending" && "reveal-pending",
        state === "in" && "reveal-in",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
