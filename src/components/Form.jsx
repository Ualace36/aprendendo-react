function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuário");
    }

    return(
        <div>
            <h1>Meu cadastro </h1>
            <form onSubmit={cadastrarUsuario}>
                <dir>
                    <input type="text" placeholder="Digite seu nome" />
                </dir>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form