import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,3,3,2,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration:2.5
    }}
    className='relative flex justify-center items-center '>
        <div className='absolute border border-pink-200 rounded-full h-[50px]  w-[50px] md:h-[100px]  md:w-[100px] lg:h-[200px]  lg:w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-pink-200 rounded-full h-[150px]  w-[150px] md:h-[200px]  md:w-[200px] lg:h-[250px]  lg:w-[250px] mt-52 animate-ping'/>
        <div className='absolute border  border-pink-200 rounded-full h-[200px]  w-[200px] md:h-[250px]  md:w-[250px] lg:h-[300px]  lg:w-[300px] mt-52 animate-ping'/>
        <div style={{ boxShadow: '0 0 8px #d91141'}} className='absolute border  border-pink-600 rounded-full h-[350px] w-[350px] md:h-[400px]  md:w-[400px] lg:h-[500px] lg:w-[500px] mt-40 animate-pulse'/>
        <div className='absolute border border-pink-50 rounded-full h-[450px] w-[450px] md:h-[500px]  md:w-[500px] lg:h-[700px] lg:w-[700px] mt-52'/>
    </motion.div>
  )
}