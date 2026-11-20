import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Check, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const HIGHLIGHTS = [
  "Strong communication skills",
  "Organization and time management",
  "Confidentiality and professionalism",
  "Problem-solving",
  "Attention to detail",
  "Prioritizing competing responsibilities",
  "Quick to learn new systems and technologies",
  "AI-assisted administrative productivity",
]

export function AboutSection({ headingAs = "h2", showLink = true , first = false }: { headingAs?: "h1" | "h2"; first?: boolean; showLink?: boolean }) {
  const Heading = headingAs;
  return (
    <section className={cn("relative py-24 sm:py-32", first && "pt-36 sm:pt-44")} aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="relative order-2 mt-4 lg:order-1 lg:mt-0">
          <AboutVisual />
          <div aria-hidden className="absolute -left-6 -top-6 -z-10 size-40 rounded-full border border-gold/60" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-3 text-gold-deep">
              <span aria-hidden className="h-px w-8 bg-gradient-gold" /> About me
            </p>
            <Heading id="about-heading" className="mt-5 text-5xl text-foreground sm:text-6xl lg:text-7xl">
              Meet <em className="text-gradient-royal">Nicole</em>
            </Heading>
          </Reveal>

          <Reveal delay={100} className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I'm Nicole — a proactive, dependable and detail-oriented Executive Virtual Assistant
              supporting CEOs, founders, consultants and business leaders who need a reliable right hand.
            </p>
            <p>
              I keep calendars calm, inboxes under control and meetings well prepared, so you can focus
              on decisions only you can make. I communicate clearly, handle sensitive information with
              complete discretion, and stay one step ahead of competing priorities.
            </p>
            <p>
              I use modern AI tools to work faster and smarter, and I'm always learning new systems so
              your operations benefit from what works best.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-soft">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          {showLink && (
            <Reveal delay={300} className="mt-10">
              <Button asChild variant="elegant" size="xl">
                <Link to="/about">
                  More about my approach <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/** Photo-free brand panel: an arched royal-purple panel with a gold monogram and floating status chips. */
function AboutVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem]" aria-hidden>
      <div className="absolute -inset-6 -z-10 rounded-full bg-lavender/70 blur-3xl" />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-gradient-royal shadow-elegant">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_16%,var(--primary-glow),transparent_62%)] opacity-80" />
        <div className="absolute inset-0 bg-dots-gold opacity-40" />
        <div className="absolute inset-3 rounded-t-full rounded-b-[2.1rem] border border-gold/40 sm:inset-5" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-[radial-gradient(ellipse_at_top,oklch(1_0_0/0.16),transparent_70%)]" />

        <div className="absolute inset-x-0 top-[15%] flex justify-center px-10">
          <p className="eyebrow text-center text-[0.58rem] text-gold sm:text-[0.68rem]">Executive Virtual Assistant</p>
        </div>

        <div className="absolute inset-0 grid place-items-center -translate-y-4">
          <span className="font-display text-[6.5rem] italic leading-none text-gradient-gold animate-shimmer sm:text-[8.5rem]">
            N
          </span>
        </div>

        <div className="absolute inset-x-0 top-[68%] px-10 text-center">
          <span aria-hidden className="mx-auto block h-px w-14 bg-gradient-gold" />
          <p className="eyebrow mt-3 text-[0.58rem] text-gold/85 sm:text-[0.66rem]">
            Nairobi · Remote worldwide
          </p>
        </div>
      </div>

      <div className="absolute -left-4 top-[24%] w-40 rounded-2xl glass p-3.5 shadow-elegant animate-float sm:-left-6">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
            <CalendarCheck className="size-4" />
          </span>
          <div>
            <p className="text-xs text-muted-foreground">Calendar</p>
            <p className="text-sm font-medium text-foreground">Week organized</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 top-[24%] w-40 rounded-2xl glass p-3.5 shadow-elegant animate-float-slow [animation-delay:-3s] sm:-right-6">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
            <Inbox className="size-4" />
          </span>
          <div>
            <p className="text-xs text-muted-foreground">Priority inbox</p>
            <p className="text-sm font-medium text-foreground">0 urgent</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 -left-4 max-w-[15rem] rounded-2xl glass p-5 shadow-elegant sm:-left-6">
        <p className="font-display text-2xl italic leading-tight text-primary">
          “Calm, organized, one step ahead.”
        </p>
        <p className="eyebrow mt-3 text-gold-deep">My promise</p>
      </div>
    </div>
  );
}
