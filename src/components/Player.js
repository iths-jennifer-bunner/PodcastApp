import React from 'react';
import { useLocation } from 'react-router';
import useFetch from '../utils/useFetch';

function Player(props) {
  const location = useLocation();
  const { slug } = location.state;
  const url = `https://api.podd.app/podcasts/${slug}`;
  const { data, error, isLoading } = useFetch(url);

  console.log('data', { data });

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
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
    </div>
  );
}

export default Player;
