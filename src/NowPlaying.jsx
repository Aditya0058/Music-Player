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
                <img src="Thumbnail.png" alt="tumbnail here" />
                <div>{currentSong.title}</div>
            </div>
            <div className="controls">
                <button className="prev-song">Previous Song</button>
                <button className="togle-play-pause" onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
                <button className="next-song">Next Song</button>
            </div>
            <div className="progress">
                <div className="progress-bar-wrapper">
                    <div className="progress-fill"></div>   
                </div>
                <div className="time-labels">
                    <span>0:00</span>
                    <span>3:02</span>
                </div>
            </div>
            
        </div>
    )
}
export default NowPlaying