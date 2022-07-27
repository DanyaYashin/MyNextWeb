import React, { useState, useEffect } from "react"
import Layout from '../components/layout';
import styles from './CV.module.css';
import { motion } from 'framer-motion';

let easing = [0.16, 1, 0.3, 1];

const tagsVariants = {
  exit: { x: 100, opacity: 0, transition: { duration: 0.6, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.9, ease: easing }
  }
};

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
  <motion.div initial="exit" animate="enter" exit="exit">
  <Layout>
  <div className={styles.body}>
    <motion.div variants={tagsVariants}>
    <div className={styles.alltags}>
      <div className={styles.first} style={{opacity:firstposition}}>First</div>
      <div className={styles.second} style={{opacity:secondposition}}>Second</div>
    </div>
    </motion.div>
  </div>
  </Layout>
  </motion.div>
)
}
