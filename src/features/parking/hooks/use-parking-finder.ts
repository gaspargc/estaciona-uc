"use client";

import { useMemo, useState } from "react";

import { isSelectable } from "@/domain/availability";
import { sortLots } from "@/domain/sorting";
import type {
  Destination,
  LotView,
  ParkingLot,
  Scenario,
  SortCriterion,
} from "@/domain/types";
import { buildLotViews, findClosestLot } from "../lib/build-lot-views";
import { useLocalStorage } from "./use-local-storage";

const DESTINATION_KEY = "estaciona-uc:destination";
const CONFIRMED_LOT_KEY = "estaciona-uc:confirmed-lot";

interface UseParkingFinderOptions {
  lots: readonly ParkingLot[];
  destinations: readonly Destination[];
  scenario: Scenario;
}

export function useParkingFinder({
  lots,
  destinations,
  scenario,
}: UseParkingFinderOptions) {
  const [destinationId, setDestinationId] = useLocalStorage<string | null>(
    DESTINATION_KEY,
    null,
  );
  const [confirmedLotId, setConfirmedLotId] = useLocalStorage<string | null>(
    CONFIRMED_LOT_KEY,
    null,
  );
  const [pendingLotId, setPendingLotId] = useState<string | null>(null);
  const [sortCriterion, setSortCriterion] =
    useState<SortCriterion>("availability");

  const destination =
    destinations.find(({ id }) => id === destinationId) ?? null;

  // Walking time is unknown without a destination, so only availability applies.
  const effectiveSortCriterion: SortCriterion = destination
    ? sortCriterion
    : "availability";

  const lotViews = useMemo(
    () => buildLotViews(lots, scenario, destination),
    [lots, scenario, destination],
  );

  const sortedLotViews = useMemo(
    () => sortLots(lotViews, effectiveSortCriterion),
    [lotViews, effectiveSortCriterion],
  );

  const findView = (id: string | null): LotView | null =>
    lotViews.find(({ lot }) => lot.id === id) ?? null;

  const confirmedLot = findView(confirmedLotId);
  const pendingLot = findView(pendingLotId);
  // A pending lot that became full (e.g. after a scenario change) is dropped.
  const selectedLot =
    pendingLot && isSelectable(pendingLot.status) ? pendingLot : confirmedLot;

  const selectLot = (lotId: string) => {
    const view = findView(lotId);
    if (view && isSelectable(view.status)) setPendingLotId(lotId);
  };

  const confirmSelection = () => {
    if (!selectedLot || !isSelectable(selectedLot.status)) return;
    setConfirmedLotId(selectedLot.lot.id);
    setPendingLotId(null);
  };

  const resetChoice = () => {
    setConfirmedLotId(null);
    setPendingLotId(null);
  };

  return {
    destination,
    selectDestination: setDestinationId,
    sortCriterion: effectiveSortCriterion,
    canSortByWalking: destination !== null,
    setSortCriterion,
    lotViews: sortedLotViews,
    closestLot: findClosestLot(lotViews),
    selectedLot,
    confirmedLot,
    selectLot,
    confirmSelection,
    resetChoice,
  };
}
