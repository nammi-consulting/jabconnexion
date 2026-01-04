// Configuration de l'API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getApiUrl = (endpoint) => {
  return `${API_URL}${endpoint}`;
};

export default API_URL;
