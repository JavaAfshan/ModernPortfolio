"use client"
import { motion } from 'framer-motion'
import React from 'react'
import FetchProject from './fetchProject'
import Projectd from './project'

type Props = {}

export default function Project({ }: Props) {
   
    return (
        <div>
            <div className='h-screen flex flex-col relative text-left md:text-left md:flex-row mx-w-full px-10
    justify-evenly mx-auto items-center overflow-hidden'>
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
                    className='absolute pt-4 top-20 uppercase tracking-[24px] text-pink-400 md:text-2xl text-xl '>Projects
                </motion.h3>
                {/* Project  */}
                <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                   
                       <FetchProject/>
                  
                </div>

                <div className='w-full absolute top-[30%] bg-blue-900/10 left-0 h-[300px] -skew-y-12'>
                </div>
            </div></div>
    )
}