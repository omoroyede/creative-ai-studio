import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { contactEmail, mailto } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const linkUnderline =
  "relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || menuOpen
          ? "border-border bg-background/90 shadow-[0_10px_30px_-20px_rgb(0_0_0/0.8)]"
          : "border-border/50 bg-background/60",
      )}
    >
      <div className="page-shell grid min-h-[4.5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:min-h-20 sm:justify-between">
        <Link
          to="/"
          aria-label="Omoroyede home"
          className="group flex min-w-0 items-center gap-3 text-foreground"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-primary font-display text-sm font-bold text-primary-foreground transition-[transform,box-shadow] duration-300 group-hover:-rotate-6 group-hover:shadow-[0_0_24px_-2px_var(--primary)]">
            O.
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-bold uppercase leading-tight tracking-normal sm:text-base">
              Omoroyede
            </span>
            <span className="hidden text-[10px] font-semibold uppercase leading-tight tracking-normal text-muted-foreground sm:block">
              Creative technology
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:gap-9 md:flex">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                linkUnderline,
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
              )}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="btn-shine h-11 rounded-sm px-5">
            <Link to="/contact">
              Start a project <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-sm md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      <div
        id="mobile-navigation"
        inert={!menuOpen}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden",
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav aria-label="Mobile navigation" className="overflow-hidden">
          <div className="page-shell grid gap-1 border-t border-border py-3">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${80 + i * 45}ms` : "0ms" }}
                className={cn(
                  "flex min-h-12 items-center justify-between border-b border-border/70 px-1 text-base font-medium text-muted-foreground transition-[opacity,transform,color] duration-300",
                  menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
                )}
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-primary" />
              </Link>
            ))}
            <Button asChild className="mt-3 h-12 w-full justify-between rounded-sm">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Start a project <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </nav>
      </div>

      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="section-rule bg-background">
      <div className="page-shell grid gap-10 py-12 sm:py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-3" aria-label="Omoroyede home">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary font-display text-sm font-bold text-primary-foreground">
              O.
            </span>
            <span className="font-display text-base font-bold uppercase">Omoroyede</span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            AI video, automation, and digital experiences for businesses and ambitious brands.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mb-4 text-xs font-semibold uppercase text-primary">Explore</p>
          <ul className="grid gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-9 items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase text-primary">Get in touch</p>
          <a
            href={mailto()}
            className="inline-flex min-h-10 max-w-full items-center gap-2 break-all text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
            {contactEmail}
          </a>
        </div>
      </div>
      <div className="section-rule">
        <p className="page-shell py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Omoroyede. Built with purpose.
        </p>
      </div>
    </footer>
  );
}

export function ContactCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative isolate overflow-hidden border border-border bg-card p-5 sm:p-8">
      <div className="ambient" />
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <p className="mb-2 text-xs font-semibold uppercase text-primary">
            Tell me what you’re building
          </p>
          <a
            href={mailto()}
            className="block break-all font-display text-xl font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary sm:text-2xl"
          >
            {contactEmail}
          </a>
          {!compact ? (
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Share a little about your idea, your goals, and what a great result would look like.
            </p>
          ) : null}
        </div>
        <Button
          asChild
          className="btn-shine h-12 w-full justify-between rounded-sm sm:w-auto sm:min-w-48"
        >
          <a href={mailto("Let’s build something great")}>
            Start a project <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only z-50 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
