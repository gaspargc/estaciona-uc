"use client";

import { GraduationCap } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Destination } from "@/domain/types";
import { SectionHeading } from "./section-heading";

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
      <SectionHeading id="destination-label" icon={GraduationCap}>
        ¿Dónde tienes clases?
      </SectionHeading>

      {/* One scrollable row on phones; wraps on wider screens so no option is hidden. */}
      <ToggleGroup
        value={value ? [value] : []}
        onValueChange={([next]) => onChange(next ?? null)}
        spacing={2}
        className="-mx-(--gutter) w-auto max-w-none overflow-x-auto px-(--gutter) pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible"
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
