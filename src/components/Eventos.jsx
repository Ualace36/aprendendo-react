import Button from "./EventosComponents/Button";

function Evento(){

    function meuEvento(){
       console.log("Ativando Primeiro evento!!! " );
    }

    function segundoEvento(){
        return(
            console.log("Ativando o Segundo Evento!!!")
        )
    }

    return(
        <div>
         <p>Clique para disparar um evento</p>
         <Button event={meuEvento} text="Primeiro Evento"/>
         <Button event={segundoEvento} text="Segundo Evento"/>
         

        </div>
     
    )
}

export default Evento