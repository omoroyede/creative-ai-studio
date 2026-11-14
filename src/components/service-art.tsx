import { useId, type CSSProperties } from "react";

/**
 * Original, animated SVG illustrations for each service. Colours come from the theme tokens,
 * and all motion is plain CSS (stopped automatically for reduced-motion users).
 */

type ArtProps = { className?: string | undefined };

function Backdrop({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--primary)" stopOpacity="0.22" />
          <stop offset="1" stopColor="var(--warm)" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--warm)" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="var(--card)" />
      <rect width="320" height="180" fill={`url(#${id}-bg)`} />
    </>
  );
}

const delay = (s: number) => ({ "--delay": `${s}s` }) as CSSProperties;

export function VideoArt({ className }: ArtProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label="Film frame with a play button and a moving timeline"
      className={className}
    >
      <Backdrop id={id} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} fill="var(--border)">
          <rect x="46" y={34 + i * 22} width="12" height="9" rx="2" />
          <rect x="262" y={34 + i * 22} width="12" height="9" rx="2" />
        </g>
      ))}
      <rect
        x="72"
        y="26"
        width="176"
        height="108"
        rx="6"
        fill="var(--background)"
        fillOpacity="0.7"
        stroke="var(--primary)"
        strokeWidth="1.5"
      />
      <rect x="76" y="30" width="168" height="100" rx="3" fill={`url(#${id}-shine)`} />
      <path d="M96 130 L140 30 H168 L124 130 Z" fill="#fff" fillOpacity="0.07" />
      <circle
        cx="160"
        cy="80"
        r="19"
        fill="var(--background)"
        fillOpacity="0.55"
        stroke="var(--foreground)"
        strokeOpacity="0.6"
      />
      <path d="M153 69 L173 80 L153 91 Z" fill="var(--foreground)" />
      <line
        x1="76"
        y1="152"
        x2="244"
        y2="152"
        stroke="var(--border)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g className="scan-x" style={{ "--scan": "168px" } as CSSProperties}>
        <circle cx="76" cy="152" r="5" fill="var(--warm)" />
      </g>
      <circle cx="262" cy="22" r="5" fill="var(--warm)" className="pulse-dot" />
    </svg>
  );
}

export function AutomationArt({ className }: ArtProps) {
  const id = useId().replace(/:/g, "");
  const nodes = [
    { x: 56, y: 48 },
    { x: 56, y: 132 },
    { x: 264, y: 48 },
    { x: 264, y: 132 },
  ];
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label="Connected nodes passing data to a central automation hub"
      className={className}
    >
      <Backdrop id={id} />
      {nodes.map((n, i) => (
        <path
          key={i}
          d={`M${n.x} ${n.y} C ${(n.x + 160) / 2} ${n.y}, ${(n.x + 160) / 2} 90, 160 90`}
          fill="none"
          stroke={i % 2 === 0 ? "var(--primary)" : "var(--warm)"}
          strokeWidth="1.6"
          className="flow-dash"
          style={delay(i * 0.2)}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="14" fill="var(--background)" stroke="var(--border)" />
          <circle
            cx={n.x}
            cy={n.y}
            r="5"
            fill={i % 2 === 0 ? "var(--primary)" : "var(--warm)"}
            className="pulse-dot"
            style={delay(i * 0.5)}
          />
        </g>
      ))}
      <circle
        cx="160"
        cy="90"
        r="34"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.35"
        strokeDasharray="3 6"
        className="flow-dash"
      />
      <circle
        cx="160"
        cy="90"
        r="24"
        fill="var(--background)"
        stroke="var(--primary)"
        strokeWidth="1.5"
      />
      <path d="M165 74 L151 93 H160 L156 107 L171 86 H162 Z" fill="var(--warm)" />
    </svg>
  );
}

export function WebArt({ className }: ArtProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label="A website layout being assembled in a browser window"
      className={className}
    >
      <Backdrop id={id} />
      <rect
        x="50"
        y="20"
        width="220"
        height="140"
        rx="6"
        fill="var(--background)"
        fillOpacity="0.75"
        stroke="var(--border)"
      />
      <line x1="50" y1="42" x2="270" y2="42" stroke="var(--border)" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={64 + i * 10}
          cy="31"
          r="2.5"
          fill={i === 0 ? "var(--warm)" : "var(--border)"}
        />
      ))}
      <rect x="98" y="26" width="112" height="10" rx="5" fill="var(--border)" fillOpacity="0.7" />
      <rect x="64" y="54" width="124" height="38" rx="3" fill={`url(#${id}-shine)`} />
      <rect x="196" y="54" width="60" height="38" rx="3" fill="var(--warm)" fillOpacity="0.3" />
      <rect
        x="64"
        y="100"
        width="92"
        height="5"
        rx="2.5"
        fill="var(--foreground)"
        fillOpacity="0.5"
      />
      <rect
        x="64"
        y="110"
        width="64"
        height="5"
        rx="2.5"
        fill="var(--foreground)"
        fillOpacity="0.25"
      />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={64 + i * 64}
          y="126"
          width="58"
          height="24"
          rx="3"
          fill="var(--card)"
          stroke="var(--border)"
        />
      ))}
      <rect
        x="50"
        y="42"
        width="220"
        height="2"
        fill="var(--primary)"
        fillOpacity="0.8"
        className="scan-y"
        style={{ "--scan": "112px" } as CSSProperties}
      />
      <g className="float-y">
        <path
          d="M214 96 L214 124 L221 118 L226 130 L231 128 L226 116 L235 115 Z"
          fill="var(--foreground)"
          stroke="var(--background)"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}

export function CreativeArt({ className }: ArtProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label="Layered presentation slides floating above one another"
      className={className}
    >
      <Backdrop id={id} />
      <g className="float-y" style={delay(0)}>
        <rect
          x="84"
          y="40"
          width="112"
          height="76"
          rx="8"
          fill="var(--primary)"
          fillOpacity="0.3"
          stroke="var(--primary)"
        />
      </g>
      <g className="float-y" style={delay(0.8)}>
        <rect
          x="106"
          y="56"
          width="112"
          height="76"
          rx="8"
          fill="var(--warm)"
          fillOpacity="0.28"
          stroke="var(--warm)"
        />
      </g>
      <g className="float-y" style={delay(1.6)}>
        <rect
          x="128"
          y="72"
          width="112"
          height="76"
          rx="8"
          fill="var(--background)"
          fillOpacity="0.85"
          stroke="var(--foreground)"
          strokeOpacity="0.5"
        />
        <rect
          x="142"
          y="88"
          width="56"
          height="6"
          rx="3"
          fill="var(--foreground)"
          fillOpacity="0.6"
        />
        <rect
          x="142"
          y="100"
          width="84"
          height="4"
          rx="2"
          fill="var(--foreground)"
          fillOpacity="0.25"
        />
        <rect
          x="142"
          y="110"
          width="70"
          height="4"
          rx="2"
          fill="var(--foreground)"
          fillOpacity="0.25"
        />
        <path
          d="M142 132 q 18 -18 34 -4 t 36 -8"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          className="flow-dash"
        />
      </g>
      <path
        d="M262 36 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z"
        fill="var(--warm)"
        className="pulse-dot"
      />
      <path
        d="M56 140 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 z"
        fill="var(--primary)"
        className="pulse-dot"
        style={delay(1)}
      />
    </svg>
  );
}

const arts = [VideoArt, AutomationArt, WebArt, CreativeArt];

export function ServiceArt({ index, className }: { index: number; className?: string }) {
  const Art = arts[index] ?? CreativeArt;
  return <Art className={className} />;
}
