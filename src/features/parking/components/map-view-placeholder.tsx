import { Map as MapIcon } from "lucide-react";

export function MapViewPlaceholder() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-dashed bg-card/50 px-6 py-16 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <MapIcon className="size-6" aria-hidden />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">Vista mapa en construcción</h2>
        <p className="text-sm text-muted-foreground">
          Por ahora puedes comparar los estacionamientos en la vista lista.
        </p>
      </div>
    </div>
  );
}
