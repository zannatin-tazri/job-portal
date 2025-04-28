import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

  const { _id,salaryRange, applicationDeadline, category, location, title, jobType, company, responsibilities, requirements, description } = useLoaderData();

  return (
    <div className='px-3'>
      <div className="hero bg-base-200 min-h-screen">
        <div className=" ">
          
          <div>
            <h1 className="text-3xl pb-5 font-bold">Company : {company}</h1>
            <h1 className="text-xl pb-5 font-bold">{title} Job Details</h1>
            <p>Job Category : {category}</p>
            <p>Job Type : {jobType}</p>
            <h3 className='pb-2 font-semibold'>Description</h3>
            <p className="pb-5">
              {description}
            </p>
            <h3 className='font-semibold'>Requirements</h3>
            <div className='flex flex-wrap gap-2 py-6'>
              {requirements.map((req, index) => (
                <li key={index} className="p-2 ">
                  {req}
                </li>
              ))}
            </div>

            <h3 className='font-semibold'>Job responsibilities:</h3>
            <div className='flex flex-wrap gap-2 py-3'>
              {responsibilities.map((req, index) => (
                <li key={index} className="p-2">
                  {req}
                </li>
              ))}
            </div>
            <h3 className='font-semibold'>Salary :</h3>
            <p className='pb-3'> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            <h3 className='font-semibold'>Location :</h3>
            <p className='pb-4'> {location}</p>
            <h3 className='font-semibold'>Application Deadline</h3>
            <p className='pb-4'> {applicationDeadline}</p>
            
            <Link to={`/jobApply/${_id}`}>            
               <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;