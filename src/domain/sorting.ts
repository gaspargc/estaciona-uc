import type { AvailabilityStatus, LotView, SortCriterion } from "./types";

const STATUS_RANK: Record<AvailabilityStatus, number> = {
  available: 0,
  limited: 1,
  full: 2,
};

type LotComparator = (a: LotView, b: LotView) => number;

const byFullLast: LotComparator = (a, b) =>
  Number(a.status === "full") - Number(b.status === "full");

const byStatus: LotComparator = (a, b) =>
  STATUS_RANK[a.status] - STATUS_RANK[b.status];

const byWalking: LotComparator = (a, b) =>
  (a.walkingMinutes ?? 0) - (b.walkingMinutes ?? 0);

const byFreeSpaces: LotComparator = (a, b) => b.freeSpaces - a.freeSpaces;

const COMPARATORS: Record<SortCriterion, LotComparator[]> = {
  availability: [byStatus, byWalking, byFreeSpaces],
  walking: [byFullLast, byWalking, byStatus, byFreeSpaces],
};

/** Sorts lots by the given criterion. Full lots always go last. */
export function sortLots(
  lots: readonly LotView[],
  criterion: SortCriterion,
): LotView[] {
  const comparators = COMPARATORS[criterion];

  return [...lots].sort((a, b) => {
    for (const compare of comparators) {
      const result = compare(a, b);
      if (result !== 0) return result;
    }
    return 0;
  });
}
