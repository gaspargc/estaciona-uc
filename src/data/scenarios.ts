import type { Scenario } from "@/domain/types";

export const SCENARIOS: readonly Scenario[] = [
  {
    id: "poco-concurrido",
    name: "Poco concurrido",
    description: "Todos los sectores tienen espacios, sobre todo Comercial.",
    freeSpacesByLot: { comercial: 95, ingenieria: 40, agronomia: 70 },
  },
  {
    id: "concurrido",
    name: "Concurrido",
    description: "Comercial está casi lleno e Ingeniería tiene la mayor cantidad de espacios.",
    freeSpacesByLot: { comercial: 12, ingenieria: 58, agronomia: 31 },
  },
  {
    id: "hora-punta",
    name: "Hora punta",
    description: "Comercial está lleno e Ingeniería tiene pocos espacios.",
    freeSpacesByLot: { comercial: 0, ingenieria: 9, agronomia: 37 },
  },
];

export const DEFAULT_SCENARIO_ID: Scenario["id"] = "hora-punta";
