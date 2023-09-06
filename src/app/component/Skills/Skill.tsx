import React from 'react'
import {motion} from 'framer-motion'


export default function Skill({key,title,src,progress}:{
    key:string;
    title:string;
    src:string;
    progress:number;
}) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        src={src}
         className='rounded-full object-cover w-14 h-14 lg:w-20 lg:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover: bg-pink-50 h-14 w-14 lg:h-20 lg:w-20 rounded-full z-0'>
        <div className='flex items-center justify-center h-full '>
            <p className='text-lg md:text-xl font-bold text-blue-950 opacity-100'>{progress}%</p>
        </div>
        </div>
      
    </div>
  )
}