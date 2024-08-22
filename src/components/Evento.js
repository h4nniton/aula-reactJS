function Evento (menuEvento) {

    function meuEvento () {

        console.log("Opa, fui ativado!")

    }

    return (

        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={menuEvento}>Ativaaaaaaaar</button>
        </div>

    )

}

export default Evento