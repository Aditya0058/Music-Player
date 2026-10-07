import {useState, useRef, useEffect} from 'react'
import './App.css'
import Header from './Header'
import Library from './Library'
import NowPlaying from './NowPlaying'


const dummySongs = [
  {id: 1, title: "Gasolina", date: "19/09/2026", audioSrc: "/Gasolina.mp3"},
  {id: 2, title: "Glass Animals", date: "23/09/2026", audioSrc: "/Glass Animals .mp3" },
  {id: 3, title: "Indila", date: "20/09/2026", audioSrc: "/Indila.mp3"}
];

function App() {
  
  const audioRef = useRef(null);
  const[currentSong, selectCurrentSong] = useState(dummySongs[0]);
  const[isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if(isPlaying===true){
      audioRef.current.play()
        .then(() => console.log("Audio started playing!"))
        .catch(error => console.error("Audio play error:", error));
    } else{
      audioRef.current.pause();
    }
  }, [isPlaying]);
  function togglePlayPause(){
    setIsPlaying(!isPlaying);
  };
  function putThisSong(song){
      selectCurrentSong(song);
      console.log(song);
  }
  // function previousSong(song){
  //   selectCurrentSong()
  // }
  return (
    <div className="main-container">
      <audio src={currentSong?.audioSrc} ref={audioRef}></audio>
      <Header />
      <div className="content-layout">
        <Library 
        songs={dummySongs}
        onSongSelect = {putThisSong}
        currentSong = {currentSong}
        /> 
        <NowPlaying 
        currentSong={currentSong}
        togglePlayPause = {togglePlayPause}
        isPlaying = {isPlaying}
       />
      </div>
    </div>
  )
}

export default App