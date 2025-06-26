/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (initialData, fetcher, dependency = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetcher();

      if (res.data.success) {
        setData(res.data.data);
        setLoading(false);
      }
    };

    fetchData();
  }, [dependency]);

  return {
    data,
    loading,
    setData
  };
};

export default useFetch;
