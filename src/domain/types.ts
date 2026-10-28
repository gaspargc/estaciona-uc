export type Coordinates = readonly [lat: number, lng: number];

export interface ParkingLot {
  id: string;
  name: string;
  coordinates: Coordinates;
  capacity: number;
  accessHint: string;
}

export interface Destination {
  id: string;
  name: string;
  coordinates: Coordinates;
}

export interface Scenario {
  id: string;
  name: string;
  description: string;
  freeSpacesByLot: Record<ParkingLot["id"], number>;
}

export type AvailabilityStatus = "available" | "limited" | "full";

export type SortCriterion = "availability" | "walking";

/** A parking lot combined with the active scenario and destination. */
export interface LotView {
  lot: ParkingLot;
  freeSpaces: number;
  status: AvailabilityStatus;
  /** `null` while no destination is selected. */
  walkingMinutes: number | null;
}
