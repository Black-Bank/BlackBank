import React from "react";
import Navy from "./Component/NavBar/Navy";
import Footer from "./Component/Footer/Footer";
import Banner from "./Component/Banner/Banner";
import styles from "./App.module.css";


function App() {
  return (
    <div>
      <Navy />
      <div className={styles.Corpo}>
        <Banner />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
