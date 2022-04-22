import React from "react";
import UserIconSmallest from "./UserIconSmallest";
import {Link} from "react-router-dom";

const link = "";

const HomeEvent = ({event, page}) => {
    let time, heart;
    const date = event.date;
    if (page === "Home") {
        time = date.hour + " " + date.time;
        heart = "";
    } else if (page === "Favorited") {
        time = date.month + " " + date.day + ", " + date.hour + " " + date.time;
        heart = <i className="fa-solid fa-heart position-absolute top-0 end-0 pt-2 pe-2"/>;
    } else if (page === "Past") {
        time = date.month + " " + date.day + ", " + date.year;
        heart = "";
    } else {
        time = date.month + " " + date.day + ", " + date.hour + " " + date.time;
        heart = "";
    }


    return (
        <div className="f-event f-home d-flex flex-column align-items-center justify-content-center mt-3 me-1 ms-1">
            <div className="position-relative" style={{"width": "100%"}}>
                {heart}
                <Link to={`/frydei/explore/${event.event_id}`} className="f-link">
                    <img className="f-event-img" src={`/images/${event.event_photo}`} alt=""/>
                </Link>
            </div>
            <div className="f-event-detail d-flex flex-column align-items-center justify-content-center">

                <div className="f-event-detail p-2">
                    <h3 className="f-event-title">{event.title}</h3>
                    <div className="f-event-detail-section">
                        <h3 className="f-event-location">{event.location}</h3>
                        <h3 className="f-event-time">{time}</h3>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default HomeEvent;