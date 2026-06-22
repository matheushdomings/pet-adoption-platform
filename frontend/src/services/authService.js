const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export const login = (userData) => {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
};