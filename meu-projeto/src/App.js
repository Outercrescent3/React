import './App.css';
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase'
import SayMyName from './components/SaymyName'
import Pessoa from './components/Pessoa'

function App() {

const nome = 'Maria'

  return (
   <div className="App">
     <h2>Alterando o JSX</h2>
     
     <HelloWorld />
     <Frase />
     <SayMyName nome="Francisco"/>
     <SayMyName nome="Catrine"/>
     <SayMyName nome = {nome} />

     <Pessoa 
     nome="Francisco"
     idade="22"
     profisao="Programador"
     foto='https://via.placeholder.com/150'
     />
   </div>
  );
}

export default App;
