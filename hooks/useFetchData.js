import { useState, useEffect } from 'react';

const BASE_URL = '/mock/';

function useFetchData(url, defState) {
  const [data, setData] = useState(defState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(BASE_URL + url);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
