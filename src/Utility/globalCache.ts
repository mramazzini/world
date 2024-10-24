import { getFromDb, putInDb } from './indexedDB';
import { getItem } from '@/lib/actions/db/item/read.actions';
import { getArmor } from '@/lib/actions/db/armor/read.actions';
import { getTool } from '@/lib/actions/db/tool/read.actions';
import { getWeapon } from '@/lib/actions/db/weapons/read.actions';
import { getSubclass } from '@/lib/actions/db/subclass/read.actions';
import { getSpell } from '@/lib/actions/db/spell/read.actions';
import { getFeat } from '@/lib/actions/db/feat/read.actions';

const pendingQueries = new Map<string, unknown>();

export function cacheFunction<
  T extends (query: number | string) => ReturnType<T>,
>(
  keyGenerator: (query: number | string) => string,
  fetchFunction: T
): (query: number | string) => ReturnType<T> {
  // @ts-expect-error pendingQueries is not used in the returned function
  return async function (query: number | string) {
    const key = keyGenerator(query);

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
        const result = await fetchFunction(query);
        await putInDb(key, result);
        return result;
      } catch (error) {
        console.error('Error retrieving or storing in IndexedDB:', error);
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

export const memoizeGetItem = cacheFunction(
  (itemId: string | number) => `item-${itemId}`,
  getItem
);

export const memoizeGetSpell = cacheFunction(
  (spellId: string | number) => `spell-${spellId}`,
  getSpell
);

export const memoizeGetWeapon = cacheFunction(
  (weaponId: string | number) => `weapon-${weaponId}`,
  getWeapon
);

export const memoizeGetArmor = cacheFunction(
  (armorId: string | number) => `armor-${armorId}`,
  getArmor
);

export const memoizeGetTool = cacheFunction(
  (toolId: string | number) => `tool-${toolId}`,
  getTool
);

export const memoizeGetSubclass = cacheFunction(
  (subclassId: string | number) => `subclass-${subclassId}`,
  getSubclass
);

export const memoizeGetFeat = cacheFunction(
  (featId: string | number) => `feat-${featId}`,
  getFeat
);
