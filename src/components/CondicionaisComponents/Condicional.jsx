import { useState } from "react";

function Condicional() {
   
    const [email,setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault() 
        setUserEmail(email)
        console.log(userEmail);
        return (
            console.log("Seu e-mail foi enviado")
        )
    }
    
    function limparEmail(){
        setUserEmail("")
        
    }
    

    return(
        <div>
            <form action="">
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Envia-email</button>
                {userEmail && (<div>
                   <p> O e-mail do usuário é: {userEmail}</p>
                   <button onClick={limparEmail}>limpar e-mail</button>
                </div>)}
            </form>
        </div>
    )
}
   
    export default Condicional
