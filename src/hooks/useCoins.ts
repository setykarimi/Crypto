import { instance } from "@config/httpService";
import useSWR from "swr";

const fetcher = async (params: string) => {
  const data = await instance.get(params).then((res) => res.data);

  return data;
};

export const useCoins = (params: string) => {
  const { data, error, isLoading } = useSWR(params, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
