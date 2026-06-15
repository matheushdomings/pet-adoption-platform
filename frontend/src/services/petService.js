const API_URL = import.meta.env.VITE_API_URL

export const getPets = () => {
  return fetch(API_URL)
}

export const createPet = (pet) => {
  return fetch(API_URL, {
    method: "POST",
    body: pet
  })
}

export const deletePet = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
}

export const updatePet = (id, pet) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: pet
  })
}