import React, { useState } from 'react';

const AudioCapture: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
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
  
  
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks: Blob[] = [];
    
    mediaRecorder.ondataavailable = (event) => {
        alert("here");
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      const audioData = await audioBlob.text(); // Convert to text (base64 or other format)
      const audioURL = URL.createObjectURL(audioBlob);
      setAudioURL(audioURL);
      await saveAudioToDB("AudioDB", "audioStore", "audioKey", audioData);
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return (
    <div>
      <h2>Audio Capture</h2>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioURL && <audio controls src={audioURL} />}
    </div>
  );
};

export default AudioCapture;
