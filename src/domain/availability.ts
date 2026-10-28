import type { AvailabilityStatus } from "./types";

/** Below this share of free spaces a lot is considered to have few spaces left. */
export const LIMITED_AVAILABILITY_RATIO = 0.15;

export function getAvailabilityStatus(
  freeSpaces: number,
  capacity: number,
): AvailabilityStatus {
  if (freeSpaces <= 0) return "full";
  if (freeSpaces / capacity < LIMITED_AVAILABILITY_RATIO) return "limited";
  return "available";
}

export function isSelectable(status: AvailabilityStatus): boolean {
  return status !== "full";
}
