import {
  Briefcase,
  Sparkles,
  Workflow,
  Palette,
  Megaphone,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

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
  {
    slug: "executive-virtual-assistance",
    number: "01",
    title: "Executive Virtual Assistance",
    summary: "Discreet, proactive support that keeps your days structured and your priorities protected.",
    icon: Briefcase,
    items: [
      "Executive calendar management",
      "Inbox management and email prioritization",
      "Meeting scheduling and coordination",
      "Travel research and itinerary planning",
      "Executive correspondence",
      "Research and reporting",
      "Administrative operations support",
    ],
  },
  {
    slug: "ai-executive-support",
    number: "02",
    title: "AI-Powered Executive Support",
    summary: "Human judgement amplified by AI — faster research, sharper preparation, cleaner documents.",
    icon: Sparkles,
    items: [
      "AI-assisted research and information organization",
      "Meeting preparation and summarization",
      "Document drafting and editing",
      "AI-powered productivity workflows",
      "Intelligent task management",
      "Executive productivity optimization",
    ],
  },
  {
    slug: "workflow-automation",
    number: "03",
    title: "Workflow Automation",
    summary: "Connected systems that quietly handle the repetitive work, so your team doesn't have to.",
    icon: Workflow,
    items: [
      "Automating repetitive administrative tasks",
      "Connecting business applications",
      "Workflow design using Make.com and Zapier",
      "Automated notifications and follow-ups",
      "Process improvement",
      "Reducing manual workload and administrative bottlenecks",
    ],
  },
  {
    slug: "graphic-design",
    number: "04",
    title: "Graphic Design",
    summary: "Polished, on-brand visuals that make every touchpoint feel considered and premium.",
    icon: Palette,
    items: [
      "Social media graphics",
      "Marketing materials",
      "Promotional posters",
      "Brand visuals",
      "Digital designs",
    ],
  },
  {
    slug: "social-media-management",
    number: "05",
    title: "Social Media Management",
    summary: "Consistent, strategic content that builds presence and nurtures a loyal community.",
    icon: Megaphone,
    items: [
      "Content planning",
      "Content calendars",
      "Social media graphics",
      "Caption writing",
      "Scheduling and publishing",
      "Community engagement",
    ],
  },
  {
    slug: "website-design",
    number: "06",
    title: "Website Design",
    summary: "Elegant, responsive websites that communicate credibility from the very first scroll.",
    icon: MonitorSmartphone,
    items: [
      "Business websites",
      "Portfolio websites",
      "Landing pages",
      "Responsive website design",
      "Website content organization",
    ],
  },
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
