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
            <h3>Job of the day</h3>
            <div>
                {
                    jobs.map(job=><HotJobsCard key={job.id}
                    jobs={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;