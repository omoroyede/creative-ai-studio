export const contactEmail = "omoroyede1@gmail.com";

export const services = [
  {
    number: "01",
    title: "AI video production",
    summary: "Scroll-stopping stories that make a brand, product, or idea impossible to miss.",
    offerings: [
      "Commercials & product ads",
      "AI UGC & spokesperson videos",
      "Explainer & promotional films",
      "eLearning & educational video",
      "Music visuals & short-form edits",
      "Video repurposing for every channel",
    ],
  },
  {
    number: "02",
    title: "Automation & AI workflows",
    summary: "Less repetitive work. Better handoffs. More room to focus on the next big thing.",
    offerings: [
      "Make.com, n8n & Zapier systems",
      "AI agents and business automation",
      "Vapi & Retell AI voice agents",
      "GoHighLevel automations",
      "Lead capture & follow-up journeys",
    ],
  },
  {
    number: "03",
    title: "Websites & digital experiences",
    summary: "A sharp, considered online presence that earns trust and moves people to act.",
    offerings: [
      "Business websites & landing pages",
      "Portfolio websites",
      "Website redesigns",
      "Responsive web experiences",
    ],
  },
  {
    number: "04",
    title: "Creative & digital solutions",
    summary: "Clearer communication and carefully finished assets for the moments that matter.",
    offerings: [
      "Presentations & pitch decks",
      "Fillable PDF forms",
      "AI content editing & humanization",
      "SEO content optimization",
      "Pinterest content & video repurposing",
    ],
  },
] as const;

export const workSteps = [
  {
    number: "01",
    title: "Discovery",
    detail: "Your business, audience, goals, and the real challenge behind the brief.",
  },
  {
    number: "02",
    title: "Planning",
    detail: "A clear approach, the right tools, and shared expectations before production.",
  },
  {
    number: "03",
    title: "Production",
    detail: "Thoughtful creative and technical work, shaped around your objectives.",
  },
  {
    number: "04",
    title: "Quality assurance",
    detail: "A careful review, useful refinements, and attention to the details.",
  },
  {
    number: "05",
    title: "Delivery",
    detail: "A polished, practical result that is ready to put to work.",
  },
] as const;

export const reasonsToWorkTogether = [
  "Business-focused solutions, not unnecessary complexity.",
  "Creative thinking alongside practical technical expertise.",
  "Clear communication and attention to detail throughout.",
  "Solutions shaped around your business objectives.",
] as const;

export function mailto(subject?: string) {
  return subject
    ? `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`
    : `mailto:${contactEmail}`;
}

/** Platforms named in the services above; shown as a text-only marquee (no logos). */
export const tools = [
  "Make.com",
  "n8n",
  "Zapier",
  "Vapi",
  "Retell AI",
  "GoHighLevel",
  "AI video",
  "Voice agents",
  "Landing pages",
  "Pitch decks",
] as const;

export const reelVideo = {
  mp4: "/media/reel-loop.mp4",
  webm: "/media/reel-loop.webm",
  poster: "/media/reel-loop-poster.jpg",
} as const;

export const heroVideo = {
  mp4: "/media/hero-loop.mp4",
  webm: "/media/hero-loop.webm",
  poster: "/media/hero-loop-poster.jpg",
} as const;

/**
 * Concept pieces shown on the Work page. To feature a real project, add an item here with a
 * `video` (files in /public/media) or `image`, and render it in WorkPage.
 */
export const workItems = [
  {
    id: "glass",
    title: "Glass / Product campaign",
    category: "AI video · Creative direction",
    description:
      "A cinematic concept frame exploring a distinctive visual identity for a product launch.",
  },
  {
    id: "workflow",
    title: "Lead follow-up / Automation flow",
    category: "Automation · AI workflows",
    description:
      "A concept for capturing a lead, routing it, and following up automatically, with no manual hand-offs.",
  },
] as const;

export const contactTopics = [
  { label: "AI video production", subject: "AI video production project" },
  { label: "Automation & AI workflows", subject: "Automation & AI workflow project" },
  { label: "Website or landing page", subject: "Website or landing page project" },
  { label: "Something else", subject: "Let’s build something great" },
] as const;
