import { useState } from 'react'
import './App.scss'
import OutraLista from './components/listaComponents/OutraLista'
import Saudacao from './components/StateLiftComponents/Saudacao'
import SeuNome from './components/StateLiftComponents/SeuNome'



function App() {

  const [nome, setNome] = useState()  
  const meusItens = ['React', 'Vue', 'Angular']
    
  return (
    <div className="App">
      {/* <h1>Testando Eventos</h1>
      <Eventos/>
      <Form /> */}
      {/* <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/> */}
      <h1>State Lift</h1>
      <SeuNome setNome = {setNome}/>
      <Saudacao nome={nome}/>
       </div>
  )
}

export default App
