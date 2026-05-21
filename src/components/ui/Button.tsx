import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variantStyles = {
  primary:
    "border border-accent bg-accent text-surface hover:bg-accent-muted hover:border-accent-muted",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:border-accent hover:text-accent",
  ghost:
    "border border-transparent bg-transparent text-foreground hover:bg-surface-muted",
} as const;

const sizeStyles = {
  sm: "px-3 py-1.5 text-small",
  md: "px-4 py-2 text-small",
  lg: "px-5 py-2.5 text-body",
} as const;

type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

const baseClassName =
  "inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: SharedProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type="button"
      className={cn(
        baseClassName,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: SharedProps & ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        baseClassName,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
