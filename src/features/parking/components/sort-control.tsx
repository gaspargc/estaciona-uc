"use client";

import { Footprints, SquareParking } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { SortCriterion } from "@/domain/types";

interface SortControlProps {
  value: SortCriterion;
  onChange: (criterion: SortCriterion) => void;
  canSortByWalking: boolean;
}

export function SortControl({ value, onChange, canSortByWalking }: SortControlProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span id="sort-label" className="text-sm text-muted-foreground">
        Ordenar por
      </span>

      <ToggleGroup
        aria-labelledby="sort-label"
        value={[value]}
        // Ignore deselection: there must always be one active criterion.
        onValueChange={([next]) => next && onChange(next as SortCriterion)}
        spacing={0}
        variant="outline"
        size="sm"
        className="bg-card"
      >
        <ToggleGroupItem value="availability" className="aria-pressed:bg-secondary">
          <SquareParking aria-hidden />
          Disponibilidad
        </ToggleGroupItem>
        <ToggleGroupItem
          value="walking"
          disabled={!canSortByWalking}
          title={canSortByWalking ? undefined : "Elige dónde tienes clases para ordenar por caminata"}
          className="aria-pressed:bg-secondary"
        >
          <Footprints aria-hidden />
          Caminata
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
