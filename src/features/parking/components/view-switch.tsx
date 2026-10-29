"use client";

import { List, Map as MapIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type ViewMode = "list" | "map";

interface ViewSwitchProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export function ViewSwitch({ value, onChange }: ViewSwitchProps) {
  return (
    <ToggleGroup
      aria-label="Vista"
      value={[value]}
      // Ignore deselection: one view is always active.
      onValueChange={([next]) => next && onChange(next as ViewMode)}
      spacing={0}
      variant="outline"
      size="sm"
      className="bg-card"
    >
      <ToggleGroupItem value="list" aria-label="Vista lista" className="aria-pressed:bg-secondary">
        <List aria-hidden />
        <span className="hidden sm:inline">Lista</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="map" aria-label="Vista mapa" className="aria-pressed:bg-secondary">
        <MapIcon aria-hidden />
        <span className="hidden sm:inline">Mapa</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
