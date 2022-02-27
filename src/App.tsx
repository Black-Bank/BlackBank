import React from "react";
import Navy from "./Component/NavBar/Navy";
import Footer from "./Component/Footer/Footer";
import Banner from "./Component/Banner/Banner";
import styles from "./App.module.css";
import Titulo from "./Component/Titulo/Titulo";


function App() {
  return (
    <div>
      <Navy />
      <div className={styles.Corpo}>
        <Banner />
        <Titulo/>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
