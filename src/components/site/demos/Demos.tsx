import { useState } from "react";
import { AlertTriangle, Check, ChevronDown, Clock, Mail, Reply, Star, Plane, Hotel, Car, CalendarDays, Wallet, Bell, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const Chip = ({ children, className }: { children: React.ReactNode; className?: string | undefined }) => (
  <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", className)}>{children}</span>
);
const Panel = ({ title, children, className }: { title?: string; children: React.ReactNode; className?: string | undefined }) => (
  <div className={cn("rounded-2xl border border-border bg-card p-4 sm:p-5", className)}>
    {title && <p className="eyebrow mb-3 text-primary">{title}</p>}
    {children}
  </div>
);
const tone = {
  urgent: "bg-destructive/10 text-destructive",
  important: "bg-primary/10 text-primary",
  followup: "bg-gold/25 text-gold-deep",
  awaiting: "bg-secondary text-secondary-foreground",
  done: "bg-primary/10 text-primary",
};

/* 1. Inbox */
const EMAILS = [
  { id: 1, cat: "Urgent", from: "Board Secretary", subject: "Board pack needed by 3pm today", preview: "Please confirm the Q3 financials are included…", time: "08:12" },
  { id: 2, cat: "Important", from: "Lead Investor", subject: "Follow-up on Series A terms", preview: "Thanks for the call. Attached are the revised terms…", time: "08:40" },
  { id: 3, cat: "Follow-up", from: "Partner Agency", subject: "Proposal sent — no reply in 5 days", preview: "Reminder set: chase on Thursday.", time: "Mon" },
  { id: 4, cat: "Awaiting reply", from: "Head of Sales", subject: "Waiting on pricing approval", preview: "Draft prepared for CEO sign-off.", time: "Tue" },
  { id: 5, cat: "Urgent", from: "IT Support", subject: "Security verification for new laptop", preview: "Action required before Friday…", time: "09:05" },
  { id: 6, cat: "Important", from: "Conference Organizer", subject: "Speaker confirmation — Nairobi Tech Week", preview: "Please confirm your slot by end of week.", time: "Wed" },
] as const;
const CATS = ["All", "Urgent", "Important", "Follow-up", "Awaiting reply"] as const;
const catTone: Record<string, string> = { Urgent: tone.urgent, Important: tone.important, "Follow-up": tone.followup, "Awaiting reply": tone.awaiting };

export function InboxDemo() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [open, setOpen] = useState<number>(2);
  const list = cat === "All" ? EMAILS : EMAILS.filter((e) => e.cat === cat);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter emails">
        {CATS.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={cn("rounded-full border px-3 py-1.5 text-xs transition", cat === c ? "border-transparent bg-gradient-royal text-primary-foreground" : "border-border bg-card hover:border-gold")}>
            {c} {c !== "All" && <span className="opacity-70">({EMAILS.filter((e) => e.cat === c).length})</span>}
          </button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {list.map((e) => (
            <li key={e.id}>
              <button onClick={() => setOpen(e.id)} className={cn("w-full p-3 text-left transition hover:bg-secondary/60", open === e.id && "bg-secondary")}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">{e.from}</span>
                  <span className="text-xs text-muted-foreground">{e.time}</span>
                </div>
                <p className="mt-0.5 text-sm">{e.subject}</p>
                <div className="mt-1 flex items-center gap-2">
                  <Chip className={catTone[e.cat]}>{e.cat}</Chip>
                  <span className="truncate text-xs text-muted-foreground">{e.preview}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
        <Panel title="Drafted reply — ready for review">
          {open === 2 ? (
            <div className="space-y-3 text-sm leading-relaxed">
              <p className="text-xs text-muted-foreground">To: Lead Investor · Re: Follow-up on Series A terms</p>
              <p>Dear Ms. Daniels,</p>
              <p>Thank you for sending the revised terms following Tuesday's call. Mr. Kamau has received them and is reviewing them with legal counsel this week.</p>
              <p>He would welcome a 30-minute follow-up to discuss next steps. Would Thursday at 10:00 or Friday at 14:00 (EAT) suit you? I'm happy to send an invitation for whichever works best.</p>
              <p>Kind regards,<br />Nicole<br /><span className="text-muted-foreground">Executive Assistant to the CEO</span></p>
              <div className="flex gap-2 pt-1"><Chip className={tone.important}><Reply className="mr-1 size-3" />Awaiting CEO approval</Chip></div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Select the <strong>Series A</strong> email to see a sample professional reply. Other emails are triaged with labels, reminders and next actions.</p>
          )}
        </Panel>
      </div>
    </div>
  );
}

/* 2. Calendar */
type Ev = { id: string; day: number; start: number; len: number; title: string; kind: "ceo" | "team" | "client" | "focus" | "deadline"; note: string; conflict?: boolean };
const KIND: Record<Ev["kind"], { label: string; cls: string }> = {
  ceo: { label: "CEO meeting", cls: "bg-gradient-royal text-primary-foreground" },
  team: { label: "Internal team", cls: "bg-lavender text-foreground" },
  client: { label: "Client", cls: "bg-gold/40 text-foreground" },
  focus: { label: "Focus time", cls: "bg-secondary text-secondary-foreground border border-dashed border-primary/30" },
  deadline: { label: "Deadline / reminder", cls: "bg-destructive/15 text-destructive" },
};
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const BASE: Ev[] = [
  { id: "a", day: 0, start: 9, len: 1, title: "Leadership sync", kind: "ceo", note: "Weekly priorities with the executive team." },
  { id: "b", day: 0, start: 13, len: 2, title: "Deep work", kind: "focus", note: "Protected — no meetings accepted." },
  { id: "c", day: 1, start: 10, len: 1, title: "Client: Acme review", kind: "client", note: "Quarterly review. Briefing pack sent Monday." },
  { id: "d", day: 1, start: 10, len: 1, title: "Product stand-up", kind: "team", note: "Clashes with the Acme client review.", conflict: true },
  { id: "e", day: 2, start: 11, len: 1, title: "Investor call", kind: "ceo", note: "Dial-in details in invite. Notes template ready." },
  { id: "f", day: 2, start: 15, len: 1, title: "Marketing 1:1", kind: "team", note: "Campaign budget sign-off." },
  { id: "g", day: 3, start: 9, len: 2, title: "Strategy focus", kind: "focus", note: "Board deck preparation." },
  { id: "h", day: 3, start: 14, len: 1, title: "Client: Lumen pitch", kind: "client", note: "Travel 30 min — car booked." },
  { id: "i", day: 4, start: 12, len: 1, title: "Board pack due", kind: "deadline", note: "Reminder sent Wed & Thu." },
  { id: "j", day: 4, start: 16, len: 1, title: "Expense reports", kind: "deadline", note: "Submit to finance." },
];
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16];

export function CalendarDemo() {
  const [events, setEvents] = useState(BASE);
  const [sel, setSel] = useState<Ev | null>(BASE[3] ?? null);
  const resolved = !events.some((e) => e.conflict);
  const resolve = () => {
    setEvents((evs) => evs.map((e) => (e.id === "d" ? { ...e, start: 12, conflict: false, note: "Moved to 12:00 — team notified, client review kept." } : e)));
    setSel(null);
  };
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">{Object.values(KIND).map((k) => <Chip key={k.label} className={k.cls}>{k.label}</Chip>)}</div>
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <div className="grid min-w-[620px] grid-cols-[3rem_repeat(5,1fr)]">
          <div />
          {DAYS.map((d) => <div key={d} className="border-b border-border p-2 text-center text-xs font-medium">{d}</div>)}
          {HOURS.map((h) => (
            <div key={h} className="contents">
              <div className="border-t border-border p-1 text-right text-[10px] text-muted-foreground">{h}:00</div>
              {DAYS.map((_, di) => {
                const here = events.filter((e) => e.day === di && e.start === h);
                return (
                  <div key={di} className="min-h-12 border-l border-t border-border p-1">
                    {here.map((e) => (
                      <button key={e.id} onClick={() => setSel(e)}
                        className={cn("mb-1 block w-full rounded-md px-1.5 py-1 text-left text-[11px] leading-tight transition hover:scale-[1.02]", KIND[e.kind].cls, e.conflict && "ring-2 ring-destructive")}>
                        {e.conflict && <AlertTriangle className="mr-1 inline size-3" />}{e.title}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <Panel title={sel ? KIND[sel.kind].label : resolved ? "Conflict resolved" : "Click any event"}>
        {sel ? (
          <div className="space-y-2 text-sm">
            <p className="font-medium">{sel.title} · {DAYS[sel.day]} {sel.start}:00</p>
            <p className="text-muted-foreground">{sel.note}</p>
            {sel.conflict && (
              <div className="rounded-xl bg-destructive/10 p-3">
                <p className="text-destructive"><strong>Conflict:</strong> the client review takes priority. Proposed fix: move the stand-up to 12:00 (all attendees free) and notify the team.</p>
                <button onClick={resolve} className="mt-2 rounded-full bg-gradient-royal px-4 py-1.5 text-xs text-primary-foreground">Resolve conflict</button>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">{resolved ? "Stand-up moved to Tue 12:00 and the team was notified. The client meeting stays untouched." : "Tap an event to see its details and preparation notes."}</p>
        )}
      </Panel>
    </div>
  );
}

/* 3. Meetings */
function Expand({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between p-4 text-left text-sm font-medium">
        {title}<ChevronDown className={cn("size-4 transition", open && "rotate-180")} />
      </button>
      {open && <div className="border-t border-border p-4 text-sm leading-relaxed">{children}</div>}
    </div>
  );
}
export function MeetingDemo() {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const actions = [
    { t: "Share revised Q4 budget with finance", o: "J. Otieno", d: "Fri 22 Nov" },
    { t: "Confirm venue for client summit", o: "Nicole (EA)", d: "Wed 20 Nov" },
    { t: "Draft hiring plan for 2 sales roles", o: "A. Wanjiru", d: "Mon 25 Nov" },
  ];
  return (
    <div className="space-y-3">
      <Expand title="1. Meeting invitation" defaultOpen>
        <p><strong>Q4 Planning Review</strong> · Tue 19 Nov, 10:00–11:00 EAT · Google Meet + Boardroom 2</p>
        <p className="mt-1 text-muted-foreground">Purpose: agree Q4 budget, client summit plan and hiring priorities. Pre-read attached.</p>
      </Expand>
      <Expand title="2. Agenda">
        <ol className="list-decimal space-y-1 pl-5"><li>Q3 results recap (10 min)</li><li>Q4 budget proposal (20 min)</li><li>Client summit logistics (15 min)</li><li>Hiring plan (10 min)</li><li>Actions & close (5 min)</li></ol>
      </Expand>
      <Expand title="3. Attendees">
        <ul className="grid gap-1 sm:grid-cols-2">{["CEO — chair", "J. Otieno — Finance", "A. Wanjiru — Sales", "M. Njeri — Marketing", "Nicole — EA, minutes"].map((a) => <li key={a}>• {a}</li>)}</ul>
      </Expand>
      <Expand title="4. Meeting notes">
        <ul className="space-y-1"><li>• Q3 revenue 8% above target; marketing spend under budget.</li><li>• Q4 budget approved in principle, pending finance revisions.</li><li>• Client summit moved to early December; venue shortlist of 3.</li><li>• Two sales hires prioritised for January start.</li></ul>
      </Expand>
      <Panel title="5. Action items — tick to update status">
        <ul className="space-y-2">
          {actions.map((a, i) => (
            <li key={i}>
              <label className="flex cursor-pointer items-start gap-3 text-sm">
                <input type="checkbox" checked={!!done[i]} onChange={() => setDone({ ...done, [i]: !done[i] })} className="mt-1 accent-primary" />
                <span className={cn(done[i] && "text-muted-foreground line-through")}>{a.t} <span className="text-xs text-muted-foreground">— {a.o}, due {a.d}</span></span>
              </label>
            </li>
          ))}
        </ul>
      </Panel>
      <Expand title="6. Follow-up email">
        <p>Subject: Summary & actions — Q4 Planning Review</p>
        <p className="mt-2">Hi all, thank you for today's meeting. Key decisions: Q4 budget approved in principle; summit moved to early December; two sales hires prioritised. Your actions are listed below with due dates — I'll send a reminder two days before each. Notes are saved in the shared Q4 folder.</p>
        <p className="mt-2">Best regards,<br />Nicole</p>
      </Expand>
    </div>
  );
}

/* 4. Travel */
export function TravelDemo() {
  const budget = [["Flights (business)", 2850], ["Hotel — 4 nights", 1120], ["Transfers", 180], ["Meals & per diem", 400], ["Contingency", 250]] as const;
  const total = budget.reduce((s, [, v]) => s + v, 0);
  const days = [
    { d: "Sun 1 Dec", items: ["22:45 Depart NBO → LHR (KQ100, sample)", "Car to JKIA at 19:30"] },
    { d: "Mon 2 Dec", items: ["06:10 Arrive LHR — driver at Terminal 4", "Check-in, rest until 12:00", "15:00 Partner meeting, Canary Wharf"] },
    { d: "Tue 3 Dec", items: ["09:00 Investor breakfast", "14:00 Client workshop", "19:30 Dinner reservation, Mayfair"] },
    { d: "Wed 4 Dec", items: ["10:00 Fintech conference keynote", "Free afternoon — focus block"] },
    { d: "Thu 5 Dec", items: ["12:00 Hotel check-out", "16:30 Depart LHR → NBO"] },
  ];
  const [day, setDay] = useState(1);
  return (
    <div className="space-y-4">
      <p className="rounded-xl bg-gold/20 p-3 text-xs text-gold-deep"><strong>Demonstration only:</strong> fictional bookings and reference numbers for a Nairobi → London business trip.</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Panel><Plane className="size-5 text-primary" /><p className="mt-2 text-sm font-medium">Flights</p><p className="text-xs text-muted-foreground">NBO ⇄ LHR · Business · Ref DEMO-7Q2X</p></Panel>
        <Panel><Hotel className="size-5 text-primary" /><p className="mt-2 text-sm font-medium">Hotel</p><p className="text-xs text-muted-foreground">4 nights · Canary Wharf · Quiet room, early check-in requested</p></Panel>
        <Panel><Car className="size-5 text-primary" /><p className="mt-2 text-sm font-medium">Transfers</p><p className="text-xs text-muted-foreground">Pre-booked driver both ways · Name board</p></Panel>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Panel title="Day-by-day itinerary">
          <div className="mb-3 flex flex-wrap gap-1.5">{days.map((d, i) => <button key={d.d} onClick={() => setDay(i)} className={cn("rounded-full px-3 py-1 text-xs", day === i ? "bg-gradient-royal text-primary-foreground" : "bg-secondary")}>{d.d}</button>)}</div>
          <ul className="space-y-2 text-sm">{(days[day]?.items ?? []).map((it) => <li key={it} className="flex gap-2"><CalendarDays className="mt-0.5 size-4 shrink-0 text-gold-deep" />{it}</li>)}</ul>
        </Panel>
        <Panel title="Travel budget (USD)">
          <ul className="space-y-1.5 text-sm">{budget.map(([k, v]) => <li key={k} className="flex justify-between"><span>{k}</span><span>${v.toLocaleString()}</span></li>)}</ul>
          <div className="mt-3 flex justify-between border-t border-border pt-2 font-medium"><span className="flex items-center gap-1"><Wallet className="size-4" />Total</span><span>${total.toLocaleString()}</span></div>
        </Panel>
      </div>
      <Panel title="Important reminders">
        <ul className="grid gap-2 text-sm sm:grid-cols-2">{["UK ETA travel authorisation approved", "Passport valid 6+ months", "Universal adaptor & presentation clicker packed", "London is 3 hours behind Nairobi (winter)", "Corporate card limit raised for trip", "Emergency contacts shared with CEO"].map((r) => <li key={r} className="flex gap-2"><Bell className="mt-0.5 size-4 shrink-0 text-gold-deep" />{r}</li>)}</ul>
      </Panel>
    </div>
  );
}

/* 5. Tasks */
type Status = "Pending" | "In progress" | "Completed";
const TASKS0 = [
  { t: "Prepare board presentation", p: "High", who: "CEO / Nicole", due: "Nov 22", prog: 70, s: "In progress" as Status },
  { t: "Renew software licences", p: "Medium", who: "Operations", due: "Nov 25", prog: 0, s: "Pending" as Status },
  { t: "Client onboarding pack — Lumen", p: "High", who: "Sales", due: "Nov 21", prog: 40, s: "In progress" as Status },
  { t: "Update CRM contact records", p: "Low", who: "Nicole", due: "Nov 29", prog: 0, s: "Pending" as Status },
  { t: "Book team offsite venue", p: "Medium", who: "Nicole", due: "Nov 18", prog: 100, s: "Completed" as Status },
  { t: "Q3 expense reconciliation", p: "High", who: "Finance", due: "Nov 15", prog: 100, s: "Completed" as Status },
];
const ORDER: Status[] = ["Pending", "In progress", "Completed"];
export function TasksDemo() {
  const [tasks, setTasks] = useState(TASKS0);
  const cycle = (i: number) => setTasks((ts) => ts.map((t, j) => {
    if (j !== i) return t;
    const s = ORDER[(ORDER.indexOf(t.s) + 1) % 3] as Status;
    return { ...t, s, prog: s === "Completed" ? 100 : s === "Pending" ? 0 : Math.max(t.prog, 50) };
  }));
  const count = (s: Status) => tasks.filter((t) => t.s === s).length;
  const pTone: Record<string, string> = { High: tone.urgent, Medium: tone.followup, Low: tone.awaiting };
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">{ORDER.map((s) => <Panel key={s}><p className="text-xs text-muted-foreground">{s}</p><p className="font-display text-3xl text-primary">{count(s)}</p></Panel>)}</div>
      <p className="text-xs text-muted-foreground">Tip: tap a status to move the task forward.</p>
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[620px] text-sm">
          <thead className="bg-secondary/60 text-left text-xs"><tr>{["Task", "Priority", "Owner", "Deadline", "Progress", "Status"].map((h) => <th key={h} className="p-3 font-medium">{h}</th>)}</tr></thead>
          <tbody>
            {tasks.map((t, i) => (
              <tr key={t.t} className="border-t border-border">
                <td className={cn("p-3", t.s === "Completed" && "text-muted-foreground line-through")}>{t.t}</td>
                <td className="p-3"><Chip className={pTone[t.p]}>{t.p}</Chip></td>
                <td className="p-3">{t.who}</td>
                <td className="p-3">{t.due}</td>
                <td className="p-3"><div className="h-2 w-24 overflow-hidden rounded-full bg-secondary"><div className="h-full bg-gradient-royal transition-all" style={{ width: `${t.prog}%` }} /></div></td>
                <td className="p-3"><button onClick={() => cycle(i)} className={cn("rounded-full px-3 py-1 text-xs", t.s === "Completed" ? tone.done : t.s === "In progress" ? tone.followup : tone.awaiting)}>{t.s === "Completed" && <Check className="mr-1 inline size-3" />}{t.s}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* 6. SOP */
export function SopDemo() {
  const checks = ["Inbox processed to zero or labelled", "All urgent items escalated", "Drafts queued for approval", "Follow-up reminders set", "Calendar invites accepted/declined", "Daily summary sent to executive"];
  const [ticked, setTicked] = useState<boolean[]>(checks.map(() => false));
  return (
    <article className="space-y-4 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed sm:p-7">
      <header className="flex flex-wrap items-end justify-between gap-2 border-b border-border pb-3">
        <div><p className="eyebrow text-gold-deep">SOP-EA-001 · v1.2</p><h4 className="font-display text-2xl">Executive Inbox Management</h4></div>
        <p className="text-xs text-muted-foreground">Owner: Executive Assistant · Review: quarterly</p>
      </header>
      <section><p className="eyebrow text-primary">1. Purpose</p><p className="mt-1">Ensure the executive's inbox is reviewed, prioritised and actioned twice daily so no important message is missed and response times stay under 24 hours.</p></section>
      <section><p className="eyebrow text-primary">2. Tools</p><p className="mt-1">Gmail / Outlook, labels & filters, Google Calendar, shared task board, ChatGPT for draft assistance (no confidential data pasted).</p></section>
      <section><p className="eyebrow text-primary">3. Procedure</p>
        <ol className="mt-1 list-decimal space-y-1 pl-5">
          <li>08:00 and 15:00 — open inbox, sort by unread.</li>
          <li>Label each email: <em>Urgent, Action, Waiting, Read later, FYI</em>.</li>
          <li>Urgent: notify the executive by chat within 15 minutes.</li>
          <li>Routine: draft reply in the executive's tone and queue for approval.</li>
          <li>Requests with dates → create calendar holds; tasks → add to task board.</li>
          <li>Archive newsletters and FYI after logging key points in the daily summary.</li>
        </ol>
      </section>
      <section className="rounded-xl bg-destructive/10 p-3"><p className="eyebrow text-destructive">4. Important checks</p><ul className="mt-1 list-disc pl-5"><li>Never send on the executive's behalf without approval unless pre-authorised.</li><li>Verify sender before opening attachments or links.</li><li>Confidential, legal and HR emails are flagged, not delegated.</li></ul></section>
      <section><p className="eyebrow text-primary">5. Final checklist ({ticked.filter(Boolean).length}/{checks.length})</p>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">{checks.map((c, i) => <li key={c}><label className="flex cursor-pointer items-center gap-2"><input type="checkbox" className="accent-primary" checked={ticked[i]} onChange={() => setTicked(ticked.map((v, j) => (j === i ? !v : v)))} />{c}</label></li>)}</ul>
      </section>
    </article>
  );
}

/* 7. Automation */
export function AutomationDemo() {
  const steps = [
    { tool: "Google Workspace", t: "Request arrives", d: "New email or Google Form submission tagged “Request”." },
    { tool: "Make.com", t: "Scenario triggers", d: "Watches the label/form and extracts sender, deadline and request." },
    { tool: "ChatGPT", t: "Classify & summarise", d: "Assigns category and priority, writes a one-line summary." },
    { tool: "Notion", t: "Log in request database", d: "Creates a record with status “New” and links the email." },
    { tool: "Trello / Asana", t: "Create follow-up task", d: "Card assigned to the right owner with a due date." },
    { tool: "Gmail + Calendar", t: "Send reminders", d: "Acknowledgement sent; reminder 24h before due; daily digest at 17:00." },
  ];
  const [run, setRun] = useState(-1);
  const start = () => { setRun(0); steps.forEach((_, i) => setTimeout(() => setRun(i), i * 600)); };
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">Example: incoming requests organised automatically into tasks and reminders.</p>
        <button onClick={start} className="inline-flex items-center gap-2 rounded-full bg-gradient-royal px-4 py-2 text-xs text-primary-foreground"><Bot className="size-4" />Run sample workflow</button>
      </div>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.t} className={cn("rounded-2xl border p-4 transition-all duration-500", run >= i ? "border-primary bg-secondary shadow-soft" : "border-border bg-card")}>
            <div className="flex items-center justify-between"><Chip className={tone.followup}>{s.tool}</Chip><span className="font-display text-xl text-gold-deep">{i + 1}</span></div>
            <p className="mt-2 text-sm font-medium">{s.t}</p>
            <p className="text-xs text-muted-foreground">{s.d}</p>
            {run >= i && <p className="mt-2 flex items-center gap-1 text-xs text-primary"><Check className="size-3" />Done</p>}
          </li>
        ))}
      </ol>
      {run === steps.length - 1 && <Panel title="Result"><p className="text-sm">“Venue quote for client summit” → logged as <strong>High priority</strong>, task created for Operations due Fri, acknowledgement sent, reminder scheduled Thu 09:00.</p></Panel>}
    </div>
  );
}

/* 8. Research */
export function ResearchDemo() {
  const [tab, setTab] = useState<"summary" | "findings" | "competitors" | "recs">("summary");
  const tabs = [["summary", "Executive summary"], ["findings", "Key findings"], ["competitors", "Competitors"], ["recs", "Recommendations"]] as const;
  return (
    <div className="space-y-4">
      <Panel title="Research objective"><p className="text-sm">Assess the market for remote executive support among small and mid-sized firms in East Africa and identify where a new service could stand out. <span className="text-muted-foreground">(Fictional sample report.)</span></p></Panel>
      <div className="flex flex-wrap gap-2">{tabs.map(([k, l]) => <button key={k} onClick={() => setTab(k)} className={cn("rounded-full px-3 py-1.5 text-xs", tab === k ? "bg-gradient-royal text-primary-foreground" : "bg-secondary")}>{l}</button>)}</div>
      {tab === "summary" && <Panel><p className="text-sm leading-relaxed">Demand for remote executive support is growing as founders scale lean teams. Buyers value reliability and confidentiality above price. A service combining traditional EA support with AI-assisted reporting is under-served and could command a premium.</p></Panel>}
      {tab === "findings" && (
        <div className="grid gap-3 sm:grid-cols-3">{[["62%", "of surveyed founders spend 10+ hrs/week on admin"], ["3 of 5", "competitors offer no reporting or automation"], ["48 hrs", "average onboarding time buyers expect"]].map(([n, t]) => <Panel key={n}><p className="font-display text-3xl text-primary">{n}</p><p className="text-xs text-muted-foreground">{t}</p></Panel>)}</div>
      )}
      {tab === "competitors" && (
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[520px] text-sm">
            <thead className="bg-secondary/60 text-left text-xs"><tr>{["Provider", "Price / month", "AI tools", "Reporting", "Response time"].map((h) => <th key={h} className="p-3 font-medium">{h}</th>)}</tr></thead>
            <tbody>{[["Agency A", "$900", "No", "Basic", "24h"], ["Freelancer B", "$600", "Partial", "No", "48h"], ["Platform C", "$1,200", "Yes", "Yes", "12h"], ["Proposed service", "$850", "Yes", "Yes", "Same day"]].map((r) => <tr key={r[0]} className={cn("border-t border-border", r[0] === "Proposed service" && "bg-secondary font-medium")}>{r.map((c, i) => <td key={i} className="p-3">{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      {tab === "recs" && (
        <Panel><ol className="list-decimal space-y-1 pl-5 text-sm"><li>Position on reliability and confidentiality, not price.</li><li>Bundle a weekly executive report as a standard deliverable.</li><li>Offer a 2-week trial onboarding to reduce buyer risk.</li><li>Publish SOP samples to demonstrate process maturity.</li></ol></Panel>
      )}
      <Panel title="Business insight"><p className="flex gap-2 text-sm"><Star className="size-4 shrink-0 text-gold-deep" />Clients choose an assistant they can trust with sensitive information — visible processes are the strongest proof.</p></Panel>
    </div>
  );
}

