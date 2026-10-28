import { getAvailabilityStatus } from "@/domain/availability";
import type { Destination, LotView, ParkingLot, Scenario } from "@/domain/types";
import { estimateWalkingMinutes } from "@/domain/walking";

export function buildLotViews(
  lots: readonly ParkingLot[],
  scenario: Scenario,
  destination: Destination | null,
): LotView[] {
  return lots.map((lot) => {
    const freeSpaces = scenario.freeSpacesByLot[lot.id] ?? 0;

    return {
      lot,
      freeSpaces,
      status: getAvailabilityStatus(freeSpaces, lot.capacity),
      walkingMinutes: destination
        ? estimateWalkingMinutes(lot.coordinates, destination.coordinates)
        : null,
    };
  });
}

/** The lot a student would try first: the one closest to their destination. */
export function findClosestLot(views: readonly LotView[]): LotView | null {
  return views.reduce<LotView | null>((closest, view) => {
    if (view.walkingMinutes === null) return closest;
    if (!closest || view.walkingMinutes < (closest.walkingMinutes ?? Infinity)) {
      return view;
    }
    return closest;
  }, null);
}
