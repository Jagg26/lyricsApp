import React from 'react';

const Bio = ({ bio }) => {

    if (Object.keys(bio).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyEN, intFormedYear } = bio;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist Info
         </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Artist Logo" />
                <p className="card-text">Genre: {strGenre}</p>
                <p className="card-text">Career Start: {intFormedYear}</p>
                <h2 className="card-text">Biography:</h2>
                <p className="card-text">{strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${bio.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${bio.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${bio.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Bio;