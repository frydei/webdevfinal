import React from "react";
import UserIconSmallest from "./UserIconSmallest";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {REACT_APP_BASE} from "../App";

const link = "";


const SearchEvent = ({event}) => {
    const navigate = useNavigate()
    const navigateToProfile = (host) => {

        navigate(`/frydei/profile/${host.username}`, {
            state: {
                user: "USER"
            }
        });
    }

    return (
        <div className="f-event f-search d-flex align-items-center justify-content-center mt-3 me-1 ms-1">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div
                    className="f-event-img-container mb-2 d-flex flex-column align-items-center justify-content-center position-relative">
                    <Link to={`/frydei/explore/${event._id}`} className="f-link"><img className="f-event-img" src={`${REACT_APP_BASE}/${event.event_photo}`} alt=""/></Link>
                    <Link to={`/frydei/explore/${event._id}`} className="f-button f-link f-view d-flex justify-content-center align-items-center position-absolute bottom-0 end-0"
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
                                    return <button className="f-link-button" onClick={() => navigateToProfile(host)}>
                                        <UserIconSmallest user={host}/>
                                    </button>
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