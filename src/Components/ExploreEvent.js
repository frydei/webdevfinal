import React from "react";
import EventContent from "./EventContent";

const ExploreEvent = ({event}) => {
    return (
        <div className="f-event f-explore d-flex flex-column align-items-center justify-content-center mb-5">
            <EventContent event={event}/>
        </div>
    );
};
export default ExploreEvent;