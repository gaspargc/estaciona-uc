import type { Coordinates, Destination, ParkingLot } from "@/domain/types";
import campus from "./campus.json";

/** JSON arrays are typed as `number[]`; narrow them to a `[lat, lng]` pair. */
function withCoordinates<T extends { coordinates: number[] }>(
  item: T,
): Omit<T, "coordinates"> & { coordinates: Coordinates } {
  const [lat, lng] = item.coordinates;
  return { ...item, coordinates: [lat, lng] };
}

export const PARKING_LOTS: readonly ParkingLot[] =
  campus.parkingLots.map(withCoordinates);

export const DESTINATIONS: readonly Destination[] =
  campus.destinations.map(withCoordinates);
