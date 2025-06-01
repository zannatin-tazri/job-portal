import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        };

        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId || data.success) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application has been submitted!",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/myApplications');
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something went wrong. Please try again!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed to apply!",
                showConfirmButton: false,
                timer: 1500
            });
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-12">
            {/* Increased max-width and padding */}
            <div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-10">
                <h1 className="text-3xl sm:text-4xl text-center text-purple-900 font-bold mb-8">
                    Apply Job and Good Luck
                </h1>

                <form onSubmit={submitJobApplication} className="space-y-6">
                    <div>
                        <label className="label font-semibold">LinkedIn URL</label>
                        <input
                            type="url"
                            name="linkedin"
                            className="input input-bordered w-full"
                            placeholder="https://linkedin.com/in/your-profile"
                            required
                        />
                    </div>
                    <div>
                        <label className="label font-semibold">GitHub URL</label>
                        <input
                            type="url"
                            name="github"
                            className="input input-bordered w-full"
                            placeholder="https://github.com/your-username"
                            required
                        />
                    </div>
                    <div>
                        <label className="label font-semibold">Resume URL</label>
                        <input
                            type="url"
                            name="resume"
                            className="input input-bordered w-full"
                            placeholder="https://yourdomain.com/resume.pdf"
                            required
                        />
                    </div>
                    <button type="submit" className="btn bg-purple-700 text-base-100 w-full mt-6 text-lg">
                        Apply Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
