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
            console.log('Server Response:', data); // 🔥 See exactly what backend sends

            if (data.insertedId || data.success) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application has been submitted!",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/myApplications'); // ✅ Navigate after alert closes
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
        <div className="bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl text-center font-bold mb-8">Apply Job and Good Luck</h1>

            <form onSubmit={submitJobApplication} className="w-full card-body">
                <label className="label">LinkedIn URL</label>
                <input type="url" name="linkedin" className="input" placeholder="URL" />
                <label className="label">Github URL</label>
                <input type="url" name="github" className="input" placeholder="URL" />
                <label className="label">Resume URL</label>
                <input type="url" name="resume" className="input" placeholder="URL" />
                <button className="btn btn-neutral mt-4">Apply</button>
            </form>
        </div>
    );
};

export default JobApply;
