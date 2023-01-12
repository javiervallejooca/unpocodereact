import useSWR from "swr";
import { defaultFetcher } from "../helper";
import { API_URL } from "../global";

/**
 * @description Hook para sacar los datos de los productos.
 * @returns
 */
const useProducts = () => {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/products`,
    defaultFetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default useProducts;
