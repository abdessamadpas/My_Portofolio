import { Inter } from '@next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';
import consulting from '../../public/consulting.png';
import design from '../../public/design.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <header>
        <title>wewe</title>
      </header>
      <main className='bg-white px-10  md:px-20 lg:px-40'>
      <section className=' min-h-screen'>
        <nav className='flex justify-between	mb-12 p-10'>
          <h1 className='text-xl font-burtons'> AbdessamadPas</h1>
          <ul className='flex  items-center'>
            <li ><BsFillMoonStarsFill className='cursor-pointer	text-xl'/></li>
            <li>
              <a className='rounded-md px-4 py-2 ml-10  bg-gradient-to-r from-cyan-500 to-blue-500 ' >resume</a></li>
          </ul>
        </nav>
        <div className='text-center py-10'>  
          <h2 className='text-5xl py-3 text-teal-600'> Abdessamad AALOUWAN</h2>
          <h3 className='text-2xl py-2 text-gray-600'> Full stack developer</h3>
          <p className='text-md leading-8 py-5 text-gray-800'>
            freelance web developer, i build websites and web apps for small businesses and individuals.
          </p>
        </div>
        <div className='flex justify-center gap-16 text-gray-500 '>
          <AiFillLinkedin className='text-4xl'/>
          <AiFillTwitterCircle className='text-4xl'/>
          <AiFillGithub className='text-4xl'/>
        </div>
        <div className='mt-10 flex justify-center mx-auto bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full h-80 w-80 overflow-hidden'>
          <Image  src={deved}  />
        </div>
      </section>
      <section>
      <div className='text-center'>
            <h3 className="text-3xl py-1 text-gray-700 ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a full stack  developer , I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups  haha</span>
            </p>
           
      </div>
      <div className=''> 
        <div className=' text-center shadow-xl p-10 rounded-xl my-10  flex-1 '>
          <Image className='mx-auto' src={design}  width={100} height={100}/>
          <h3 className='text-lg font-medium pt-8 pb-2 py-2'> Beautiful Designs </h3>
          <p className='py-2'> I design and build beautiful websites and web apps</p>
          <h4 className='py-4 text-lg text-teal-400'> Desgin tools I use </h4>
          <p className='text-gray-800 py-1 '>Photoshop</p>
          <p className='text-gray-800 py-1 '>Figma</p>
          <p className='text-gray-800 py-1'>Adobe Xd</p>
        </div>
      </div>
      </section>
      </main>
      
    </div>
    
  )
}
