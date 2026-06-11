import '../StyleAll.css'


function Usuario(props){

    return(
        <div className='container'>
            <h1>Componente Usuario:</h1>
            <p>Nome:{props.nome}</p>
            <p>Idade:{props.idade}</p>
        </div>
        
    )
}

export default Usuario