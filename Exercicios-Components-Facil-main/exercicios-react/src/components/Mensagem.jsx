import '../StyleAll.css'


function Mensagem(props){

    return(
        <div className='container'>
            <h1>Componente Card:</h1>
            <span>{props.Mensagem}</span>
        </div>
        
    )
}

export default Mensagem