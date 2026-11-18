import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import portrait from "@/assets/nicole-portrait.jpg.asset.json";
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
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={portrait.url}
              alt="Portrait of Nicole, Executive Virtual Assistant"
              width={896}
              height={1195}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 max-w-[15rem] rounded-2xl glass p-5 shadow-elegant sm:-right-10">
            <p className="font-display text-2xl italic leading-tight text-primary">
              “Calm, organized, one step ahead.”
            </p>
            <p className="eyebrow mt-3 text-gold-deep">My promise</p>
          </div>
          <div aria-hidden className="absolute -left-6 -top-6 -z-10 size-40 rounded-full border border-gold/60" />
        </Reveal>

        <div>
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
