import '../StyleAll.css'


function Produto(props){

    return(
        <div className='container'>
            <h1>Componente Produto:</h1>
            <p>Nome:{props.nome}</p>
            <p>Preço:{props.preço}</p>
        </div>
        
    )
}

export default Produto