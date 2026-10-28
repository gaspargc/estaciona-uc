"use client";

import type { KeyboardEvent } from "react";
import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";

interface DestinationSearchProps {
  value: string;
  onChange: (query: string) => void;
  /** Called on Enter, to pick the first matching destination. */
  onSubmit: () => void;
  controlsId: string;
}

export function DestinationSearch({
  value,
  onChange,
  onSubmit,
  controlsId,
}: DestinationSearchProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
      // Closes the on-screen keyboard so the parking list is visible.
      event.currentTarget.blur();
    } else if (event.key === "Escape") {
      onChange("");
    }
  };

  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <Input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar facultad o sector"
        aria-label="Buscar dónde tienes clases"
        aria-controls={controlsId}
        enterKeyHint="go"
        className="h-10 rounded-full bg-card pr-10 pl-9 [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Borrar búsqueda"
          className="absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <X className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
