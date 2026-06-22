const API_URL = `${import.meta.env.VITE_API_URL}/pets`;

export const getPets = () => {
  return fetch(API_URL)
}

export const createPet = (pet) => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: pet
  })
}

export const deletePet = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
}

export const updatePet = (id, pet) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: pet
  })
}