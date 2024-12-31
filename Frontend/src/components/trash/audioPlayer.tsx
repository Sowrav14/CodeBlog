import React, { useEffect, useState } from 'react';
// import { getAudioFromDB } from './indexedDBUtils'; // Import your utility functions

const AudioPlayer: React.FC = () => {
  const [audioURL, setAudioURL] = useState<string | null>(null);
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

  useEffect(() => {
    const loadAudio = async () => {
      const audioData = await getAudioFromDB("AudioDB", "audioStore", "audioKey");
      if (audioData) {
        const blob = new Blob([audioData], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
      }
    };

    loadAudio();
  }, []);

  return (
    <div>
      <h2>Stored Audio</h2>
      {audioURL ? <audio controls src={audioURL} /> : <p>No audio available</p>}
    </div>
  );
};

export default AudioPlayer;
