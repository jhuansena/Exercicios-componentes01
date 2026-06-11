import '../StyleAll.css'


function Rodape(props){

    return(
        <div className='container'>
            <h1>Componente Rodape:</h1>
            <h2>&copy; {props.ano}</h2>
        </div>
        
    )
}

export default Rodape