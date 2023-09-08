// import React from 'react'
// import { client } from '../../../../sanity/lib/client';
// import EducationCard from './EducationCard';
// export default async function FetchEducational() {
//     const education = await client.fetch(`*[_type == 'education'] {
//         companyImage, jobTitle,role,company,dateStarted,dateEnded,isCurrentlyWorkingHere,technologies,points
//       , "manuscriptURL": manuscript.asset->url }`);
      
//     return (
//         <div className='flex flex-row text-center'>
//         {

//                 education?.map((info: any) => (
//                     <EducationCard
//                         key={info._id}
//                         jobTitle={info.jobTitle}
//                         role={info.role}
//                         company={info.company}
//                         dateStarted={info.dateStarted}
//                         dateEnded={info.dateEnded}
//                         isCurrentlyWorkingHere={info.isCurrentlyWorkingHere}
//                         companyImage={info.companyImage.asset._ref}
//                         points={info.points}
//                         src={info.manuscriptURL}
//                         technologies={info.technologies}
//                     />
//                 ))

//             }
//         </div>
//     )
// }


"use client"
import React, { useState, useEffect } from 'react';
import { client } from '../../../sanity/lib/client';
import EducationCard from './EducationCard';

export default function FetchEducational() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const educationData = await client.fetch(`*[_type == 'education'] {
          companyImage, jobTitle, role, company, dateStarted, dateEnded, isCurrentlyWorkingHere, technologies, points,
          "manuscriptURL": manuscript.asset->url
        }`);
        setEducation(educationData);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className='flex flex-row text-center'>
      {
    education?.map((info: any) => (
                            <EducationCard
                                key={info._id}
                                jobTitle={info.jobTitle}
                                role={info.role}
                                company={info.company}
                                dateStarted={info.dateStarted}
                                dateEnded={info.dateEnded}
                                isCurrentlyWorkingHere={info.isCurrentlyWorkingHere}
                                companyImage={info.companyImage.asset._ref}
                                points={info.points}
                                src={info.manuscriptURL}
                                technologies={info.technologies}
                            />
                        ))
      
      }
    </div>
  );
}


