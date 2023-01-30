import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/trending')
      .then(res => res.json())
      .then(data => setSongs(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trending Songs</h1>
        {songs && songs.map(song => (
          <div key={song.id}>{song.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
