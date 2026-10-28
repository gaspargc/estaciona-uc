import { CircleCheck, CircleX, Hand, MapPin, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { LotView } from "@/domain/types";
import { WalkingTime } from "./walking-time";

interface ChoiceBarProps {
  selectedLot: LotView | null;
  confirmedLot: LotView | null;
  onConfirm: () => void;
  onReset: () => void;
}

/** Bottom bar that confirms the chosen lot and gives feedback about it (D7). */
export function ChoiceBar({ selectedLot, confirmedLot, onConfirm, onReset }: ChoiceBarProps) {
  return (
    <div
      aria-live="polite"
      className="sticky bottom-0 z-10 -mx-4 mt-auto border-t bg-card/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_-6px_rgb(0_0_0/0.15)] backdrop-blur"
    >
      <ChoiceBarContent
        selectedLot={selectedLot}
        confirmedLot={confirmedLot}
        onConfirm={onConfirm}
        onReset={onReset}
      />
    </div>
  );
}

function ChoiceBarContent({ selectedLot, confirmedLot, onConfirm, onReset }: ChoiceBarProps) {
  if (selectedLot && selectedLot.lot.id !== confirmedLot?.lot.id) {
    return <PendingChoice lot={selectedLot} onConfirm={onConfirm} />;
  }
  if (confirmedLot?.status === "full") {
    return <StaleChoice lot={confirmedLot} onReset={onReset} />;
  }
  if (confirmedLot) {
    return <ConfirmedChoice lot={confirmedLot} onReset={onReset} />;
  }
  return (
    <p className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
      <Hand className="size-4 shrink-0" aria-hidden />
      Toca un estacionamiento con cupos para elegirlo.
    </p>
  );
}

function PendingChoice({ lot, onConfirm }: { lot: LotView; onConfirm: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 flex-col">
        <span className="text-xs text-muted-foreground">Seleccionaste</span>
        <span className="truncate font-semibold">{lot.lot.name}</span>
        {lot.walkingMinutes !== null && (
          <WalkingTime minutes={lot.walkingMinutes} className="text-sm text-muted-foreground" />
        )}
      </div>
      <Button size="lg" className="h-11 px-5 text-base" onClick={onConfirm}>
        Confirmar
      </Button>
    </div>
  );
}

function ConfirmedChoice({ lot, onReset }: { lot: LotView; onReset: () => void }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
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
        <Button variant="outline" size="lg" onClick={onReset}>
          <RotateCcw data-icon="inline-start" aria-hidden />
          Cambiar
        </Button>
      </div>
      <p className="flex items-start gap-1.5 text-sm">
        <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
        {lot.lot.accessHint}
      </p>
      <p className="text-xs text-muted-foreground">
        Esta elección es solo una guía: no reserva un espacio.
      </p>
    </div>
  );
}

function StaleChoice({ lot, onReset }: { lot: LotView; onReset: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-start gap-1.5 text-sm text-status-full">
        <CircleX className="mt-0.5 size-4 shrink-0" aria-hidden />
        {lot.lot.name}, tu elección, se quedó sin cupos.
      </span>
      <Button size="lg" onClick={onReset}>
        Elegir otro
      </Button>
    </div>
  );
}
