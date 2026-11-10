import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Executive Virtual Assistance",
  "AI-Powered Executive Support",
  "Workflow Automation",
  "Graphic Design",
  "Social Media Management",
  "Website Design",
  "Not sure yet — let's talk",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  company: z.string().trim().max(120, "Company must be under 120 characters").optional().or(z.literal("")),
  service: z.enum(SERVICE_OPTIONS, { errorMap: () => ({ message: "Please choose a service" }) }),
  details: z
    .string()
    .trim()
    .min(10, "Tell me a little more (at least 10 characters)")
    .max(2000, "Please keep project details under 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function formatEnquiry(data: ContactInput): string {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    `Service: ${data.service}`,
    "",
    "Project details:",
    data.details,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function buildMailtoUrl(to: string, data: ContactInput): string {
  const subject = `Consultation request — ${data.service}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formatEnquiry(data))}`;
}

export function buildWhatsAppUrl(phone: string, message?: string): string {
  const digits = phone.replace(/\D/g, "");
  const text = message ?? "Hello Nicole, I'd love to book a consultation with Nicole Creative Studio.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
