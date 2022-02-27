import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Nav, NavDropdown } from "react-bootstrap";
import * as styles from "./Navy.module.css";
import logo from "../../logo.jpeg";
export default function Navy() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <img src={logo} alt="logo" className={styles.default.logo} />
        <Container className={styles.default.Container}>
          <Navbar.Brand href="#home" className={styles.default.navTitle}>
            Black Executive
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
