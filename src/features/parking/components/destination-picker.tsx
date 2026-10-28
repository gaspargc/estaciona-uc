"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Destination } from "@/domain/types";
import { matchesQuery } from "../lib/text-search";
import { DestinationSearch } from "./destination-search";
import { SectionHeading } from "./section-heading";

const OPTIONS_ID = "destination-options";

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
  const [query, setQuery] = useState("");
  const optionsRef = useRef<HTMLDivElement>(null);

  const matches = destinations.filter(({ name }) => matchesQuery(name, query));

  const select = (destinationId: Destination["id"] | null) => {
    onChange(destinationId);
    setQuery("");
  };

  // On phones the chips scroll sideways; keep the selected one in view.
  useEffect(() => {
    optionsRef.current
      ?.querySelector('[aria-pressed="true"]')
      ?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [value]);

  return (
    <section aria-labelledby="destination-label" className="flex flex-col gap-2">
      <SectionHeading id="destination-label" icon={GraduationCap}>
        ¿Dónde tienes clases?
      </SectionHeading>

      <DestinationSearch
        value={query}
        onChange={setQuery}
        onSubmit={() => matches[0] && select(matches[0].id)}
        controlsId={OPTIONS_ID}
      />

      <div ref={optionsRef}>
        {matches.length === 0 ? (
          <p role="status" className="py-2 text-sm text-muted-foreground">
            No encontramos “{query.trim()}”.
          </p>
        ) : (
          // One scrollable row on phones; wraps on wider screens so no option is hidden.
          <ToggleGroup
            id={OPTIONS_ID}
            value={value ? [value] : []}
            onValueChange={([next]) => select(next ?? null)}
            spacing={2}
            className="-mx-(--gutter) w-auto max-w-none overflow-x-auto px-(--gutter) pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible"
          >
            {matches.map((destination) => (
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
        )}
      </div>
    </section>
  );
}
