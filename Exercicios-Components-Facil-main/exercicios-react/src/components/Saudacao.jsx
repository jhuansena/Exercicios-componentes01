import '../StyleAll.css'

function Saudacao(props){

    return(
        <div className='container'>
            <h1>Componente Saudação:</h1>
            <p>Olá, {props.nome}!</p>
        </div>
        
    )
}

export default Saudacao