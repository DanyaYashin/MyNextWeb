import React, { useState, useEffect, useRef } from "react"
import styles from './CV.module.css';
import { motion } from 'framer-motion';
import  CVtext1 from '../components/CVtext'
import  CVtext2 from '../components/CVtext2'
import  CVtext3 from '../components/CVtext3'
import { TextContext, BackTextContext, BackTagsContext, BackAnimatedContext } from '../components/layout.js'


let easingText = [0.16, 1, 0.3, 1];
let easingTags = [0, 0.55, 0.45, 1];

const textVariants = {
  initial: { x: -300, opacity: 0, transition: { duration: 1, ease: easingText } },
  exit: { x: 300, opacity: 0, transition: { duration: 1, ease: easingText } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {duration: 1.9, ease: easingText }
  }
};
const tagsVariants = {
  initial: { x: 100, opacity: 0, transition: { duration: 0.6, ease: easingTags } },
  exit: { x: 300, opacity: 0, transition: { duration: 0.6, ease: easingTags } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {delay: 0.1, duration: 0.9, ease: easingTags }
  }
};

export default function CV() {
  const text = React.useContext(TextContext)
  const backText = React.useContext(BackTextContext)
  const backTags = React.useContext(BackTagsContext)
  const backAnimated = React.useContext(BackAnimatedContext)
  const [tagPython, setTagPython] = React.useState(styles.tagpy0)
  const [tagDjango, setTagDjango] = React.useState(styles.tagdjng0)
  const [tagJS, setTagJS] = React.useState(styles.tagjs0)
  const [tagReact, setTagReact] = React.useState(styles.tagrct0)
  const [tagKonva, setTagKonva] = React.useState(styles.tagknv0)
  const [tagGatsby, setTagGatsby] = React.useState(styles.taggtsb0)
  const [tagNext, setTagNext] = React.useState(styles.tagnxt0)
  const [scrollCV, setScrollCV] = React.useState()
  const testRef = useRef()

  const handleScroll = () => {
    let position = (window.pageYOffset);
    let height = (window.innerHeight);
    if (position > 200){
      setTagPython(styles.tagpy)
    }
    else{
      setTagPython(styles.tagpy0)
    }
    if (position > 400){
      setTagDjango(styles.tagdjng)
    }
    else{
      setTagDjango(styles.tagdjng0)
    }
    if (position > 600){
      setTagJS(styles.tagjs)
    }
    else{
      setTagJS(styles.tagjs0)
    }
    if (position > 800){
      setTagReact(styles.tagrct)
    }
    else{
      setTagReact(styles.tagrct0)
    }
    if (position > 1000){
      setTagKonva(styles.tagknv)
    }
    else{
      setTagKonva(styles.tagknv0)
    }
    if (position > 1200){
      setTagGatsby(styles.taggtsb)
    }
    else{
      setTagGatsby(styles.taggtsb0)
    }
    if (position > 1400){
      setTagNext(styles.tagnxt)
    }
    else{
      setTagNext(styles.tagnxt0)
    }
    if (position < height*0.7){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
    for (var i = 0; i < 3; i++) {
      if (position > height*0.8*i & position < height*1.6*i){
        window.scrollTo({
          top: height*1.2*i,
          left: 0,
          behavior: 'smooth'
        })
      }
    }



  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  return(

  <motion.div initial="initial" animate="enter" exit="exit">
    <motion.div variants={textVariants}>
    <div className={backText}>

      <div className={styles.supBackText}>
        Наше дело не так однозначно, как может показаться: понимание сути ресурсосберегающих технологий способствует подготовке и реализации распределения внутренних резервов и ресурсов. Являясь всего лишь частью общей картины, активно развивающиеся страны третьего мира заблокированы в рамках своих собственных рациональных ограничений.
      </div>
    </div>
    <div className={text}>
    {testRef.current.offsetTop}
      <div className={styles.text1}>
        <CVtext1/>
      </div>
      <div className={styles.text2}>
        <CVtext2/>
      </div>
      <div className={styles.text3} ref = {testRef}>
        <CVtext3/>
      </div>
    </div>
    </motion.div>
    <div className={styles.tagsPosition}>
    <motion.div
      variants={tagsVariants}
      animate={{x: backAnimated}}
      >
    <motion.div className={backTags} >
      <div className={styles.supBackTags}>
        Повседневная практика показывает, что глубокий уровень погружения выявляет срочную потребность благоприятных перспектив.
      </div>
    </motion.div>
    </motion.div>
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
