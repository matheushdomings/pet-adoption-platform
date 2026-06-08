function PetCard(props) {
  return (
    <div className="pet-card">
      <h2>{props.nome}</h2>
      <p>Espécie: {props.especie}</p>
      <p>Idade: {props.idade}</p>
      <p>Raça: {props.raca}</p>
      <p>Status: {props.status}</p>

      <button onClick={props.onEditar}>
        Editar
      </button>

      <button onClick={props.onExcluir}>
        Excluir
      </button>
    </div>
  )
}

export default PetCard