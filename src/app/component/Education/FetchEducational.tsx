import React from 'react'
import { client } from '../../../../sanity/lib/client';
import EducationCard from './EducationCard';
export default async function FetchEducational() {
    const education = await client.fetch(`*[_type == 'education'] {
        companyImage, jobTitle,role,company,dateStarted,dateEnded,isCurrentlyWorkingHere,technologies,points
      , "manuscriptURL": manuscript.asset->url }`);
      
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
    )
}

