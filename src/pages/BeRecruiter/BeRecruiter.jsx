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
        <div className="flex items-center justify-center text-purple-800 min-h-screen bg-base-100">
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6 text-lg">
                    <legend className="fieldset-legend text-xl text-purple-800 font-bold mb-2">Add Information</legend>

                    <label className="label text-xl font-bold">Your NID</label>
                    <input
                        type="number"
                        name="nid"
                        value={formData.nid}
                        onChange={handleChange}
                        className="input input-bordered w-full text-base"
                        placeholder="NID"
                        required
                    />

                    <label className="label text-xl font-bold">Your Organizational Email</label>
                    <input
                        type="email"
                        name="organizationEmail"
                        value={formData.organizationEmail}
                        onChange={handleChange}
                        className="input input-bordered w-full text-base"
                        placeholder="Email"
                        required
                    />

                    <label className="label text-xl font-bold">Your Organization Name</label>
                    <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        className="input input-bordered w-full text-base"
                        placeholder="e.g: Google"
                        required
                    />

                    <button className="btn bg-purple-700 text-base-100 mt-6 w-full text-lg" type="submit">
                        Save
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default BeRecruiter;
