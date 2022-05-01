import React, {useState} from "react";
import UserIconSmallest from "./UserIconSmallest";
import {useNavigate} from "react-router";
import {REACT_APP_BASE} from "../App";
import {useDispatch} from "react-redux";

const SearchEvent = ({event}) => {
    const navigate = useNavigate()

    let date = event.dates ? new Date(event.dates.start.localDate) : new Date(event.date)
    let month = date.toLocaleString("en-US", {month: "long"})


    const navigateToProfile = (host) => {

        navigate(`/frydei/profile/${host.username}`, {
            state: {
                user: "USER"
            }
        });
    }

    const exploreEvent = (e) => {
        e.preventDefault();
        if(event.id) {
            navigate(`/frydei/explore/${event.id}`)
        } else {
            navigate(`/frydei/explore/${event._id}`)
        }
    }

    if(!event) {
        return null
    }
    return (
        <div className="f-event f-search d-flex align-items-center justify-content-center mt-3 me-1 ms-1">
            <div className="f-search-content d-flex flex-column align-items-center justify-content-between">
                <div
                    className="f-event-img-container mb-2 d-flex flex-column align-items-center justify-content-center position-relative">
                    <button className="f-link f-link-button"
                            onClick={(e) => exploreEvent(e)}>
                        {event.hosts ? (event.hosts[0].username === "tmaster" ? <img className="f-event-img" src={`${event.event_photo}`} alt=""/> : <img className="f-event-img" src={`${REACT_APP_BASE}/${event.event_photo}`} alt=""/>) : <img className="f-event-img" src={`${event.images[5].url}`} alt=""/>}
                    </button>
                    <button className="f-button f-link f-view d-flex justify-content-center align-items-center position-absolute bottom-0 end-0"
                            style={{"paddingLeft": "0px", "paddingRight": "0px", "margin": "0px 10px 15px 0px"}}
                            onClick={(e) => exploreEvent(e)}>
                        View
                    </button>
                </div>
                <div className="f-event-detail">
                    {event.hosts ?
                       <>
                           <h3 className="f-event-title mb-1">{event.title}</h3>
                           <div className="f-event-detail-section mb-1 d-flex align-items-center justify-content-between">
                               <h3 className="f-event-location mb-1">{event.location}</h3>
                               <h3 className="f-event-time mb-1">{event.time}</h3>
                           </div>
                       </>
                        :
                        <>
                            <h3 className="f-event-title mb-1">{event.name}</h3>
                            <div className="f-event-detail-section mb-1 d-flex align-items-start flex-column justify-content-between">
                                <h3 className="f-event-location mb-1 f-medium-medium">{event._embedded.venues[0].name}</h3>
                                <h3 className="f-event-time mb-1 ">{month} {date.getDate()}, {date.getFullYear()}</h3>
                            </div>
                        </>}
                    <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                        {event.hosts ?
                            <div>
                                {
                                    event.hosts && event.hosts.map(host => {
                                        return <button className="f-link-button" onClick={() => navigateToProfile(host)}>
                                            <UserIconSmallest user={host}/>
                                        </button>
                                    })
                                }
                            </div>
                        :
                        null}
                        {event.spots ? <span className="f-event-attendees mb-1">{event.spots} <i
                            className="fa-solid fa-user-group"/></span> : null}
                    </div>
                </div>
            </div>

        </div>

    );
};
export default SearchEvent;