import React from 'react';
import logo from './logo.png' ;
import Image from 'next/image'
import Link from 'next/link';
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import github from '../../public/Logo/github.png'
import menu from '../../public/Logo/menu.png'
import malt from '../../public/Logo/malt.png'
import linked from '../../public/Logo/linked.png'
import logoV from '../../public/Logo/charcoal.png'
import instagram from '../../public/Logo/insta.webp'
import mail from '../../public/Logo/mail.svg'
import tel from '../../public/Logo/tel.png'
import cv from '../../public/Logo/cv.webp'

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
function Navbar() {


  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <div className='row'>
      <div className='d-flex'>
        <div className='col-6 text-left mt-4'>
          <div>
          <Link href="https://github.com/Viqnesh"><Image  alt="Picture of the author" width={50} className="m-2 inline-flex socialm" src={github} /></Link>
          <Link href="https://www.linkedin.com/in/vignesh-tillaisababady-4264922bb/"><Image  alt="Picture of the author" width={50} className="m-2 inline-flex socialm" src={linked} /></Link>
          <Link href="https://www.instagram.com/vigneshtdev/"><Image  alt="Picture of the author" width={50} className="m-2 inline-flex socialm" src={instagram} /></Link>
          </div>
        </div>
        <div className='col-6 text-end mt-4'>
          <div className='inline-flex'>
          <Link href="/cv.pdf"><Image  alt="Picture of the author" width={50} className="m-2 inline-flex filtre-inv socialme" src={cv} /></Link>
          <a className="cursorp socialm" onClick={() => alert("06 46 43 73 55") }><Image  alt="Picture of the author" width={50} className="m-2 inline-flex filtre-inv socialm" src={tel} /></a>
          <Link href="mailto:vignesht.pro@gmail.com"><Image  alt="Picture of the author" width={50} className="m-2 inline-flex filtre-inv socialme" src={mail} /></Link>

          </div>

        </div>
      </div>

    </div></>



  );

  
  
}

export default Navbar;