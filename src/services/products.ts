import { Product } from "../interfaces/product";

import { API_BASE_URL } from "../data/constants";
import { ENDPOINTS } from "../data/endpoints";

import axios from "axios";

const DEFAULT_URL = API_BASE_URL + ENDPOINTS.PRODUCTOS;

/**
 * Retrieves a list of products from the server.
 * @returns A Promise that resolves to an array of Product objects.
 */
export async function readProducts(): Promise<Product[]> {
  const response = await axios.get(DEFAULT_URL);
  return response.data;
}

/**
 * Retrieves a product from the server by its ID.
 * @param id - The ID of the product to retrieve.
 * @returns A Promise that resolves to the retrieved Product object.
 */
export async function readProduct(id: number): Promise<Product> {
  const url = DEFAULT_URL + "/" + id;
  const response = await axios.get(url);
  return response.data;
}

/**
 * Creates a new product.
 * @param data - The data of the product to be created.
 * @returns A Promise that resolves to the created product.
 */
export async function createProduct(data: Partial<Product>): Promise<Product> {
  const response = await axios.post(DEFAULT_URL, data);
  return response.data;
}

/**
 * Updates a product with the given ID with the provided data.
 * @param id - The ID of the product to update.
 * @param data - The data to update the product with.
 * @returns A Promise that resolves to the updated Product object.
 */
export async function updateProduct(
  id: number,
  data: Partial<Product>
): Promise<Product> {
  const url = DEFAULT_URL + id;
  const response = await axios.put(url, data);
  return response.data;
}

/**
 * Deletes a product with the specified ID from the server.
 * @param id The ID of the product to delete.
 * @returns A Promise that resolves with the deleted Product object.
 */
export async function deleteProduct(id: number): Promise<Product> {
  const url = DEFAULT_URL + id;
  const response = await axios.delete(url);
  return response.data;
}
