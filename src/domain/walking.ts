import type { Coordinates } from "./types";

const EARTH_RADIUS_METERS = 6_371_000;
/** Paths on campus are longer than a straight line between two points. */
const ROUTE_DETOUR_FACTOR = 1.3;
const WALKING_SPEED_METERS_PER_MINUTE = 80;

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/** Great-circle distance using the haversine formula. */
export function distanceInMeters(from: Coordinates, to: Coordinates): number {
  const [fromLat, fromLng] = from;
  const [toLat, toLng] = to;
  const deltaLat = toRadians(toLat - fromLat);
  const deltaLng = toRadians(toLng - fromLng);

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(toRadians(fromLat)) *
      Math.cos(toRadians(toLat)) *
      Math.sin(deltaLng / 2) ** 2;

  return 2 * EARTH_RADIUS_METERS * Math.asin(Math.sqrt(a));
}

export function estimateWalkingMinutes(
  from: Coordinates,
  to: Coordinates,
): number {
  const routeMeters = distanceInMeters(from, to) * ROUTE_DETOUR_FACTOR;
  return Math.max(1, Math.ceil(routeMeters / WALKING_SPEED_METERS_PER_MINUTE));
}
