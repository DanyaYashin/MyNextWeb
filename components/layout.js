import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import cvStyles from '../pages/CV.module.css';


export default function Layout(props) {
	const [menuActive, setMenuActive] = React.useState(false)
	const [menuDisc0, setMenuDisc0] = React.useState(styles.menu)
	const [menuDisc1, setMenuDisc1] = React.useState(styles.disc1)
	const [menuDisc2, setMenuDisc2] = React.useState(styles.disc2)
	const [menuDisc3, setMenuDisc3] = React.useState(styles.disc3)

	const [switchActive, setSwitchActive] = React.useState(false)
	const [switchCss, setSwitchCss] = React.useState(styles.switch)
	const [backSwitchCss, setBackSwitchCss] = React.useState(styles.backSwitch)
	const [text1Css, setText1Css] = React.useState(cvStyles.text1)

	const switchClick = () => {
		setSwitchActive(!switchActive);
    if (switchActive){
			setSwitchCss(styles.switch)
			setBackSwitchCss(styles.backSwitch)
			setText1Css(cvStyles.text1)
    }
    else {
			setSwitchCss(styles.switch0)
			setBackSwitchCss(styles.backSwitch0)
			setText1Css(cvStyles.BackText1)
    }
  }

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
	       <a className={menuDisc3}>
		       Портфолио
         </a>
				 <Link href="/">
	       <a className={menuDisc2}>
		       Контакты
	       </a>
				 </Link>
				 <Link href="/CV">
	       <a className={menuDisc1}>
		       CV
	       </a>
				 </Link>
	       <a className={menuDisc0} onClick={toggleMenu}>
	       </a>
				 <a className={backSwitchCss} onClick={switchClick}/>
				 <a className={switchCss} onClick={switchClick}/>

				 <div className={styles.children}>
				 		{props.children}
         </div>

    </div>
		</motion.div>
  );
}
