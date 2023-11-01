import { useEffect, useState } from "react";

/**
 * Custom hook that fetches all data of a certain type using a callback function.
 * @template T The type of data being fetched.
 * @param {Function} callbackFn The callback function that fetches the data.
 * @returns {Object} An object containing the fetched data, error message (if any), and loading state.
 */
export function useReadAll<T>(callbackFn: () => Promise<T[]>) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData() {
    try {
      const response = await callbackFn();
      setData(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Hubo un error en la solicitud.");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading };
}

/**
 * Custom hook to fetch a single resource by id.
 * @template T The type of the resource being fetched.
 * @param {Function} callbackFn The function that fetches the resource.
 * @param {number} id The id of the resource to fetch.
 * @returns {Object} An object containing the fetched data, error message (if any), and loading status.
 */
export function useReadOne<T>(
  callbackFn: (id: number) => Promise<T>,
  id: number
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData() {
    try {
      const response = await callbackFn(id);
      setData(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Hubo un error en la solicitud.");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { data, error, loading };
}
