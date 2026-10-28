"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { Scenario } from "@/domain/types";

const SCENARIO_PARAM = "escenario";

/** Keeps the active scenario in `?escenario=` so test sessions can be preset by URL. */
export function useScenarioParam(
  scenarios: readonly Scenario[],
  defaultScenarioId: Scenario["id"],
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const requestedId = searchParams.get(SCENARIO_PARAM) ?? defaultScenarioId;
  const scenario =
    scenarios.find(({ id }) => id === requestedId) ??
    scenarios.find(({ id }) => id === defaultScenarioId) ??
    scenarios[0];

  const setScenario = (scenarioId: Scenario["id"]) => {
    const params = new URLSearchParams(searchParams);
    params.set(SCENARIO_PARAM, scenarioId);
    router.replace(`${pathname}?${params}`, { scroll: false });
  };

  return [scenario, setScenario] as const;
}
