import '../StyleAll.css'

function Botao(props){

    return(
        <div className='container'>
            <h1>Componente botão:</h1>
            <button>{props.Botao}</button>
        </div>
        
    )
}

export default Botao