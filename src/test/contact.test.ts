import { describe, expect, it } from "vitest";
import { buildMailtoUrl, buildWhatsAppUrl, contactSchema } from "@/lib/contact";

const valid = {
  name: "Ada",
  email: "ada@example.com",
  company: "",
  service: "Workflow Automation",
  details: "I need help automating lead follow-ups.",
};

describe("contact form rules", () => {
  it("accepts a complete enquiry with company left blank", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it("requires a service to be chosen", () => {
    expect(contactSchema.safeParse({ ...valid, service: "" }).success).toBe(false);
  });
  it("builds a WhatsApp link with digits only", () => {
    expect(buildWhatsAppUrl("+254 700-000-000", "Hi")).toBe("https://wa.me/254700000000?text=Hi");
  });
  it("puts the chosen service in the email subject", () => {
    const parsed = contactSchema.parse(valid);
    expect(buildMailtoUrl("a@b.com", parsed)).toContain(encodeURIComponent("Consultation request — Workflow Automation"));
  });
});
