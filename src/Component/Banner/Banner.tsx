import styles from "./Banner.module.css";
import logo from "../../logo.jpeg"
function Banner(){
    return (
      <div className={styles.grafico}>
        <div className={styles.graficoImg}>
          <a href="https://www.google.com/" target="_blank">
            <img src={logo} alt="First img" />
          </a>
        </div>
          <div className={styles.coins}>
            <p><div> <img src="Dol.png" alt="" /> <input className={styles.DollBt} type="button" value="U$Dolar"/></div></p>
            <p><div><input className={styles.BitBt} type="button" value="B$Bitcoin"/></div></p>
            <p><div><input className={styles.RealBt} type="button" value="R$REAL" /></div></p>  
            
            
              
              
          </div>
      </div>
    );
}

export default Banner