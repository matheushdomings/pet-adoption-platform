import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
  fetch("http://localhost:3000/pets")
    .then((response) => response.json())
    .then((data) => {
      setPets(data)
    })
    .catch((error) => {
      console.error("Erro ao buscar pets:", error)
    })
}, [])

  return (
    <div>
      <h1>Pet Adoption Platform</h1>

      <p>Quantidade de pets: {pets.length}</p>

      {
       pets.map((pet) => (
         <p key={pet.nome}>{pet.nome}</p>
       ))
    }
  </div>
  )
}

export default App