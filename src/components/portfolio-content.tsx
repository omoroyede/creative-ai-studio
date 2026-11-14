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

import campaignStill from "@/assets/creative-studio-feature.jpg";
import { Button } from "@/components/ui/button";
import { ContactCard, SiteFrame } from "@/components/site-shell";
import { reasonsToWorkTogether, services, workSteps } from "@/lib/portfolio-data";

const serviceIcons = [Clapperboard, Workflow, Globe2, Layers3];

function SectionIntro({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-9 grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(16rem,0.6fr)] md:items-end md:gap-10">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase text-primary">
          {index} / {eyebrow}
        </p>
        <h2 className="display-type max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {children ? <div className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">{children}</div> : null}
    </div>
  );
}

function ServiceRows({ compact = false }: { compact?: boolean }) {
  return (
    <div className="border-t border-border">
      {services.map((service, index) => {
        const Icon = serviceIcons[index] ?? Layers3;
        return (
          <article
            className="service-row grid gap-4 border-b border-border px-3 py-6 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-start sm:gap-6 sm:px-5 sm:py-7"
            key={service.number}
          >
            <span className="flex items-center gap-3 text-sm font-semibold text-primary sm:block">
              <Icon aria-hidden="true" className="h-5 w-5 sm:mb-4" />
              {service.number}
            </span>
            <div className="min-w-0">
              <h3 className="display-type text-xl font-semibold sm:text-2xl">{service.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{service.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 sm:gap-x-5">
                {(compact ? service.offerings.slice(0, 3) : service.offerings).map((offering) => (
                  <li key={offering} className="flex min-w-0 items-start gap-2">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
            {compact ? (
              <Link
                to="/services"
                aria-label={`Explore ${service.title}`}
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary sm:flex"
              >
                <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

function ProcessSteps() {
  return (
    <ol className="grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-5">
      {workSteps.map((step) => (
        <li key={step.number} className="border-b border-border py-5 pr-5 sm:min-h-48 sm:border-r sm:px-5 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0">
          <span className="mb-7 block text-xs font-semibold text-primary">{step.number}</span>
          <h3 className="display-type text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.detail}</p>
        </li>
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
          height={1100}
          fetchPriority="high"
          className="hero-image absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-cover absolute inset-0 -z-10" />
        <div className="page-shell flex min-h-[680px] flex-col justify-center py-16 sm:min-h-[740px] lg:min-h-[770px]">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex min-h-9 items-center gap-2 border border-border bg-background/70 px-3 text-[11px] font-semibold uppercase text-primary backdrop-blur-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-primary" />
              AI creative · Automation · Digital
            </p>
            <h1 className="display-type max-w-3xl text-5xl font-semibold leading-[1.03] sm:text-6xl md:text-7xl lg:text-8xl">
              Make your next idea impossible to ignore.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I turn ideas into memorable video, smarter workflows, and digital experiences built to move your business forward.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
              <Button asChild className="h-12 w-full justify-between rounded-sm px-5 sm:w-auto sm:justify-center">
                <Link to="/work">
                  Explore my work <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 w-full justify-between rounded-sm px-5 sm:w-auto sm:justify-center">
                <Link to="/contact">
                  Let’s work together <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <a href="#services" className="mt-12 inline-flex min-h-10 w-fit items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground">
            Discover what I do <ArrowDown aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-72 border-l border-t border-border bg-background/90 px-6 py-5 backdrop-blur sm:block lg:w-80">
          <span className="block text-xs font-semibold uppercase text-primary">One thoughtful partner</span>
          <span className="mt-2 block text-sm leading-6 text-muted-foreground">From first idea to polished, practical delivery.</span>
        </div>
      </section>

      <section className="page-shell grid gap-5 py-10 sm:grid-cols-3 sm:py-14">
        {[
          { label: "For", value: "Businesses & ambitious brands" },
          { label: "Combining", value: "Creative thinking + smart tech" },
          { label: "Focused on", value: "Work that makes a difference" },
        ].map((item) => (
          <div key={item.label} className="min-w-0 border-l-2 border-primary pl-4">
            <p className="text-xs font-semibold uppercase text-muted-foreground">{item.label}</p>
            <p className="mt-2 font-display text-base font-medium sm:text-lg">{item.value}</p>
          </div>
        ))}
      </section>

      <section id="services" className="page-shell section-rule py-16 sm:py-20">
        <SectionIntro index="01" eyebrow="Services" title="Good ideas deserve great execution.">
          From a single standout video to connected workflows and a refreshed website, get the right solution for the real challenge.
        </SectionIntro>
        <ServiceRows compact />
        <Button asChild variant="outline" className="mt-7 h-11 rounded-sm">
          <Link to="/services">See all services <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="page-shell">
          <SectionIntro index="02" eyebrow="The process" title="Clear steps. No guesswork.">
            Good work starts with understanding what you need—and ends with a finished result you can put to work.
          </SectionIntro>
          <ProcessSteps />
        </div>
      </section>

      <section className="page-shell section-rule py-16 sm:py-20">
        <SectionIntro index="03" eyebrow="Why work together" title="Creative thinking. Practical outcomes." />
        <ul className="grid gap-x-12 gap-y-4 border-t border-border pt-6 text-sm sm:grid-cols-2 sm:text-base">
          {reasonsToWorkTogether.map((reason) => (
            <li key={reason} className="flex items-start gap-3 leading-7">
              <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
              {reason}
            </li>
          ))}
        </ul>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-primary">
          <span className="h-px w-8 bg-primary" /> Let’s build something great
        </div>
        <ContactCard compact />
      </section>
    </SiteFrame>
  );
}

export function ServicesPage() {
  return (
    <SiteFrame>
      <section className="page-shell py-16 sm:py-24">
        <p className="mb-5 text-xs font-semibold uppercase text-primary">What I do / 04 capabilities</p>
        <div className="grid gap-6 pb-10 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.6fr)] md:items-end sm:pb-14">
          <h1 className="display-type max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">The right tools for your next move.</h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Creative production, intelligent automation, and considered digital design—built around what your business actually needs.
          </p>
        </div>
        <ServiceRows />
      </section>
      <section className="bg-card py-14 sm:py-20">
        <div className="page-shell">
          <SectionIntro index="01" eyebrow="How we work" title="A thoughtful process, from start to finish." />
          <ProcessSteps />
        </div>
      </section>
      <section className="page-shell py-14 sm:py-20"><ContactCard /></section>
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      <section className="page-shell py-16 sm:py-24">
        <p className="mb-5 text-xs font-semibold uppercase text-primary">About / Creative technology specialist</p>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.7fr)] lg:gap-20">
          <div>
            <h1 className="display-type max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Creativity with a reason behind it.
            </h1>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
              <p>I’m a creative technology specialist who uses artificial intelligence, automation, and digital tools to solve real business challenges.</p>
              <p>My work brings creative production and practical problem-solving together. I help businesses produce professional videos, simplify repetitive operations, and build a stronger digital presence.</p>
              <p>Whether it’s a promotional video, an automated workflow, or a professional website, the focus stays on quality, clarity, and a result that makes a difference.</p>
              <p>Technology should make business easier. Creativity should communicate value. Every project should have a purpose.</p>
            </div>
          </div>
          <aside className="h-fit border border-border bg-card p-6 sm:p-8">
            <span className="mb-7 block text-xs font-semibold uppercase text-primary">What matters</span>
            <ul className="space-y-5">
              {reasonsToWorkTogether.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />{reason}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="bg-card py-14 sm:py-20">
        <div className="page-shell">
          <SectionIntro index="01" eyebrow="Working together" title="A clear path to a polished result." />
          <ProcessSteps />
        </div>
      </section>
      <section className="page-shell py-14 sm:py-20"><ContactCard /></section>
    </SiteFrame>
  );
}

export function WorkPage() {
  return (
    <SiteFrame>
      <section className="page-shell py-16 sm:py-24">
        <p className="mb-5 text-xs font-semibold uppercase text-primary">Selected direction / AI video production</p>
        <div className="mb-10 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] md:items-end">
          <h1 className="display-type max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">Visual stories, made to make people look.</h1>
          <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            A cinematic concept frame exploring how AI-assisted production can give a product launch a distinctive visual identity.
          </p>
        </div>
        <figure className="relative overflow-hidden border border-border bg-card">
          <img
            src={campaignStill}
            alt="Concept image for a cinematic glass product campaign in electric blue and coral"
            width={1600}
            height={1100}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
          />
          <figcaption className="grid gap-3 border-t border-border px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
            <span className="font-display text-base font-semibold">Glass / Product campaign concept</span>
            <span className="text-sm text-muted-foreground">AI video · Creative direction</span>
          </figcaption>
        </figure>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">Concept artwork created for this portfolio. Project examples can be added as work is shared.</p>
      </section>
      <section className="bg-card py-14 sm:py-20">
        <div className="page-shell grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-primary">The thinking behind the work</p>
            <h2 className="display-type max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">Good visuals earn attention. A clear idea makes it count.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Each project begins with the audience and the goal. From short-form content to explainers and product campaigns, the format serves the story—not the other way around.
          </p>
        </div>
      </section>
      <section className="page-shell py-14 sm:py-20"><ContactCard /></section>
    </SiteFrame>
  );
}

export function ContactPage() {
  return (
    <SiteFrame>
      <section className="page-shell py-16 sm:py-24">
        <p className="mb-5 text-xs font-semibold uppercase text-primary">Contact / Let’s get started</p>
        <div className="grid gap-8 pb-10 md:grid-cols-[minmax(0,1.1fr)_minmax(17rem,0.6fr)] md:items-end sm:pb-14">
          <h1 className="display-type max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">Let’s build something great.</h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Have an idea, a business challenge, or a project you want to bring to life? Tell me what you’re working on and where you’d like to go.
          </p>
        </div>
        <ContactCard />
        <div className="mt-12 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">A few useful details</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">What are you looking to create or improve? Who is it for? And what would a successful result look like?</p>
          </div>
          <div className="flex items-start gap-3 text-sm text-muted-foreground sm:justify-end">
            <ArrowRight aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>Email is the best way to start a project conversation.</span>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}