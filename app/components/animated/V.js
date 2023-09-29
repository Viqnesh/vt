import React from 'react';
import { motion } from 'framer-motion';
import LogoV from '../../../public/Logo/vtcolor.svg'

const AnimatedImage = () => {
  return (
    <div>
        <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          src={LogoV.src}
          className='logov' 
          width={250} 
          height={250} 
          alt="Picture of the author" />
    </div>
  );
};

export default AnimatedImage;
