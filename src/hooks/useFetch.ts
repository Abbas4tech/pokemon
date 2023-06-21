import { useCallback, useEffect, useState } from "react";
import { BasePokeData, BasePokeResponse } from "../model/pokemon-model";

interface FetchDataResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  loadMore: () => void;
}

const useFetchData = (url: string): FetchDataResponse<BasePokeData[]> => {
  const [data, setData] = useState<BasePokeData[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(url);

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      if (!nextPageUrl) {
        return;
      }
      const response = await fetch(nextPageUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData: BasePokeResponse<BasePokeData> =
        await response.json();
      setData((prevData: BasePokeData[] | null) => {
        if (
          prevData &&
          Array.isArray(prevData) &&
          Array.isArray(responseData.results)
        ) {
          return [...prevData, ...responseData.results] as BasePokeData[];
        }
        return responseData.results;
      });
      setNextPageUrl(responseData.next);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }, [nextPageUrl, setData]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = (): void => {
    fetchData();
  };

  return { data, isLoading, error, loadMore };
};

export default useFetchData;
