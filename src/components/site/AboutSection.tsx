import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import workspaceImg from "@/assets/about-workspace.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const HIGHLIGHTS = [
  "Executive administrative support",
  "AI-assisted productivity",
  "Workflow optimization",
  "Digital creativity",
  "Attention to detail",
  "Organization and reliability",
  "Problem-solving mindset",
];

export function AboutSection({ headingAs = "h2", showLink = true , first = false }: { headingAs?: "h1" | "h2"; first?: boolean; showLink?: boolean }) {
  const Heading = headingAs;
  return (
    <section className={cn("relative py-24 sm:py-32", first && "pt-36 sm:pt-44")} aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={workspaceImg}
              alt="An organized executive workspace with planner, laptop calendar and orchids"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/50 via-transparent to-transparent" />
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
              I'm Nicole — a proactive Executive Virtual Assistant and creative digital professional
              who helps busy leaders reclaim their time and run their businesses with clarity.
            </p>
            <p>
              I combine administrative excellence with modern AI tools, thoughtful automation and a
              designer's eye. The result is support that goes far beyond ticking boxes: calmer
              calendars, faster processes, polished communication and a brand presence that looks
              as good as the work behind it.
            </p>
            <p>
              Whether you need a reliable right hand, smarter systems, or creative work that elevates
              your business, I bring structure, initiative and care to every detail.
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
