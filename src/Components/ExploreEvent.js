import React from "react";
import UserIcon from "./UserIcon";

const ExploreEvent = (param) => {
    console.log(param.event.date.month, param.event.date.day)
    return (
        <div className="f-event f-explore d-flex flex-column align-items-center justify-content-center">

            <div className="d-flex flex-column align-items-center justify-content-center">
                <div
                    className="f-event-header f-explore-header d-flex align-items-center justify-content-between ps-1 pe-1 mb-2">
                    <UserIcon user={param.event.hosts[0]}/>
                    <i className="fa-solid fa-ellipsis"/>
                </div>
                <div
                    className="f-event-img-container mb-2 d-flex flex-column align-items-center justify-content-center position-relative">
                    <img className="f-event-img" src="/images/fff.jpeg" alt=""/>
                </div>
                <div className="f-event-detail">
                    <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                        <h3 className="f-event-time f-medium mb-1">{param.event.date.month} {param.event.date.day}th, {param.event.time}</h3>
                        <i className="fa-regular fa-heart"/>
                    </div>

                    <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                        <h3 className="f-event-title f-medium-title mb-1">{param.event.title}</h3>
                        <span className="f-event-attendees f-medium mb-1">{param.event.attendees} <i
                            className="fa-solid fa-user-group"/></span>
                    </div>
                    <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                        <h3 className="f-event-location f-medium mb-1">{param.event.location}</h3>
                        <h3 className="f-event-cost f-medium mb-1">$ {param.event.cost}</h3></div>
                </div>
            </div>
        </div>
    );
};
export default ExploreEvent;