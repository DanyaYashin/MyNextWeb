import React, { useState, useEffect, useRef } from "react"
import styles from './gallery.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image'
import img from '../public/NextWebGallery.jpg'
import img2 from '../public/NextWebGallery2.jpg'
import img3 from '../public/NextWebGallery3.jpg'

let easingImg = [0.16, 1, 0.3, 1];

const imgVariants = {
  initial: { x: -300, opacity: 0, transition: { duration: 1, ease: easingImg } },
  exit: { x: 300, opacity: 0, transition: { duration: 1, ease: easingImg } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {duration: 1.9, ease: easingImg }
  }
};


export default function galery() {
  const [transform, setTransform] = React.useState({x: 0, y: 0})
  const [gallery, setGallery] = React.useState(styles.imgGallery0)
  const [shadow, setShadow] = React.useState(styles.imgShadow0)
  const [frame, setFrame] = React.useState(styles.imgFrame0)
  const [changeImg, setChangeImg] = React.useState(img)
  const clickImage = () => {
    setChangeImg(img2)
  };
  const ref = useRef();
  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    const handleWindowMouseMove = event => {
      if(event.clientX > window.innerWidth/2-25 & event.clientX < window.innerWidth/2+25 & event.clientY < window.innerHeight/2+25 & event.clientY > window.innerHeight/2-25){
        setGallery(styles.imgGallery0)
        setShadow(styles.imgShadow0)
        setFrame(styles.imgFrame0)
      }
      else if (event.clientX < window.innerWidth/2-25 & event.clientY < window.innerHeight/2-25){
        setTransform({
          x: 5,
          y: -5,
        })
        setGallery(styles.imgGallery11)
        setShadow(styles.imgShadow11)
        setFrame(styles.imgFrame11)
      }
      else if (event.clientX > window.innerWidth/2+25 & event.clientY > window.innerHeight/2+25){
        setTransform({
          x: -5,
          y: 5,
        })
        setGallery(styles.imgGallery22)
        setShadow(styles.imgShadow22)
        setFrame(styles.imgFrame22)
      }
      else if (event.clientX > window.innerWidth/2+25 & event.clientY < window.innerHeight/2-25){
        setTransform({
          x: 5,
          y: 5,
        })
        setGallery(styles.imgGallery21)
        setShadow(styles.imgShadow21)
        setFrame(styles.imgFrame21)
      }
      else if (event.clientX < window.innerWidth/2-25 & event.clientY > window.innerHeight/2+25){
        setTransform({
          x: -5,
          y: -5,
        })
        setGallery(styles.imgGallery12)
        setShadow(styles.imgShadow12)
        setFrame(styles.imgFrame12)
      }
      else if(window.innerWidth/2-25 < event.clientX < window.innerWidth/2+25 & event.clientY < window.innerHeight/2-25){
        setGallery(styles.imgGallery1)
        setShadow(styles.imgShadow1)
        setFrame(styles.imgFrame1)
      }
      else if(window.innerWidth/2-25 < event.clientX < window.innerWidth/2+25 & event.clientY > window.innerHeight/2+25){
        setGallery(styles.imgGallery2)
        setShadow(styles.imgShadow2)
        setFrame(styles.imgFrame2)
      }
      else if(window.innerWidth/2-25 < event.clientX &  window.innerHeight/2-25 < event.clientY < window.innerHeight/2+25){
        setGallery(styles.imgGallery3)
        setShadow(styles.imgShadow3)
        setFrame(styles.imgFrame3)
      }
      else if(window.innerWidth/2+25 > event.clientX &  window.innerHeight/2-25 < event.clientY < window.innerHeight/2+25){
        setGallery(styles.imgGallery4)
        setShadow(styles.imgShadow4)
        setFrame(styles.imgFrame4)
      }


    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  });


  return(
    <motion.div initial="initial" animate="enter" exit="exit">
    <motion.div variants={imgVariants}>
    <div className={styles.supportImg} onClick={clickImage}>
      <div className={gallery} >
        <Image
          src={changeImg}
        />
      </div>
      <div className={shadow}/>
      <div className={frame}/>
      <div ref={ref} />
    </div>

    </motion.div>
    </motion.div>
  );
}
