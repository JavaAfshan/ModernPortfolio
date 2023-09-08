"use client"
import { motion } from 'framer-motion'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import React from 'react'

type Props = {}

export default function About({ key, backgroundInformation1, backgroundInformation2 }:
  {
      key:string
      backgroundInformation1:string
      backgroundInformation2:string
  }) {
  const [text, count] = useTypewriter({
    words: ["Background", "Introduction", "Details"],
    loop: true,
    delaySpeed: 2000
  }
  )
  return (
    <div className='h-screen pt-20 flex flex-col relative text-center md:text-left md:flex-row mx-w-7xl px-10
    justify-evenly mx-auto items-center'>
      <motion.h3
        initial={{
          y: -100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1.2
        }}
        className='absolute top-20 uppercase tracking-[24px] text-pink-400 md:text-2xl text-xl '>About</motion.h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1.2
        }}
        src='https://cdn.sanity.io/images/ocusxiza/production/117a5e437464e6083f5bc77f948a986f5b401638-720x665.webp'
        style={{ boxShadow: '0 0 8px #d91141' }}
        className=' flex-shrink-0 object-cover border border-pink-200 rounded-full h-56 w-56 md:rounded-lg md:w-64 md:h-96 '
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1.2
        }}
        className='px-0 md:px-10 '>
        <h4 className='font-semibold text-4xl text-blue-900'>My <span className='text-pink-400'>{text}
          <Cursor cursorColor='pink' />
        </span></h4>
      {backgroundInformation1 &&(  <p className='text-base text-blue-900 pt-2 justify-evenly'>
       {backgroundInformation1}   
      {(backgroundInformation2&& <span className='hidden md:flex'>
          {backgroundInformation2}  </span>)}
        </p>)}
      </motion.div>
    </div>
  )
}