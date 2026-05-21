import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function TextLink({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      className={cn(
        "font-medium text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
