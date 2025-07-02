import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SkillInput from './SkillInput';
import { Link } from 'react-router-dom';

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
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl text-purple-800 font-bold mb-4">Find Jobs by Skills</h2>

      <SkillInput onChange={setSkills} />

      {skills.length > 0 && jobs.length === 0 && (
        <p className="text-red-500 text-center mt-4">No jobs found for those skills.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {jobs.map((job) => (
          <div key={job._id} className="card bg-base-100 rounded-xl shadow-md shadow-purple-200 p-3">
            <div className="flex gap-2 items-center">
              <img className="w-10 h-10 object-contain" src={job.company_logo} alt="Company Logo" />
              <div>
                <h4 className="text-lg font-semibold">{job.company}</h4>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <h3 className="text-base font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.description.slice(0, 80)}...</p>

              <div className="flex flex-wrap gap-1 text-xs">
                {job.requirements.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-100 text-gray-600 rounded hover:bg-blue-900 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2 text-sm">
                {job.salaryRange && (
                  <p>
                    Salary: {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}
                  </p>
                )}
                <Link to={`/jobs/${job._id}`}>
                  <button className="btn btn-sm bg-purple-700 text-white px-4 py-1">Apply</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobMatcher;
