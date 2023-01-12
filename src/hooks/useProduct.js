import useSWR from "swr";
import { defaultFetcher } from "../helper";
import { API_URL } from "../global";

/**
 * @description Hook para sacar los datos de un producto.
 * @returns
 */
const useProduct = (id) => {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/products/` + id,
    defaultFetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default useProduct;
