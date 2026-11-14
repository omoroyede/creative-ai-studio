import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type VideoSource = {
  mp4: string;
  webm?: string;
  poster: string;
};

/**
 * A muted, looping video with a visible pause/play control (so motion can always be stopped).
 * Respects reduced-motion by starting paused on the poster frame.
 */
export function VideoReel({
  source,
  label,
  className,
  videoClassName,
}: {
  source: VideoSource;
  label: string;
  className?: string;
  videoClassName?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={cn("relative overflow-hidden bg-card", className)}>
      <video
        ref={videoRef}
        className={cn("h-full w-full object-cover", videoClassName)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={source.poster}
        aria-label={label}
      >
        {source.webm ? <source src={source.webm} type="video/webm" /> : null}
        <source src={source.mp4} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause video: ${label}` : `Play video: ${label}`}
        className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/75 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
      >
        {playing ? (
          <Pause aria-hidden="true" className="h-4 w-4" />
        ) : (
          <Play aria-hidden="true" className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

/**
 * Decorative background video for hero sections. Hidden for reduced-motion users and always
 * pausable via the small control in the top-right corner.
 */
export function BackgroundVideo({
  source,
  className,
}: {
  source: VideoSource;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className={cn("hero-video", className)}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={source.poster}
        aria-hidden="true"
        tabIndex={-1}
      >
        {source.webm ? <source src={source.webm} type="video/webm" /> : null}
        <source src={source.mp4} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="hero-video-control absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary sm:right-6 sm:top-6"
      >
        {playing ? (
          <Pause aria-hidden="true" className="h-4 w-4" />
        ) : (
          <Play aria-hidden="true" className="h-4 w-4" />
        )}
      </button>
    </>
  );
}
