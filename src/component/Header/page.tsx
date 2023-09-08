"use client";
import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Navbar from './navbar';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between mx-w-7xl mx-auto z-20 xl:center  bg-white'>
            <motion.div
            initial={{
                x:-500,
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
             className='flex flex-row items-center'>
                {/* Social Icons  */}
                <SocialIcon
                    url="https://facebook.com/"
                    fgColor='blue'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://github.com/"
                    fgColor='blue'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://twitter.com/"
                    fgColor='blue'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://youtube.com/"
                    fgColor='blue'
                    bgColor='transparent'
                />
            </motion.div>
              <motion.div 
                initial={{
                    y:-500,
                    opacity:0,
                    scale:0.5
                }}
                animate={{
                    y:0,
                    opacity:1,
                    scale:1
                }}
                transition={{
                    duration: 1,
                }}
              className='lg:block hidden'>
              <Navbar/>
            </motion.div>


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
            className='flex flex-row items-center'>
                
                <div>
               <SocialIcon
                    network='email'
                    fgColor='blue'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-blue-900'>Get In Touch</p>
                </div> 
                
              
                 <div className='lg:hidden block'>    <Navbar/></div>
            </motion.div>
        </header>
    )
}