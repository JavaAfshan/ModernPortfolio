import React from 'react'
import { client } from '../../../../sanity/lib/client';
import HeroRight from './HeroRight';


export default async function FetchRightHero() {
    const pageInformation = await client.fetch(`*[_type == 'pageinfo'] {
        name,role,heroImage,backgroundInformation,profilePic,
         phoneNumber,email,address
       }`);
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
  )
}

