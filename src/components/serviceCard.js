import React from 'react'
import Image from 'next/image';
import design from '../../public/design.png';

const ServiceCard=({title, comment ,image, designTools})=> {
  return (
        <div className=' text-center shadow-xl p-10 rounded-xl my-10  flex-1 '>
            <Image className='mx-auto' src={image}  width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2 py-2 dark:text-gray-100'> {title} </h3>
            <p className='py-2 dark:text-gray-300'> {comment}</p>
            <h4 className='py-4 text-lg text-teal-400'> Desgin tools I use </h4>
            {designTools.map((tool)=>(
                <p className='text-gray-800 py-1 dark:text-gray-500'>{tool}</p>
            ))}
          </div>
  )
}

export default ServiceCard