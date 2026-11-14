import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clapperboard,
  Globe2,
  Layers3,
  Workflow,
} from "lucide-react";
import type { CSSProperties, ElementType, ReactNode } from "react";

import campaignStill from "@/assets/creative-studio-feature.jpg";
import { Reveal } from "@/components/reveal";
import { AutomationArt, ServiceArt } from "@/components/service-art";
import { ContactCard, SiteFrame } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { BackgroundVideo, VideoReel } from "@/components/video-reel";
import {
  contactTopics,
  heroVideo,
  mailto,
  reasonsToWorkTogether,
  reelVideo,
  services,
  tools,
  workItems,
  workSteps,
} from "@/lib/portfolio-data";

const serviceIcons = [Clapperboard, Workflow, Globe2, Layers3];

const style = (vars: Record<string, string | number>) => vars as CSSProperties;

/** Headline whose words rise in one after another. Words in `highlight` get the gradient. */
function AnimatedHeading({
  text,
  highlight = "",
  as: Tag = "h1",
  className,
}: {
  text: string;
  highlight?: string;
  as?: ElementType;
  className?: string;
}) {
  const words = text.split(" ");
  const highlightWords = highlight ? highlight.split(" ") : [];
  const start = highlightWords.length ? words.length - highlightWords.length : words.length;

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className={i >= start ? "word-gradient" : "word-rise"} style={style({ "--i": i })}>
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

function PageHeader({ children }: { children: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="ambient" />
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
      <div className="page-shell py-16 sm:py-24">{children}</div>
    </section>
  );
}

function SectionIntro({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="mb-9 grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(16rem,0.6fr)] md:items-end md:gap-10">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase text-primary">
          {index} / {eyebrow}
        </p>
        <h2 className="display-type max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {children ? (
        <div className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
          {children}
        </div>
      ) : null}
    </Reveal>
  );
}

function Marquee({ items }: { items: readonly string[] }) {
  const track = (hidden: boolean) => (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-12 whitespace-nowrap font-display text-lg font-medium text-muted-foreground sm:text-xl"
        >
          {item}
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary/70" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" aria-label="Tools and platforms I work with">
      {track(false)}
      {track(true)}
    </div>
  );
}

