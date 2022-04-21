import React from 'react';
import Player from './Player';

function EpisodeCard(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20rem',
        height: 'rem',
        margin: '1rem',
        padding: '1rem',

        borderRadius: '10px',
        boxShadow: '2px 7px 16px -9px rgba(0,0,0,0.34)',
      }}
    >
      <img
        src={props.image}
        alt="Podcast"
        style={{ width: '10rem', borderRadius: '5px' }}
      />
      <h3>{props.title}</h3>
      <div
        style={{
          textOverflow: 'ellipsis',
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <p>{props.desc}</p>
      </div>
      {props.audio && <Player audio={props.audio} />}
    </div>
  );
}

export default EpisodeCard;
