import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Inbox, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-lavender pb-20 pt-32 sm:pb-28 sm:pt-40 lg:min-h-[100svh] lg:pt-44">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-primary shadow-soft animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Sparkles className="size-3.5 text-gold-deep" aria-hidden />
            Executive Support · AI · Creative
          </p>

          <h1 className="mt-8 text-[2.9rem] leading-[1.02] text-foreground sm:text-7xl lg:text-[5.4rem] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Your Vision.
            <br />
            My Expertise.
            <br />
            <em className="text-gradient-gold animate-shimmer not-italic sm:italic">Smarter Workflows.</em>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:150ms] [animation-fill-mode:both]">
            I help entrepreneurs, executives, and growing businesses stay organized, streamline
            operations, and elevate their digital presence through executive support, AI-powered
            automation, and creative digital solutions.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:300ms] [animation-fill-mode:both]">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Work With Me <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="elegant" size="xl">
              <Link to="/services">Explore My Services</Link>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-primary/10 pt-8">
            {[
              ["6", "Service pillars"],
              ["AI", "Enhanced workflows"],
              ["Remote", "Worldwide support"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl text-primary sm:text-4xl">{value}</dd>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -left-32 top-10 size-[28rem] rounded-full bg-primary-glow/30 blur-3xl animate-aurora" />
      <div className="absolute right-[-10rem] top-[-6rem] size-[34rem] rounded-full bg-lavender blur-3xl animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-12rem] left-1/3 size-[30rem] rounded-full bg-gold/30 blur-3xl animate-aurora [animation-delay:-12s]" />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]" aria-hidden>
      {/* Orbit rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <linearGradient id="gold-ring" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--gold-deep)" />
            <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--gold-deep)" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="none" stroke="url(#gold-ring)" strokeWidth="1" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="var(--primary)" strokeOpacity="0.18" strokeDasharray="2 8" />
        <circle cx="200" cy="10" r="5" fill="var(--gold)" />
        <circle cx="340" cy="200" r="3.5" fill="var(--primary-glow)" />
      </svg>

      {/* Core orb */}
      <div className="absolute inset-[22%] rounded-full bg-gradient-royal shadow-elegant">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,var(--primary-glow),transparent_60%)] opacity-80" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-7xl italic text-gold sm:text-8xl">N</span>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -left-2 top-[12%] w-52 rounded-2xl glass p-4 shadow-elegant animate-float sm:-left-6">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-secondary text-primary">
            <Inbox className="size-4" />
          </span>
          <div>
            <p className="text-xs text-muted-foreground">Priority inbox</p>
            <p className="text-sm font-medium text-foreground">0 urgent · 3 drafted</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 top-[42%] w-56 rounded-2xl glass p-4 shadow-elegant animate-float-slow [animation-delay:-3s] sm:-right-8">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
            <Zap className="size-4" />
          </span>
          <div>
            <p className="text-xs text-muted-foreground">Automation running</p>
            <p className="text-sm font-medium text-foreground">12 hrs saved this week</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-3/4 rounded-full bg-gradient-royal" />
        </div>
      </div>

      <div className="absolute bottom-[6%] left-[8%] w-48 rounded-2xl glass p-4 shadow-elegant animate-float [animation-delay:-5s]">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-secondary text-primary">
            <CalendarCheck className="size-4" />
          </span>
          <div>
            <p className="text-xs text-muted-foreground">Calendar</p>
            <p className="text-sm font-medium text-foreground">Week organized</p>
          </div>
        </div>
      </div>
    </div>
  );
}
