import './NowPlaying.css';

function NowPlaying({ currentSong, togglePlayPause, isPlaying, onNext, onPrevious, onInVol, onDeVol, defVol, currentTime, duration, progressPercent, onSeek }) {
    
    function formatTime(seconds) {
        if (isNaN(seconds) || seconds === undefined) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

    return (
        <div className="nowplaying-content">
            <div className="nowplaying-header">
                <div className='nowplaying-heading'>Now Playing</div>
                <div className="vol-btns">
                    <button className="vol-decrease" onClick={onDeVol}>-</button>
                    <button className="vol-default" onClick={defVol}>Volume</button>
                    <button className="vol-increase" onClick={onInVol}>+</button>
                </div>
            </div>
            
            <div className="music-thumbnail">
                <img src="Thumbnail.png" alt="thumbnail here" />
                <div>{currentSong ? currentSong.title : "No song selected"}</div>
            </div>
            
            <div className="controls">
                <button className="prev-song" onClick={onPrevious} disabled={!currentSong}>Previous Song</button>
                <button className="togle-play-pause" onClick={togglePlayPause} disabled={!currentSong}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button className="next-song" onClick={onNext} disabled={!currentSong}>Next Song</button>
            </div>
            
            <div className="progress">
                <div className="progress-bar-wrapper" onClick={onSeek}>
                    <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>   
                </div>
                <div className="time-labels">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
}

export default NowPlaying;