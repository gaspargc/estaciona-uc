import { Badge } from "@/components/ui/badge";
import type { AvailabilityStatus } from "@/domain/types";
import { cn } from "@/lib/utils";
import { AVAILABILITY_DISPLAY } from "../lib/availability-display";

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  className?: string;
}

export function AvailabilityBadge({ status, className }: AvailabilityBadgeProps) {
  const { label, icon: Icon, badgeClassName } = AVAILABILITY_DISPLAY[status];

  return (
    <Badge className={cn("h-6 px-2.5 text-xs", badgeClassName, className)}>
      <Icon aria-hidden />
      {label}
    </Badge>
  );
}
