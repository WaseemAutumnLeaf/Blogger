import { useState, useEffect } from 'react';

interface ApiResponse {
  // Define the structure of the data you expect to receive from the API
  // For example, if the API returns an array of objects with 'id' and 'name' fields:
  id: number;
  name: string;
}

interface FetchDataResponse {
  data: ApiResponse[];
  isLoading: boolean;
  error: string | null;
}

const useFetchData = (url: string): FetchDataResponse => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message || 'Error fetching data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;