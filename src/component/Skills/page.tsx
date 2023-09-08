"use client"
import { motion } from 'framer-motion'
import React from 'react'
import FetchSkill from './fetchSkills'

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div>
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
                    className='absolute top-20 uppercase tracking-[24px] text-pink-400 md:text-2xl text-xl '>Skills
                </motion.h3>
                <span className='absolute top-36 uppercase md:tracking-[3px] text-blue-900 text-sm '>
                    Hover over a skill for current proficiency
                </span>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    >
                   <FetchSkill/>
                </motion.div>
            </div>

        </div>
    )
}