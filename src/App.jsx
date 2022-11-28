import './App.scss'
import Frase from './components/Frase'
import HelloWorld from './components/HelloWorld'

function App() {
  function sum(a,b) {
    return a + b
  }
  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Dt_eLH02JhaCdjrsJklnD2k_awbJIFK7CGKeBW6vGhe0DXU9Yhrp3yfnc1EsGeKG6VM&usqp=CAU"
  const name = "Uálace"
  //nome todo maiúsculo
  const newName = name.toUpperCase()

  return (
    <div className="App">
      <h1>HelloWorld</h1>
      <h1>Olá, {newName}</h1>
      <h2><Frase></Frase></h2>
      <p>Meus segundo projeto no ar</p>
       <p>soma: {sum(2,5)}</p> 
       <img src={url}alt="Animes: One Peace"   /> 
       </div>
  )
}

export default App
