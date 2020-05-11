import React, { useState } from 'react'

const Playlist = () => {

    const songs = ["Song Title 1", "Song Title 2", "Song Title 3"]
    const [songTitle, setSongTitle] = useState("Song Title 1")

    const selectTrack = newTrack => {
        setSongTitle(songTitle => newTrack)
    }

    return (
        <>
            <div>
                <ul style={{listStyle: "none"}}>
                    {songs.map(song => (
                        <li onClick = {
                            () => selectTrack(song)
                        }>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Playlist
