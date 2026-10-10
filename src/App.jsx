import { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Library from './Library';
import NowPlaying from './NowPlaying';

function App() {
  const audioRef = useRef(null);
  const fileInputRef = useRef(null); 

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current || !currentSong) return;
    if (isPlaying) {
      audioRef.current.play().catch(e => console.log(e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const togglePlayPause = () => setIsPlaying(!isPlaying);
  const increaseVolume = () => setVolume(prev => Math.min(prev + 0.1, 1));
  const decreaseVolume = () => setVolume(prev => Math.max(prev - 0.1, 0));
  const defaultVolume = () => setVolume(1);

  const handleSeek = (event) => {
    const clickX = event.nativeEvent.offsetX;
    const barWidth = event.currentTarget.clientWidth;
    const seekTime = (clickX / barWidth) * duration;
    if (audioRef.current) audioRef.current.currentTime = seekTime;
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newSongs = files.map(file => ({
      id: file.name + file.lastModified,
      title: file.name.replace(/\.[^.]+$/, ""),
      date: new Date().toLocaleDateString(),
      audioSrc: URL.createObjectURL(file) 
    }));

    setSongs(prev => [...prev, ...newSongs]);
    
    
    if (!currentSong && newSongs.length > 0) {
      setCurrentSong(newSongs[0]);
    }
  };

  const clearLibrary = () => {
    setSongs([]);
    setCurrentSong(null);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  
  const handleNextSong = () => {
    if (songs.length === 0) return;
    const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= songs.length) nextIndex = 0;
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    if (songs.length === 0) return;
    const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = songs.length - 1;
    setCurrentSong(songs[prevIndex]);
    setIsPlaying(true);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="main-container">
      {/* Hidden file input */}
      <input 
        type="file" 
        accept="audio/*" 
        multiple 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        onChange={handleFileUpload} 
      />
      
      <audio 
        src={currentSong?.audioSrc} 
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      />

      <Header onAddSongs={() => fileInputRef.current.click()} />

      <div className="content-layout">
        <Library 
          songs={songs}
          onSongSelect={setCurrentSong}
          currentSong={currentSong}
          onClear={clearLibrary}
        /> 
        <NowPlaying 
          currentSong={currentSong}
          togglePlayPause={togglePlayPause}
          isPlaying={isPlaying}
          onNext={handleNextSong}
          onPrevious={handlePreviousSong}
          onInVol={increaseVolume}
          onDeVol={decreaseVolume}
          defVol={defaultVolume}
          currentTime={currentTime}
          duration={duration}
          progressPercent={progressPercent}
          onSeek={handleSeek}
        />
      </div>
    </div>
  );
}

export default App;