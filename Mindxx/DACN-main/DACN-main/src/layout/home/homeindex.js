import React from "react";
import Header from "../../components/Navbar/header";


import styles from "./homeindex.module.css"
function Home({ children }) {
  
  return (
    <div>
      <Header></Header>
      <div className= {styles.Fix}>
        <div className={styles.fixcontent}>{children}
        
        </div>
        
        
        <div className={styles.wrapp} >
          {/* <Chatclock/> */}
          
          {/* <Chat/>
          <Clock/> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
