import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import cvStyles from '../pages/CV.module.css';

let easingSwitch = [0.16, 1, 0.3, 1];

const switchVariants = {
  initial: { y: 100, opacity: 0, transition: { duration: 0.6, ease: easingSwitch } },
  exit: { y: 300, opacity: 0, transition: { duration: 0.6, ease: easingSwitch } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {delay: 0.1, duration: 0.9, ease: easingSwitch }
  }
};


export const TextContext = React.createContext(null)
export const BackTextContext = React.createContext(null)
export const BackTagsContext = React.createContext(null)
export const BackAnimatedContext = React.createContext(null)
export const BackAnimated = React.createContext(null)
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
	const [backTextCss, setBackTextCss] = React.useState(cvStyles.hideBackText)
	const [backTagsCss, setBackTagsCss] = React.useState(cvStyles.hideBackTags)
	const [buttonContext, setButtonContext] = React.useState(styles.hideBackButton)
	const [backMenu, setBackMenu] = React.useState(styles.hideBackMenu)
	const [backAnimated, setBackAnimated] = React.useState(700)





	const switchClick = () => {
		setSwitchActive(!switchActive);
    if (switchActive){
			setSwitchCss(styles.switch)
			setBackSwitchCss(styles.backSwitch)
			setAllTextCss(cvStyles.allText)
			setBackTextCss(cvStyles.hideBackText)
			setBackTagsCss(cvStyles.hideBackTags)
			setButtonContext(styles.hideBackButton)
			setBackMenu(styles.hideBackMenu)
			setBackAnimated(700)

    }
    else {
			setSwitchCss(styles.switch0)
			setBackSwitchCss(styles.backSwitch0)
			setAllTextCss(cvStyles.backAllText)
			setBackTextCss(cvStyles.backText)
			setBackTagsCss(cvStyles.backTags)
			setButtonContext(styles.backButton)
			setBackMenu(styles.backMenu)
			setBackAnimated(0)

    }
  }
  const ref = React.useRef();
  React.useEffect(() => {
      ref.current.addEventListener("transitionstart", () => {
        setSwitchAnimation(1)
        setSupportDisc1(styles.supdisc11TransitionStart)
        setSupportDisc2(styles.supdisc22TransitionStart)
        setSupportDisc3(styles.supdisc33TransitionStart)
      });
   }, []);
 const transitionEndAnimated = () =>{
   setSwitchAnimation(0)
   setSupportDisc1(styles.supdisc11hover)
   setSupportDisc2(styles.supdisc22hover)
   setSupportDisc3(styles.supdisc33hover)
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
      setSupportDisc2(styles.supdisc22)
      setSupportDisc3(styles.supdisc33)
    }
  }
	const closeMenu = () =>{
	 setMenuDisc0(styles.menu)
	 setMenuDisc1(styles.disc1)
	 setMenuDisc2(styles.disc2)
	 setMenuDisc3(styles.disc3)

 }

 const [switchAnimation, setSwitchAnimation] = React.useState()


 const menuAnimationOver1 = () =>{
  setSupportDisc1(styles.supdisc11hover)
 }
 const menuAnimationOver2 = () =>{
  setSupportDisc2(styles.supdisc22hover)
 }
 const menuAnimationOver3 = () =>{
  setSupportDisc3(styles.supdisc33hover)
 }
 const menuAnimationOut1 = () =>{
  setSupportDisc1(styles.supdisc11)
 }
 const menuAnimationOut2 = () =>{
  setSupportDisc2(styles.supdisc22)
 }
 const menuAnimationOut3 = () =>{
  setSupportDisc3(styles.supdisc33)
 }



  return (

		<motion.div initial="initial" animate="enter" exit="exit">
    <div className={supportDisc1}/>
		<motion.div className={backMenu} animate={{
			y: -backAnimated
		}}>
			<div className={styles.supBackMenu}>
				Безусловно, сплочённость команды профессионалов требует от нас анализа поставленных обществом задач.
			</div>
		</motion.div>

		<div className={styles.allDiscMenu}>
			<div className={supportDisc3}/>
			<Link href="/gallery">
	    	<a className={menuDisc3} onMouseOver={menuAnimationOver3} onMouseOut={menuAnimationOut3}>
		    	gallery
        </a>
			</Link>
			<div className={supportDisc2}/>
			<Link href="/">
	      <a className={menuDisc2} onMouseOver={menuAnimationOver2} onMouseOut={menuAnimationOut2}>
		      contacts
	      </a>
			</Link>
      <div className={supportDisc1}/>
			<Link href="/CV">
	      <a className={menuDisc1} onMouseOver={menuAnimationOver1} onMouseOut={menuAnimationOut1}>
		      CV
	      </a>
			</Link>
	    <a className={menuDisc0} onClick={toggleMenu} ref={ref}
       onTransitionEnd={transitionEndAnimated}>
       {switchAnimation}
      </a>
		</div>
		<motion.div className={buttonContext} animate={{
			y: backAnimated
		}}>
			И нет сомнений, что представители современных социальных резервов призваны к ответу.
		</motion.div>
		<div className={styles.switchButton}>
			<a className={backSwitchCss} onClick={switchClick}/>
			<a className={switchCss} onClick={switchClick}/>
		</div>
    <BackAnimated.Provider value={backAnimated}>
		<TextContext.Provider value={allTextCss}>
		<BackTextContext.Provider value={backTextCss}>
		<BackTagsContext.Provider value={backTagsCss}>
		<BackAnimatedContext.Provider value={backTagsCss}>
		<div className={styles.children}>
			{props.children}
    </div>
		</BackAnimatedContext.Provider>
		</BackTagsContext.Provider>
		</BackTextContext.Provider>
		</TextContext.Provider>
    </BackAnimated.Provider>
		</motion.div>
  );
}
