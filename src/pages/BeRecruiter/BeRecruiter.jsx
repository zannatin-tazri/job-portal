import React from 'react';

const BeRecruiter = () => {
    return (
        <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Add Information</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Your NID</label>
                <input type="number" className="input" placeholder="NID" />

                <label className="label">Your Organization Name</label>
                <input type="text" className="input" placeholder="e.g : Google" />

                <button className="btn btn-neutral mt-4">Save</button>
            </fieldset>
        </div>
    );
};

export default BeRecruiter;