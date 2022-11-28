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
      foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkGVFGuDpI6YyxBy3BRTuqE4BZPUEvT4Dhokcts11l934TAL_AnpKmBFlZbHktI1Tv88&usqp=CAU"
    />
       </div>
  )
}

export default App
