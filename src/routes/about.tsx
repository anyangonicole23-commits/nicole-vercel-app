import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/site/AboutSection";
import { WhySection } from "@/components/site/WhySection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nicole — Nicole Creative Studio" },
      { name: "description", content: "Meet Nicole, a proactive Executive Virtual Assistant and creative digital professional combining admin excellence, AI tools, automation and design." },
      { property: "og:title", content: "About Nicole — Nicole Creative Studio" },
      { property: "og:description", content: "Meet Nicole, a proactive Executive Virtual Assistant and creative digital professional combining admin excellence, AI tools, automation and design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutSection headingAs="h1" first showLink={false} />
      <WhySection />
      <CtaBand />
    </>
  );
}
