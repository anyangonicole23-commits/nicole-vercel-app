import { createFileRoute } from "@tanstack/react-router";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nicole Creative Studio" },
      { name: "description", content: "Graphic design, social media campaigns, website designs, automation workflows and executive support systems by Nicole Creative Studio." },
      { property: "og:title", content: "Portfolio — Nicole Creative Studio" },
      { property: "og:description", content: "Graphic design, social media campaigns, website designs, automation workflows and executive support systems by Nicole Creative Studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PortfolioSection headingAs="h1" first />
      <CtaBand />
    </>
  );
}
