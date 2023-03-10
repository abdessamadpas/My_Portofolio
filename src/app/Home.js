"use client";
import React, {useState} from 'react';
import Model from '@/components/model';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';
import consulting from '../../public/consulting.png';
import code from '../../public/code.png';
import design from '../../public/design.png';

import './globals.css'
import ServiceCard from '@/components/serviceCard';
import ProjectCard from '@/components/projectCard';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [popUp, setPopUp] = useState(false);
  
  const [designTools, setDesignTools] = useState([
    "Photoshop",
    "Figma",
    "Adobe Xd",
  ]);
  const handleClickPopUp=()=>{
    setPopUp(!popUp)
  }

  return (
    <div className={popUp ? `container` : `wewe`} >
      <div >
      <div className={darkMode ? "dark" : "" }>
        <main className={`bg-white px-10  dark:bg-gray-900 md:px-20 lg:px-40 `}>

        {popUp ? <Model handleClickPopUp={handleClickPopUp} /> : null}
        
        <section className=' min-h-screen'>
          <nav className='flex justify-between	mb-12 p-10'>
            <h1 className='text-xl font-burtons sm:mr-10 opacity-100 hover:opacity-60 cursor-help	duration-300 dark:text-white'> AbdessamadPas</h1>
            <ul className='flex  items-center'>
              <li onClick={()=> setDarkMode(!darkMode)} ><BsFillMoonStarsFill className='cursor-pointer ml-5	text-xl dark:text-white'/></li>
              <li>
                <a className='rounded-md px-4 py-2  ml-5  md:m-10 bg-gradient-to-r from-cyan-500 to-blue-500 ' >resume</a>
              </li>
              
            </ul>
          </nav>
          <div className='text-center py-10'>  
            <h2 className='text-5xl py-3 text-teal-600 dark:text-teal-550 '> Abdessamad AALOUWAN</h2>
            <h3 className='text-2xl py-2 text-gray-600 dark:text-gray-400'> Full stack developer</h3>
            <p className='text-md leading-8 py-5 text-gray-800 dark:text-gray-300 md:text-xl max-w-4xl mx-auto'>
            As a full-stack web and mobile developer and an engineering student at EMSI, I offer specialized services to small businesses and individuals, delivering custom-tailored websites and web applications that meet their unique needs and requirements.
            </p>
          </div>
          <div className='flex justify-center gap-16 text-gray-500 '>
            <AiFillLinkedin className='text-4xl dark:text-gray-300'/>
            <AiFillTwitterCircle className='text-4xl dark:text-gray-300'/>
            <AiFillGithub className='text-4xl dark:text-gray-300'/>
          </div>
          <div className='mt-10 flex justify-center mx-auto bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full h-80 w-80 overflow-hidden'>
            <Image  src={deved} />
          </div>
        </section>
        <section>
        <div className='text-center'>
              <h3 className="text-3xl py-1 text-gray-700 dark:text-gray-200">Services I offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                Since the beginning of my journey as a full stack  developer , I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups  haha</span>
              </p>
        </div>
  
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2'> 
          <ServiceCard title = "engineering student at EMSI" image={design} comment='I design and build beautiful websites and web apps' designTools={designTools}/>
          <ServiceCard title = "coding" image={code}  comment='I design and build beautiful websites and web apps' designTools={designTools}/>
          <ServiceCard title = "Beautiful Designs" image={consulting} comment='I design and build beautiful websites and web apps' designTools={designTools}/>
        </div>
        <div className='text-center'>
              <h3 className="text-3xl py-1 text-gray-700 dark:text-gray-300">projects i built</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 ">
                Since the beginning of my journey as a full stack  developer , I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups  haha</span>
              </p>
        </div>
        <div className='grid grid-cols-1 gap-4 '> 
          <ProjectCard title = "engineering student at EMSI" handleClickPopUp={handleClickPopUp} image={design} comment='I design and build beautiful websites and web apps' designTools={designTools}/>
        </div>
        </section>
        </main>  
      </div>
      </div>
    </div>  
  )
}
