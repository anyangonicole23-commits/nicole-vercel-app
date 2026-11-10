import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { PORTFOLIO_CATEGORIES, PROJECTS, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Filter = (typeof PORTFOLIO_CATEGORIES)[number];

export function PortfolioSection({ headingAs = "h2", limit , first = false }: { headingAs?: "h1" | "h2"; first?: boolean; limit?: number }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const projects = useMemo(() => {
    const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <section className={cn("relative py-24 sm:py-32", first && "pt-36 sm:pt-44")} aria-label="Portfolio">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          as={headingAs}
          eyebrow="Portfolio"
          title={
            <>
              Selected work, <em className="text-gradient-royal">crafted with care</em>
            </>
          }
          intro="A curated look at design, social, web, automation and executive systems projects."
        />

        <div role="tablist" aria-label="Filter projects" className="mt-12 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] sm:flex-wrap sm:justify-center">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2.5 text-sm transition-all duration-300",
                filter === cat
                  ? "border-transparent bg-gradient-royal text-primary-foreground shadow-elegant"
                  : "border-border bg-card text-foreground/75 hover:border-gold hover:text-primary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={`${filter}-${project.id}`} delay={(i % 3) * 90} className={cn(i === 0 && filter === "All" && !limit && "lg:col-span-2")}>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group relative block w-full overflow-hidden rounded-[1.75rem] text-left shadow-soft transition-shadow duration-500 hover:shadow-elegant"
                aria-label={`View project: ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} project mockup`}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105",
                    i === 0 && filter === "All" && !limit ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3]",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p className="eyebrow text-gold">{project.category}</p>
                    <h3 className="mt-2 text-2xl text-plum-foreground sm:text-3xl">{project.title}</h3>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full glass-dark text-plum-foreground transition-all duration-500 group-hover:rotate-90 group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                    <Plus className="size-5" aria-hidden />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {limit && (
          <div className="mt-14 text-center">
            <Button asChild variant="elegant" size="xl">
              <Link to="/portfolio">
                View full portfolio <ArrowUpRight />
              </Link>
            </Button>
          </div>
        )}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-3xl border-gold/30 p-0">
          {active && (
            <>
              <img src={active.image} alt={`${active.title} mockup`} width={1280} height={960} className="aspect-[16/10] w-full object-cover" />
              <div className="p-7 sm:p-9">
                <p className="eyebrow text-gold-deep">{active.category}</p>
                <DialogTitle className="mt-3 font-display text-4xl font-medium">{active.title}</DialogTitle>
                <DialogDescription className="mt-4 text-base leading-relaxed text-muted-foreground">{active.summary}</DialogDescription>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow text-primary">Deliverables</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {active.deliverables.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-deep" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow text-primary">Outcome</p>
                    <p className="mt-3 font-display text-2xl italic leading-snug text-foreground">{active.outcome}</p>
                  </div>
                </div>
                <Button asChild variant="hero" size="xl" className="mt-10 w-full sm:w-auto">
                  <Link to="/contact" onClick={() => setActive(null)}>
                    Start a similar project <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
