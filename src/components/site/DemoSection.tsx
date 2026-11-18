import { useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, CalendarDays, Users, Plane, KanbanSquare, ClipboardList, Workflow, LineChart, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { InboxDemo, CalendarDemo, MeetingDemo, TravelDemo, TasksDemo, SopDemo, AutomationDemo, ResearchDemo } from "./demos/Demos";

type Demo = { id: string; n: string; title: string; icon: LucideIcon; summary: string; skills: string[]; Comp: ComponentType };

export const DEMOS: Demo[] = [
  { id: "inbox", n: "01", title: "Executive Inbox Management", icon: Mail, summary: "A prioritised executive inbox with urgent, important, follow-up and awaiting-reply categories, plus a professionally drafted response.", skills: ["Triage", "Prioritisation", "Correspondence"], Comp: InboxDemo },
  { id: "calendar", n: "02", title: "Executive Calendar Management", icon: CalendarDays, summary: "An interactive weekly calendar with CEO, team and client meetings, focus time, deadlines — and a scheduling conflict resolved.", skills: ["Scheduling", "Conflict resolution", "Focus protection"], Comp: CalendarDemo },
  { id: "meetings", n: "03", title: "Meeting Management", icon: Users, summary: "End-to-end meeting support: invitation, agenda, attendees, notes, trackable action items and the follow-up email.", skills: ["Agendas", "Minutes", "Follow-through"], Comp: MeetingDemo },
  { id: "travel", n: "04", title: "Travel & Itinerary Planning", icon: Plane, summary: "A Nairobi → London business trip with flights, hotel, transfers, meetings, budget and reminders. Fictional bookings.", skills: ["Research", "Logistics", "Budgeting"], Comp: TravelDemo },
  { id: "tasks", n: "05", title: "Project & Task Management", icon: KanbanSquare, summary: "An executive task dashboard with priorities, owners, deadlines and progress — update statuses live.", skills: ["Tracking", "Deadlines", "Reporting"], Comp: TasksDemo },
  { id: "sop", n: "06", title: "SOP Documentation", icon: ClipboardList, summary: "A formatted Standard Operating Procedure for executive inbox management, with checks and an interactive final checklist.", skills: ["Process design", "Documentation"], Comp: SopDemo },
  { id: "automation", n: "07", title: "AI & Workflow Automation", icon: Workflow, summary: "A request-intake workflow using Google Workspace, Make.com, ChatGPT, Notion and Trello/Asana that creates tasks and sends reminders.", skills: ["Automation", "AI tools", "Integrations"], Comp: AutomationDemo },
  { id: "research", n: "08", title: "Business Research & Reporting", icon: LineChart, summary: "A research report dashboard: objective, key findings, competitor comparison, insights, recommendations and executive summary.", skills: ["Research", "Analysis", "Executive summaries"], Comp: ResearchDemo },
];

export function DemoSection({ headingAs = "h2", first = false, limit }: { headingAs?: "h1" | "h2"; first?: boolean; limit?: number }) {
  const [active, setActive] = useState<Demo | null>(null);
  const list = limit ? DEMOS.slice(0, limit) : DEMOS;
  return (
    <section className={cn("relative py-24 sm:py-32", first && "pt-36 sm:pt-44")} aria-label="My work and practical demonstrations">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          as={headingAs}
          eyebrow="Portfolio"
          title={<>My Work & <em className="text-gradient-royal">Practical Demonstrations</em></>}
          intro="Interactive examples of how I support a CEO day to day. All names, emails and bookings are fictional sample data created to demonstrate my process — not real client work."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.id} delay={(i % 4) * 80} className="h-full">
                <article className="card-premium group flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-royal text-primary-foreground shadow-elegant"><Icon className="size-5" aria-hidden /></span>
                    <span className="font-display text-3xl italic text-gold">{d.n}</span>
                  </div>
                  <h3 className="mt-6 text-2xl text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{d.skills.map((s) => <span key={s} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{s}</span>)}</div>
                  <Button variant="elegant" className="mt-auto w-full translate-y-0 pt-0" style={{ marginTop: "1.5rem" }} onClick={() => setActive(d)} aria-label={`View project: ${d.title}`}>
                    View Project <ArrowUpRight />
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
        {limit && (
          <div className="mt-14 text-center">
            <Button asChild variant="hero" size="xl"><Link to="/portfolio">See all 8 demonstrations <ArrowUpRight /></Link></Button>
          </div>
        )}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-5xl overflow-y-auto rounded-3xl border-gold/30 p-5 sm:p-8">
          {active && (
            <>
              <p className="eyebrow text-gold-deep">Project {active.n} · Demonstration</p>
              <DialogTitle className="font-display text-3xl font-medium sm:text-4xl">{active.title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">{active.summary}</DialogDescription>
              <div className="mt-4"><active.Comp /></div>
              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">Want this level of support for your business?</p>
                <Button asChild variant="hero" size="lg"><Link to="/contact" onClick={() => setActive(null)}>Hire Me <ArrowUpRight /></Link></Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
