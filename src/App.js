import './App.css'
import SayMyName from './components/SayMyName' 
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {

  const nome = "Hoon"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <Frase/>
      <SayMyName nome="Emily"/>
      <SayMyName nome="Jake"/>
      <SayMyName nome = {nome}/>
      <Pessoa nome="Hee" idade="22" profissao="cuntor" foto="https://www.ufrgs.br/faunadigitalrs/wp-content/uploads/2022/03/Sapo-B-arenarum-Itapeva-1024x768.jpg"/>
      <List/>
    </div>
  );
}

export default App;
