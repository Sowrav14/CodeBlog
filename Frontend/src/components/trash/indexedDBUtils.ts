const openDatabase = async (dbName: string, storeName: string): Promise<IDBDatabase> => {
  const request = indexedDB.open(dbName, 1);
  return new Promise((resolve, reject) => {
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName);
      }
    };
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const saveAudioToDB = async (dbName: string, storeName: string, key: string, audioData: string): Promise<void> => {
  const db = await openDatabase(dbName, storeName);
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    store.put(audioData, key);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
};

const getAudioFromDB = async (dbName: string, storeName: string, key: string): Promise<string | null> => {
  const db = await openDatabase(dbName, storeName);
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(key);
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};
