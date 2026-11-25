"use client";

import { useSearchParams } from "next/navigation";

const FACILITATOR_PARAM = "facilitador";

/**
 * The scenario selector is a test-facilitator tool (Wizard of Oz), not part of the
 * evaluated interface, so it only appears with `?facilitador` in the URL.
 */
export function useFacilitatorMode(): boolean {
  return useSearchParams().has(FACILITATOR_PARAM);
}
