import { VERSION } from "@/lib/globalVars";

const DB_NAME = "dataCache";
const DB_VERSION = parseInt(VERSION.split(".").join(""));
const STORE_NAME = "store";

let db: IDBDatabase | null = null;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (event.oldVersion < DB_VERSION) {
        // Delete the old object store if it exists
        if (db.objectStoreNames.contains(STORE_NAME)) {
          db.deleteObjectStore(STORE_NAME);
        }
        // Create a new object store
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export async function getFromDb(key: string): Promise<any> {
  if (!db) await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db!.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export async function putInDb(key: string, value: any): Promise<void> {
  if (!db) await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db!.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(value, key);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}
async function clearIndexedDB() {
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.deleteDatabase(DB_NAME);
    request.onsuccess = () => {
      console.log("IndexedDB database deleted successfully.");
      resolve();
    };
    request.onerror = (event) => {
      console.error("Error deleting IndexedDB database:", event);
      reject(event);
    };
  });
}
