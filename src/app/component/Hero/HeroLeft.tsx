"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import { motion } from 'framer-motion'
type Props = {}

export default function Hero({ key, myname, role,heroImage }:
    {
        key:string
        myname:string
        role:string
        heroImage:string
    }) {
    const [text, count] = useTypewriter({
        words: [`Hi I'm ${myname} `, "Software Developer", "An-Organism-that-turns", "<Caffeine-into-Software/>"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration: 1,
        }}
        className=' pt-[150px] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

            <BackgroundCircle />
            <div className='z-20'>
          {role&&(  <h2 className='text-sm uppercase text-pink-500  tracking-[8px] md:tracking-[8px] lg:tracking-[15px]'>
                    {role}
                </h2>)}
            <img
                className="h-32 w-32 rounded-full mx-auto object-cover "
                src='https://cdn.sanity.io/images/ocusxiza/production/117a5e437464e6083f5bc77f948a986f5b401638-720x665.webp' alt="dp" />
               
            <h1 className='text-2xl lg:text-3xl font-semibold scroll-px-10'>
                <span className='mr-1 text-blue-900'>{text}</span>
                <Cursor cursorColor='pink' />
            </h1>
            </div>

        </motion.div>
    )
}