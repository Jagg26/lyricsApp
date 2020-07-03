import React, { Fragment } from 'react';

const Lyrics = ({ lyrics, song }) => {

    if(lyrics.length === 0) return null;

    return ( 
        <Fragment>
            <h2> {song} Lyrics</h2>
            <p className="letra">{lyrics}</p>
        </Fragment>
        
    );
}

 
export default Lyrics;