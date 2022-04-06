import React from "react";
import UserIconSmall from "./UserIconSmall";

const link = "";

const SearchEvent = (param) => {
    return (
        <div className="f-event f-search d-flex align-items-center justify-content-center mt-3 me-2">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div
                    className="f-event-img-container mb-2 d-flex flex-column align-items-center justify-content-center position-relative">
                    <img className="f-event-img" src={param.event.event_photo} alt=""/>
                    <button className="f-button f-view position-absolute bottom-0 end-0"
                            style={{"paddingLeft": "0px", "paddingRight": "0px", "margin": "0px 5px 5px 0px"}}>View
                    </button>
                </div>
                <div className="f-event-detail">
                    <h3 className="f-event-title mb-1">{param.event.title}</h3>
                    <div className="f-event-detail-section mb-1 d-flex align-items-center justify-content-between">
                        <h3 className="f-event-location mb-1">{param.event.location}</h3>
                        <h3 className="f-event-time mb-1">{param.event.time}</h3>
                    </div>
                    <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                        <div>
                            {
                                param.event.hosts.map(host => {
                                    return <UserIconSmall user={host}/>;
                                })
                            }
                        </div>
                        <span className="f-event-attendees mb-1">{param.event.attendees} <i
                            className="fa-solid fa-user-group"/></span>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default SearchEvent;