import './NowPlaying.css'
function NowPlaying({currentSong, togglePlayPause, isPlaying}) {
  return (
        <div className="nowplaying-content">
            <div className="nowplaying-header">
                <div className='nowplaying-heading'>Now Playing</div>
                <div className="vol-btns">
                    <button className="vol-decrease">-</button>
                    <button className="vol-default">Volume</button>
                    <button className="vol-increase">+</button>
                </div>
            </div>
            <div className="music-thumbnail">
                <div>{currentSong.title}</div>
                <img src="#" alt="tumbnail here" />
            </div>
            <div className="controls">
                <button className="togle-play-pause" onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
            </div>
            
        </div>
    )
}
export default NowPlaying