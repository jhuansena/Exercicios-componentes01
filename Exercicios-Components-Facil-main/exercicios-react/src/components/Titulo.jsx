
import '../StyleAll.css'

function Titulo(props){

    return(
        <div className='container'>
            <h1>Componente Titulo:</h1>
            <h2 >{props.titulo}</h2>
        </div>
        
    )
}

export default Titulo