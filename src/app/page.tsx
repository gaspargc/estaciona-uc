import { Suspense } from "react";

import { ParkingFinder } from "@/features/parking/components/parking-finder";
import { ParkingFinderSkeleton } from "@/features/parking/components/parking-finder-skeleton";

export default function Home() {
  return (
    // Full width on phones and tablets, a centered panel on desktop.
    // `--gutter` is the side padding; full-bleed children offset it with `-mx-(--gutter)`.
    <div className="mx-auto flex min-h-dvh w-full flex-col px-(--gutter) [--gutter:--spacing(4)] sm:[--gutter:--spacing(6)] xl:max-w-lg">
      {/* The finder reads `?escenario=`, so it renders behind a Suspense boundary. */}
      <Suspense fallback={<ParkingFinderSkeleton />}>
        <ParkingFinder />
      </Suspense>
    </div>
  );
}
