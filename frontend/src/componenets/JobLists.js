import React, { useState } from "react";
import JobDetails from './JobDetails'


function JobLists({ jobName, companyName, jobDescription, jobApplication, location, jobURL, companyLogo }) {
    //toggle show and hide job Description:
    const [show, setShow] = useState(false);

    return (
        <div className='card flex shadow-xl mx-20 p-5'>
            <div className='imageContainer flex-shrink-0'>
                <img className='image flex-shrink-0' src={companyLogo} alt={companyName} width="150" height="150"></img>
            </div>
            <div className='job-info flex flex-col justify-between ml-8 p-5'>
                <h3 className='title font-bold'>{jobName}</h3>
                <p className='company text-teal-700 font-extrabold'>Company: {companyName}</p>
                <p className='location'>Location: {location}</p>
                <div className='job-details'>
                <p className='jobApplication font-bold'>Application Info:</p>
                <div className="how-to-apply break-all " target="_blank" dangerouslySetInnerHTML={{ __html: jobApplication }}></div>
                <p className='company_url text-blue-600 hover:underline font-bold'><a href={jobURL} target="_blank">View More Info At Github Careers</a></p>
                <button className='bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded' 
                onClick={() => setShow(!show)}>Details</button>
                <div>{show && <JobDetails jobDescription={jobDescription} />}</div>
                </div>
            </div>
            

        </div>

    )
}
export default JobLists