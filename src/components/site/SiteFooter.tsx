import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/contact";
import { Logo } from "./Logo";

export function SiteFooter() {
  const socials = [
    { href: SITE.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: SITE.instagram, label: "Instagram", icon: Instagram },
    { href: buildWhatsAppUrl(SITE.whatsapp), label: "WhatsApp", icon: MessageCircle },
    { href: `mailto:${SITE.email}`, label: "Email", icon: Mail },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-plum text-plum-foreground">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 font-display text-3xl italic text-gradient-gold sm:text-4xl">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-plum-muted">
              Executive support, AI-powered automation and creative digital solutions for ambitious
              entrepreneurs, executives and growing businesses worldwide.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-5 space-y-3">
              {[{ to: "/", label: "Home" }, ...NAV, { to: "/contact", label: "Contact" }].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-plum-muted transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-gold">Connect</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full glass-dark transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${SITE.email}`} className="mt-6 block text-sm text-plum-muted hover:text-gold">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-16 gold-hairline opacity-40" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-plum-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="eyebrow text-[0.62rem] text-gold/80">Designed with intention</p>
        </div>
      </div>
    </footer>
  );
}
