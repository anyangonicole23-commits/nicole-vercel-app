import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4 sm:py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 sm:px-5",
            scrolled ? "glass shadow-soft" : "bg-transparent",
          )}
        >
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-4 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary bg-secondary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="lg" className="hidden sm:inline-flex">
              <Link to="/contact">
                Book a Consultation <ArrowUpRight />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="elegant" size="icon" className="size-11 lg:hidden" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm border-l-gold/30 bg-gradient-lavender p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex h-full flex-col px-7 pb-10 pt-8">
                  <Logo />
                  <nav aria-label="Mobile" className="mt-12 flex flex-col">
                    {[{ to: "/", label: "Home" }, ...NAV, { to: "/contact", label: "Contact" }].map((item, i) => (
                      <SheetClose asChild key={item.to}>
                        <Link
                          to={item.to}
                          className="group flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl text-foreground transition-colors hover:text-primary"
                          activeProps={{ className: "text-primary" }}
                          activeOptions={{ exact: item.to === "/" }}
                        >
                          <span className="eyebrow text-gold-deep">0{i + 1}</span>
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pt-10">
                    <SheetClose asChild>
                      <Button asChild variant="hero" size="xl" className="w-full">
                        <Link to="/contact">Book a Consultation</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
