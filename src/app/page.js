"use client";
import React, {useState} from 'react';
import { Inter } from '@next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';
import consulting from '../../public/consulting.png';
import design from '../../public/design.png';
import code from '../../public/code.png';



import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDot} from 'react-icons/rx';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  const slides = [
    {
      title: 'Slide 1',
      description: 'Description 1',
      url : 'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Slide 2',
      description: 'Description 2',
      url : 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Slide 3',
      description: 'Description 3',
      url : 'https://plus.unsplash.com/premium_photo-1663013281483-b51dbaf57eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ]


  return (
    
    <div className={darkMode ? "dark" : ""}>
      <header>
        <title>wewe</title>
      </header>
      <main className='bg-white px-10  dark:bg-black md:px-20 lg:px-40 overflow-y-hidden	'>
      <section className=' min-h-screen'>
        <nav className='flex justify-between	mb-12 p-10'>
          <h1 className='text-xl font-burtons sm:mr-10 opacity-100 hover:opacity-60 cursor-help	duration-300 dark:text-white'> AbdessamadPas</h1>
          <ul className='flex  items-center'>
            <li onClick={()=> setDarkMode(!darkMode)} ><BsFillMoonStarsFill className='cursor-pointer ml-5	text-xl dark:text-white'/></li>
            <li>
              <a className='rounded-md px-4 py-2  ml-5  md:m-10 bg-gradient-to-r from-cyan-500 to-blue-500 ' >resume</a></li>
          </ul>
        </nav>
        <div className='text-center py-10'>  
          <h2 className='text-5xl py-3 text-teal-600 dark:text-teal-500 '> Abdessamad AALOUWAN</h2>
          <h3 className='text-2xl py-2 text-gray-600 dark:text-gray-400'> Full stack developer</h3>
          <p className='text-md leading-8 py-5 text-gray-800 dark:text-gray-300 md:text-xl max-w-4xl mx-auto'>
            freelance web/mobile full stack developer ,engineering student at EMSI (MOROCCO) i build websites and web apps for small businesses and individuals.
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
        <div className=' text-center shadow-xl p-10 rounded-xl my-10  flex-1 '>
          <Image className='mx-auto' src={design}  width={100} height={100}/>
          <h3 className='text-lg font-medium pt-8 pb-2 py-2 dark:text-gray-100'> engineering student at EMSI </h3>
          <p className='py-2 dark:text-gray-300'> I design and build beautiful websites and web apps</p>
          <h4 className='py-4 text-lg text-teal-400'> Desgin tools I use </h4>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Photoshop</p>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Figma</p>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Adobe Xd</p>
        </div>
        <div className=' text-center shadow-xl p-10 rounded-xl my-10  flex-1 '>
          <Image className='mx-auto' src={code }  width={100} height={100}/>
          <h3 className='text-lg font-medium pt-8 pb-2 py-2 dark:text-gray-100'> coding </h3>
          <p className='py-2 dark:text-gray-300'> I design and build beautiful websites and web apps</p>
          <h4 className='py-4 text-lg text-teal-400'> Desgin tools I use </h4>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Photoshop</p>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Figma</p>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Adobe Xd</p>
        </div>
        <div className=' text-center shadow-xl p-10 rounded-xl my-10  flex-1 '>
          <Image className='mx-auto' src={consulting}  width={100} height={100}/>
          <h3 className='text-lg font-medium pt-8 pb-2 py-2 dark:text-gray-100'> Beautiful Designs </h3>
          <p className='py-2 dark:text-gray-300'> I design and build beautiful websites and web apps</p>
          <h4 className='py-4 text-lg text-teal-400'> Desgin tools I use </h4>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Photoshop</p>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Figma</p>
          <p className='text-gray-800 py-1 dark:text-gray-500'>Adobe Xd</p>
        </div>
      </div>
      <div className='text-center'>
            <h3 className="text-3xl py-1 text-gray-700 ">projects i built</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a full stack  developer , I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups  haha</span>
            </p>
      </div>
      <div>
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
          <div style={{backgroundImage: `url(${slides[current].url})`}} className=' w-full h-full bg-center rounded-2xl bg-cover duration-500' >
          </div>
          <div>
            <BsChevronCompactLeft onClick={previousSlide}  className='hidden group-hover:block absolute text-4xl rounded-full translate-x-0 bg-black/20 cursor-pointer text-white transaction-y-[50%] left-7 top-[50%] duration-300'/>
          </div>
          <div>
            <BsChevronCompactRight onClick={nextSlide} className='hidden group-hover:block absolute text-4xl rounded-full translate-x-0 bg-black/20 cursor-pointer text-white transaction-y-[50%] right-7 top-[50%] duration-300' /> 
          </div>
           <div className='top-4 py-7 flex gap-3 justify-center overflow-auto'>
            {slides.map((slide, index) => (
              <div key={index} className=''>
                <div onClick={() => setCurrent(index)} ><RxDot className={`h-4 w-4 rounded-full cursor-pointer text-2xl ${current === index && ' bg-gray-500 '}  text-gray-500`} /></div>
              </div>
            ))}
          </div>

        </div>




        {/* <div className=''>
          <Image className='mx-auto' src={online_assignment} />
        </div> */}
      </div>

      </section>
      </main>
      
    </div>
    
  )
}
