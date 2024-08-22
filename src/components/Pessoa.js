function Pessoa ({nome, idade, profissao, foto}) {

    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Profissão: {profissao}</p>
        </div>
    )

}

export default Pessoa