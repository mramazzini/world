import { getWorkshopItems } from '@/lib/actions/db/workshop/read.actions';

const WORKSHOP_DB_NAME = 'workshopCache';
const WORKSHOP_DB_VERSION = 2;
const WORKSHOP_STORE_NAME = 'workshopStore';

let workshopDb: IDBDatabase | null = null;

function openWorkshopDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(WORKSHOP_DB_NAME, WORKSHOP_DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(WORKSHOP_STORE_NAME)) {
        db.createObjectStore(WORKSHOP_STORE_NAME);
      }
    };

    request.onsuccess = () => {
      workshopDb = request.result;
      resolve(workshopDb);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}
export async function getWorkshopData(
  key: string
): Promise<PrismaJson.WorkshopItemData> {
  if (!workshopDb) await openWorkshopDb();
  return new Promise((resolve, reject) => {
    const transaction = workshopDb!.transaction(
      WORKSHOP_STORE_NAME,
      'readonly'
    );
    const store = transaction.objectStore(WORKSHOP_STORE_NAME);
    const request = store.get(key);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// const res = getWorkshopItems();

async function getAllWorkshopData(): Promise<PrismaJson.WorkshopItemData[]> {
  if (!workshopDb) await openWorkshopDb();
  return new Promise((resolve, reject) => {
    const transaction = workshopDb!.transaction(
      WORKSHOP_STORE_NAME,
      'readonly'
    );
    const store = transaction.objectStore(WORKSHOP_STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);

    request.onerror = () => reject(request.error);
  });
}

export async function getLatestWorkshopItems(): Promise<
  PrismaJson.WorkshopItemData[]
> {
  try {
    // Get data from IndexedDB and cloud database
    const localItems = await getAllWorkshopData();
    const cloudItems = await getWorkshopItems();

    // Create a map to store the latest version by ID
    const latestItemsById: Record<string, PrismaJson.WorkshopItemData> = {};

    // Helper function to update the map with the latest item
    const updateLatestItem = (item: PrismaJson.WorkshopItemData) => {
      const existingItem = latestItemsById[item.id];
      if (
        !existingItem ||
        new Date(item.lastEditISOString) >
          new Date(existingItem.lastEditISOString)
      ) {
        latestItemsById[item.id] = item;
      }
    };

    // Populate the map with the latest versions from both sources
    localItems.forEach(updateLatestItem);
    cloudItems.forEach(updateLatestItem);

    // Return an array of the latest items
    return Object.values(latestItemsById);
  } catch (error) {
    console.error('Failed to fetch latest workshop items:', error);
    return [];
  }
}
export async function putWorkshopData(
  key: string,
  value: PrismaJson.WorkshopItemData
): Promise<void> {
  if (!workshopDb) await openWorkshopDb();
  return new Promise((resolve, reject) => {
    const transaction = workshopDb!.transaction(
      WORKSHOP_STORE_NAME,
      'readwrite'
    );
    const store = transaction.objectStore(WORKSHOP_STORE_NAME);
    const request = store.put(value, key);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function deleteWorkshopData(key: string): Promise<void> {
  if (!workshopDb) await openWorkshopDb();
  return new Promise((resolve, reject) => {
    const transaction = workshopDb!.transaction(
      WORKSHOP_STORE_NAME,
      'readwrite'
    );
    const store = transaction.objectStore(WORKSHOP_STORE_NAME);
    const request = store.delete(key);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function clearWorkshopData(): Promise<void> {
  if (!workshopDb) await openWorkshopDb();
  return new Promise((resolve, reject) => {
    const transaction = workshopDb!.transaction(
      WORKSHOP_STORE_NAME,
      'readwrite'
    );
    const store = transaction.objectStore(WORKSHOP_STORE_NAME);
    const request = store.clear();

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
