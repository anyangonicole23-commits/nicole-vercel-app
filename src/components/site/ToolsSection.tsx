import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const PRACTICAL = [
  { name: "Google Workspace", use: "Gmail, Calendar, Docs, Sheets, Drive" },
  { name: "Microsoft Office", use: "Word, Excel, PowerPoint, Outlook" },
  { name: "Canva", use: "Presentations, graphics and documents" },
  { name: "ChatGPT", use: "Drafting, summaries and research support" },
];
const LEARNING = [
  { name: "Notion", use: "Workspaces, databases and SOP libraries" },
  { name: "Trello", use: "Kanban task boards" },
  { name: "Asana", use: "Project and team task tracking" },
  { name: "Make.com", use: "Workflow automation scenarios" },
];

function Group({ title, note, tools, variant }: { title: string; note: string; tools: typeof PRACTICAL; variant: "practical" | "learning" }) {
  return (
    <Reveal className="card-premium p-7">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl">{title}</h3>
        <span className={cn("rounded-full px-3 py-1 text-xs", variant === "practical" ? "bg-gradient-royal text-primary-foreground" : "bg-gold/25 text-gold-deep")}>{variant === "practical" ? "Hands-on" : "Currently learning"}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{note}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {tools.map((t) => (
          <li key={t.name} className="rounded-xl border border-border bg-card p-4">
            <p className="font-medium text-foreground">{t.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t.use}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function ToolsSection() {
  return (
    <section className="relative bg-gradient-lavender py-24 sm:py-32" aria-label="Technology and tools">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Technology & Tools" title={<>My working <em className="text-gradient-royal">toolkit</em></>} intro="An honest view of the tools I use in practice and the ones I'm actively building skills in." />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Group title="Practical experience" note="Tools I use confidently in day-to-day work." tools={PRACTICAL} variant="practical" />
          <Group title="Currently learning" note="Tools I'm practising and applying in demonstration projects." tools={LEARNING} variant="learning" />
        </div>
      </div>
    </section>
  );
}
