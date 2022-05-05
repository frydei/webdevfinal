import React from "react";
import {useNavigate} from "react-router";
import {REACT_APP_BASE} from "../../App";

const HomeEvent = ({event, page}) => {
    const navigate = useNavigate()
    if (!event) {
        return null;
    }

    let time;
    const date = new Date(event.date);
    let hour = date.getHours() % 12 || 12;
    let date_time = date.getHours() >= 12 ? "PM" : "AM"
    let month = date.toLocaleString('en-US', {month: 'long'});
    if (page === "Home") {
        time = hour + (date.getMinutes() > 0 ? ":" + date.getMinutes() : "") + " " + date_time;
    } else if (page === "Past") {
        time = month + " " + date.getDate() + ", " + date.getFullYear();
    } else {
        time = month + " " + date.getDate() + ", " + hour + " " + date_time;
    }

    const viewEvent = () => {
        navigate(`/frydei/explore/${event._id}`, {state: {logged_in: localStorage.getItem("user_logged_in")}})
    }


    return (
        <div className="f-event f-home d-flex flex-column align-items-center justify-content-center mt-3 me-1 ms-1">
            <div className="position-relative" style={{"width": "100%"}}>
                <button className="f-link f-link-button" onClick={() => viewEvent()}>
                    {event.hosts[0].username === "tmaster" ?<img className="f-event-img" src={event.event_photo} alt=""/> : <img className="f-event-img" src={`${REACT_APP_BASE}/${event.event_photo}`} alt=""/>}
                </button>
            </div>
            <div className="f-event-detail d-flex flex-column align-items-start justify-content-start">

                <div className="f-event-detail p-2 d-flex flex-column align-items-start justify-content-start">
                    <h3 className="f-event-title" style={{"textAlign": "left"}}>{event.title}</h3>
                    <div className="f-event-detail-section d-flex flex-column align-items-start justify-content-center">
                        <h3 className="f-event-location">{event.location}</h3>
                        <h3 className="f-event-time">{time}</h3>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default HomeEvent;