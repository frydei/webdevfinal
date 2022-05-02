import React from "react";
import Tag from "../Tag";

const ComplaintCard = ({complaint}) => {
    console.log(complaint)
    return (
        <div className="f-complaint-card d-flex flex-column align-items-start justify-content-center mb-3">
            <h3 className="m-0">{complaint.event}</h3>
            <h4><span>Reporter:</span> {complaint.reporter}</h4>

            <p>{complaint.report}</p>

            <Tag tag={{
                name: complaint.type,
                color: "grey"
            }}/>
        </div>
    );
}

export default ComplaintCard