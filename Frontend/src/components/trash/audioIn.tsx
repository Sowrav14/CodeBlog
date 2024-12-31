import React from 'react';

import AudioPlayer from './audioPlayer.tsx';
import AudioCapture from './audiocapture.tsx';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Audio Capture and Playback</h1>
      <AudioCapture />
      <AudioPlayer />
    </div>
  );
};

export default MainPage;
