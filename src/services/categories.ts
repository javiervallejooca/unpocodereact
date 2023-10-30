import { ProductCategories } from "../interfaces/categories";

import { API_BASE_URL } from "../data/constants";
import { ENDPOINTS } from "../data/endpoints";

import axios from "axios";

const DEFAULT_URL = API_BASE_URL + ENDPOINTS.CATEGORIAS;

/**
 * Retrieves a list of product categories from the server.
 * @returns A Promise that resolves to an array of ProductCategories.
 */
export async function readCategories(): Promise<ProductCategories[]> {
  const response = await axios.get(DEFAULT_URL);
  return response.data;
}
