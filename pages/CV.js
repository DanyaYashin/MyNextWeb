import React, { useState, useEffect, useRef } from "react"
import styles from './CV.module.css';
import { motion } from 'framer-motion';
import CVtext1 from '../components/CVtext'
import CVtext2 from '../components/CVtext2'
import CVtext3 from '../components/CVtext3'
import CVtext4 from '../components/CVtext4'
import CVtext5 from '../components/CVtext5'
import CVtext6 from '../components/CVtext6'
import { TextContext, BackTextContext, BackTagsContext, BackAnimatedContext, BackAnimated } from '../components/layout.js'
import Link from 'next/link';



let easingText = [0.16, 1, 0.3, 1];
let easingTags = [0, 0.55, 0.45, 1];

const textVariants = {
	initial: { x: -300, opacity: 0, transition: { duration: 1, ease: easingText } },
	exit: { x: 300, opacity: 0, transition: { duration: 1, ease: easingText } },
	enter: {
		x: 0,
		opacity: 1,
		transition: { duration: 1.9, ease: easingText }
	}
};
const backTextVariants = {
	initial: { y: -300, opacity: 0, transition: { duration: 1, ease: easingText } },
	exit: { y: -300, opacity: 0, transition: { duration: 1, ease: easingText } },
	enter: {
		y: 0,
		opacity: 1,
		transition: { duration: 1.9, ease: easingText }
	}
};
const tagsVariants = {
	initial: { x: 100, opacity: 0, transition: { duration: 0.6, ease: easingTags } },
	exit: { x: 300, opacity: 0, transition: { duration: 0.6, ease: easingTags } },
	enter: {
		x: 0,
		opacity: 1,
		transition: { delay: 0.1, duration: 0.9, ease: easingTags }
	}
};


const delay = ms => new Promise(
	resolve => setTimeout(resolve, ms)
);

export default function CV() {
	const text = React.useContext(TextContext)
	const backText = React.useContext(BackTextContext)
	const backTags = React.useContext(BackTagsContext)
	const backAnimated = React.useContext(BackAnimatedContext)
	const backAnimated2 = React.useContext(BackAnimated)

	const [tagPython, setTagPython] = React.useState(styles.tagpy0)
	const [tagDjango, setTagDjango] = React.useState(styles.tagdjng0)
	const [tagJS, setTagJS] = React.useState(styles.tagjs0)
	const [tagReact, setTagReact] = React.useState(styles.tagrct0)
	const [tagKonva, setTagKonva] = React.useState(styles.tagknv0)
	const [tagGatsby, setTagGatsby] = React.useState(styles.taggtsb0)
	const [tagNext, setTagNext] = React.useState(styles.tagnxt0)
	const [scrollCV, setScrollCV] = React.useState()
	const [text1Opacity, setT1Opacity] = React.useState(0)
	const [text2Opacity, setT2Opacity] = React.useState(0)
	const [text3Opacity, setT3Opacity] = React.useState(0)
	const [text4Opacity, setT4Opacity] = React.useState(0)
	const [text5Opacity, setT5Opacity] = React.useState(0)
	const [text6Opacity, setT6Opacity] = React.useState(0)

	const text1Ref = useRef(null)
	const text2Ref = useRef(null)
	const text3Ref = useRef(null)
	const text4Ref = useRef(null)
	const text5Ref = useRef(null)
	const text6Ref = useRef(null)

	const pythonRef = useRef(null)
	const djangoRef = useRef(null)
	const jsRef = useRef(null)
	const reactRef = useRef(null)
	const konvaRef = useRef(null)
	const gatsbyRef = useRef(null)
	const nextRef = useRef(null)

	const getRefOffset = (ref) => {
		try {
			return ref.current.offsetTop
		}
		catch (error) {
			return 0
		}
	}

	const handleScroll = async () => {
		let position = (window.pageYOffset);
		let height = (window.innerHeight);
		if (position > getRefOffset(pythonRef)) {
			setTagPython(styles.tagpy)
		}
		if (position > getRefOffset(djangoRef)) {
			setTagDjango(styles.tagdjng)
		}
		if (position > getRefOffset(jsRef)) {
			setTagJS(styles.tagjs)
		}
		if (position > getRefOffset(reactRef)) {
			setTagReact(styles.tagrct)
		}
		if (position > getRefOffset(konvaRef)) {
			setTagKonva(styles.tagknv)
		}
		if (position > getRefOffset(gatsbyRef)) {
			setTagGatsby(styles.taggtsb)
		}
		if (position > getRefOffset(nextRef)) {
			setTagNext(styles.tagnxt)
		}

		await delay(200);
		var opacityTextList = [setT1Opacity, setT2Opacity, setT3Opacity, setT4Opacity, setT5Opacity, setT6Opacity]
		var textList = [getRefOffset(text1Ref), getRefOffset(text2Ref), getRefOffset(text3Ref), getRefOffset(text4Ref), getRefOffset(text5Ref), getRefOffset(text6Ref)]
		for (var i = 0; i < 7; i++) {
			if (position > textList[i - 1] - 420) {
				opacityTextList[i - 1](1)
			}
		}

	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
	});

	return (

		<motion.div initial="initial" animate="enter" exit="exit">
			<motion.div className={backText} variants={backTextVariants} animate={{ y: -backAnimated2 }}>
				<div className={styles.supBackText}>
					Текстовые блоки позади созданы как отдельные js файлы содержимое которых передаётся в файл этой страницы. Каждый из блоков текста привязан к своему якорю useRef для того чтобы создать эффект доскролла до ближайшего блока.
				</div>
			</motion.div>
			<motion.div variants={textVariants}>
				<div className={text}>
					<div className={styles.text1} ref={text1Ref} style={{ opacity: text1Opacity }}>
						<div ref={pythonRef} />
						<CVtext1 />
					</div>
					<div className={styles.text2} ref={text2Ref} style={{ opacity: text2Opacity }}>
						<div ref={djangoRef} />
						<CVtext2 />
						<div ref={jsRef} />
					</div>
					<div className={styles.text3} ref={text3Ref} style={{ opacity: text3Opacity }}>
						<CVtext3 />
						<div ref={reactRef} />
					</div>
					<div className={styles.text4} ref={text4Ref} style={{ opacity: text4Opacity }}>
						<CVtext4 />
						<div ref={konvaRef} />
					</div>
					<div className={styles.text5} ref={text5Ref} style={{ opacity: text5Opacity }}>
						<CVtext5 />
						<div ref={gatsbyRef} />
						<div ref={nextRef} />
					</div>
					<div className={styles.text6} ref={text6Ref} style={{ opacity: text6Opacity }}>
						<CVtext6 />
					</div>
				</div>
			</motion.div>
			<div className={styles.tagsPosition}>
				<motion.div
					variants={tagsVariants}
					animate={{ x: backAnimated2 }}
				>
					<motion.div className={backTags} >
						<div className={styles.supBackTags}>
							Блок с тегами заполняется постепенно за счёт React useEffect использующего функцию handleScroll и в нужный момент меняющего стили каждого тега при помощи React useState.
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
			<motion.div className={styles.emptyBlock} variants={tagsVariants} animate={{ y: backAnimated2 }}>
				<div className={styles.emptyText}>
					Все блоки с комментариями были написаны с использованием библиотеки Framer Motion. Библиотека позволяет заменить обычное окружение div на motion.div. К данному окружению можно применить так называемые варианты, чтобы улучшить анимацию.
				</div>
			</motion.div>
		</motion.div>

	);
}
