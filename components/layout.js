import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"

const name = 'MyNextWeb';

export default function Layout({ children, home }) {
	const [menuActive, setMenuActive] = React.useState(false)
	const [menuDisc1, setMenuDisc1] = React.useState(styles.disc1)
	const [menuDisc2, setMenuDisc2] = React.useState(styles.disc2)
	const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (menuActive){
      setMenuDisc1(styles.disc1)
			setMenuDisc2(styles.disc2)
    }
    else {
      setMenuDisc1(styles.disc11)
			setMenuDisc2(styles.disc22)
    }
  }
	const closeMenu = () =>{
	 setMenuDisc1(styles.disc1)
	 setMenuDisc2(styles.disc2)
 }
  return (
    <div className={styles.container}>
	       <a className={styles.disc4}>
		       <div>Messages</div>
	       </a>
	       <a className={styles.disc3}>
		       <div>Photos</div>
         </a>
	       <a className={menuDisc2}>
		       <div>Profile</div>
	       </a>
	       <a className={menuDisc1}>
		       <div>Likes</div>
	       </a>
	       <a className={styles.menu} onClick={toggleMenu}>
		       Menu
	       </a>
      <main>{children}</main>
    </div>
  );
}
