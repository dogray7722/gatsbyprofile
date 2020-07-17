import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'

const Playlist = () => {

  const [songTitle, setSongTitle] = useState('Song Title 1')

  const selectTrack = newTrack => {
    setSongTitle(songTitle => newTrack)
  }

  return (
    <>
      <StaticQuery
        query={trackQuery}
        render={data => (
          <div>
            {data.allMarkdownRemark.nodes.map(({ frontmatter }) => (
              <ul>
                <li key={frontmatter.id}>
                  <h1>{frontmatter.title}</h1>
                </li>
              </ul>
            ))}
          </div>
        )}
      />
    </>
  )
}

export const trackQuery = graphql`
  query TrackByPath {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          duration
          path {
            id
          }
        }
      }
    }
  }
`

export default Playlist
