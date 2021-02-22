import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, repeat) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        setResponse(response.data);

        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        } else {
          setIsLoading(false);
          setError(error);
        }
      }
    };
    fetchData();

    return () => {
      source.cancel();
    };
  }, [url, repeat]);

  return { response, error, isLoading };
};
