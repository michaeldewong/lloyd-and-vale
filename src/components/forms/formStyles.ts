import { cn } from "@/lib/cn";

export const fieldLabelClass =
  "block text-small font-medium text-foreground";

export const fieldInputClass = cn(
  "mt-1 w-full border border-border bg-surface px-3 py-2 text-body text-foreground",
  "placeholder:text-muted-subtle",
  "focus-visible:border-border-strong focus-visible:outline-none",
);

export const fieldErrorClass = "mt-1 text-small text-foreground";
