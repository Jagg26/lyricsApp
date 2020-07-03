import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Lyrics from './components/Lyrics';
import Bio from './components/Bio';
import axios from 'axios';

function App() {

  //State
  const [searchLyric, setSearchLyric] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [ bio, setBio] = useState([]);

  const { artist, song } = searchLyric;

  useEffect(() => {
    if (Object.keys(searchLyric).length === 0) return;

    const consultAPILyric = async () => {

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyric, info] = await Promise.all([
        axios.get(url),
        axios.get(url2),
      ])
      
      setLyrics(lyric.data.lyrics);
      setBio(info.data.artists[0]);
    }
    consultAPILyric();

  }, [searchLyric, artist, song, bio])

  return (
    <Fragment>
      <Form
        setSearchLyric={setSearchLyric}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
          <Bio
              bio={bio}
            />
          </div>

          <div className="col-md-6">
            <Lyrics
              lyrics={lyrics}
              song={song}
            />
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
