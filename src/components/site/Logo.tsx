import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Nicole Creative Studio — home">
      <span
        aria-hidden
        className="relative grid size-10 place-items-center rounded-full bg-gradient-royal shadow-soft ring-1 ring-gold/50"
      >
        <span className="font-display text-xl italic leading-none text-gold">N</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-xl tracking-tight", tone === "dark" ? "text-plum-foreground" : "text-foreground")}>
          Nicole
        </span>
        <span className={cn("eyebrow mt-1 text-[0.58rem]", tone === "dark" ? "text-gold" : "text-gold-deep")}>
          Creative Studio
        </span>
      </span>
    </Link>
  );
}
