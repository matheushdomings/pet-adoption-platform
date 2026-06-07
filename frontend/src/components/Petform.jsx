function PetForm(props) {
  return (
    <>
      <h2>{props.nome}</h2>
      <h3>{props.especie}</h3>

      <form onSubmit={props.onSubmit}>
        <div>
          <label>Nome</label>
         <input
  type="text"
  value={props.nome}
  onChange={(event) => props.setNome(event.target.value)}
/>
        </div>

        <div>
          <label>Espécie</label>
         <input
  type="text"
  value={props.especie}
  onChange={(event) => props.setEspecie(event.target.value)}
/>
        </div>

        <div>
         <button type="submit">
  {props.petEditando ? "Salvar alterações" : "Cadastrar"}
</button>
        </div>
      </form>
    </>
  )
}

export default PetForm