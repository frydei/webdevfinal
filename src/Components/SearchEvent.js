import React from "react";
import UserIconSmallest from "./UserIconSmallest";
import {Link} from "react-router-dom";

const link = "";

const SearchEvent = ({event}) => {
    return (
        <div className="f-event f-search col-4 d-flex align-items-center justify-content-center mt-3 me-1 ms-1">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div
                    className="f-event-img-container mb-2 d-flex flex-column align-items-center justify-content-center position-relative">
                    <Link to={`/frydei/explore/${event.event_id}`} className="f-link"><img className="f-event-img" src={`/Images/${event.event_photo}`} alt=""/></Link>
                    <Link to={`/frydei/explore/${event.event_id}`} className="f-button f-link f-view d-flex justify-content-center align-items-center position-absolute bottom-0 end-0"
                            style={{"paddingLeft": "0px", "paddingRight": "0px", "margin": "0px 5px 5px 0px"}}>View
                    </Link>
                </div>
                <div className="f-event-detail">
                    <h3 className="f-event-title mb-1">{event.title}</h3>
                    <div className="f-event-detail-section mb-1 d-flex align-items-center justify-content-between">
                        <h3 className="f-event-location mb-1">{event.location}</h3>
                        <h3 className="f-event-time mb-1">{event.time}</h3>
                    </div>
                    <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                        <div>
                            {
                                event.hosts.map(host => {
                                    return <Link className="f-link"
                                                 to={`/frydei/profile/${host.first_name.toLowerCase().split("")[0] + host.last_name.toLowerCase()}`}>
                                        <UserIconSmallest user={host}/>
                                    </Link>
                                })
                            }
                        </div>
                        <span className="f-event-attendees mb-1">{event.spots} <i
                            className="fa-solid fa-user-group"/></span>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default SearchEvent;