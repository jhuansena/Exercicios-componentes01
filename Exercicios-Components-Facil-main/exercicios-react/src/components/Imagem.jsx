import '../StyleAll.css'


function Imagem(props){

    return(
        <div className='container'>
            <h1>Componente Imagem:</h1>
            <img src={props.imagem} alt=""/>
        </div>
        
    )
}

export default Imagem