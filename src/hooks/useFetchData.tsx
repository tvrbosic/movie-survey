import { useCallback, useState } from 'react';
import axios from 'axios';

//import { IHttpError } from '../ts/definitions';

// Configuration
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function useFetchData<Type>() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Type | null>(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const sendRequest = useCallback((path: string) => {
    setIsLoading(true);

    axios
      .get<Type | null>(path)
      .then((request) => setData(request.data))
      .catch((error) => {
        setIsError(true);
        if (axios.isAxiosError(error)) {
          setError(error.response?.data);
        } else {
          setError({
            errors: [{ title: 'Unknown error', detail: "We're sorry, but something went wrong." }],
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    data,
    isError,
    error,
    sendRequest,
  };
}
