import React from 'react'

export const SongArtist = ({artist}) => {
    return (
        <div>
            <h3>Name:{artist.strArtist} </h3>
            <img src={artist.strArtistThumb} alt={artist.strArtist}/>
            <p>{artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
            <p>Country: {artist.strCountry}</p>
            <p>Gener: {artist.strGenre} - {artist.strStyle}</p>
            <a href={`https://${artist.strWebsite}`} target = "_blank" rel="noreferrer">Offical Web site</a>
            <p>Biography: {artist.strBiographyEN}</p>
        </div>
    )
}
