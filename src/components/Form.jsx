import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name);
        console.log(password);
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
    }
    
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro </h1>
            <form onSubmit={cadastrarUsuario}>
                <dir>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" 
                    onChange={(e) => setName(e.target.value)}/>
                </dir>
                <dir>
                    <label htmlFor="password">Senha:</label>
                    <input type="text" id="password" password="password" placeholder="Digite sua senha" 
                    onChange={(e) => setPassword(e.target.value)} />
                </dir>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form