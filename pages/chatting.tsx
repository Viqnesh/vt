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
import phaser from '../public/icons-lang/phaser.png'
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
import ws from '../public/ab/ws.jpg'
import njs from '../public/ab/njs.png'
import sql from '../public/ab/mysql.png'
import mini1 from '../public/screens/dendamCHATROOM.png'
import mini2 from '../public/screens/dendamPROFILE.png'
import mini3 from '../public/screens/dendamLOGIN.png'
import mini4 from '../public/screens/dendamREGISTER.png'
import mini5 from '../public/screens/dendamSTATUS.png'

import favicon from '../public/icon_white.png'
import logo from '../public/logo.png'
import Back from '../app/components/Back'
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
        <Back></Back>

      </div>
          <div className="container mt-5">
          <div className="project-title mt-5 fw-bold text-light lato text-initial">
            MESSAGERIE INSTANTANE
          </div>
          <p className="fw-bold text-justify text-initial text-light w-100 m-5">Dendam est une application de discussion pour pouvoir communiquer avec vos amis. L`&apos;`application posséde plusieurs fonctionnalités. On peut avoir avoir des discussions avec les amis que l`&apos;`on a ajouté, on peut éditer notre profil et on peut également voir qui est également le statut des autres utilisateurs(en ligne, hors ligne, absent).</p>
          <div className="text-center mt-5">
          <div className='flex m-5'>
            <div className='col-3 justify-content-center'>
              <Image  alt="Picture of the author" src={favicon} width={100}/>
              <h3 className='lang-desc text-left sub-title fw-bold'>Icone</h3>
            </div>
            <div className='col-3'>
              <Image  alt="Picture of the author" src={logo} width={300}/>
              <h3 className='lang-desc text-left sub-title fw-bold'>Logo</h3>
            </div>

          </div>
            <div className='flex m-5'>
            <h3 className='lang-desc text-left sub-title fw-bold colorS'> Selection des couleurs  </h3>
            <div className='codeCPrim mtb'>#FF4C70</div>
            <div className='codeCSec mtb'>#FFFFFF</div>
            <div className='codeCTh mtb'>#87CEEB</div>
            </div>
            <div className='flex'>

                <div className="col-4 inline-flex m-3">
                <Image src={react} alt="Picture of the author" width={140} className="m-4"/>
                <p className='lang-desc'>Lorem Ipsum Lorem Ipsum</p>
                </div>

                <div className="col-4 inline-flex m-3">
                <Image src={ws} alt="Picture of the author" width={180} className="m-4"/>
                <p className='lang-desc'>Lorem Ipsum Lorem Ipsum</p>
                </div>

                <div className="col-4 inline-flex m-3">
                <Image src={njs} alt="Picture of the author" width={160} className="filtre-inv m-4"/>
                <p className='lang-desc'>Lorem Ipsum Lorem Ipsum</p>
                </div>
            </div>
            <div className='flex'>
                <div className="col-4 inline-flex m-3">
                <Image src={sql} alt="Picture of the author" width={180} className="m-4"/>
                <p className='lang-desc'>Lorem Ipsum Lorem Ipsum</p>
                </div>

                <div className="col-4 inline-flex m-3">
                <Image src={js} alt="Picture of the author" width={120} className="m-4"/>
                <p className='lang-desc'>Lorem Ipsum Lorem Ipsum</p>
                </div>
            </div>


              <div className="justify-content-center inline-flex ">
                <div className="row">
              <div className="col">
              <Image  alt="Picture of the author" src={mini1} width={1800}/>
              </div>
              <div className="col">
              <Image  alt="Picture of the author" src={mini2} width={1400} />
              </div>
              <div className="col">
              <Image  alt="Picture of the author" src={mini3} width={1400} />
              </div>
              <div className="col">
              <Image  alt="Picture of the author" src={mini4} width={1400} />
              </div>
              <div className="col">
              <Image  alt="Picture of the author" src={mini5} width={1400} />
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
