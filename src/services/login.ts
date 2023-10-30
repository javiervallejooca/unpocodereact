import axios from "axios";
import { API_BASE_URL } from "../data/constants";
import { UserLogin } from "../interfaces/userLogin";

/**
 * Logs in a user with the provided credentials.
 * @param data - The user's login credentials.
 * @returns A Promise that resolves with the response data from the server.
 */
export async function login(data: UserLogin): Promise<unknown> {
  const url = API_BASE_URL + "/auth/login";
  const response = await axios.post(url, data);
  return response.data;
}
