import styles from './Pessoa.module.scss'

function Pessoa({foto, idade, profissao,nome}){
    return(
        <div className={styles.pessoa}>
           <img src={foto} alt={nome} />
           <h2>Nome: {nome}</h2>
           <p>Idade: {idade}</p>
           <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa