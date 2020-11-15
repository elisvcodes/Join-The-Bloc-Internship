import React from "react";


const JobDetails = ({ jobDescription }) => {  
    return (
        <div className="job-description" 
        dangerouslySetInnerHTML={{ __html: jobDescription }}></div>
    );
};

export default JobDetails;