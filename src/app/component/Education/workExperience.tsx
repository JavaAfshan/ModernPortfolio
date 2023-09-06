"use client"
import React from 'react'
import { motion } from 'framer-motion'
import FetchEducational from './FetchEducational'
type Props = {}

export default function WorkExperience({ }: Props) {
    return (
        <div className='h-screen pt-20 flex flex-col relative text-lft md:text-left md:flex-row mx-w-full px-10
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
                className='absolute top-20 uppercase tracking-[24px] text-pink-400 md:text-2xl text-xl '>Education</motion.h3>
           <div className=' relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                     {/* Experience Card  */}
                <FetchEducational/>
            </div>

        </div>
    )
}