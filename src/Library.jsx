import './Library.css'
function Library({songs}) {
  return (
        <div className="library-content">
            <div className="library-header">
                <div className='library-heading'>Library</div>
                <button className="shuffle">Shuffle</button>
            </div>
            <div className="song-list-header">
                <span>#</span>
                <span>Title</span>
                <span>Date Modified</span>
            </div>
            <div className="song-list">
                {songs.map((song, index) => (
                    <div className="song-row" key={song.id}>
                        <span>{index + 1}.</span>
                        <span>{song.title}</span>
                        <span>{song.date}</span>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default Library