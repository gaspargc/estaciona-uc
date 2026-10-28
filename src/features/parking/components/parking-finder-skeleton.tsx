/** Shown while the finder reads the URL scenario on the client. */
export function ParkingFinderSkeleton() {
  return (
    <div aria-busy="true" aria-label="Cargando estacionamientos" className="flex flex-col gap-5 py-4">
      <div className="h-14 animate-pulse rounded-lg bg-muted" />
      <div className="h-9 w-2/3 animate-pulse rounded-full bg-muted" />
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="h-28 animate-pulse rounded-xl bg-muted" />
      ))}
    </div>
  );
}
