import { CalendarDays, Mail, Users, Plane, FolderOpen, LineChart, KanbanSquare, ClipboardList, Contact, Sparkles, type LucideIcon } from "lucide-react";

import brandImg from "@/assets/portfolio-brand.jpg";
import socialImg from "@/assets/portfolio-social.jpg";
import websiteImg from "@/assets/portfolio-website.jpg";
import automationImg from "@/assets/portfolio-automation.jpg";
import templatesImg from "@/assets/portfolio-templates.jpg";
import posterImg from "@/assets/portfolio-poster.jpg";
import workspaceImg from "@/assets/about-workspace.jpg";

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  items: string[];
};

export const SERVICES: Service[] = [
  { slug: "calendar", number: "01", title: "Executive Calendar & Schedule Management", summary: "Colour-coded calendars that protect focus time, prevent clashes and keep every commitment visible.", icon: CalendarDays, items: ["Daily and weekly schedule planning", "Conflict detection and rescheduling", "Time-zone aware booking", "Focus-time protection"] },
  { slug: "inbox", number: "02", title: "Inbox Management & Email Correspondence", summary: "A calm, prioritized inbox — urgent items surfaced, routine replies drafted in your voice.", icon: Mail, items: ["Triage, labels and filters", "Priority flagging and follow-up tracking", "Professional reply drafting", "Inbox-zero routines"] },
  { slug: "meetings", number: "03", title: "Meeting Coordination & Preparation", summary: "Meetings that start prepared and end with clear owners, deadlines and follow-ups.", icon: Users, items: ["Invitations and attendee coordination", "Agendas and briefing packs", "Minutes and action items", "Follow-up emails"] },
  { slug: "travel", number: "04", title: "Travel Research & Itinerary Planning", summary: "Well-researched business trips with every flight, transfer and meeting in one itinerary.", icon: Plane, items: ["Flight and hotel research", "Transfers and logistics", "Day-by-day itineraries", "Budget tracking and reminders"] },
  { slug: "admin", number: "05", title: "Administrative & Document Management", summary: "Organized files, clean templates and documents that are always easy to find.", icon: FolderOpen, items: ["Folder structures and naming", "Document formatting and templates", "Data entry and record keeping", "Confidential file handling"] },
  { slug: "research", number: "06", title: "Online Research & Business Reporting", summary: "Clear, sourced research turned into executive summaries you can act on.", icon: LineChart, items: ["Market and competitor research", "Data gathering and comparison", "Executive summaries", "Slide and report preparation"] },
  { slug: "projects", number: "07", title: "Project & Task Management", summary: "Every task with an owner, a deadline and a status — so nothing slips.", icon: KanbanSquare, items: ["Task boards and trackers", "Deadline monitoring", "Team follow-ups", "Weekly progress reports"] },
  { slug: "sops", number: "08", title: "SOP Creation & Documentation", summary: "Step-by-step procedures that make recurring work consistent and easy to delegate.", icon: ClipboardList, items: ["Process mapping", "Written SOPs and checklists", "Onboarding guides", "Version-controlled documentation"] },
  { slug: "crm", number: "09", title: "CRM & Client Relationship Management", summary: "Organized client records and timely touchpoints that keep relationships warm.", icon: Contact, items: ["Contact and pipeline updates", "Client follow-up reminders", "Enquiry tracking", "Relationship notes"] },
  { slug: "ai", number: "10", title: "AI Tools & Workflow Automation", summary: "Practical AI and automations that cut manual admin and speed up preparation.", icon: Sparkles, items: ["AI-assisted drafting and summaries", "Request intake workflows", "Automated reminders", "Tool integrations"] },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Graphic Design",
  "Social Media",
  "Websites",
  "Automation",
  "Executive Systems",
] as const;

export type PortfolioCategory = Exclude<(typeof PORTFOLIO_CATEGORIES)[number], "All">;

export type Project = {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  summary: string;
  deliverables: string[];
  outcome: string;
};

