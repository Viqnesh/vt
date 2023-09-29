'use client'

import Image from 'next/image'
import Navbar from './components/Navbar' ;
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css' ;
import LogoV from '../public/Logo/VT - Color.svg'

import symfony from '../public/icons-lang/symfony.png'
import react from '../public/icons-lang/react.png'
import boot from '../public/icons-lang/boot.svg'
import js from '../public/icons-lang/js.webp'
import html from '../public/icons-lang/html.png'
import css from '../public/icons-lang/css.png'
import { motion } from "framer-motion"
import V from '../app/components/animated/V'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
const container2 = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const langs = [
  symfony,
  react,
  boot,
  js,
  html,
  css
]

export default function Home() {
  return (<div className="container">
      <Navbar></Navbar>
        <div className="px-4 py-5 my-5 text-center mt-5">
        <V></V>
          <h1 className="title mt-4 fw-bold lato ">Vignesh Tillaisababady</h1>
          <div className="col-lg-12 mx-auto">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              'Développeur Back-End', // initially rendered starting point
              1000,
              'Développeur Symfony PHP',
              1000,
              'Développeur React JS',
              1000,
              'Développeur HTML/CSS',
              500,
            ]}
            speed={50}
            className='sub-title fw-bold mb-4'
            repeat={Infinity}
          />
            <motion.div
            className="container"
            variants={container2}
            initial="hidden"
            style={{display : 'flex' , flexDirection: 'row' , justifyContent: 'space-between'
            }}
            animate="visible"
            >
            {langs.map((lang) => {
                return (
                  <motion.img
                  className="item2 mt-5" 
                  variants={item}
                  key={lang.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                      duration: 0.8,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                src={lang.src}
                alt="Picture of the author" />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
  )
}
