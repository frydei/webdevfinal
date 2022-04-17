import React from "react";
import UserIconSmallest from "./UserIconSmallest";

const ProfileEvent = ({event}) => {
    return (
        <div className="f-event f-search d-flex align-items-center justify-content-center mt-3 me-1 ms-1">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div
                    className="f-event-img-container mb-2 d-flex flex-column align-items-center justify-content-center position-relative">
                    <img className="f-event-img" src={event.event_photo} alt=""/>
                    <button className="f-button f-view position-absolute bottom-0 end-0"
                            style={{"paddingLeft": "0px", "paddingRight": "0px", "margin": "0px 5px 5px 0px"}}>View
                    </button>
                </div>
                <div className="f-event-detail">
                    <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                        <h3 className="f-event-time f-medium mb-1">{event.date.month} {event.date.day}th, {event.time}</h3>
                        <button className="f-icon-button"><i className="fa-regular fa-heart"/></button>
                    </div>
                    <h3 className="f-event-title mb-1">{event.title}</h3>
                    <div className="f-event-detail-section mb-1 d-flex align-items-center justify-content-between">
                        <h3 className="f-event-location mb-1">{event.location}</h3>
                        <h3 className="f-event-time mb-1">{event.time}</h3>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default ProfileEvent;