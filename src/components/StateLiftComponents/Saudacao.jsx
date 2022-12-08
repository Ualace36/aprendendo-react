function Saudacao({nome}) {

   function gerarSaudacao(algumNome) {
    
    return `Olá, ${algumNome}, seja Bem-vindo em nosso ambiene`
   }

    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao