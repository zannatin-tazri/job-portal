import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SkillInput from './SkillInput';


const JobMatcher = () => {
  const [skills, setSkills] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const query = skills.length ? `?skills=${skills.join(',')}` : '';
        const res = await axios.get(`http://localhost:3000/jobs${query}`);
        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };

    fetchJobs();
  }, [skills]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Find Jobs by Skills</h2>
      
      <SkillInput onChange={setSkills} />

      <div className="mt-6">
        {skills.length > 0 && jobs.length === 0 && (
          <p className="text-red-500">No jobs found for those skills.</p>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <div key={job._id} className="card bg-base-100 shadow-md border p-4">
              <div className="flex items-center gap-4 mb-2">
                <img src={job.company_logo} alt="Logo" className="w-12 h-12" />
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-sm">{job.company} • {job.location}</p>
                </div>
              </div>
              <p className="text-sm mb-2">{job.description.slice(0, 100)}...</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {job.requirements.map((req, idx) => (
                  <span key={idx} className="badge badge-outline">{req}</span>
                ))}
              </div>
              <button className="btn btn-sm btn-primary">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobMatcher;
