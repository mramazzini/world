'use client';
import { getCharacterState } from '@/lib/actions/db/characterState/read.actions';
import { CharacterState } from '@prisma/client';

const SHEET_DB_NAME = 'sheetCache';
const SHEET_DB_VERSION = 1;
const SHEET_STORE_NAME = 'sheetStore';

let sheetDb: IDBDatabase | null = null;

function openSheetDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(SHEET_DB_NAME, SHEET_DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(SHEET_STORE_NAME)) {
        db.createObjectStore(SHEET_STORE_NAME);
      }
    };

    request.onsuccess = () => {
      sheetDb = request.result;
      resolve(sheetDb);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}
export async function getLocalCharacterData(
  key: string
): Promise<CharacterState | null> {
  if (!sheetDb) await openSheetDb();
  return new Promise((resolve, reject) => {
    const transaction = sheetDb!.transaction(SHEET_STORE_NAME, 'readonly');
    const store = transaction.objectStore(SHEET_STORE_NAME);
    const request = store.get(key);

    if (!request) return null;

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getLatestCharacter(
  characterId: string
): Promise<CharacterState | null> {
  try {
    // Get data from IndexedDB and cloud database
    const localItem = await getLocalCharacterData(characterId);
    const cloudItem = await getCharacterState(characterId);

    const localDate = new Date(localItem?.lastSavedIsoString || 0);
    const cloudDate = new Date(cloudItem?.lastSavedIsoString || 0);

    if (cloudDate > localDate) {
      if (cloudItem) await putCharacterData(cloudItem.id, cloudItem);
      return cloudItem;
    }
    return localItem;
  } catch (error) {
    console.error('Failed to fetch latest sheet items:', error);
    return null;
  }
}
export async function putCharacterData(
  key: string,
  value: CharacterState
): Promise<void> {
  if (!sheetDb) await openSheetDb();
  return new Promise((resolve, reject) => {
    const transaction = sheetDb!.transaction(SHEET_STORE_NAME, 'readwrite');
    const store = transaction.objectStore(SHEET_STORE_NAME);
    const request = store.put(value, key);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function deleteWorkshopData(key: string): Promise<void> {
  if (!sheetDb) await openSheetDb();
  return new Promise((resolve, reject) => {
    const transaction = sheetDb!.transaction(SHEET_STORE_NAME, 'readwrite');
    const store = transaction.objectStore(SHEET_STORE_NAME);
    const request = store.delete(key);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
