import { useCallback, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function usePostData<Type>() {
  const [isPosting, setIsPosting] = useState(false);
  const [response, setResponse] = useState<Type | null>(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const sendPostRequest = useCallback((path: string, data: Type) => {
    setIsPosting(true);

    axios
      .post(path, data)
      .then((request) => setResponse(request.data))
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
        setIsPosting(false);
      });
  }, []);

  return {
    isPosting,
    response,
    isError,
    error,
    sendPostRequest,
  };
}
