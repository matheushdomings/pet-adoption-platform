import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pets, setPets] = useState([])
  const [nome, setNome] = useState("")
  const [especie, setEspecie] = useState("")

  const buscarPets = () => {
  fetch("http://localhost:3000/pets")
    .then((response) => response.json())
    .then((data) => {
      setPets(data)
    })
    .catch((error) => {
      console.error("Erro ao buscar pets:", error)
    })
}
  useEffect(() => {
  buscarPets()
}, [])

const excluirPet = (id) => {
  fetch(`http://localhost:3000/pets/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      buscarPets()
    })
    .catch((error) => {
      console.error("Erro ao excluir pet:", error)
    })
} 
  return (
    <div>
      <h1>Pet Adoption Platform</h1>
<form
  onSubmit={(event) => {
    event.preventDefault()

   const novoPet = {
  nome,
  especie
}

fetch("http://localhost:3000/pets", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(novoPet)
})
.then(() => {
  buscarPets()
  setNome("")
  setEspecie("")
})
  }}
>
  <input
    type="text"
    value={nome}
    onChange={(event) => setNome(event.target.value)}
  />

  <input
  type="text"
  value={especie}
  onChange={(event) => setEspecie(event.target.value)}
/>

  <button type="submit">
    Cadastrar
  </button>
</form>
<p>Nome digitado: {nome}</p>

      <p>Quantidade de pets: {pets.length}</p>

      {
  pets.map((pet) => (
    <div key={pet._id}>
      <h2>{pet.nome}</h2>
      <p>Espécie: {pet.especie}</p>

<button onClick={() => excluirPet(pet._id)}>  Excluir
</button>
    </div>
  ))
}
  </div>
  )
}

export default App