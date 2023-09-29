import Image from 'next/image'
import Navbar from '../app/components/Navbar' ;
import 'bootstrap/dist/css/bootstrap.css'
import '../app/globals.css' ;

import LogoV from '../public/Logo/VT - Color.svg'
import symfony from '../public/icons-lang/symfony.png'
import react from '../public/icons-lang/react.png'
import boot from '../public/icons-lang/boot.svg'
import js from '../public/icons-lang/js.webp'
import html from '../public/icons-lang/html.png'
import css from '../public/icons-lang/css.png'
import maps from '../public/icons/maps.png'
import nxtcloud from '../public/icons/nxt.png'
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
        <Navbar></Navbar>

      </div>
          <div className="container mt-5">
          <div className='project-title mt-5 fw-bold text-light lato text-initial'>
            VTUBE
          </div>
          <p className='fw-bold text-justify text-initial text-grey w-100 mt-4'>Plateforme de partage de vidéos en ligne. Elle permet aux 
          utilisateurs de télécharger, de visionner, de commenter et de partager des vidéos sur une variété de sujets</p>
          <div className="text-center mt-5">

              <div className="justify-content-center inline-flex ">
                <div className="row">
              <div className="col">
              <Image  alt="Picture of the author" src={mini1} width={1000} />
              </div>
              <div className="col">
              <Image  alt="Picture of the author" src={mini2} width={1000} />
              </div>
              <div className="col">
              <Image  alt="Picture of the author" src={mini3} width={1000} />
              </div>
            </div>
              </div>

          </div>
          <div className="container">
            <div className='project-title fw-bold lato text-initial'> TECHNOS </div>
            <hr></hr>
            <div className="d-flex mt-5">
                <div className="col">
                <Image  alt="Picture of the author" src={js} width={100} className='margin-auto'/>
                  <h3 className="lato text-light fw-bold">JAVASCRIPT</h3>

                </div>
                <div className="col">
                <Image  alt="Picture of the author" src={css}  width={100} className='margin-auto'/>
                  <h3 className="lato text-light fw-bold">CSS</h3>

                </div>
                <div className="col">
                <Image  alt="Picture of the author" src={html} width={100} className='margin-auto'/>
                  <h3 className="lato text-light fw-bold">HTML</h3>
                </div>
              </div>
              <div className='mt-5 text-left'>
                <div className='project-title mt-5 fw-bold lato text-initial'> LIENS </div>
                <hr></hr>
                <div className="d-flex mb-5 mt-5">
                <div className="col-5">
                <Image  alt="Picture of the author" src={githubwh} width={150} className='margin-auto'/>
                </div>
                <div className="col-5">
                <Image  alt="Picture of the author" src={website} width={150} className='margin-auto'/>
                </div>
              </div>
              </div>


            </div>          
          </div>
          </div>
  )
}
