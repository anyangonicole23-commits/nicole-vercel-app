// Central brand + contact configuration. Update contact details here only.
export const SITE = {
  name: "Nicole Creative Studio",
  founder: "Nicole",
  tagline: "Creative Solutions. Smarter Operations.",
  email: "anyangonicole23@gmail.com",
  // International format, digits only (no +, spaces or dashes).
  whatsapp: "254702022443",
  linkedin: "https://www.linkedin.com/in/nicole-anyango-a427a6358",
  instagram: "https://www.instagram.com/nicolecreativestudio",
} as const;

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/automation", label: "AI & Automation" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/why", label: "Why Me" },
] as const;
