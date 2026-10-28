"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

/** Notifies hooks in the same tab, since `storage` only fires in other tabs. */
const LOCAL_CHANGE_EVENT = "local-storage-change";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(LOCAL_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(LOCAL_CHANGE_EVENT, onChange);
  };
}

function readItem(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function parse<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/**
 * Persists a JSON value in localStorage. The server render and the first
 * client render use `fallback`, so hydration never mismatches.
 * `fallback` must be referentially stable (a primitive or a module constant).
 */
export function useLocalStorage<T>(
  key: string,
  fallback: T,
): [T, (value: T) => void] {
  const raw = useSyncExternalStore(
    subscribe,
    () => readItem(key),
    () => null,
  );

  const value = useMemo(() => parse(raw, fallback), [raw, fallback]);

  const setValue = useCallback(
    (next: T) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // Storage can be unavailable (blocked, quota exceeded); the value is not saved.
      }
      window.dispatchEvent(new Event(LOCAL_CHANGE_EVENT));
    },
    [key],
  );

  return [value, setValue];
}
