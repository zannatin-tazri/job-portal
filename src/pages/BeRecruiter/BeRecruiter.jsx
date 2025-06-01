import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const BeRecruiter = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        nid: '',
        organizationEmail: '',
        organizationName: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const recruiterInfo = {
            ...formData,
            role: 'recruiter',
        };

        try {
            const res = await fetch(`http://localhost:3000/users/${user?.email}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recruiterInfo),
            });

            if (res.ok) {
                setFormData({ nid: '', organizationEmail: '', organizationName: '' });
                navigate('/');
            } else {
                console.error("Failed to update recruiter info");
            }
        } catch (error) {
            console.error("Error submitting recruiter form", error);
        }
    };

    return (
        <div className="flex items-center justify-center text-purple-800 min-h-screen bg-base-100 px-6 py-12">
            <form onSubmit={handleSubmit} className="w-full max-w-4xl">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-2xl border p-10 text-lg">
                    <legend className="fieldset-legend text-3xl text-purple-800 font-extrabold mb-6">Add Information</legend>

                    <label className="label text-2xl font-bold mb-2">Your NID</label>
                    <input
                        type="number"
                        name="nid"
                        value={formData.nid}
                        onChange={handleChange}
                        className="input input-bordered w-full text-xl py-4"
                        placeholder="NID"
                        required
                    />

                    <label className="label text-2xl font-bold mt-6 mb-2">Your Organizational Email</label>
                    <input
                        type="email"
                        name="organizationEmail"
                        value={formData.organizationEmail}
                        onChange={handleChange}
                        className="input input-bordered w-full text-xl py-4"
                        placeholder="Email"
                        required
                    />

                    <label className="label text-2xl font-bold mt-6 mb-2">Your Organization Name</label>
                    <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        className="input input-bordered w-full text-xl py-4"
                        placeholder="e.g: Google"
                        required
                    />

                    <button
                        className="btn bg-purple-700 text-base-100 mt-8 w-full text-2xl py-4"
                        type="submit"
                    >
                        Save
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default BeRecruiter;
