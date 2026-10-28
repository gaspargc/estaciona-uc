import type { ReactNode } from "react";
import { Car } from "lucide-react";

interface AppHeaderProps {
  /** Controls shown on the right side, such as the view switch. */
  actions?: ReactNode;
}

export function AppHeader({ actions }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-10 -mx-(--gutter) flex items-center justify-between gap-3 border-b bg-background/95 px-(--gutter) py-3 backdrop-blur">
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Car className="size-4.5" aria-hidden />
        </span>
        <div className="flex min-w-0 flex-col leading-tight whitespace-nowrap">
          <h1 className="truncate font-semibold">Estaciona UC</h1>
          <span className="truncate text-xs text-muted-foreground">Campus San Joaquín</span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">{actions}</div>
    </header>
  );
}
