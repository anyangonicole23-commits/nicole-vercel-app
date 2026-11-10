import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/contact";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-royal px-6 py-16 text-center text-primary-foreground shadow-elegant sm:px-16 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-primary-glow/40 blur-3xl animate-aurora" />
          <div className="absolute -bottom-24 -right-10 size-80 rounded-full bg-gold/30 blur-3xl animate-aurora [animation-delay:-8s]" />
          <div className="absolute inset-6 rounded-[2rem] border border-gold/25" />
        </div>
        <div className="relative">
          <p className="eyebrow text-gold">Let's work together</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl sm:text-6xl">
            Let's Make Your Business <em className="text-gradient-gold">Work Smarter.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
            Tell me where you're stretched thin. I'll show you how to get organized, automate the busywork and look exceptional online.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">
                Book a Consultation <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={buildWhatsAppUrl(SITE.whatsapp)} target="_blank" rel="noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
