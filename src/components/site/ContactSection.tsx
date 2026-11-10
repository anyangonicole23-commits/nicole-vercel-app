import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, Linkedin, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";
import { SERVICE_OPTIONS, buildMailtoUrl, buildWhatsAppUrl, contactSchema, formatEnquiry, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const empty = { name: "", email: "", company: "", service: "", details: "" };

export function ContactSection({ headingAs = "h2", first = false }: { headingAs?: "h1" | "h2"; first?: boolean }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<FieldErrors>({});

  const update = (key: keyof typeof empty) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return null;
    }
    setErrors({});
    return result.data;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    window.location.href = buildMailtoUrl(SITE.email, data);
    toast.success("Your email app is opening with your enquiry ready to send.", {
      description: "Prefer chat? Use the WhatsApp button instead.",
    });
  };

  const onWhatsApp = () => {
    const data = validate();
    if (!data) return;
    window.open(buildWhatsAppUrl(SITE.whatsapp, `Hello Nicole!\n\n${formatEnquiry(data)}`), "_blank", "noopener");
  };

  return (
    <section className={cn("relative overflow-hidden py-24 sm:py-32", first && "pt-36 sm:pt-44")} aria-label="Contact">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-lavender" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-40 -z-10 size-[30rem] rounded-full bg-primary-glow/15 blur-3xl animate-aurora" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          as={headingAs}
          eyebrow="Contact"
          title={
            <>
              Let's Make Your Business <em className="text-gradient-royal">Work Smarter.</em>
            </>
          }
          intro="Share a little about your business and what you need. I'll reply with next steps and a time for your consultation."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="rounded-[2rem] border border-border bg-card p-6 shadow-elegant sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" id="name" error={errors.name} required>
                  <Input id="name" autoComplete="name" maxLength={100} value={values.name} onChange={(e) => update("name")(e.target.value)} aria-invalid={!!errors.name} className="h-12 rounded-xl" placeholder="Your full name" />
                </Field>
                <Field label="Email" id="email" error={errors.email} required>
                  <Input id="email" type="email" autoComplete="email" maxLength={255} value={values.email} onChange={(e) => update("email")(e.target.value)} aria-invalid={!!errors.email} className="h-12 rounded-xl" placeholder="you@company.com" />
                </Field>
                <Field label="Company" id="company" error={errors.company}>
                  <Input id="company" autoComplete="organization" maxLength={120} value={values.company} onChange={(e) => update("company")(e.target.value)} className="h-12 rounded-xl" placeholder="Optional" />
                </Field>
                <Field label="Service needed" id="service" error={errors.service} required>
                  <select
                    id="service"
                    value={values.service}
                    onChange={(e) => update("service")(e.target.value)}
                    aria-invalid={!!errors.service}
                    className="h-12 w-full rounded-xl border border-input bg-transparent px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Project details" id="details" error={errors.details} required className="sm:col-span-2">
                  <Textarea id="details" rows={6} maxLength={2000} value={values.details} onChange={(e) => update("details")(e.target.value)} aria-invalid={!!errors.details} className="rounded-xl" placeholder="What would you like help with? Goals, timelines, tools you use…" />
                </Field>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" variant="hero" size="xl">
                  Book a Consultation <ArrowRight />
                </Button>
                <Button type="button" variant="elegant" size="xl" onClick={onWhatsApp}>
                  <MessageCircle /> Send via WhatsApp
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={150} className="flex flex-col gap-4">
            <ContactCard href={buildWhatsAppUrl(SITE.whatsapp)} icon={MessageCircle} label="WhatsApp" value="Chat with me directly" external highlight />
            <ContactCard href={`mailto:${SITE.email}`} icon={Mail} label="Email" value={SITE.email} />
            <ContactCard href={SITE.linkedin} icon={Linkedin} label="LinkedIn" value="Connect professionally" external />
            <div className="mt-auto rounded-2xl bg-gradient-plum p-6 text-plum-foreground">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-gold" aria-hidden />
                <p className="eyebrow text-gold">How it works</p>
              </div>
              <ol className="mt-4 space-y-2 text-sm text-plum-muted">
                <li>1. Send your enquiry</li>
                <li>2. We book a discovery call</li>
                <li>3. You receive a tailored proposal</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, error, required, className, children }: { label: string; id: string; error?: string | undefined; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-gold-deep" aria-hidden>*</span>}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactCard({ href, icon: Icon, label, value, external, highlight }: { href: string; icon: typeof Mail; label: string; value: string; external?: boolean; highlight?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn("card-premium group flex items-center gap-5 p-5", highlight && "border-gold/60")}
    >
      <span className={cn("grid size-12 shrink-0 place-items-center rounded-2xl", highlight ? "bg-gradient-gold text-gold-foreground" : "bg-gradient-royal text-primary-foreground")}>
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="eyebrow block text-gold-deep">{label}</span>
        <span className="mt-1 block truncate text-foreground">{value}</span>
      </span>
      <ArrowRight className="ml-auto size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden />
    </a>
  );
}
