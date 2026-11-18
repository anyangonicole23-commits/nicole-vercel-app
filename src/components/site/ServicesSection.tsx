import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function ServicesSection({ headingAs = "h2", first = false }: { headingAs?: "h1" | "h2"; first?: boolean }) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-lavender py-24 sm:py-32", first && "pt-36 sm:pt-44")} aria-label="Services">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 gold-hairline opacity-50" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          as={headingAs}
          eyebrow="Services"
          title={
            <>
              Executive support that keeps your business <em className="text-gradient-royal">running smoothly</em>
            </>
          }
          intro="Ten core services for CEOs, founders and consultants who need a reliable, organized and proactive right hand."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 100} as="article" className="h-full">
                <div id={service.slug} className="card-premium group flex h-full scroll-mt-28 flex-col overflow-hidden p-6">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-lavender opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-gradient-royal text-primary-foreground shadow-elegant transition-transform duration-500 group-hover:scale-105">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <span className="font-display text-4xl italic text-gold">{service.number}</span>
                  </div>
                  <h3 className="relative mt-8 text-2xl text-foreground">{service.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                  <div className="relative my-6 gold-hairline opacity-60" />
                  <ul className="relative space-y-2.5 text-sm text-foreground/85">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-deep" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-primary transition-colors hover:text-gold-deep"
                  >
                    Enquire about this service
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
