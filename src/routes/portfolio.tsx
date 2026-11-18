import { createFileRoute } from "@tanstack/react-router";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { DemoSection } from "@/components/site/DemoSection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "My Work & Demonstrations — Nicole Creative Studio" },
      { name: "description", content: "Interactive Executive Assistant demonstrations: inbox, calendar, meetings, travel, tasks, SOPs, automation and research — plus creative work." },
      { property: "og:title", content: "My Work & Demonstrations — Nicole Creative Studio" },
      { property: "og:description", content: "Interactive Executive Assistant demonstrations: inbox, calendar, meetings, travel, tasks, SOPs, automation and research — plus creative work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <DemoSection headingAs="h1" first />
      <PortfolioSection />
      <CtaBand />
    </>
  );
}
