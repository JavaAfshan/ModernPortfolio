"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { motion } from 'framer-motion';

type Props = {}

export default function HeroRight({ key, myname, backgroundInformation }:
    {
        key:string 
        myname:string
        backgroundInformation:string
    }) {
    const [text, count] = useTypewriter({
        words: ["Programmer", "Designer", "Developer"],
        delaySpeed: 2000,
        loop: true
    })
    return (
     
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}
            className="bg-white">

            <div className="relative isolate px-2 pt-20 lg:px-5">
                <div className="mx-auto max-w-2xl py-42  lg:py-32">
                    {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Check Out More
                            <a href="#" className="pl-2 ml-2 font-semibold text-indigo-600">
                                <span className=" absolute inset-0" aria-hidden="true" />
                                Download CV <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div> */}
                    <div className="">
                       {
                         myname&&(<h1 className="text-6xl font-bold tracking-[tight] text-pink-400 ">
                        {myname}  </h1>)
                       }
                        <h1 className="text-3xl font-bold tracking-tight text-blue-900 ">
                            Hi I am  <span className='text-pink-400 tracking-[2px]'>{text}</span> <Cursor cursorColor='pink' />
                        </h1>
                       {backgroundInformation&&( <p className="mt-6 text-lg leading-8 text-blue-900 ">
                           {backgroundInformation}  </p>)}
                        <div className="mt-10 flex  gap-x-6">
                            <div className="flex justify-center">
                                <a href="/assets/resume/Resume.pdf">
                                    <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Download CV   <AiOutlineCloudDownload className='text-xl ml-2' /></button>

                                </a>
                                <a href="#ContactMe">
                                    <button className="ml-4 inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Contact Us</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                    />
                </div>
            </div>
        </motion.div>

    )
}