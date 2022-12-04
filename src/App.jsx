import './App.scss'
import OutraLista from './components/listaComponents/OutraLista'



function App() {

    const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      {/* <h1>Testando Eventos</h1>
      <Eventos/>
      <Form /> */}
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      
       </div>
  )
}

export default App
