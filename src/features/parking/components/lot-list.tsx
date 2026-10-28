import type { LotView } from "@/domain/types";
import { LotCard } from "./lot-card";

interface LotListProps {
  lots: readonly LotView[];
  selectedLotId: string | null;
  confirmedLotId: string | null;
  closestLotId: string | null;
  onSelect: (lotId: string) => void;
}

export function LotList({
  lots,
  selectedLotId,
  confirmedLotId,
  closestLotId,
  onSelect,
}: LotListProps) {
  return (
    <ul aria-label="Estacionamientos" className="flex flex-col gap-3">
      {lots.map((view) => (
        <li key={view.lot.id}>
          <LotCard
            view={view}
            isSelected={view.lot.id === selectedLotId}
            isConfirmed={view.lot.id === confirmedLotId}
            isClosest={view.lot.id === closestLotId}
            onSelect={onSelect}
          />
        </li>
      ))}
    </ul>
  );
}
