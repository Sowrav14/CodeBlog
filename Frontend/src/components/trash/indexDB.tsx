import React, { useState, useEffect } from "react";

const DB_NAME = "FileStorageDB";
const STORE_NAME = "files";
const FILE_KEY = "uploadedFile";

const FileStorageApp: React.FC = () => {
  const [storedFile, setStoredFile] = useState<string | null>(null);
  const openDatabase = async (dbName: string, storeName: string): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
  
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
  
  const saveFileToDB = async (dbName: string, storeName: string, fileKey: string, fileData: string): Promise<void> => {
    const db = await openDatabase(dbName, storeName);
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.put(fileData, fileKey);
  
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  };
  
  const getFileFromDB = async (dbName: string, storeName: string, fileKey: string): Promise<string | null> => {
    const db = await openDatabase(dbName, storeName);
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.get(fileKey);
  
      request.onsuccess = () => resolve(request.result as string | null);
      request.onerror = () => reject(request.error);
    });
  };
  

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const fileData = e.target?.result as string;
        await saveFileToDB(DB_NAME, STORE_NAME, FILE_KEY, fileData);
        alert("File saved successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const loadFileFromDB = async () => {
    const fileData = await getFileFromDB(DB_NAME, STORE_NAME, FILE_KEY);
    if (fileData) {
      setStoredFile(fileData);
    } else {
      alert("No file found in the database.");
    }
  };

  useEffect(() => {
    loadFileFromDB(); // Automatically load stored file on component mount
  }, []);

  return (
    <div>
      <h1>File Storage with IndexedDB (TypeScript)</h1>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={loadFileFromDB}>Load Stored File</button>
      {storedFile && (
        <div>
          <h2>Stored File Preview:</h2>
          <img src={storedFile} alt="Stored file" style={{ maxWidth: "300px" }} />
        </div>
      )}
    </div>
  );
};

export default FileStorageApp;
