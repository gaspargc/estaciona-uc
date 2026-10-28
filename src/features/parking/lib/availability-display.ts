import { CircleAlert, CircleCheck, CircleX, type LucideIcon } from "lucide-react";

import type { AvailabilityStatus } from "@/domain/types";

interface AvailabilityDisplay {
  label: string;
  icon: LucideIcon;
  /** Text and soft background used by badges. */
  badgeClassName: string;
  /** Accent used to mark the card edge. */
  accentClassName: string;
}

/** Status is always shown with color, icon and a word, never color alone. */
export const AVAILABILITY_DISPLAY: Record<AvailabilityStatus, AvailabilityDisplay> = {
  available: {
    label: "Con cupos",
    icon: CircleCheck,
    badgeClassName: "bg-status-available/12 text-status-available",
    accentClassName: "bg-status-available",
  },
  limited: {
    label: "Pocos cupos",
    icon: CircleAlert,
    badgeClassName: "bg-status-limited/15 text-status-limited",
    accentClassName: "bg-status-limited",
  },
  full: {
    label: "Sin cupos",
    icon: CircleX,
    badgeClassName: "bg-status-full/12 text-status-full",
    accentClassName: "bg-status-full",
  },
};
