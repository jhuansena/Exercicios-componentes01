import '../StyleAll.css'

function Paragrafo(props){

    return(
        <div className='container'>
            <h1>Componente Paragrafo:</h1>
            <p >{props.paragrafo}</p>
        </div>
        
    )
}

export default Paragrafo