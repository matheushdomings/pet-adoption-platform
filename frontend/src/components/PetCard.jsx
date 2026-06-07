function PetCard(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Espécie: {props.especie}</p>

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