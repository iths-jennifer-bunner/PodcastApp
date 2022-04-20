import { useEffect, useState } from 'react';

export const ApiFetching = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.podd.app/podcasts`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const actualData = await response.json();
        setData(actualData);
        console.log('json:', actualData);
        setError(null);
        // setData(json.data.children.map((it) => it.data));
      } catch (err) {
        console.error('error:', err);
        setError(err.message);
        setData(null);
      }
    }
    fetchData();
  }, []);

  return data;
};
