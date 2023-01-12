/**
 * @description Fetch por defecto.
 * @param {string} endpoint Endpoint al que hay que llamar.
 * @param {Object} init Configuración para el fetch.
 * @returns
 */
export const defaultFetcher = async (endpoint, init = {}) => {
  const response = await fetch(endpoint, init);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.status = response.status;

    throw error;
  }

  return response.json();
};
