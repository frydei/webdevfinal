import React from "react";
import Tag from "./Tag";
import {useParams} from "react-router";
import events from "../Data/events.json"
import EllipseDropdownMenu from "./Menu/EllipseDropdownMenu";

const PastEventDetail = () => {
    const param = useParams();
    const eventid = param.eventid;

    const event = events.find(f => f.event_id.toString() === eventid)
    let min;
    if (event.date.minute === 0) {
        min = "";
    } else {
        min = ":" + event.date.minute;
    }

    return (
        <div className="container-fluid">
            <div className="row f-event-detail-content">
                <div className="col-6 f-event-detail-img">
                    <img src={`/Images/${event.event_photo}`} alt="" className="f-event-image"/>
                    <div className="f-event-detail-section">
                        <h3 className="f-event-detail-section-header mt-2">Attendees</h3>
                        <div className="f-event-attendees">
                            {
                                event.attendees.map(att => {
                                    return <img src={`/Images/${att}`}
                                                alt=""
                                                className="f-user-icon-small me-1"
                                    />;
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-6 f-event-detail">
                    <div className="row f-event-title-box p-3 mb-2">
                        <div className="f-event-title-content">
                            <h2 className="f-event-title">{event.title}</h2>
                            <p className="f-event-desc m-0">{event.desc}</p>
                        </div>
                    </div>
                    <div className="row f-event-detail-box p-3">
                        <div className="f-event-detail-section">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="f-event-detail-section-header">Host(s)</h3>
                                <EllipseDropdownMenu />
                            </div>
                            <div className="f-event-hosts d-flex align-items-start ">
                                <div className="f-event-attendees m-0">
                                    {
                                        event.hosts.map(host => {
                                            return <img src={`/Images/${host.profile_picture}`}
                                                        alt=""
                                                        className="f-icon-small me-1"
                                            />;
                                        })
                                    }
                                </div>
                                <i className="fa-regular fa-comment"/>
                            </div>
                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Cost</h3>
                            <h3 className="f-event-cost">${event.cost}</h3>
                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Location</h3>
                            <h3 className="f-event-location">{event.location}</h3>
                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Date and Time</h3>
                            <h3 className="f-event-time">
                                {event.date.month} {event.date.day}th, {event.date.hour}{min} {event.date.time}</h3>
                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Special Restrictions</h3>
                            <p className="f-section-text mb-3">{event.restrictions}</p>
                        </div>
                        <div className="f-event-detail-section mb-3">
                            <h3 className="f-event-detail-section-header">Rate This Event</h3>
                            <button className="f-icon-button"><i className="fa-regular fa-star"/></button>
                            <button className="f-icon-button"><i className="fa-regular fa-star"/></button>
                            <button className="f-icon-button"><i className="fa-regular fa-star"/></button>
                            <button className="f-icon-button"><i className="fa-regular fa-star"/></button>
                            <button className="f-icon-button"><i className="fa-regular fa-star"/></button>
                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Tags</h3>
                            <div className="d-flex align-items-center justify-content-start ">
                                {
                                    event.tags.map(tag => {
                                        return <Tag tag={tag}/>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastEventDetail;