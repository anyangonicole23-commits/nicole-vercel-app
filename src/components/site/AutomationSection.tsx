import { cn } from "@/lib/utils";
import { Hand, Cpu, LayoutGrid, TrendingUp, ArrowDown, Check } from "lucide-react";
import { AUTOMATION_EXAMPLES, AUTOMATION_STEPS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const STEP_ICONS = [Hand, Cpu, LayoutGrid, TrendingUp];
const TOOLS = ["Make.com", "Zapier", "ChatGPT", "Google Workspace", "Notion", "Microsoft 365", "Calendly", "Slack", "Canva", "Trello"];

export function AutomationSection({ headingAs = "h2", first = false }: { headingAs?: "h1" | "h2"; first?: boolean }) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-gradient-plum py-24 text-plum-foreground sm:py-32", first && "pt-36 sm:pt-44")} aria-label="AI and automation">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/3 size-[32rem] rounded-full bg-primary-glow/25 blur-3xl animate-aurora" />
        <div className="absolute -right-32 bottom-0 size-[26rem] rounded-full bg-gold/15 blur-3xl animate-aurora [animation-delay:-9s]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          as={headingAs}
          tone="dark"
          eyebrow="AI & Automation"
          title={
            <>
              Less Manual Work. <em className="text-gradient-gold">More Meaningful Progress.</em>
            </>
          }
          intro="I design AI-assisted workflows and automations that take repetitive work off your plate — improving consistency, reducing errors and giving your operations a dependable rhythm."
        />

        {/* Workflow visual */}
        <ol className="mt-16 grid gap-4 lg:grid-cols-4 lg:gap-0" aria-label="How automation transforms your workflow">
          {AUTOMATION_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Hand;
            const last = i === AUTOMATION_STEPS.length - 1;
            return (
              <Reveal as="li" key={step.title} delay={i * 150} className="relative flex flex-col items-center lg:flex-row">
                <div
                  className={
                    last
                      ? "w-full rounded-3xl bg-gradient-gold p-6 text-gold-foreground shadow-gold lg:mx-3"
                      : "w-full rounded-3xl glass-dark p-6 lg:mx-3"
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className={last ? "grid size-12 place-items-center rounded-2xl bg-plum text-gold" : "grid size-12 place-items-center rounded-2xl bg-gradient-royal text-gold"}>
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className={last ? "eyebrow text-gold-foreground/70" : "eyebrow text-plum-muted"}>Step 0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl">{step.title}</h3>
                  <p className={last ? "mt-2 text-sm text-gold-foreground/80" : "mt-2 text-sm text-plum-muted"}>{step.text}</p>
                </div>
                {!last && (
                  <>
                    <ArrowDown aria-hidden className="my-1 size-5 text-gold lg:hidden" />
                    <svg aria-hidden viewBox="0 0 40 12" className="absolute -right-5 top-1/2 z-10 hidden w-10 -translate-y-1/2 lg:block">
                      <path d="M0 6 H34" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-flow" />
                      <path d="M30 1 L36 6 L30 11" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                    </svg>
                  </>
                )}
              </Reveal>
            );
          })}
        </ol>

        {/* Examples */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <h3 className="text-3xl sm:text-4xl">What automation can look like in your business</h3>
            <p className="mt-5 leading-relaxed text-plum-muted">
              Automation isn't about replacing people — it's about removing friction. Every workflow I
              build is mapped to your real processes, tested carefully and documented, so your team
              always knows what's happening and why.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Reduces repetitive, low-value work", "Improves consistency and accuracy", "Supports better, faster operations"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <Check className="size-4 text-gold" aria-hidden /> {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {AUTOMATION_EXAMPLES.map((ex, i) => (
              <Reveal as="li" key={ex.title} delay={i * 80} className={i === 0 ? "sm:col-span-2" : undefined}>
                <div className="group h-full rounded-2xl glass-dark p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50">
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-gold shadow-gold" aria-hidden />
                    <h4 className="font-sans text-base font-medium text-plum-foreground">{ex.title}</h4>
                  </div>
                  <p className="mt-2 pl-5 text-sm text-plum-muted">{ex.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Tools marquee */}
        <div className="relative mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <p className="sr-only">Tools I work with: {TOOLS.join(", ")}</p>
          <div aria-hidden className="flex w-max animate-marquee gap-12">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <span key={i} className="font-display text-2xl italic text-plum-muted/70 sm:text-3xl">
                {t} <span className="ml-12 text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
