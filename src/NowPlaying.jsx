import './NowPlaying.css'
function NowPlaying() {
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
                <img src="#" alt="tumbnail here" />
            </div>
            
        </div>
    )
}
export default NowPlaying