import React, { useState, useEffect } from "react"
import Layout from '../components/layout';
import styles from './CV.module.css';


export default function CV() {
  const [scrollposition, setScrollposition] = useState(0);
  const [firstposition, setFirstposition] = useState(0.2);
  const [secondposition, setSecondposition] = useState(0.2);
  const handleScroll = () => {
    let position = (window.pageYOffset);
    let first = 0.2;
    let second = 0.2;
    if (position > 100){
      first = 1;
    }
    if (position > 300){
      second = 1;
    }
    setFirstposition(first);
    setSecondposition(second);
  }

useEffect(() => {
   window.addEventListener('scroll', handleScroll, { passive: true });
 });

return(
  <Layout>
  <div className={styles.body}>
    <div className={styles.alltags}>
      <div className={styles.first} style={{opacity:firstposition}}>First</div>
      <div className={styles.second} style={{opacity:secondposition}}>Second</div>
    </div>
  </div>
  </Layout>
)
}
