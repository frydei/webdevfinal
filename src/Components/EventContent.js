import React, {useState} from "react";
import UserIcon from "./UserIcon";
import UserIconSmall from "./UserIconSmall";
import {Link} from "react-router-dom";

const EventContent = ({event}) => {
    const user = event.hosts[0];
    const [heart, setHeart] = useState("regular");

    const likeHandler = () => {
        heart === "regular" ? setHeart("solid") : setHeart("regular");
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-3">
            <div
                className="f-event-header f-explore-header d-flex align-items-center justify-content-between ps-1 pe-1 mb-3">
                <Link className="f-link"
                      to={`/frydei/profile/${user.first_name.toLowerCase().split("")[0] + user.last_name.toLowerCase()}`}>
                    <UserIconSmall user={user}/>
                </Link>
                <button className="f-icon-button"><i className="fa-solid fa-ellipsis"/></button>
            </div>
            <div
                className="f-event-img-container mb-2 d-flex flex-column align-items-center justify-content-center position-relative">
                <Link to={`/frydei/explore/${event.event_id}`} className="f-link">
                    <img className="f-event-img" src={`/Images/${event.event_photo}`} alt=""/>
                </Link>
            </div>
            <div className="f-event-detail">
                <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                    <h3 className="f-event-time f-medium mb-1">{event.date.month} {event.date.day}th, {event.time}</h3>
                    <button className="f-icon-button" onClick={likeHandler}>
                        <i className={`fa-${heart} fa-heart f-dark`}/>
                    </button>
                </div>

                <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                    <h3 className="f-event-title f-medium-title mb-1">{event.title}</h3>
                    <span className="f-event-attendees f-medium mb-1">{event.spots} <i
                        className="fa-solid fa-user-group"/></span>
                </div>
                <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                    <h3 className="f-event-location f-medium mb-1">{event.location}</h3>
                    <h3 className="f-event-cost f-medium mb-1">$ {event.cost}</h3></div>
            </div>
        </div>

    );
};
export default EventContent;