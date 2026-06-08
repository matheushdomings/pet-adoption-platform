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
  const [idade, setIdade] = useState("")
  const [raca, setRaca] = useState("")
  const [imagem, setImagem] = useState("")
  const [status, setStatus] = useState("Disponível")
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
      especie,
      idade,
      raca,
      imagem,
      status
    }

    if (petEditando) {
      updatePet(petEditando._id, novoPet)
        .then(() => {
          buscarPets()
          setNome("")
          setEspecie("")
          setIdade("")
          setRaca("")
          setImagem("")
          setStatus("Disponível")
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
          setIdade("")
          setRaca("")
          setImagem("")
          setStatus("Disponível") 
        })
        .catch((error) => {
          console.error("Erro ao cadastrar pet:", error)
        })
    }
  }

  return (
    <div className="container">
      <h1>Pet Adoption Platform</h1>

      <PetForm 
        nome={nome} 
        especie={especie}
        idade={idade}
        raca={raca}
        imagem={imagem}
        status={status}            
        setNome={setNome}
        setEspecie={setEspecie}  
        setIdade={setIdade}
        setRaca={setRaca}
        setImagem={setImagem}
        setStatus={setStatus}        
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
            idade={pet.idade}
            raca={pet.raca}
            imagem={pet.imagem}
            status={pet.status}
            onEditar={() => {
              setPetEditando(pet)
              setNome(pet.nome)
              setEspecie(pet.especie)
              setIdade(pet.idade)
              setRaca(pet.raca)
              setImagem(pet.imagem)
              setStatus(pet.status)
            }}
            onExcluir={() => excluirPet(pet._id)}
          />
        ))
      }
    </div>
  )
}

export default App