import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://opentdb.com";
axios.defaults.timeout = 120000;

function useAxios(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        setError(error);
        console.log(error, "error while fetching ", url);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export default useAxios;
