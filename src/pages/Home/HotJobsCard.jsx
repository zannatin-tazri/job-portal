import React from 'react';



const HotJobsCard = ({ job }) => {
    const { title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='flex gap-2 m-2 p-2'>
            <figure>
                <img className='w-16'
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div>
                <h4 className='text-2xl'>{company}</h4>
                <p> {location}</p>
            </div>
            </div>
           
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-1'>
                    {
                        requirements.map(skill=><p className=' text-center hover:text-base-100 hover:bg-blue-900 border-indigo-100 bg-indigo-100 rounder-lg p-1 text-gray-600'>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end mt-2 is-startrange">
                    <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <button className="btn bg-indigo-800 text-base-100 ">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;