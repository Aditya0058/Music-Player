import './Header.css'
function Header() {
    return (
        <div className="top-bar">
            <h2 className="logo">Music Player</h2>
            <div className="btns">
            <button className="add-music">Add Music</button>
            <button className="open-folder">Open Folder</button>
            </div>
        </div>
    )
}
export default Header