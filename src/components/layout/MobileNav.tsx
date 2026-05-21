"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-2 text-small font-medium text-foreground hover:border-border-strong"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span
            className={cn(
              "block h-px w-4 bg-foreground transition-transform",
              open && "translate-y-1 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-4 bg-foreground transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-4 bg-foreground transition-transform",
              open && "-translate-y-1 -rotate-45",
            )}
          />
        </span>
        Menu
      </button>
      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full z-40 border-b border-border bg-surface shadow-sm"
        >
          <div className="px-5 py-4 sm:px-8">
            <MainNav onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
