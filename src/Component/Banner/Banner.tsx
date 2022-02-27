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
      </div>
    );
}

export default Banner