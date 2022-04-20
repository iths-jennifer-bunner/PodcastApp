import React from 'react';
import { Link } from 'react-router-dom';

function PodcastCard(props) {
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
        border: '1px solid #808080',
        borderRadius: '10px',
      }}
    >
      <img src={props.image} alt="Podcast" style={{ width: '10rem' }} />
      {/* <Link to={`/${props.slug}`}> */}
      <h4>{props.title}</h4>
      {/* </Link> */}
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
      <Link to={{ pathname: `/${props.slug}` }}>View more</Link>
    </div>
  );
}

export default PodcastCard;
