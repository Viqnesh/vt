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
function Back() {


  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <div className='row'>
      <div className='d-flex'>
        <div className='col-6 text-left mt-4'>
          <div>
            <button className='btn btn-back'><Link href="/">Revenir en arrière</Link></button>
          </div>
        </div>
      </div>

    </div></>



  );

  
  
}

export default Back;