import './App.scss'
import Condicional from './components/CondicionaisComponents/Condicional'
import Eventos from './components/Eventos'
import Form from './components/Form'


function App() {
  return (
    <div className="App">
      {/* <h1>Testando Eventos</h1>
      <Eventos/>
      <Form /> */}
      <h1>Renderização Condicional</h1>
      <Condicional/>
       </div>
  )
}

export default App
