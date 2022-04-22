import React from "react";
import UserIcon from "./UserIcon";
import EventContent from "./EventContent";
import Request from "./Request";

const RequestEvent = (param) => {
    return (
        <div className="f-event f-explore d-flex flex-column align-items-center justify-content-center mb-5">
            <EventContent event={param.event}/>
            <h3 className="f-medium-medium ps-4" style={{"width": "100%", "marginBottom": "20px"}}>Requests</h3>
            <Request user={param.user}/>
        </div>
    );
};
export default RequestEvent;