function ServiceCards({ compact = false }: { compact?: boolean }) {
  const Heading = compact ? "h3" : "h2";
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {services.map((service, index) => {
        const Icon = serviceIcons[index] ?? Layers3;
        const offerings = compact ? service.offerings.slice(0, 3) : service.offerings;
        return (
          <Reveal key={service.number} delay={(index % 2) * 110}>
            <article className="lift-card group flex h-full flex-col overflow-hidden border border-border bg-card">
              <div className="aspect-[16/9] overflow-hidden border-b border-border">
                <ServiceArt index={index} className="card-art h-full w-full" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <span className="mb-4 flex items-center gap-3 text-sm font-semibold text-primary">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                  {service.number}
                </span>
                <Heading className="display-type text-xl font-semibold sm:text-2xl">
                  {service.title}
                </Heading>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  {service.summary}
                </p>
                <ul
                  className={
                    compact
                      ? "mt-5 grid gap-2 text-sm text-muted-foreground"
                      : "mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 sm:gap-x-5"
                  }
                >
                  {offerings.map((offering) => (
                    <li key={offering} className="flex min-w-0 items-start gap-2">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
                {compact ? (
                  <Link
                    to="/services"
                    className="mt-6 inline-flex min-h-10 w-fit items-center gap-2 pt-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    Explore {service.title.toLowerCase()}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                ) : null}
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

function ProcessSteps() {
  return (
    <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
      {workSteps.map((step, i) => (
        <Reveal
          as="li"
          key={step.number}
          delay={i * 90}
          className="step-line border-b border-border py-5 pr-5 sm:min-h-48 sm:px-5 sm:first:pl-0 lg:border-b-0 lg:first:pl-0"
        >
          <span className="mb-7 mt-3 block text-xs font-semibold text-primary">{step.number}</span>
          <h3 className="display-type text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.detail}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function HomePage() {
  return (
    <SiteFrame>
      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-border sm:min-h-[740px] lg:min-h-[770px]">
        <img
          src={campaignStill}
          alt="Cinematic glass product campaign, lit in electric blue and coral"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="hero-image absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <BackgroundVideo
          source={heroVideo}
          className="absolute inset-0 -z-[15] h-full w-full object-cover"
        />
        <div className="hero-cover absolute inset-0 -z-10" />
        <div className="page-shell flex min-h-[680px] flex-col justify-center py-16 sm:min-h-[740px] lg:min-h-[770px]">
          <div className="max-w-3xl">
            <p
              className="fade-up mb-6 inline-flex min-h-9 items-center gap-2.5 border border-border bg-background/70 px-3 text-[11px] font-semibold uppercase text-primary backdrop-blur-sm sm:text-xs"
              style={style({ "--delay": "0ms" })}
            >
              <span className="live-dot h-2 w-2 rounded-full bg-primary" />
              AI creative · Automation · Digital
            </p>
            <AnimatedHeading
              text="Make your next idea impossible to ignore."
              highlight="impossible to ignore."
              className="display-type max-w-3xl text-5xl font-semibold leading-[1.03] sm:text-6xl md:text-7xl lg:text-8xl"
            />
            <p
              className="fade-up mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
              style={style({ "--delay": "650ms" })}
            >
              I turn ideas into memorable video, smarter workflows, and digital experiences built to
              move your business forward.
            </p>
            <div
              className="fade-up mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center"
              style={style({ "--delay": "800ms" })}
            >
              <Button
                asChild
                className="btn-shine h-12 w-full justify-between rounded-sm px-5 sm:w-auto sm:justify-center"
              >
                <Link to="/work">
                  Explore my work <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full justify-between rounded-sm bg-background/40 px-5 backdrop-blur-sm sm:w-auto sm:justify-center"
              >
                <Link to="/contact">
                  Let’s work together <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <a
            href="#services"
            className="fade-up mt-12 inline-flex min-h-11 w-fit items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            style={style({ "--delay": "1000ms" })}
          >
            Discover what I do <ArrowDown aria-hidden="true" className="bounce-y h-4 w-4" />
          </a>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-72 border-l border-t border-border bg-background/85 px-6 py-5 backdrop-blur sm:block lg:w-80">
          <span className="block text-xs font-semibold uppercase text-primary">
            One thoughtful partner
          </span>
          <span className="mt-2 block text-sm leading-6 text-muted-foreground">
            From first idea to polished, practical delivery.
          </span>
        </div>
      </section>

      <section className="border-b border-border py-5" aria-label="Tools and platforms">
        <Marquee items={tools} />
      </section>

      <section className="page-shell grid gap-6 py-10 sm:grid-cols-3 sm:py-14">
        {[
          { label: "For", value: "Businesses & ambitious brands" },
          { label: "Combining", value: "Creative thinking + smart tech" },
          { label: "Focused on", value: "Work that makes a difference" },
        ].map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 110}
            className="min-w-0 border-l-2 border-primary pl-4"
          >
            <p className="text-xs font-semibold uppercase text-muted-foreground">{item.label}</p>
            <p className="mt-2 font-display text-base font-medium sm:text-lg">{item.value}</p>
          </Reveal>
        ))}
      </section>

      <section id="services" className="page-shell section-rule py-16 sm:py-20">
        <SectionIntro index="01" eyebrow="Services" title="Good ideas deserve great execution.">
          From a single standout video to connected workflows and a refreshed website, get the right
          solution for the real challenge.
        </SectionIntro>
        <ServiceCards compact />
        <Reveal>
          <Button asChild variant="outline" className="mt-8 h-11 rounded-sm">
            <Link to="/services">
              See all services <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="page-shell">
          <SectionIntro index="02" eyebrow="Showreel" title="Motion that holds attention.">
            Concept motion created for this portfolio. A look at the kind of flowing, cinematic
            visuals AI-assisted production can bring to a brand.
          </SectionIntro>
          <Reveal>
            <figure className="overflow-hidden border border-border">
              <VideoReel
                source={reelVideo}
                label="Flowing ribbons of blue and coral light, a motion identity concept"
                className="aspect-[4/3] sm:aspect-[16/8]"
              />
              <figcaption className="grid gap-2 border-t border-border bg-background px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
                <span className="font-display text-base font-semibold">
                  Light ribbons / Motion identity
                </span>
                <Link
                  to="/work"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  See the work <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <SectionIntro index="03" eyebrow="The process" title="Clear steps. No guesswork.">
          Good work starts with understanding what you need—and ends with a finished result you can
          put to work.
        </SectionIntro>
        <ProcessSteps />
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="page-shell">
          <SectionIntro
            index="04"
            eyebrow="Why work together"
            title="Creative thinking. Practical outcomes."
          />
          <ul className="grid gap-x-12 gap-y-4 border-t border-border pt-6 text-sm sm:grid-cols-2 sm:text-base">
            {reasonsToWorkTogether.map((reason, i) => (
              <Reveal
                as="li"
                key={reason}
                delay={i * 80}
                className="flex items-start gap-3 leading-7"
              >
                <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                {reason}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-primary">
            <span className="h-px w-8 bg-primary" /> Let’s build something great
          </div>
          <ContactCard compact />
        </Reveal>
      </section>
    </SiteFrame>
  );
}

export function ServicesPage() {
  return (
    <SiteFrame>
      <PageHeader>
        <p className="fade-up mb-5 text-xs font-semibold uppercase text-primary">
          What I do / 04 capabilities
        </p>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.6fr)] md:items-end">
          <AnimatedHeading
            text="The right tools for your next move."
            className="display-type max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
          />
          <p
            className="fade-up max-w-xl text-base leading-7 text-muted-foreground"
            style={style({ "--delay": "500ms" })}
          >
            Creative production, intelligent automation, and considered digital design—built around
            what your business actually needs.
          </p>
        </div>
      </PageHeader>
      <section className="page-shell py-14 sm:py-20">
        <ServiceCards />
      </section>
      <section className="bg-card py-14 sm:py-20">
        <div className="page-shell">
          <SectionIntro
            index="01"
            eyebrow="How we work"
            title="A thoughtful process, from start to finish."
          />
          <ProcessSteps />
        </div>
      </section>
      <section className="page-shell py-14 sm:py-20">
        <Reveal>
          <ContactCard />
        </Reveal>
      </section>
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      <PageHeader>
        <p className="fade-up mb-5 text-xs font-semibold uppercase text-primary">
          About / Creative technology specialist
        </p>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.7fr)] lg:gap-20">
          <div>
            <AnimatedHeading
              text="Creativity with a reason behind it."
              className="display-type max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
            />
            <div
              className="fade-up mt-8 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground"
              style={style({ "--delay": "500ms" })}
            >
              <p>
                I’m a creative technology specialist who uses artificial intelligence, automation,
                and digital tools to solve real business challenges.
              </p>
              <p>
                My work brings creative production and practical problem-solving together. I help
                businesses produce professional videos, simplify repetitive operations, and build a
                stronger digital presence.
              </p>
              <p>
                Whether it’s a promotional video, an automated workflow, or a professional website,
                the focus stays on quality, clarity, and a result that makes a difference.
              </p>
              <p>
                Technology should make business easier. Creativity should communicate value. Every
                project should have a purpose.
              </p>
            </div>
          </div>
          <aside
            className="fade-up h-fit overflow-hidden border border-border bg-card"
            style={style({ "--delay": "650ms" })}
          >
            <img
              src={campaignStill}
              alt="Cinematic glass product campaign in electric blue and coral, a concept created for this portfolio"
              width={1600}
              height={1104}
              loading="lazy"
              className="aspect-[16/10] w-full border-b border-border object-cover"
            />
            <div className="p-6 sm:p-8">
              <span className="mb-6 block text-xs font-semibold uppercase text-primary">
                What matters
              </span>
              <ul className="space-y-5">
                {reasonsToWorkTogether.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </PageHeader>
      <section className="bg-card py-14 sm:py-20">
        <div className="page-shell">
          <SectionIntro
            index="01"
            eyebrow="Working together"
            title="A clear path to a polished result."
          />
          <ProcessSteps />
        </div>
      </section>
      <section className="page-shell py-14 sm:py-20">
        <Reveal>
          <ContactCard />
        </Reveal>
      </section>
    </SiteFrame>
  );
}

export function WorkPage() {
  const [glass, workflow] = workItems;
  return (
    <SiteFrame>
      <PageHeader>
        <p className="fade-up mb-5 text-xs font-semibold uppercase text-primary">
          Selected direction / AI video production
        </p>
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] md:items-end">
          <AnimatedHeading
            text="Visual stories, made to make people look."
            className="display-type max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
          />
          <p
            className="fade-up max-w-lg text-sm leading-7 text-muted-foreground sm:text-base"
            style={style({ "--delay": "500ms" })}
          >
            Concept pieces exploring how AI-assisted production, motion, and automation can give a
            brand a distinctive look and a smoother way of working.
          </p>
        </div>
      </PageHeader>

      <section className="page-shell py-14 sm:py-20">
        <Reveal>
          <figure className="overflow-hidden border border-border bg-card">
            <VideoReel
              source={reelVideo}
              label="Flowing ribbons of blue and coral light, a motion identity concept"
              className="aspect-[4/3] sm:aspect-[16/8]"
            />
            <figcaption className="grid gap-2 border-t border-border px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
              <span className="font-display text-base font-semibold">
                Light ribbons / Motion identity
              </span>
              <span className="text-sm text-muted-foreground">Motion design · Brand visuals</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Reveal>
            <figure className="lift-card group h-full overflow-hidden border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={campaignStill}
                  alt="Concept image for a cinematic glass product campaign in electric blue and coral"
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="card-art aspect-[4/3] w-full object-cover"
                />
              </div>
              <figcaption className="grid gap-1 border-t border-border px-4 py-4 sm:px-6">
                <span className="font-display text-base font-semibold">{glass.title}</span>
                <span className="text-xs font-semibold uppercase text-primary">
                  {glass.category}
                </span>
                <span className="mt-1 text-sm leading-6 text-muted-foreground">
                  {glass.description}
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={110}>
            <figure className="lift-card group h-full overflow-hidden border border-border bg-card">
              <div className="overflow-hidden">
                <AutomationArt className="card-art aspect-[4/3] w-full" />
              </div>
              <figcaption className="grid gap-1 border-t border-border px-4 py-4 sm:px-6">
                <span className="font-display text-base font-semibold">{workflow.title}</span>
                <span className="text-xs font-semibold uppercase text-primary">
                  {workflow.category}
                </span>
                <span className="mt-1 text-sm leading-6 text-muted-foreground">
                  {workflow.description}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          Concept artwork and motion created for this portfolio. Project examples can be added as
          work is shared.
        </p>
      </section>

      <section className="bg-card py-14 sm:py-20">
        <Reveal className="page-shell grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-primary">
              The thinking behind the work
            </p>
            <h2 className="display-type max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              Good visuals earn attention. A clear idea makes it count.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Each project begins with the audience and the goal. From short-form content to
            explainers and product campaigns, the format serves the story—not the other way around.
          </p>
        </Reveal>
      </section>
      <section className="page-shell py-14 sm:py-20">
        <Reveal>
          <ContactCard />
        </Reveal>
      </section>
    </SiteFrame>
  );
}

export function ContactPage() {
  return (
    <SiteFrame>
      <PageHeader>
        <p className="fade-up mb-5 text-xs font-semibold uppercase text-primary">
          Contact / Let’s get started
        </p>
        <div className="grid gap-8 pb-10 md:grid-cols-[minmax(0,1.1fr)_minmax(17rem,0.6fr)] md:items-end sm:pb-12">
          <AnimatedHeading
            text="Let’s build something great."
            highlight="something great."
            className="display-type max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
          />
          <p
            className="fade-up max-w-xl text-base leading-7 text-muted-foreground"
            style={style({ "--delay": "500ms" })}
          >
            Have an idea, a business challenge, or a project you want to bring to life? Tell me what
            you’re working on and where you’d like to go.
          </p>
        </div>
        <div className="fade-up" style={style({ "--delay": "650ms" })}>
          <ContactCard />
        </div>
      </PageHeader>

      <section className="page-shell py-14 sm:py-20">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase text-primary">What can I help with?</p>
          <h2 className="display-type max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Pick a starting point and your email app opens with it ready to go.
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {contactTopics.map((topic, i) => (
            <Reveal as="li" key={topic.label} delay={i * 80}>
              <a
                href={mailto(topic.subject)}
                className="lift-card group flex min-h-16 items-center justify-between gap-4 border border-border bg-card px-5 py-4 text-base font-medium"
              >
                {topic.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">A few useful details</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              What are you looking to create or improve? Who is it for? And what would a successful
              result look like?
            </p>
          </div>
          <div className="flex items-start gap-3 text-sm text-muted-foreground sm:justify-end">
            <ArrowRight aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>Email is the best way to start a project conversation.</span>
          </div>
        </Reveal>
      </section>
    </SiteFrame>
  );
}
