import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/site/ServicesSection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nicole Creative Studio" },
      { name: "description", content: "Executive virtual assistance, AI-powered executive support, workflow automation, graphic design, social media management and website design." },
      { property: "og:title", content: "Services — Nicole Creative Studio" },
      { property: "og:description", content: "Executive virtual assistance, AI-powered executive support, workflow automation, graphic design, social media management and website design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <ServicesSection headingAs="h1" first />
      <CtaBand />
    </>
  );
}
