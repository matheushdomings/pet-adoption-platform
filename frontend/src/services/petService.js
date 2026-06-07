const API_URL = "http://localhost:3000/pets"

export const getPets = () => {
  return fetch(API_URL)
}
export const createPet = (pet) => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pet)
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
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pet)
  })
}