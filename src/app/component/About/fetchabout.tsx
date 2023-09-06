import React from 'react'
import { client } from '../../../../sanity/lib/client';
import About from './page';


export default async function FetchAbout() {
  const about = await client.fetch(`*[_type == 'about'] {
         backgroundInformation1, backgroundInformation2
       }`);
  return (
    <div>
      {

        about?.slice(0, 3).map((info: any) => (
          <About
            key={info._id}
            backgroundInformation1={info.backgroundInformation1}
            backgroundInformation2={info.backgroundInformation2}
          />
        ))

      }
    </div>
  )
}

