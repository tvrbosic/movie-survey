import { useCallback, useState } from 'react';
import axios from 'axios';

export function useGetData<Type>() {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<Type | null>(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const sendGetRequest = useCallback((path: string) => {
    setIsFetching(true);

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
        setIsFetching(false);
      });
  }, []);

  return {
    isFetching,
    data,
    isError,
    error,
    sendGetRequest,
  };
}
