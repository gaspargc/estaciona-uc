import { CircleX } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlternativesNoticeProps {
  fullLotName: string;
  destinationName: string;
  alternativesCount: number;
}

export function AlternativesNotice({
  fullLotName,
  destinationName,
  alternativesCount,
}: AlternativesNoticeProps) {
  return (
    <Alert className="border-status-full/30 bg-status-full/5">
      <CircleX className="text-status-full" aria-hidden />
      <AlertTitle>{fullLotName} está sin cupos</AlertTitle>
      <AlertDescription>
        {alternativesCount > 0
          ? `Es el más cercano a ${destinationName}, pero no quedan espacios. Revisa las alternativas con cupos y su caminata.`
          : "No quedan espacios en ningún sector del campus en este momento."}
      </AlertDescription>
    </Alert>
  );
}
