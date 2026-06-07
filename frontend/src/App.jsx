import { useState, useEffect } from 'react'
import {
  getPets,
  createPet,
  deletePet,
  updatePet
} from "./services/petService"
import './App.css'
import PetForm from "./components/PetForm.jsx"
import PetCard from "./components/PetCard"

function App() {
  const [pets, setPets] = useState([])
  const [nome, setNome] = useState("")
  const [especie, setEspecie] = useState("")
  const [petEditando, setPetEditando] = useState(null)

  const buscarPets = () => {
  getPets()
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
 deletePet(id)
    .then(() => {
      buscarPets()
    })
    .catch((error) => {
      console.error("Erro ao excluir pet:", error)
    })
} 

const salvarPet = (event) => {
  event.preventDefault()

  const novoPet = {
    nome,
    especie
  }

  if (petEditando) {
    updatePet(petEditando._id, novoPet)
      .then(() => {
        buscarPets()
        setNome("")
        setEspecie("")
        setPetEditando(null)
      })
      .catch((error) => {
        console.error("Erro ao editar pet:", error)
      })
  } else {
    createPet(novoPet)
      .then(() => {
        buscarPets()
        setNome("")
        setEspecie("")
      })
      .catch((error) => {
        console.error("Erro ao cadastrar pet:", error)
      })
  }
}

  return (
  <div>
    <h1>Pet Adoption Platform</h1>

    <PetForm 
    nome={nome} 
    especie={especie}
    setNome={setNome}
    setEspecie={setEspecie}  
    onSubmit={salvarPet}
    petEditando={petEditando}
    />

      <p>Quantidade de pets: {pets.length}</p>

      {
  pets.map((pet) => (
  <PetCard
    key={pet._id}
    nome={pet.nome}
    especie={pet.especie}
    onEditar={() => {
    setPetEditando(pet)
    setNome(pet.nome)
    setEspecie(pet.especie)
  }}
    onExcluir={() => excluirPet(pet._id)}
  />
))
}
  </div>
  )
}

export default App