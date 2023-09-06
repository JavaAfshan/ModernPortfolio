import React from 'react'
import { client } from '../../../../sanity/lib/client';
import Projectd from './project';
export default async function FetchProject() {
    const project = await client.fetch(`*[_type == 'projects'] {
      title,summary,linkToBuild , "manuscriptURL": manuscript.asset->url }`);
      
    return (
        <div className='flex flex-row'>
        {

                project?.map((info: any) => (
                    <Projectd
                        key={info._id}
                        title={info.title}
                        summary={info.summary}
                        src={info.manuscriptURL}
                        linkToBuild={info.linkToBuild}
                    />
                ))

            }
        </div>
    )
}

