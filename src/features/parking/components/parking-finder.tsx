"use client";

import { Clock, SquareParking } from "lucide-react";

import { DESTINATIONS, PARKING_LOTS } from "@/data/campus";
import { DEFAULT_SCENARIO_ID, SCENARIOS } from "@/data/scenarios";
import { isSelectable } from "@/domain/availability";
import { useFacilitatorMode } from "../hooks/use-facilitator-mode";
import { useParkingFinder } from "../hooks/use-parking-finder";
import { useScenarioParam } from "../hooks/use-scenario-param";
import { AlternativesNotice } from "./alternatives-notice";
import { AppHeader } from "./app-header";
import { ChoiceBar } from "./choice-bar";
import { DestinationPicker } from "./destination-picker";
import { LotList } from "./lot-list";
import { ScenarioSelect } from "./scenario-select";
import { SectionHeading } from "./section-heading";
import { SortControl } from "./sort-control";

/** Wires campus data and finder state into the presentational components. */
export function ParkingFinder() {
  const [scenario, setScenario] = useScenarioParam(SCENARIOS, DEFAULT_SCENARIO_ID);
  const isFacilitator = useFacilitatorMode();
  const finder = useParkingFinder({
    lots: PARKING_LOTS,
    destinations: DESTINATIONS,
    scenario,
  });

  const { closestLot, destination, lotViews } = finder;
  const showAlternativesNotice = destination !== null && closestLot?.status === "full";

  return (
    <>
      <AppHeader
        actions={
          isFacilitator && (
            <ScenarioSelect scenarios={SCENARIOS} value={scenario.id} onChange={setScenario} />
          )
        }
      />

      <main className="flex flex-1 flex-col gap-5 py-4">
        <DestinationPicker
          destinations={DESTINATIONS}
          value={destination?.id ?? null}
          onChange={finder.selectDestination}
        />

        <section aria-labelledby="lots-label" className="flex flex-col gap-3 border-t pt-5">
          <SectionHeading id="lots-label" icon={SquareParking}>
            Estacionamientos
          </SectionHeading>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="size-4 shrink-0" aria-hidden />
            Cupos aproximados · actualizados hace 1 min
          </p>
          {showAlternativesNotice && (
            <AlternativesNotice
              key={`${scenario.id}:${destination.id}`}
              fullLotName={closestLot.lot.name}
              destinationName={destination.name}
              alternativesCount={lotViews.filter(({ status }) => isSelectable(status)).length}
            />
          )}
          <SortControl
            value={finder.sortCriterion}
            onChange={finder.setSortCriterion}
            canSortByWalking={finder.canSortByWalking}
          />
          <LotList
            lots={lotViews}
            selectedLotId={finder.selectedLot?.lot.id ?? null}
            confirmedLotId={finder.confirmedLot?.lot.id ?? null}
            closestLotId={closestLot?.lot.id ?? null}
            onSelect={finder.selectLot}
          />
        </section>
      </main>

      <ChoiceBar
        selectedLot={finder.selectedLot}
        confirmedLot={finder.confirmedLot}
        onConfirm={finder.confirmSelection}
        onKeep={finder.keepConfirmed}
      />
    </>
  );
}
