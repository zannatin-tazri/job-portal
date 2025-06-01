import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/job-applications?email=${user.email}`)
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this application?");
    if (confirmDelete) {
      fetch(`http://localhost:3000/job-applications/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('Application deleted successfully!');
            setJobs(prevJobs => prevJobs.filter(job => job._id !== id));
          }
        })
        .catch(error => {
          console.error('Error deleting the application:', error);
          alert('Failed to delete the application. Please try again.');
        });
    }
  };

  return (
    <div>
      <h2 className='text-5xl py-10 text-purple-900 font-bold text-center'>Your applied jobs are here</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Salary Range</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              jobs.map(job => (
                <tr key={job._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={job.company_logo}
                            alt="Company Logo" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.company}</div>
                        <div className="text-sm opacity-50">{job.location}</div>
                      </div>
                    </div>
                  </td>
                  <td>{job.title}</td>
                  <td>{job.salaryRange.min} - {job.salaryRange.max}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="text-base-100 btn bg-red-700 btn-xs"
                    >
                      Withdraw
                    </button>
                  </th>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
