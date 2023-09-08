// import React from 'react'
// import { client } from '../../../../sanity/lib/client';
// import HeroRight from './HeroRight';


// export default async function FetchRightHero() {
//     const pageInformation = await client.fetch(`*[_type == 'pageinfo'] {
//         name,role,heroImage,backgroundInformation,profilePic,
//          phoneNumber,email,address
//        }`);
//   return (
//     <div>
//            {
//                     pageInformation?.slice(0, 3).map((info:any)=>(
//                         <HeroRight  
//                         key={info._id} 
//                         myname={info.name}
//                         backgroundInformation={info.backgroundInformation}
//                         />
//               ))
                         
//                     }
//     </div>
//   )
// }
"use client"
import React, { useState, useEffect } from 'react';
import { client } from '../../../sanity/lib/client';
import HeroRight from './HeroRight';

export default function FetchRightHero() {
  const [pageInformation, setPageInformation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageInformationData = await client.fetch(`*[_type == 'pageinfo'] {
          name, role, heroImage, backgroundInformation, profilePic,
          phoneNumber, email, address
        }`);
        setPageInformation(pageInformationData);
      } catch (error) {
        console.error('Error fetching page information:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      {
          pageInformation?.slice(0, 3).map((info:any)=>(
                                    <HeroRight  
                                    key={info._id} 
                                    myname={info.name}
                                    backgroundInformation={info.backgroundInformation}
                                    />
                          ))
      }
    </div>
  );
}
