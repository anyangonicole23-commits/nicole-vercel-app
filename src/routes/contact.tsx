import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Consultation — Nicole Creative Studio" },
      { name: "description", content: "Let's make your business work smarter. Book a consultation with Nicole via the enquiry form, WhatsApp, email or LinkedIn." },
      { property: "og:title", content: "Contact & Book a Consultation — Nicole Creative Studio" },
      { property: "og:description", content: "Let's make your business work smarter. Book a consultation with Nicole via the enquiry form, WhatsApp, email or LinkedIn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactSection headingAs="h1" first />
    </>
  );
}
