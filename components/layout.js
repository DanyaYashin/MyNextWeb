import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"


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
    <div className={styles.container}>
	       <a className={menuDisc3}>
		       <div>Портфолио</div>
         </a>
	       <a className={menuDisc2}>
		       <div>Контакты</div>
	       </a>
	       <a className={menuDisc1}>
		       <div>CV</div>
	       </a>
	       <a className={menuDisc0} onClick={toggleMenu}>
	       </a>
				 <div className={styles.children}>
				 		{props.children}
         </div>
    </div>
  );
}
