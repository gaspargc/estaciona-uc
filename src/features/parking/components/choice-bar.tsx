import { CircleCheck, CircleX, Hand, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { LotView } from "@/domain/types";
import { WalkingTime } from "./walking-time";

interface ChoiceBarProps {
  selectedLot: LotView | null;
  confirmedLot: LotView | null;
  onConfirm: () => void;
  onKeep: () => void;
}

/** Bottom bar that confirms the chosen lot and gives feedback about it (D7). */
export function ChoiceBar(props: ChoiceBarProps) {
  return (
    <div
      aria-live="polite"
      className="sticky bottom-0 z-10 -mx-(--gutter) mt-auto border-t bg-card/95 px-(--gutter) pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_-6px_rgb(0_0_0/0.15)] backdrop-blur"
    >
      <ChoiceBarContent {...props} />
    </div>
  );
}

function ChoiceBarContent({ selectedLot, confirmedLot, onConfirm, onKeep }: ChoiceBarProps) {
  if (selectedLot && selectedLot.lot.id !== confirmedLot?.lot.id) {
    // Only offer to keep the current choice while it still has spaces.
    if (confirmedLot && confirmedLot.status !== "full") {
      return (
        <ChangeChoice
          lot={selectedLot}
          current={confirmedLot}
          onConfirm={onConfirm}
          onKeep={onKeep}
        />
      );
    }
    return <PendingChoice lot={selectedLot} onConfirm={onConfirm} />;
  }
  if (confirmedLot?.status === "full") {
    return <StaleChoice lot={confirmedLot} />;
  }
  if (confirmedLot) {
    return <ConfirmedChoice lot={confirmedLot} />;
  }
  return (
    <p className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
      <Hand className="size-4 shrink-0" aria-hidden />
      Toca un estacionamiento con cupos para elegirlo.
    </p>
  );
}

/** Shown before choosing, so the scope is clear up front (H1). */
function NoReservationNote() {
  return (
    <p className="text-xs text-muted-foreground">Es solo una guía: no reserva un espacio.</p>
  );
}

function PendingChoice({ lot, onConfirm }: { lot: LotView; onConfirm: () => void }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col">
          <span className="text-xs text-muted-foreground">Seleccionaste</span>
          <span className="truncate font-semibold">{lot.lot.name}</span>
          {lot.walkingMinutes !== null && (
            <WalkingTime minutes={lot.walkingMinutes} className="text-sm text-muted-foreground" />
          )}
        </div>
        <Button size="lg" className="h-11 px-5 text-base" onClick={onConfirm}>
          Elegir
        </Button>
      </div>
      <NoReservationNote />
    </div>
  );
}

/** Comparing another lot never discards the current choice (H3). */
function ChangeChoice({
  lot,
  current,
  onConfirm,
  onKeep,
}: {
  lot: LotView;
  current: LotView;
  onConfirm: () => void;
  onKeep: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex min-w-0 flex-col">
        <span className="text-xs text-muted-foreground">Cambiar a</span>
        <span className="truncate font-semibold">{lot.lot.name}</span>
        {lot.walkingMinutes !== null && (
          <WalkingTime minutes={lot.walkingMinutes} className="text-sm text-muted-foreground" />
        )}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="lg" className="h-11 min-w-0" onClick={onKeep}>
          <span className="truncate">Mantener {current.lot.name}</span>
        </Button>
        <Button size="lg" className="h-11 text-base" onClick={onConfirm}>
          Cambiar
        </Button>
      </div>
      <NoReservationNote />
    </div>
  );
}

function ConfirmedChoice({ lot }: { lot: LotView }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="flex items-center gap-1.5 text-sm font-medium text-status-available">
          <CircleCheck className="size-4" aria-hidden />
          Elegiste {lot.lot.name}
        </span>
        <span className="text-sm text-muted-foreground">
          {lot.freeSpaces} espacios libres
          {lot.walkingMinutes !== null && <> · {lot.walkingMinutes} min caminando a tu clase</>}
        </span>
      </div>
      <p className="flex items-start gap-1.5 text-sm">
        <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
        {lot.lot.accessHint}
      </p>
      <NoReservationNote />
      <p className="text-xs text-muted-foreground">Toca otro estacionamiento para comparar.</p>
    </div>
  );
}

function StaleChoice({ lot }: { lot: LotView }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="flex items-start gap-1.5 text-sm text-status-full">
        <CircleX className="mt-0.5 size-4 shrink-0" aria-hidden />
        {lot.lot.name}, tu elección, se quedó sin cupos.
      </span>
      <p className="text-xs text-muted-foreground">
        Toca otro estacionamiento con cupos para cambiar.
      </p>
    </div>
  );
}
