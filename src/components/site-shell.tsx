import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="page-shell grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <Link
          to="/"
          aria-label="Omoroyede home"
          className="flex min-w-0 items-center gap-3 text-foreground"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-primary font-display text-sm font-bold text-primary-foreground">
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

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="h-11 rounded-sm px-5">
            <Link to="/contact">
              Start a project <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-sm md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="page-shell grid gap-1 border-t border-border py-3 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center justify-between border-b border-border/70 px-1 text-sm font-medium text-foreground"
            >
              {item.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4 text-primary" />
            </Link>
          ))}
          <Button asChild className="mt-3 h-11 w-full justify-between rounded-sm">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Start a project <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="section-rule bg-background py-8">
      <div className="page-shell grid gap-4 text-sm text-muted-foreground sm:grid-cols-[1fr_auto] sm:items-center">
        <p>© {new Date().getFullYear()} Omoroyede. Built with purpose.</p>
        <a
          href="mailto:omoroyede1@gmail.com"
          className="inline-flex min-h-10 items-center gap-2 font-medium text-foreground hover:text-primary"
        >
          omoroyede1@gmail.com <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}

export function ContactCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 border border-border bg-card p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-7">
      <div className="min-w-0">
        <p className="mb-2 text-xs font-semibold uppercase text-primary">Tell me what you’re building</p>
        <a
          href="mailto:omoroyede1@gmail.com"
          className="block break-all font-display text-lg font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary sm:text-xl"
        >
          omoroyede1@gmail.com
        </a>
        {!compact ? (
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Share a little about your idea, your goals, and what a great result would look like.
          </p>
        ) : null}
      </div>
      <Button asChild className="h-12 w-full justify-between rounded-sm sm:w-auto sm:min-w-44">
        <a href="mailto:omoroyede1@gmail.com?subject=Let%E2%80%99s%20build%20something%20great">
          Start a project <ArrowUpRight aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}