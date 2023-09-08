"use client"
import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

export default function EducationCard(
  {key,jobTitle,role,company,dateStarted,dateEnded,isCurrentlyWorkingHere,
    companyImage,points,src,technologies}:
   {key:string; 
    jobTitle:string;
    role:string;
    companyImage:any;
    company:string;
    dateStarted:Date;
    dateEnded:Date;
    isCurrentlyWorkingHere:string;
    points:string[];
    src:string;
    technologies:string;

   }
)

{
  return (
    <article className='mt-5 py-5 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 snap-center bg-blue-50 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  h-[480px] w-[500px] md-[600px]'>
      <motion.img
        initial={{
          y: -20,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        className='w-32 h-32  object-center flex-shrink-0 object-cover border border-pink-200 rounded-full  '
        src={src} alt="myImage" />

      <motion.div className='px-0 md:px-10'
           initial={{
          x: -20,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}>
           
      {jobTitle&&(  <h4 className='text-xl font-light'>{jobTitle}</h4>)}
       {company&&( <p className='font-bold text-lg mt-1'>{company}</p>)}
       
        {dateStarted&&(<p className='uppercase py-1 text-pink-400'>{`${dateStarted} to ${dateEnded}`} </p>)}
        <ul className='list-none ml-5 text-lg '>
        {points[0]&&(<li>{points[0]}
        </li>)}
        {points[1]&&(<li>{points[1]}
        </li>)}
        {points[2]&&(<li>{points[2]}
        </li>)}

        </ul>
      </motion.div>
    </article>
  )
}