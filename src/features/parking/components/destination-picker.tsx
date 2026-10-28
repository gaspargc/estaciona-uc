"use client";

import { GraduationCap } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Destination } from "@/domain/types";

interface DestinationPickerProps {
  destinations: readonly Destination[];
  value: Destination["id"] | null;
  onChange: (destinationId: Destination["id"] | null) => void;
}

export function DestinationPicker({
  destinations,
  value,
  onChange,
}: DestinationPickerProps) {
  return (
    <section aria-labelledby="destination-label" className="flex flex-col gap-2">
      <h2
        id="destination-label"
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground"
      >
        <GraduationCap className="size-4" aria-hidden />
        ¿Dónde tienes clases?
      </h2>

      <ToggleGroup
        value={value ? [value] : []}
        onValueChange={([next]) => onChange(next ?? null)}
        spacing={2}
        className="-mx-4 w-auto max-w-none overflow-x-auto px-4 pb-1 [scrollbar-width:none]"
      >
        {destinations.map((destination) => (
          <ToggleGroupItem
            key={destination.id}
            value={destination.id}
            variant="outline"
            className="h-9 rounded-full bg-card px-4 aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
          >
            {destination.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </section>
  );
}
