import {useState} from 'react'
import './App.css'
import Header from './Header'
import Library from './Library'
import NowPlaying from './NowPlaying'

const dummySongs = [
  {id: 1, title: "Dai-Dai", date: "19/09/2026"},
  {id: 2, title: "Freaked Out", date: "23/09/2026"},
  {id: 3, title: "Dancin", date: "20/09/2026"}
];

function App() {
  const[currentSong, selectCurrentSong] = useState(dummySongs[0]);
  function putThisSong(song){
      selectCurrentSong(song);
      console.log(song);
  }
  return (
    <div className="main-container">
      <Header />
      <div className="content-layout">
        <Library 
        songs={dummySongs}
        onSongSelect = {putThisSong}
        currentSong = {currentSong}
        /> 
        <NowPlaying currentSong={currentSong} />
      </div>
    </div>
  )
}

export default App