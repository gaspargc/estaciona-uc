"use client";

import { FlaskConical } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Scenario } from "@/domain/types";

interface ScenarioSelectProps {
  scenarios: readonly Scenario[];
  value: Scenario["id"];
  onChange: (scenarioId: Scenario["id"]) => void;
}

/** Switches between simulated availability scenarios for usability tests. */
export function ScenarioSelect({ scenarios, value, onChange }: ScenarioSelectProps) {
  const items = scenarios.map(({ id, name }) => ({ value: id, label: name }));

  return (
    <Select
      items={items}
      value={value}
      onValueChange={(next) => next && onChange(next)}
    >
      <SelectTrigger size="sm" aria-label="Escenario simulado" className="bg-card">
        <FlaskConical aria-hidden />
        {/* Icon-only on small screens; the scenario is a facilitator tool. */}
        <SelectValue className="max-sm:hidden!" />
      </SelectTrigger>
      {/* Wider than the trigger, which is icon-only on small screens. */}
      <SelectContent
        alignItemWithTrigger={false}
        className="w-72 max-w-[calc(100vw-2rem)]"
      >
        {scenarios.map((scenario) => (
          <SelectItem key={scenario.id} value={scenario.id} className="py-1.5">
            <span className="flex flex-col gap-0.5 whitespace-normal">
              <span>{scenario.name}</span>
              <span className="text-xs text-muted-foreground">{scenario.description}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
