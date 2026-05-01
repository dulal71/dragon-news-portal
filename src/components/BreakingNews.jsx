import { getNewsById } from '@/lib/fetchingData';
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews =async () => {
   const news =  await getNewsById('01')
   console.log(news);
    return (
        <div className=' container mx-auto flex justify-between items-center bg-gray-100 p-2 rouded-md'>
            <button className='btn bg-[#D72050] text-white'>Latest</button>
         <Marquee pauseOnHover={true} speed={80}>
            {
                news.map(n=> <p key={n._id}  className='mr-6'><span className='text-red-600'>Breaking News-</span> {n.title} </p>)
            }
       
            </Marquee>   
        </div>
    );
};

export default BreakingNews;