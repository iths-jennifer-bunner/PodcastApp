import React from 'react';
import useFetch from '../utils/useFetch';
import { useLocation } from 'react-router-dom';
import PodcastCard from './PodcastCard';
import EpisodeCard from './EpisodeCard';

function PodcastPage() {
  const location = useLocation();
  const { slug } = location.state;
  const url = `https://api.podd.app/podcasts/${slug}`;
  const { data, error, isLoading } = useFetch(url);
  // const { episodes } = useFetchEpisodes(url);

  // console.log(episodes.episodes);

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
        flexDirection: 'column',
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
      <div>
        <ul
          style={{
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {data.episodes &&
            data.episodes.length > 0 &&
            data.episodes.map((item, id) => (
              <li key={id}>
                <EpisodeCard
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
    </div>
  );
}

export default PodcastPage;
