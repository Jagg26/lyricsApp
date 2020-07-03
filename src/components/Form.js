import React, { useState } from 'react';

const Form = ({setSearchLyric}) => {

    //State
    const [search, setSearch] = useState({
        artist: '',
        song:''
    });
    const [error, setError] = useState(false);

    const { artist, song } = search;

    //Function
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
        
    }

    // handleSubmit

    const handleSubmit = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //Set Values on the Main State

        setSearchLyric(search);

    }

    return ( 
        <div className="bg-info">
            {error ? <p className="aler alert-danger text-center p-2">All fields are required</p> : null }
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className="text-center">Lyrics Searcher</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={handleChange}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song Name"
                                            onChange={handleChange}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right "
                            >Search</button>
                        </fieldset>

                        

                    </form>

                </div>
            </div>
        </div>
     );
}
 
export default Form;