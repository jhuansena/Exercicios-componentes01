import '../StyleAll.css'


function Card(props){

    return(
        <div className='container'>
            <h1>Componente Card:</h1>
            <h2>{props.titulo}</h2>
            <p>{props.descrição}</p>
        </div>
        
    )
}

export default Card