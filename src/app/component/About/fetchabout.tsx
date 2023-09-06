// import React from 'react'
// import { client } from '../../../../sanity/lib/client';
// import About from './page';


// export default async function FetchAbout() {
//   const about = await client.fetch(`*[_type == 'about'] {
//          backgroundInformation1, backgroundInformation2
//        }`);
//   return (
//     <div>
//       {

//         about?.slice(0, 3).map((info: any) => (
//           <About
//             key={info._id}
//             backgroundInformation1={info.backgroundInformation1}
//             backgroundInformation2={info.backgroundInformation2}
//           />
//         ))

//       }
//     </div>
//   )
// }


"use client"
import React, { useState, useEffect } from 'react';
import { client } from '../../../../sanity/lib/client';
import About from './page';

export default function FetchAbout() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutInfo = await client.fetch(`*[_type == 'about'] {
          backgroundInformation1, backgroundInformation2
        }`);
        setAboutData(aboutInfo);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      {
       aboutData?.slice(0, 3).map((info: any) => (
                  <About
                    key={info._id}
                    backgroundInformation1={info.backgroundInformation1}
                    backgroundInformation2={info.backgroundInformation2}
                  />
                ))
      }
    </div>
  );
}