export const PROJECTS: Project[] = [
  {
    id: "boutique-identity",
    title: "Boutique Brand Identity",
    category: "Graphic Design",
    image: brandImg,
    summary: "A refined visual identity for a boutique lifestyle brand — business cards, letterhead and campaign poster.",
    deliverables: ["Logo application", "Stationery suite", "Campaign poster", "Brand colour guide"],
    outcome: "A cohesive, premium brand presence across print and digital.",
  },
  {
    id: "skincare-campaign",
    title: "Lavender Skincare Launch",
    category: "Social Media",
    image: socialImg,
    summary: "A 30-day launch campaign with a consistent visual language, captions and a scheduled content calendar.",
    deliverables: ["Content calendar", "Feed graphics", "Caption writing", "Scheduling"],
    outcome: "A polished, on-brand feed published consistently without last-minute scrambles.",
  },
  {
    id: "velora-website",
    title: "Velora Boutique Website",
    category: "Websites",
    image: websiteImg,
    summary: "A responsive boutique website designed to feel editorial on desktop and effortless on mobile.",
    deliverables: ["Site structure", "Responsive design", "Content organization", "Landing page"],
    outcome: "A credible online home that guides visitors from discovery to enquiry.",
  },
  {
    id: "lead-capture-flow",
    title: "Lead Capture Automation",
    category: "Automation",
    image: automationImg,
    summary: "A Make.com scenario that captures enquiries, organizes them in a CRM and triggers personalized follow-ups.",
    deliverables: ["Form → CRM sync", "Auto-tagging", "Follow-up emails", "Team notifications"],
    outcome: "Every lead captured, organized and answered — without manual data entry.",
  },
  {
    id: "executive-planning-suite",
    title: "Executive Planning Suite",
    category: "Executive Systems",
    image: templatesImg,
    summary: "A set of planning dashboards, meeting agendas and project trackers for a busy founder.",
    deliverables: ["Weekly planner", "Meeting agenda template", "Project tracker", "Reporting dashboard"],
    outcome: "Clear priorities and faster weekly reviews in one organized system.",
  },
  {
    id: "event-poster-series",
    title: "Event Poster Series",
    category: "Graphic Design",
    image: posterImg,
    summary: "An abstract promotional poster series combining fluid forms with royal and gold tones.",
    deliverables: ["Poster series", "Social adaptations", "Print-ready files"],
    outcome: "Distinctive promotional visuals that feel gallery-worthy.",
  },
  {
    id: "calendar-command-centre",
    title: "Calendar Command Centre",
    category: "Executive Systems",
    image: workspaceImg,
    summary: "A colour-coded calendar and inbox system that protects focus time and surfaces what matters.",
    deliverables: ["Calendar architecture", "Inbox rules & labels", "Daily briefing template"],
    outcome: "Fewer conflicts, calmer mornings and a predictable weekly rhythm.",
  },
];

export const WHY_POINTS = [
  { title: "Proactive executive support", text: "I anticipate needs before they become urgent — so you lead, rather than react." },
  { title: "AI-enhanced productivity", text: "Modern AI tools paired with human judgement for faster, sharper output." },
  { title: "Thoughtful workflow optimization", text: "Processes designed around how you actually work, not generic templates." },
  { title: "Creative problem-solving", text: "A designer's eye and an operator's mindset applied to every challenge." },
  { title: "Reliable communication", text: "Clear updates, timely responses and no surprises — ever." },
  { title: "Organized, detail-oriented execution", text: "Every file, task and deadline handled with precision and care." },
  { title: "Continuous learning and improvement", text: "Always refining skills and tools so your business benefits from what's next." },
];

export const AUTOMATION_STEPS = [
  { title: "Manual Tasks", text: "Copy-pasting, chasing replies, re-typing data." },
  { title: "Smart Automation", text: "Apps connected with Make.com, Zapier and AI." },
  { title: "Organized Operations", text: "Consistent processes that run on their own." },
  { title: "More Time for Growth", text: "Hours returned to strategy, clients and vision." },
];

export const AUTOMATION_EXAMPLES = [
  { title: "Automated lead capture and organization", text: "New enquiries flow straight into your CRM, tagged and ready." },
  { title: "Email follow-up workflows", text: "Timely, personal follow-ups sent without you lifting a finger." },
  { title: "Task creation and reminders", text: "Requests become tasks with owners, deadlines and nudges." },
  { title: "Automated reporting", text: "Weekly summaries assembled and delivered on schedule." },
  { title: "AI-assisted document preparation", text: "Drafts, summaries and briefs prepared in minutes, refined by me." },
];
