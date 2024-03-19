'use client'

import Image from 'next/image'
import Navbar from './components/Navbar' ;
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css' ;
import LogoV from '../public/Logo/VT - Color.svg'

import icons from '../public/Logo/iconslogo.png'
import boot from '../public/icons-lang/boot.svg'

import { motion } from "framer-motion"
import V from '../app/components/animated/V'
import github from '../public/Logo/github.png'
import nxt from '../public/ab/nxt.png'

import html from '../public/ab/html.png'
import css from '../public/ab/css.png'
import js from '../public/ab/js.png'
import php from '../public/ab/php.png'
import java from '../public/ab/java.png'
import c from '../public/ab/c.png'
import react from '../public/ab/react.png'
import nextjs from '../public/ab/nextjs.svg'
import ts from '../public/ab/ts.png'
import twig from '../public/ab/twig.png'

import symfony from '../public/ab/symfony.png'
import rn from '../public/ab/rn.png'
import android from '../public/ab/android.png'
import wp from '../public/ab/wp.png'
import elek from '../public/ab/electron.png'
import njs from '../public/ab/njs.png'
import maps from '../public/ab/gmaps.png'
import leaflet from '../public/ab/leaflet.png'
import sql from '../public/ab/mysql.png'
import api from '../public/ab/api.png'
import ws from '../public/ab/ws.jpg'
import phaser from '../public/ab/phaser.png'
import chatapp from '../public/chatapp.png'
import geo from '../public/geocoding.jpg'
import Link from 'next/link';

import { useState } from 'react'
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


export default function Home() {
  return (<div className="container-spec">
      <Navbar></Navbar>
        <div className=" text-center mb-5">
          <div className='row'>
          <V></V>
          </div>
          <h1 className='title'> Compétences </h1>

          <div className="row mt-5">
            <div className="col">
              <div className="card ability shadow- ">
                  <Image  alt="Picture of the author" width={100} className="m-2 inline-flex " src={html} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={css} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex " src={js} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={120} className="m-2 inline-flex" src={php} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="card ability  shadow ">
                  <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={ts} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={150} className="m-2 inline-flex" src={twig} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={150} className="m-2 inline-flex" src={nxt} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={boot} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="card ability  shadow ">
                  <Image  alt="Picture of the author" width={70} className="m-2 inline-flex " src={java} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={c} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={react} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={150} className="m-2 inline-flex " src={nextjs} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="card ability  shadow ">
                  <Image  alt="Picture of the author" width={100} className="m-2 inline-flex " src={symfony} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow  ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex " src={rn} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow  ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={android} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex " src={wp} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="card ability  shadow ">
                  <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={elek} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={150} className="m-2 inline-flex" src={njs} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={maps} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={180} className="m-2 inline-flex" src={leaflet} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="card ability  shadow ">
                  <Image  alt="Picture of the author" width={150} className="m-2 inline-flex" src={sql} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={100} className="m-2 inline-flex" src={api} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={150} className="m-2 inline-flex" src={ws} />
              </div>
            </div>
            <div className="col">
              <div className="card ability  shadow ">
                    <Image  alt="Picture of the author" width={180} className="m-2 inline-flex" src={phaser} />
              </div>
            </div>
          </div>

          <h1 className='title mt-5'> Créations </h1>
          <div className="row mt-5">
            <div className="col-6">
            <Link href="/ecommerce">
              <div className="creabox card ability2 ecommerce shadow-lg ">
                  <h1 className='fw-bold sub-title ribbonTAG'>E-Commerce</h1>
              </div>
              </Link>
            </div>
            <div className="col-6">
            <Link href="/chatting">
              <div className="creabox card ability2 chatting shadow ">
              <h1 className='fw-bold sub-title ribbonTAG'>Messagerie Instantané</h1>
              </div>
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
            <Link href="/game">
              <div className="creabox card ability2 tirudan shadow ">
              <h1 className='fw-bold sub-title ribbonTAG'>Jeu Mobile</h1>
              </div>
            </Link>
            </div>
            <div className="col-6">
            <Link href="/geocode">
              <div className="creabox card ability2 geoc shadow ">
              <h1 className='fw-bold sub-title ribbonTAG'>Service de Geocoding</h1>
              </div>
              </Link>

            </div>

          </div>
          <div className="row mt-5">
            <div className="col-6">
            <Link href="/geocode">
              <div className="creabox card ability2 fridge shadow ">
              <h1 className='fw-bold sub-title ribbonTAG'>Application pour Frigo</h1>
              </div>
              </Link>
            </div>
            <div className="col-6">
            <Link href="/game">
              <div className="creabox card ability2 wiki shadow ">
              <h1 className='fw-bold sub-title ribbonTAG'>Jeu de Carte</h1>
              </div>
              </Link>

            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
            <Link href="/filewatcher">
              <div className="creabox card ability2 coding shadow ">
              <h1 className='fw-bold sub-title ribbonTAG'>Surveillance de fichiers</h1>
              </div>
              </Link>
            </div>
            <div className="col-6">
            <Link href="/tournament">
              <div className="creabox card ability2 esport shadow ">
              <h1 className='fw-bold sub-title ribbonTAG'>Ligue E-sport</h1>
              </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
  )
}
