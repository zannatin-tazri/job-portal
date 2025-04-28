import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id}=useParams();
    const{user}=useAuth();
    console.log(id, user);
   
    const submitJobApplication=e=>{
        e.preventDefault();
        const form=e.target;
        const linkedin=form.linkedin.value;
        const github=form.github.value;
        const resume=form.resume.value;
        // console.log(linkedin,github,resume);

        const jobApplication={
            job_id:id,
            applicant_email:user.email,
            linkedin,
            github,
            resume

        }

        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application has been submitted!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } 
            
        })
        .catch(error => {
            console.log(error);
        });
        
    }

    return (
        
    
    <div className="bg-base-100 w-full shadow-2xl">
    <h1 className="text-5xl text-center font-bold mb-8">Apply Job and Good Luck</h1>

      <form onSubmit={submitJobApplication} className="w-full card-body">
        
          <label className="label">LinkedIn URL</label>
          <input type="url" name ="linkedin" className="input" placeholder="URL" />
          <label className="label">Github URL</label>
          <input type="url" name ="github" className="input" placeholder="URL" />
          <label className="label">Resume URL</label>
          <input type="url" name ="resume" className="input" placeholder="URL" />
          
          
          <button className="btn btn-neutral mt-4">Apply</button>
       
      </form>
    </div>
  
    );
};

export default JobApply;