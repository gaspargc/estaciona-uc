import { Check, MapPin } from "lucide-react";

import { isSelectable } from "@/domain/availability";
import type { LotView } from "@/domain/types";
import { cn } from "@/lib/utils";
import { AVAILABILITY_DISPLAY } from "../lib/availability-display";
import { AvailabilityBadge } from "./availability-badge";
import { WalkingTime } from "./walking-time";

interface LotCardProps {
  view: LotView;
  isSelected: boolean;
  isConfirmed: boolean;
  isClosest: boolean;
  onSelect: (lotId: string) => void;
}

export function LotCard({
  view,
  isSelected,
  isConfirmed,
  isClosest,
  onSelect,
}: LotCardProps) {
  const { lot, freeSpaces, status, walkingMinutes } = view;
  const selectable = isSelectable(status);

  return (
    <button
      type="button"
      onClick={() => onSelect(lot.id)}
      disabled={!selectable}
      aria-pressed={isSelected}
      className={cn(
        "flex w-full overflow-hidden rounded-xl bg-card text-left text-card-foreground shadow-sm ring-1 ring-foreground/10 transition-all outline-none",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        selectable && "hover:ring-foreground/25 active:scale-[0.99]",
        isSelected && "ring-2 ring-primary hover:ring-primary",
        !selectable && "cursor-not-allowed bg-muted/60 shadow-none",
      )}
    >
      <span
        aria-hidden
        className={cn("w-1.5 shrink-0", AVAILABILITY_DISPLAY[status].accentClassName)}
      />

      <span className="flex flex-1 flex-col gap-2 p-4">
        <span className="flex items-start justify-between gap-3">
          <span className="flex flex-col gap-1">
            <span className="text-base font-semibold leading-tight">{lot.name}</span>
            <LotTags isClosest={isClosest} isConfirmed={isConfirmed} />
          </span>
          <AvailabilityBadge status={status} />
        </span>

        <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>
            <span className="font-semibold text-foreground">{freeSpaces}</span> de{" "}
            {lot.capacity} libres
          </span>
          {walkingMinutes !== null && <WalkingTime minutes={walkingMinutes} />}
        </span>

        {!selectable && (
          <span className="text-sm text-status-full">
            No se puede elegir: no quedan espacios en este sector.
          </span>
        )}
      </span>
    </button>
  );
}

function LotTags({ isClosest, isConfirmed }: { isClosest: boolean; isConfirmed: boolean }) {
  if (!isClosest && !isConfirmed) return null;

  return (
    <span className="flex flex-wrap gap-1.5 text-xs font-medium">
      {isConfirmed && (
        <span className="inline-flex items-center gap-1 text-primary">
          <Check className="size-3.5" aria-hidden />
          Tu elección
        </span>
      )}
      {isClosest && (
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <MapPin className="size-3.5" aria-hidden />
          Más cercano a tu clase
        </span>
      )}
    </span>
  );
}
