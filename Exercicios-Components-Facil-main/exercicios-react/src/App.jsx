import Titulo from "./components/Titulo";
import Paragrafo from "./components/Paragrafo";
import Imagem from "./components/Imagem";
import Pato from './assets/pato.png'
import Botao from "./components/botao";
import Usuario from "./components/Usuario";
import Produto from "./components/Produto";
import Saudacao from "./components/Saudacao";
import Card from "./components/Card";
import Rodape from "./components/Rodape";
import Mensagem from "./components/Mensagem";

function App(){

  return(
    <div className="components">
    <Titulo titulo="Isto é um titulo em React"/>
    <Paragrafo paragrafo="Isto é um paragrafo"/>
    <Imagem imagem={Pato}/>
    <Botao Botao="Clique aqui!"/>
    <Usuario nome="Giovany Piveta" idade="25"/>
    <Produto nome="Celular Xiaomi" preco="R$2500"/>
    <Saudacao nome="Giovany"/>
    <Card titulo="Tênis Nike" descrição="Quer esteja começando sua jornada de corrida ou seja um especialista ansioso para mudar seu ritmo, o Downshifter 13 está pronto para o passeio."/>
    <Rodape ano="2026"/>
    <Mensagem Mensagem="Mensagem"/>
    </div>
  )
}

export default App