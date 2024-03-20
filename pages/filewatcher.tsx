import Image from 'next/image'
import Back from '../app/components/Back' ;
import 'bootstrap/dist/css/bootstrap.css'
import '../app/globals.css' ;

import LogoV from '../public/Logo/VT - Color.svg'
import symfony from '../public/icons-lang/symfony.png'
import nxtscreen from '../public/fw/netxcloud.webp'
import fwscreen from '../public/schemaFW.png'

import react from '../public/icons-lang/react.png'
import boot from '../public/icons-lang/boot.svg'
import js from '../public/icons-lang/js.webp'
import html from '../public/icons-lang/html.png'
import css from '../public/icons-lang/css.png'
import maps from '../public/icons/maps.png'
import nodejs from '../public/icons-lang/nodejs.png'
import nxtcloud from '../public/icons/nxt.png'
import njs from '../public/ab/njs.png'
import video from '../public/icons/video.png'
import wordpress from '../public/icons/wordpress.png'
import website from '../public/Logo/website.png'
import trophy from '../public/icons/trophy.png'
import joystick from '../public/icons/gaming.png'
import github from '../public/Logo/github.png'
import perso from '../public/badges/perso.png'
import pro from '../public/badges/pro.png'
import githubwh from '../public/Logo/github_logo.png'
import mini1 from '../public/vtube/VTube1.png'
import mini2 from '../public/vtube/VTube2.png'
import mini3 from '../public/vtube/VTube3.png'

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from 'react'

import { TypeAnimation } from 'react-type-animation';
import next from 'next';
const images = [
  mini1,mini2,mini3
]
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
export default function Geocode() {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (<div className='container-fluid'>
  <div className="container">
    <Back></Back>

  </div>
      <div className="container mt-5">
      <div className="project-title mt-5 fw-bold text-light lato text-initial">
        Surveillance de Fichiers
      </div>
      <div className="text-center">
      <div className='flex'>
      </div>
      <div className='flex'>
            <div className="col-4 inline-flex m-3">
            <Image src={nxtcloud} alt="Picture of the author" width={120} className="m-4"/>
            <p className='lang-desc'>Serveur pour héberger le fichier a surveiller</p>
            </div>
            <div className="col-4 inline-flex m-3">
            <Image src={js} alt="Picture of the author" width={120} className="m-4"/>
            <p className='lang-desc'>Développement du script pour surveiller les fichiers</p>
            </div>
        </div>
        <div className='flex'>

            <div className="col-4 inline-flex m-3">
            <Image src={njs} alt="Picture of the author" width={180} className="m-4 filtre-inv"/>
            <p className='lang-desc'>Serveur pour faire tourner le script en permanence</p>
            </div>
        </div>



          <div className="mt-5">
            <div className="row">
          <div className="col">
          <Image  alt="Picture of the author" src={fwscreen} width={1000}/>
            <div className='d-block mtb mt-3'>
            </div>
          </div>
        </div>
          </div>

      </div>
      <div className="d-flex mb-5 mt-5">
          </div>    
      </div>
      </div>
  )
}
