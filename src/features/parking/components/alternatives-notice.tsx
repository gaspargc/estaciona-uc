"use client";

import { useState } from "react";
import { TriangleAlert, X } from "lucide-react";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface AlternativesNoticeProps {
  fullLotName: string;
  destinationName: string;
  alternativesCount: number;
}

/**
 * Dismissal is local state: render it with a `key` that changes with its context
 * (e.g. scenario and destination) so the notice shows again when that context changes.
 */
export function AlternativesNotice({
  fullLotName,
  destinationName,
  alternativesCount,
}: AlternativesNoticeProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <Alert className="border-status-full/30 bg-status-full/5 has-data-[slot=alert-action]:pr-10">
      <TriangleAlert className="text-status-full" aria-hidden />
      <AlertTitle>{fullLotName} está sin cupos</AlertTitle>
      <AlertDescription>
        {alternativesCount > 0
          ? `Es el más cercano a ${destinationName}, pero no quedan espacios. Revisa las alternativas con cupos y su caminata.`
          : "No quedan espacios en ningún sector del campus en este momento."}
      </AlertDescription>
      <AlertAction className="top-1.5 right-1.5">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setDismissed(true)}
          aria-label="Cerrar aviso"
        >
          <X aria-hidden />
        </Button>
      </AlertAction>
    </Alert>
  );
}
