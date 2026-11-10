import { createFileRoute } from "@tanstack/react-router";
import { AutomationSection } from "@/components/site/AutomationSection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/automation")({
  head: () => ({
    meta: [
      { title: "AI & Workflow Automation — Nicole Creative Studio" },
      { name: "description", content: "Less manual work, more meaningful progress. AI-assisted workflows and Make.com and Zapier automations that streamline your operations." },
      { property: "og:title", content: "AI & Workflow Automation — Nicole Creative Studio" },
      { property: "og:description", content: "Less manual work, more meaningful progress. AI-assisted workflows and Make.com and Zapier automations that streamline your operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AutomationPage,
});

function AutomationPage() {
  return (
    <>
      <AutomationSection headingAs="h1" first />
      <CtaBand />
    </>
  );
}
