import styles from "./Titulo.module.css"

function Titulo(){
    
    return(
        <div className={styles.Text}>
            <h1>Nossa Missão é a transformação financeira da favela</h1><br/>
            <h2>Crie Já sua conta em Dolar</h2>
        </div>
    )
}

export default Titulo;