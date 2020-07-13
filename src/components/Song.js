import React from 'react'

const Song = props => {
  return (
    <div className="flex-container">
      <div
        style={{
          height: '50px',
          width: '50px',
          background: 'black',
        }}
      ></div>
      <h1 style={{ marginLeft: '30px', verticalAlign: 'middle' }}>
        {props.songName}
      </h1>
    </div>
  )
}

export default Song
