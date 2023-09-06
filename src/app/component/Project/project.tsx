import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

export default function Projectd({key,title,summary,src,linkToBuild}:{
  key:string
  title:string
  summary:string
  src:string
  linkToBuild:string
}) {
  return (
    <div className='w-[400px] md:w-screen pt-20 px-5 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center  h-screen '>
    {src&&(<motion.img
    initial={{
        y:-80,
        scale:0,
        opacity:0
    }}
    whileInView={{
        y:0 ,scale:.97,opacity:1}}
     transition={{
       duration:1.2
     }}
    src={src} alt="project1" height={400} width={400} />)}
    <motion.div
       initial={{
        y:-80,
        scale:0,
        opacity:0
    }}
    whileInView={{
        y:0 ,scale:.97,opacity:1}}
     transition={{
       duration:1.2
     }}
     className='space-y-10 px-0 md:px-10 max-w-6xl '>
        <h4 className='text-xl md:text-2xl font-semibold text-center'>
        Case Study  <span className='underline decoration-pink-400/50'> {title}</span>
    </h4>
    <p className='text-base '>
      {summary}
      <a href={linkToBuild}>Let's Go</a>
       </p>
    </motion.div>
</div>
  )
}