import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, intro, align = "center", tone = "light", className, as = "h2" }: Props) {
  const Heading = as;
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "eyebrow inline-flex items-center gap-3",
          tone === "dark" ? "text-gold" : "text-gold-deep",
        )}
      >
        <span aria-hidden className="h-px w-8 bg-gradient-gold" />
        {eyebrow}
        {align === "center" && <span aria-hidden className="h-px w-8 bg-gradient-gold" />}
      </p>
      <Heading
        className={cn(
          "mt-5 text-4xl sm:text-5xl lg:text-6xl text-balance",
          tone === "dark" ? "text-plum-foreground" : "text-foreground",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            "mt-6 text-base sm:text-lg leading-relaxed text-pretty",
            tone === "dark" ? "text-plum-muted" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
