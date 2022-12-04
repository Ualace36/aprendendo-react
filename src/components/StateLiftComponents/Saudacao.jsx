function Saudacao({nome}) {

   function gerarSaudacao(algumNome) {
    
    return `Olá, ${algumNome}, seja Bem-vindo`
   }

    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao