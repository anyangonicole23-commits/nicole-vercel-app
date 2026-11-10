import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { WHY_POINTS } from "@/lib/content";

export function WhySection({ headingAs = "h2", first = false }: { headingAs?: "h1" | "h2"; first?: boolean }) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-lavender py-24 sm:py-32", first && "pt-36 sm:pt-44")} aria-label="Why work with me">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 size-[28rem] rounded-full bg-gold/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            as={headingAs}
            align="left"
            eyebrow="Why work with me"
            title={
              <>
                More Than Assistance. <em className="text-gradient-royal">A Smarter Way to Work.</em>
              </>
            }
            intro="You deserve a partner who thinks ahead, works intelligently and treats your business like it matters — because it does."
          />
          <Reveal delay={200} className="mt-10 hidden rounded-3xl bg-gradient-royal p-8 text-primary-foreground shadow-elegant lg:block">
            <p className="font-display text-3xl italic leading-snug">
              “Great support is invisible — you simply notice that everything works.”
            </p>
            <p className="eyebrow mt-5 text-gold">— Nicole</p>
          </Reveal>
        </div>

        <ol className="space-y-4">
          {WHY_POINTS.map((point, i) => (
            <Reveal as="li" key={point.title} delay={i * 60}>
              <div className="card-premium group flex gap-6 p-6 sm:p-7">
                <span className="font-display text-4xl italic leading-none text-gold transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans text-lg font-medium text-foreground">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
