import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs]=useState([]);

    useEffect(()=>{
     fetch('http://localhost:3000/jobs')
     .then(res=>res.json())
     .then(data=>setJobs(data))
    },[])

    return (
        <div>
            <h3 className="py-8 text-purple-900 mt-8 text-center text-3xl md:text-5xl font-bold">Job of the day</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map((job, index) => <HotJobsCard key={job.id || index} job={job}></HotJobsCard>)

                }
            </div>
        </div>
    );
};

export default HotJobs;