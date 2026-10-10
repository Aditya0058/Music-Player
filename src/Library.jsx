import './Library.css';

function Library({ songs, onSongSelect, currentSong, onClear }) {
  return (
    <div className="library-content">
      <div className="library-header">
        <div className='library-heading'>Your library</div>
        <button className="shuffle" onClick={onClear}>Clear</button>
      </div>
      
      <div className="song-list-header">
        <span>#</span>
        <span>Title</span>
        <span>Date added</span>
      </div>
      
      <div className="song-list">
        {songs.length === 0 ? (
          <div style={{ color: '#888', padding: '20px 0' }}>No songs yet. Click "+ Add Songs".</div>
        ) : (
          songs.map((song, index) => (
            <div 
              className={`song-row ${currentSong?.id === song.id ? 'active' : ''}`}
              key={song.id}
              onClick={() => onSongSelect(song)}
            >
              <span>{index + 1}.</span>
              <span>{song.title}</span>
              <span>{song.date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Library;