import React from 'react'
import './intro.css'
import bg from "../../assets/me.png";
import { Link } from "react-scroll";
import hire from '../../assets/hire.png'
import {motion} from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: -500,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};


const Intro = () => {
  return (
    <section id='intro'>
        <motion.div className='introContent' variants = {textVariants} initial="initial" animate='animate'>
            <motion.span variants = {textVariants} className='hello'>Hello,</motion.span>
            <motion.span variants = {textVariants} className='introText'>I'm <motion.span className='introName'>Isuri</motion.span><br/>Website Designer</motion.span>
            <motion.p variants = {textVariants} className='introPara'>I am a skilled web designer with experience in creating <br/>visually appealing and user friendly websites.</motion.p>
            <Link variants = {textVariants}><motion.button className='btn'><img src={hire} alt='hireBtn' className='hireBtnImg'/>Hire Me</motion.button></Link>
        </motion.div>
        <motion.div className='sliderContent' variants = {sliderVariants} initial="initial" animate='animate'>
            Web Designer App Designer UI Designer
        </motion.div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro
