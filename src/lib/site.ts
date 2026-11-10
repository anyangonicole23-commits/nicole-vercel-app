// Central brand + contact configuration. Update contact details here only.
export const SITE = {
  name: "Nicole Creative Studio",
  founder: "Nicole",
  tagline: "Creative Solutions. Smarter Operations.",
  email: "hello@nicolecreativestudio.com",
  // International format, digits only (no +, spaces or dashes).
  whatsapp: "254700000000",
  linkedin: "https://www.linkedin.com/in/nicole-creative-studio",
  instagram: "https://www.instagram.com/nicolecreativestudio",
} as const;

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/automation", label: "AI & Automation" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/why", label: "Why Me" },
] as const;
