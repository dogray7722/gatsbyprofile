import React, { useState } from 'react'
import { graphql } from 'gatsby'

const Playlist = ({ data }) => {
  const { markdownRemark: track } = data
  const [songTitle, setSongTitle] = useState('Song Title 1')

  const selectTrack = newTrack => {
    setSongTitle(songTitle => newTrack)
  }

  return (
    <>
      <div>
        <ul style={{ listStyle: 'none' }}>
          {/* {songs.map(song => (
            <li onClick={() => selectTrack(song)}>
              <h1>{song}</h1>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  )
}

export const trackQuery = graphql`
  query AudioTrackByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Playlist
