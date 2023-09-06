import React from 'react'
import { client } from '../../../../sanity/lib/client';
import HeroLeft from './HeroLeft';


export default async function FetchLeftHero() {
    const pageInformation = await client.fetch(`*[_type == 'pageinfo'] {
        name,role,heroImage,backgroundInformation,profilePic,
         phoneNumber,email,address
       }`);
  return (
    <div>
           {
                    
                    pageInformation?.slice(0, 3).map((info:any)=>(
                                   <HeroLeft  
                                   key={info._id} 
                                   myname={info.name}
                                   role={info.role}
                                   heroImage={info.heroImage.asset.url}
                                   />
                         ))
                         
                    }
    </div>
  )
}

