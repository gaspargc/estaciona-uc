import { Footprints } from "lucide-react";

import { cn } from "@/lib/utils";

interface WalkingTimeProps {
  minutes: number;
  className?: string;
}

export function WalkingTime({ minutes, className }: WalkingTimeProps) {
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <Footprints className="size-4" aria-hidden />
      {minutes} min caminando
    </span>
  );
}
