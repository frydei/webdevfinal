import React from "react";
import EventContent from "./EventContent";
import Request from "./Request";
import Spacer from "./Spacer";
import AcceptedRequest from "./AcceptedRequest";

const RequestEvent = ({event}) => {
    console.log(event)
    return (
        <div className="f-event f-explore d-flex flex-column align-items-center justify-content-center mb-5">
            <EventContent event={event} is_favorite={"solid"}/>
            <h3 className="f-medium-medium ps-4" style={{"width": "100%", "marginBottom": "20px"}}>Requests</h3>
            {
                event.requests.map && event.requests.map(user => {
                    return <Request user={user} event={event}/>
                })
            }
            <Spacer size={10}/>
            <h3 className="f-medium-medium ps-4" style={{"width": "100%", "marginBottom": "20px"}}>Accepted</h3>

            {
                event.attendees.map && event.attendees.map(user => {
                    return <AcceptedRequest user={user} event={event}/>
                })
            }
        </div>
    );
};
export default RequestEvent;