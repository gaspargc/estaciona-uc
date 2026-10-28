import type { Scenario } from "@/domain/types";

export const SCENARIOS: readonly Scenario[] = [
  {
    id: "poco-concurrido",
    name: "Poco concurrido",
    description: "Todos los sectores tienen espacios.",
    freeSpacesByLot: { comercial: 64, ingenieria: 71, agronomia: 88 },
  },
  {
    id: "concurrido",
    name: "Concurrido",
    description: "Comercial está casi lleno.",
    freeSpacesByLot: { comercial: 12, ingenieria: 35, agronomia: 52 },
  },
  {
    id: "hora-punta",
    name: "Hora punta",
    description: "Comercial está lleno e Ingeniería tiene pocos espacios.",
    freeSpacesByLot: { comercial: 0, ingenieria: 9, agronomia: 37 },
  },
];

export const DEFAULT_SCENARIO_ID: Scenario["id"] = "hora-punta";
