import React from 'react';
import { motion } from 'framer-motion';
import LogoV from '../../../public/Logo/vtcolor.png'
import vtdev from '../../../public/Logo/vtlogo.jpg'
import charcoal from '../../../public/Logo/charcoal.png'
import { TypeAnimation } from 'react-type-animation';


const AnimatedImage = () => {
  return (

    <div className='h25 mt-5'>
        <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          src={vtdev.src}
          className='logov' 
          width={220} 
          height={220} 
          alt="Picture of the author" />
        <div className='infoss'>
        <h1 className="title fw-bold lato mt-5">Vignesh Tillaisababady</h1>
        <h1 className="sub-title fw-bold lato">Développeur Full-Stack</h1>
        <h1 className="sub-title fw-bold lato">25 ans</h1>
        </div>

    </div>
  );
};

export default AnimatedImage;
