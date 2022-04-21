import React from 'react';
import PodcastCard from './PodcastCard';
import useFetch from '../utils/useFetch';

function ListPodcasts() {
  const url = `https://api.podd.app/podcasts`;
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
        flexDirection: 'column',
      }}
    >
      <h1>What do you want to listen on today?</h1>
      <ul
        style={{
          listStyleType: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {data.map((item, id) => (
          <li key={id}>
            <PodcastCard
              key={id}
              title={item.title}
              image={item.image}
              desc={item.description}
              slug={item.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPodcasts;
