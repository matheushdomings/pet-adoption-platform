function PetForm(props) {
  return (
    <>
      <h2>{props.nome}</h2>
      <h3>{props.especie}</h3>

      <form className="pet-form" onSubmit={props.onSubmit}>
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
          <label>Idade</label>

          <input
            type="number"
            value={props.idade}
            onChange={(event) => props.setIdade(event.target.value)}
          />
        </div>

        <div>
          <label>Raça</label>

          <input
            type="text"
            value={props.raca}
            onChange={(event) => props.setRaca(event.target.value)}
          />
        </div>

        <div>
          <label>Status</label>

          <select
            value={props.status}
            onChange={(event) => props.setStatus(event.target.value)}
          >
            <option value="Disponível">Disponível</option>
            <option value="Adotado">Adotado</option>
          </select>
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