import React from "react";
import UserIcon from "./UserIcon";
import EvenContent from "./EventContent";

const ExploreEvent = (param) => {
    return (
        <div className="f-event f-explore d-flex flex-column align-items-center justify-content-center mb-5">
            <EvenContent event={param.event}/>
        </div>
    );
};
export default ExploreEvent;