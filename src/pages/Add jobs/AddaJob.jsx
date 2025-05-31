import React, { useState } from 'react';
import axios from 'axios';

const AddaJob = () => {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        jobType: '',
        category: '',
        applicationDeadline: '',
        salaryMin: '',
        salaryMax: '',
        currency: 'bdt',
        description: '',
        company: '',
        requirements: '',
        responsibilities: '',
        hr_email: '',
        hr_name: '',
        company_logo: '',
        status: 'active',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const jobData = {
            title: formData.title,
            location: formData.location,
            jobType: formData.jobType,
            category: formData.category,
            applicationDeadline: formData.applicationDeadline,
            salaryRange: {
                min: parseInt(formData.salaryMin),
                max: parseInt(formData.salaryMax),
                currency: formData.currency
            },
            description: formData.description,
            company: formData.company,
            requirements: formData.requirements.split(',').map(skill => skill.trim()),
            responsibilities: formData.responsibilities.split(',').map(task => task.trim()),
            status: formData.status,
            hr_email: formData.hr_email,
            hr_name: formData.hr_name,
            company_logo: formData.company_logo
        };

        try {
            await axios.post('http://localhost:3000/jobs', jobData);
            alert("Job Posted Successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to post job");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-100 p-6">
            <form onSubmit={handleSubmit} className="bg-base-200 border border-base-300 rounded-box p-6 w-full max-w-2xl text-lg">
                <legend className="text-2xl font-bold mb-4">Post a Job</legend>

                <label className="label my-3">Company Name</label>
                <input name="company" type="text" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label">Job Title</label>
                <input name="title" type="text" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label mt-3">Location</label>
                <input name="location" type="text" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label mt-3">Job Type</label>
                <input name="jobType" type="text" className="input input-bordered w-full" placeholder="e.g. Remote / Hybrid / On-site" onChange={handleChange} required />

                <label className="label mt-3">Category</label>
                <input name="category" type="text" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label mt-3">Application Deadline</label>
                <input name="applicationDeadline" type="date" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label mt-3">Minimum Salary</label>
                <input name="salaryMin" type="number" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label mt-3">Maximum Salary</label>
                <input name="salaryMax" type="number" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label mt-3">Description</label>
                <textarea name="description" className="textarea textarea-bordered w-full" onChange={handleChange} required></textarea>

                <label className="label mt-3">Requirements (comma-separated)</label>
                <input name="requirements" type="text" className="input input-bordered w-full" placeholder="JavaScript, React, Node.js" onChange={handleChange} required />

                <label className="label mt-3">Responsibilities (comma-separated)</label>
                <input name="responsibilities" type="text" className="input input-bordered w-full" placeholder="Develop, Test, Review" onChange={handleChange} required />

                <label className="label mt-3">HR Email</label>
                <input name="hr_email" type="email" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label mt-3">HR Name</label>
                <input name="hr_name" type="text" className="input input-bordered w-full" onChange={handleChange} required />

                <label className="label mt-3">Company Logo URL</label>
                <input name="company_logo" type="url" className="input input-bordered w-full" onChange={handleChange} required />

                <button type="submit" className="btn btn-neutral mt-6 w-full">Post Job</button>
            </form>
        </div>
    );
};

export default AddaJob;
