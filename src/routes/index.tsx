import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { AutomationSection } from "@/components/site/AutomationSection";
import { DemoSection } from "@/components/site/DemoSection";
import { ToolsSection } from "@/components/site/ToolsSection";
import { WhySection } from "@/components/site/WhySection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicole Creative Studio — Executive Support, AI Automation & Design" },
      { name: "description", content: "Your Vision. My Expertise. Smarter Workflows. Executive virtual assistance, AI-powered support, automation, design, social media and websites." },
      { property: "og:title", content: "Nicole Creative Studio — Smarter Workflows" },
      { property: "og:description", content: "Executive support, AI-powered automation and creative digital solutions for entrepreneurs, executives and growing businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <AutomationSection />
      <DemoSection limit={4} />
      <ToolsSection />
      <WhySection />
      <CtaBand />
    </>
  );
}
