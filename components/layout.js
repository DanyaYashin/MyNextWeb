import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"
import { motion } from 'framer-motion';


export default function Layout(props) {
	const [menuActive, setMenuActive] = React.useState(false)
	const [menuDisc0, setMenuDisc0] = React.useState(styles.menu)
	const [menuDisc1, setMenuDisc1] = React.useState(styles.disc1)
	const [menuDisc2, setMenuDisc2] = React.useState(styles.disc2)
	const [menuDisc3, setMenuDisc3] = React.useState(styles.disc3)
	const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (menuActive){
			setMenuDisc0(styles.menu)
      setMenuDisc1(styles.disc1)
			setMenuDisc2(styles.disc2)
			setMenuDisc3(styles.disc3)
    }
    else {
			setMenuDisc0(styles.menu00)
      setMenuDisc1(styles.disc11)
			setMenuDisc2(styles.disc22)
			setMenuDisc3(styles.disc33)
    }
  }
	const closeMenu = () =>{
	 setMenuDisc0(styles.menu)
	 setMenuDisc1(styles.disc1)
	 setMenuDisc2(styles.disc2)
	 setMenuDisc3(styles.disc3)
 }
  return (
		<motion.div initial="exit" animate="enter" exit="exit">
    <div className={styles.container}>
	       <a className={menuDisc3} onClick={closeMenu}>
		       <div>Портфолио</div>
         </a>
				 <Link href="/">
	       <a className={menuDisc2} onClick={closeMenu}>
		       <div>Контакты</div>
	       </a>
				 </Link>
				 <Link href="/CV">
	       <a className={menuDisc1} onClick={closeMenu}>
		       <div>CV</div>
	       </a>
				 </Link>
	       <a className={menuDisc0} onClick={toggleMenu}>
	       </a>
				 <div className={styles.children}>
				 		{props.children}
         </div>
    </div>
		</motion.div>
  );
}
