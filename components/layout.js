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

	const [supportDisc1, setSupportDisc1] = React.useState(styles.supdisc1)
	const [supportDisc2, setSupportDisc2] = React.useState(styles.supdisc2)
	const [supportDisc3, setSupportDisc3] = React.useState(styles.supdisc3)

	const [switchActive, setSwitchActive] = React.useState(false)
	const [switchCss, setSwitchCss] = React.useState(styles.switch)
	const [backSwitchCss, setBackSwitchCss] = React.useState(styles.backSwitch)
	const [allTextCss, setAllTextCss] = React.useState(cvStyles.allText)

	const switchClick = () => {
		setSwitchActive(!switchActive);
    if (switchActive){
			setSwitchCss(styles.switch)
			setBackSwitchCss(styles.backSwitch)
			setAllTextCss(cvStyles.allTtext)
    }
    else {
			setSwitchCss(styles.switch0)
			setBackSwitchCss(styles.backSwitch0)
			setAllTextCss(cvStyles.BackAllText)
    }
  }

	const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (menuActive){
			setMenuDisc0(styles.menu)
      setMenuDisc1(styles.disc1)
			setMenuDisc2(styles.disc2)
			setMenuDisc3(styles.disc3)
			setSupportDisc1(styles.supdisc1)
			setSupportDisc2(styles.supdisc2)
			setSupportDisc3(styles.supdisc3)
    }
    else {
			setMenuDisc0(styles.menu00)
      setMenuDisc1(styles.disc11)
			setMenuDisc2(styles.disc22)
			setMenuDisc3(styles.disc33)
			setSupportDisc1(styles.supdisc11)
			setSupportDisc1(styles.supdisc22)
			setSupportDisc1(styles.supdisc33)
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
		<div className={styles.allDiscMenu} onMouseLeave={closeMenu}>
			<div className={supportDisc3}/>
			<Link href="/gallery">
	    	<a className={menuDisc3}>
		    	gallery
        </a>
			</Link>
			<div className={supportDisc2}/>
			<Link href="/">
	      <a className={menuDisc2}>
		      contacts
	      </a>
			</Link>
			<div className={supportDisc1}/>
			<Link href="/CV">
	      <a className={menuDisc1}>
		      CV
	      </a>
			</Link>
	    <a className={menuDisc0} onClick={toggleMenu}/>
		</div>
		<div className={styles.switchButton}>
			<a className={backSwitchCss} onClick={switchClick}/>
			<a className={switchCss} onClick={switchClick}/>
		</div>
		<div className={styles.children}>
			{props.children}
    </div>
		</motion.div>
  );
}
