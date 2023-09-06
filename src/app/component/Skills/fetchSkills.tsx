// import React from 'react'
// import { client } from '../../../../sanity/lib/client';
// import Skill from './Skill';
// export default async function FetchSkill() {
//     const skill = await client.fetch(`*[_type == 'skills'] {
//        title,progress  , "manuscriptURL": manuscript.asset->url }`);
  
//     return (
//         <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-4 gap-5'>
//         {
//                 skill?.map((info: any) => (
//                     <Skill
//                         key={info._id}
//                         title={info.title}
//                         src={info.manuscriptURL}
//                         progress={info.progress}
//                     />
//                 ))

//             }
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import { client } from '../../../../sanity/lib/client';
import Skill from './Skill';

export default function FetchSkill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillData = await client.fetch(`*[_type == 'skills'] {
          title, progress, "manuscriptURL": manuscript.asset->url
        }`);
        setSkills(skillData);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-4 gap-5'>
      {

                skills?.map((info: any) => (
                    <Skill
                        key={info._id}
                        title={info.title}
                        src={info.manuscriptURL}
                        progress={info.progress}
                    />
                ))
      }
    </div>
  );
}
