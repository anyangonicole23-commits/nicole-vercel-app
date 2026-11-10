import { createFileRoute } from "@tanstack/react-router";
import { WhySection } from "@/components/site/WhySection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/why")({
  head: () => ({
    meta: [
      { title: "Why Work With Me — Nicole Creative Studio" },
      { name: "description", content: "More than assistance — a smarter way to work. Proactive, AI-enhanced, organized and reliable executive and creative support." },
      { property: "og:title", content: "Why Work With Me — Nicole Creative Studio" },
      { property: "og:description", content: "More than assistance — a smarter way to work. Proactive, AI-enhanced, organized and reliable executive and creative support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <>
      <WhySection headingAs="h1" first />
      <CtaBand />
    </>
  );
}
