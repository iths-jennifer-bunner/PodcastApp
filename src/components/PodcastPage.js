import React from 'react';
import useFetch from '../utils/useFetch';
import { useLocation } from 'react-router-dom';

function PodcastPage() {
  const location = useLocation();
  const { slug } = location.state;
  const url = `https://api.podd.app/podcasts/${slug}`;
  console.log(url);
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '50rem',
        }}
      >
        <img
          src={data.image}
          alt="Podcast"
          style={{ width: '100%', borderRadius: '5px' }}
        />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default PodcastPage;
