import { useEffect, useState } from "react";

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
