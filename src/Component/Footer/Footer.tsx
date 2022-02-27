import styles from "./Footer.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import {RiBitCoinFill} from "react-icons/ri"

export default function Footer() {
  return (
    <div className={styles.AllFooter}>
      <Navbar
        className={styles.Footer}
        variant="light"
        fixed="bottom"
        expand="lg"
        text-align="center"
        collapseOnSelect
      >
        <Nav defaultActiveKey="/home">
          <div className={styles.Btc}>
            {" "}
            <RiBitCoinFill />
          </div>
        </Nav>
        <Nav className={styles.links}>
          <Nav.Link
            href="black-gfz5tri3q-blackbankteam.vercel.app"
            target="_blank"
          >
            {" "}
            <img
              src="https://www.mundotech.com.br/img/ico-facebook.png"
              alt="imagem amarela do link do facebook"
            ></img>
          </Nav.Link>
          <Nav.Link
            href="black-gfz5tri3q-blackbankteam.vercel.app"
            target="_blank"
          >
            <img
              src="https://www.mundotech.com.br/img/ico-instagram.png"
              alt="imagem amarela do link do instagram"
            ></img>
          </Nav.Link>
          <Nav.Link
            href="black-gfz5tri3q-blackbankteam.vercel.app"
            target="_blank"
          >
            <img
              src="https://www.mundotech.com.br/img/ico-twitter.png"
              alt="imagem amarela do link do twitter"
            ></img>
          </Nav.Link>
          <Nav.Link
            href="black-gfz5tri3q-blackbankteam.vercel.app"
            target="_blank"
          >
            <img
              src="https://www.mundotech.com.br/img/ico-linkedin.png"
              alt="imagem amarela do link do linkedin"
            ></img>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar className={styles.Footer2} fixed="bottom" collapseOnSelect>
        <h6 className={styles.text}>
          Para mais informações entre em Contato em nossas mídias sociais!
        </h6>
      </Navbar>
    </div>
  );
}
