import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  id: string;
  icon: LucideIcon;
  children: ReactNode;
}

export function SectionHeading({ id, icon: Icon, children }: SectionHeadingProps) {
  return (
    <h2 id={id} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
      <Icon className="size-4" aria-hidden />
      {children}
    </h2>
  );
}
