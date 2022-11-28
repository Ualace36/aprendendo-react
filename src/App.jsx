import './App.scss'
import SayMyName from './components/SayMyName'
import Frase from './components/Frase'
import HelloWorld from './components/HelloWorld'
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div className="App">
      <h1>HelloWorld</h1>
      < SayMyName nome="Ualace"/>
      < SayMyName nome="Arthur"/>
      < Pessoa 
      nome="Ualace" 
      idade="37" 
      profissao="programador" 
      foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Dt_eLH02JhaCdjrsJklnD2k_awbJIFK7CGKeBW6vGhe0DXU9Yhrp3yfnc1EsGeKG6VM&usqp=CAU"
    />
       </div>
  )
}

export default App
