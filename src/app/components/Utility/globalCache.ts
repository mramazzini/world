import { getSpell } from "@/lib/actions/db/spell/read.actions";
import { getFromDb, putInDb } from "./indexedDB";
import { getItem } from "@/lib/actions/db/item/read.actions";

const pendingQueries = new Map<string, Promise<any>>();

export function cacheFunction<T extends (...args: any[]) => Promise<any>>(
  keyGenerator: (...args: Parameters<T>) => string,
  fetchFunction: (...args: Parameters<T>) => Promise<any>
): (...args: Parameters<T>) => Promise<any> {
  return async function (...args: Parameters<T>) {
    const key = keyGenerator(...args);

    // Check if there is an ongoing promise for this key
    if (pendingQueries.has(key)) {
      return pendingQueries.get(key)!;
    }

    // Create a new pending promise and store it
    const pendingPromise = (async () => {
      try {
        const cachedResult = await getFromDb(key);
        if (cachedResult) {
          // console.log("Cache hit", key);
          return cachedResult;
        }

        // console.log("Cache miss", key);
        // console.log("Fetching from server", key);
        const result = await fetchFunction(...args);
        await putInDb(key, result);
        return result;
      } catch (error) {
        console.error("Error retrieving or storing in IndexedDB:", error);
        throw error; // Re-throw error for caller to handle
      } finally {
        // Remove from pending queries regardless of success or failure
        pendingQueries.delete(key);
      }
    })();

    // Store the pending promise
    pendingQueries.set(key, pendingPromise);

    // Await the result of the pending promise
    return pendingPromise;
  };
}

export const memoizeGetSpell = cacheFunction(
  (spellId: string) => `spell-${spellId}`,
  getSpell
);

export const memoizeGetItem = cacheFunction(
  (itemId: string) => `item-${itemId}`,
  getItem
);
