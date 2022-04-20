import React from 'react';

function PodcastPage(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20rem',
        height: '25rem',
        margin: '1rem',
        padding: '1rem',
      }}
    >
      <img src={props.image} alt="Podcast" style={{ width: '10rem' }} />
      <h4>{props.title}</h4>
      <div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default PodcastPage;
