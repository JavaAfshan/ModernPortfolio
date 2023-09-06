"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
type Props = {}

export default function ContactMe({ }: Props) {
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
          className='absolute top-20 uppercase tracking-[24px] text-pink-400 md:text-2xl text-xl '>Contact Me
        </motion.h3>
        <div className=' pt-2 flex flex-col space-y-2'>
          <h4 className='text-xl md:text-2xl font-semibold text-center'>I have got just what you need.{" "}
            <span className='decoration-pink-600 animate-pulse underline'>Let's Talk</span></h4>

          <div className='text-center'>
            <div className='flex items-center space-x-5 justify-center'>
              <BsFillTelephoneFill className='h-7 w-7 text-pink-400 animate-pulse' />
              <p className='text-lg'>+1234567890</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <BsFillEnvelopeFill className='h-7 w-7 text-pink-400 animate-pulse' />
              <p className='text-lg'>programmer@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <ImLocation2 className='h-7 w-7 text-pink-400 animate-pulse' />
              <p className='text-lg'>123 Programmer Lane</p>
            </div>
          </div>

          <form className='flex flex-col space-y-2 mx-auto  '>
            <div className='flex flex-col space-y-2'>
              <div className='flex flex-col space-y-2 sm:flex-row sm:space-x-2'>
                <input
                  className="contactInput sm:w-1/2"
                  type="text"
                  placeholder='Name'
                />
                <input
                  className="contactInput sm:w-1/2"
                  type="email"
                  placeholder='Email'
                />
              </div>
              <input
                className="contactInput"
                type="text"
                placeholder='Subject'
              />
              <textarea
                className='contactInput'
                placeholder='Message'
              />
            </div>
            <div className='text-center'>
              <button
                type="submit"
                className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 sm:px-6 lg:px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"   >
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}