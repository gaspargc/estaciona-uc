import { Suspense } from "react";

import { ParkingFinder } from "@/features/parking/components/parking-finder";
import { ParkingFinderSkeleton } from "@/features/parking/components/parking-finder-skeleton";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4">
      {/* The finder reads `?escenario=`, so it renders behind a Suspense boundary. */}
      <Suspense fallback={<ParkingFinderSkeleton />}>
        <ParkingFinder />
      </Suspense>
    </div>
  );
}
