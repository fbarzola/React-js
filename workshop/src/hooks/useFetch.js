import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [url]);

  return { data, loading };
};

export default useFetch;
