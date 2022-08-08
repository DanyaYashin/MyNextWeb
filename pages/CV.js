import React, { useState, useEffect } from "react"
import styles from './CV.module.css';
import { motion } from 'framer-motion';
import  CVtext1 from '../components/CVtext'
import  CVtext2 from '../components/CVtext'
import {text1Css} from '../components/layout';

let easingText = [0.16, 1, 0.3, 1];
let easingTags = [0, 0.55, 0.45, 1];

const textVariants = {
  exit: { x: -300, opacity: 0, transition: { duration: 1, ease: easingText } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {duration: 1.9, ease: easingText }
  }
};
const tagsVariants = {
  exit: { x: 100, opacity: 0, transition: { duration: 0.6, ease: easingTags } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {delay: 0.1, duration: 0.9, ease: easingTags }
  }
};

export default function CV() {
  const [tagPython, setTagPython] = React.useState(styles.tagpy0)
  const [tagDjango, setTagDjango] = React.useState(styles.tagdjng0)
  const [tagJS, setTagJS] = React.useState(styles.tagjs0)
  const [tagReact, setTagReact] = React.useState(styles.tagrct0)
  const [tagKonva, setTagKonva] = React.useState(styles.tagknv0)
  const [tagGatsby, setTagGatsby] = React.useState(styles.taggtsb0)
  const [tagNext, setTagNext] = React.useState(styles.tagnxt0)
  const handleScroll = () => {
    let position = (window.pageYOffset);
    if (position > 200){
      setTagPython(styles.tagpy)
    }
    if (position > 400){
      setTagDjango(styles.tagdjng)
    }
    if (position > 600){
      setTagJS(styles.tagjs)
    }
    if (position > 800){
      setTagReact(styles.tagrct)
    }
    if (position > 1000){
      setTagKonva(styles.tagknv)
    }
    if (position > 1200){
      setTagGatsby(styles.taggtsb)
    }
    if (position > 1400){
      setTagNext(styles.tagnxt)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  return(
  <motion.div initial="exit" animate="enter" exit="exit">
    <div className={styles.allText}>
    <motion.div variants={textVariants}>
      <div className={styles.text1}>
        <CVtext1/>
      </div>
      <div className={styles.text2}>
        <CVtext2/>
      </div>
    </motion.div>
    </div>
    <div className={styles.Alltags}>
    <motion.div variants={tagsVariants}>
      <div className={styles.alltags}>
        <div className={tagPython}>Python</div>
        <div className={tagDjango}>Django</div>
        <div className={tagJS}>JS</div>
        <div className={tagReact}>React</div>
        <div className={tagKonva}>Konva</div>
        <div className={tagGatsby}>Gatsby</div>
        <div className={tagNext}>Next</div>
      </div>
    </motion.div>
    </div>
  </motion.div>
  );
}
