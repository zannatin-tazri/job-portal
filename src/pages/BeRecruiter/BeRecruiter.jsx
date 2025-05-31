import React from 'react';

const BeRecruiter = () => {
    return (
        <div className="flex items-center justify-center text-purple-800 min-h-screen bg-base-100">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6 text-lg">
                <legend className="fieldset-legend text-xl text-purple-800  font-bold mb-2">Add Information</legend>

                <label className="label text-xl font-bold">Your Organizational Email</label>
                <input type="email" className="input input-bordered w-full text-base" placeholder="Email" />

                <label className="label text-xl font-bold">Your NID</label>
                <input type="number" className="input input-bordered w-full text-base" placeholder="NID" />

                <label className="label text-xl font-bold">Your Organization Name</label>
                <input type="text" className="input input-bordered w-full text-base" placeholder="e.g: Google" />

                <button className="btn bg-purple-700 text-base-100 mt-6 w-full text-lg">Save</button>
            </fieldset>
        </div>
    );
};

export default BeRecruiter;
